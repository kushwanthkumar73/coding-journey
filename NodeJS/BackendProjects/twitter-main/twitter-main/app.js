const express = require('express')
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

let db = null
const secretKey = 'MY_SECRET_KEY'

// Start DB and Server
const startServerAndDB = async () => {
  try {
    db = await open({
      filename: 'twitterClone.db',
      driver: sqlite3.Database,
    })
    app.listen(3000, () =>
      console.log('Server running at http://localhost:3000/'),
    )
  } catch (error) {
    console.log(`DB Error: ${error.message}`)
    process.exit(1)
  }
}
startServerAndDB()

// Middleware for JWT
const authenticateToken = (request, response, next) => {
  const authHeader = request.headers['authorization']
  if (authHeader === undefined) {
    response.status(401)
    response.send('Invalid JWT Token')
  } else {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, secretKey, (error, payload) => {
      if (error) {
        response.status(401)
        response.send('Invalid JWT Token')
      } else {
        request.username = payload.username
        request.userId = payload.userId
        next()
      }
    })
  }
}

//
// API 1: Register
//
app.post('/register/', async (request, response) => {
  const {username, name, password, gender} = request.body
  const user = await db.get(`SELECT * FROM user WHERE username = '${username}'`)

  if (user !== undefined) {
    response.status(400)
    response.send('User already exists')
  } else if (password.length < 6) {
    response.status(400)
    response.send('Password is too short')
  } else {
    const hashedPassword = await bcrypt.hash(password, 10)
    await db.run(`
      INSERT INTO user (username, name, password, gender)
      VALUES ('${username}', '${name}', '${hashedPassword}', '${gender}');
    `)
    response.send('User created successfully')
  }
})

//
// API 2: Login
//
app.post('/login/', async (request, response) => {
  const {username, password} = request.body
  const dbUser = await db.get(
    `SELECT * FROM user WHERE username = '${username}'`,
  )

  if (dbUser === undefined) {
    response.status(400)
    response.send('Invalid user')
  } else {
    const isPasswordMatch = await bcrypt.compare(password, dbUser.password)
    if (isPasswordMatch === false) {
      response.status(400)
      response.send('Invalid password')
    } else {
      const payload = {username: username, userId: dbUser.user_id}
      const jwtToken = jwt.sign(payload, secretKey)
      response.send({jwtToken})
    }
  }
})

//
// API 3: User feed (latest 4 tweets)
//
app.get('/user/tweets/feed/', authenticateToken, async (request, response) => {
  const {userId} = request
  const query = `
    SELECT user.username, tweet.tweet, tweet.date_time AS dateTime
    FROM follower
    INNER JOIN tweet ON follower.following_user_id = tweet.user_id
    INNER JOIN user ON tweet.user_id = user.user_id
    WHERE follower.follower_user_id = ${userId}
    ORDER BY tweet.date_time DESC
    LIMIT 4;
  `
  const tweets = await db.all(query)
  response.send(tweets)
})

//
// API 4: Following
//
app.get('/user/following/', authenticateToken, async (request, response) => {
  const {userId} = request
  const query = `
    SELECT name FROM follower
    INNER JOIN user ON follower.following_user_id = user.user_id
    WHERE follower.follower_user_id = ${userId};
  `
  const result = await db.all(query)
  response.send(result)
})

//
// API 5: Followers
//
app.get('/user/followers/', authenticateToken, async (request, response) => {
  const {userId} = request
  const query = `
    SELECT name FROM follower
    INNER JOIN user ON follower.follower_user_id = user.user_id
    WHERE follower.following_user_id = ${userId};
  `
  const result = await db.all(query)
  response.send(result)
})

//
// API 6: Tweet details
//
app.get('/tweets/:tweetId/', authenticateToken, async (request, response) => {
  const {userId} = request
  const {tweetId} = request.params

  const accessCheck = await db.get(`
    SELECT * FROM tweet
    INNER JOIN follower ON tweet.user_id = follower.following_user_id
    WHERE tweet.tweet_id = ${tweetId} AND follower.follower_user_id = ${userId};
  `)

  if (accessCheck === undefined) {
    response.status(401)
    response.send('Invalid Request')
  } else {
    const query = `
      SELECT tweet.tweet,
             COUNT(DISTINCT like.like_id) AS likes,
             COUNT(DISTINCT reply.reply_id) AS replies,
             tweet.date_time AS dateTime
      FROM tweet
      LEFT JOIN like ON tweet.tweet_id = like.tweet_id
      LEFT JOIN reply ON tweet.tweet_id = reply.tweet_id
      WHERE tweet.tweet_id = ${tweetId};
    `
    const result = await db.get(query)
    response.send(result)
  }
})

//
// API 7: Likes for a tweet
//
app.get(
  '/tweets/:tweetId/likes/',
  authenticateToken,
  async (request, response) => {
    const {userId} = request
    const {tweetId} = request.params

    const accessCheck = await db.get(`
    SELECT * FROM tweet
    INNER JOIN follower ON tweet.user_id = follower.following_user_id
    WHERE tweet.tweet_id = ${tweetId} AND follower.follower_user_id = ${userId};
  `)

    if (accessCheck === undefined) {
      response.status(401)
      response.send('Invalid Request')
    } else {
      const query = `
      SELECT user.username
      FROM like
      INNER JOIN user ON like.user_id = user.user_id
      WHERE like.tweet_id = ${tweetId};
    `
      const likes = await db.all(query)
      response.send({likes: likes.map(u => u.username)})
    }
  },
)

//
// API 8: Replies for a tweet
//
app.get(
  '/tweets/:tweetId/replies/',
  authenticateToken,
  async (request, response) => {
    const {userId} = request
    const {tweetId} = request.params

    const accessCheck = await db.get(`
    SELECT * FROM tweet
    INNER JOIN follower ON tweet.user_id = follower.following_user_id
    WHERE tweet.tweet_id = ${tweetId} AND follower.follower_user_id = ${userId};
  `)

    if (accessCheck === undefined) {
      response.status(401)
      response.send('Invalid Request')
    } else {
      const query = `
      SELECT user.name, reply.reply
      FROM reply
      INNER JOIN user ON reply.user_id = user.user_id
      WHERE reply.tweet_id = ${tweetId};
    `
      const replies = await db.all(query)
      response.send({replies})
    }
  },
)

//
// API 9: User's own tweets
//
app.get('/user/tweets/', authenticateToken, async (request, response) => {
  const {userId} = request
  const query = `
    SELECT tweet.tweet,
           COUNT(DISTINCT like.like_id) AS likes,
           COUNT(DISTINCT reply.reply_id) AS replies,
           tweet.date_time AS dateTime
    FROM tweet
    LEFT JOIN like ON tweet.tweet_id = like.tweet_id
    LEFT JOIN reply ON tweet.tweet_id = reply.tweet_id
    WHERE tweet.user_id = ${userId}
    GROUP BY tweet.tweet_id;
  `
  const result = await db.all(query)
  response.send(result)
})

//
// API 10: Create a tweet
//
app.post('/user/tweets/', authenticateToken, async (request, response) => {
  const {tweet} = request.body
  const {userId} = request
  const dateTime = new Date().toISOString()
  await db.run(`
    INSERT INTO tweet (tweet, user_id, date_time)
    VALUES ('${tweet}', ${userId}, '${dateTime}');
  `)
  response.send('Created a Tweet')
})

//
// API 11: Delete a tweet
//
app.delete(
  '/tweets/:tweetId/',
  authenticateToken,
  async (request, response) => {
    const {tweetId} = request.params
    const {userId} = request

    const tweet = await db.get(`
    SELECT * FROM tweet WHERE tweet_id = ${tweetId} AND user_id = ${userId};
  `)

    if (tweet === undefined) {
      response.status(401)
      response.send('Invalid Request')
    } else {
      await db.run(`DELETE FROM tweet WHERE tweet_id = ${tweetId};`)
      response.send('Tweet Removed')
    }
  },
)

// Export app
module.exports = app
