const express = require('express')
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
const path = require('path')
const bcrypt = require('bcrypt')

const app = express()
app.use(express.json())

const dbPath = path.join(__dirname, 'userData.db')
let db = null

const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('Server running at http://localhost:3000/')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}

initializeDbAndServer()
// ---------------------------------------------------------
// API 1: REGISTER
// ---------------------------------------------------------
app.post('/register', async (request, response) => {
  const {username, name, password, gender, location} = request.body
  const hashedPassword = await bcrypt.hash(password, 10)

  const userQuery = `SELECT * FROM user WHERE username = ?;`
  const dbUser = await db.get(userQuery, [username])

  if (dbUser !== undefined) {
    response.status(400)
    response.send('User already exists')
  } else if (password.length < 5) {
    response.status(400)
    response.send('Password is too short')
  } else {
    const createUserQuery = `
      INSERT INTO user (username, name, password, gender, location)
      VALUES (?, ?, ?, ?, ?);
    `
    await db.run(createUserQuery, [
      username,
      name,
      hashedPassword,
      gender,
      location,
    ])
    response.status(200)
    response.send('User created successfully')
  }
})

// ---------------------------------------------------------
// API 2: LOGIN
// ---------------------------------------------------------
app.post('/login', async (request, response) => {
  const {username, password} = request.body

  const userQuery = `SELECT * FROM user WHERE username = ?;`
  const dbUser = await db.get(userQuery, [username])

  if (dbUser === undefined) {
    response.status(400).send('Invalid user')
  } else {
    const isPasswordMatched = await bcrypt.compare(password, dbUser.password)
    if (isPasswordMatched) {
      response.status(200).send('Login success!')
    } else {
      response.status(400).send('Invalid password')
    }
  }
})

// ---------------------------------------------------------
// API 3: CHANGE PASSWORD
// ---------------------------------------------------------
app.put('/change-password', async (request, response) => {
  const {username, oldPassword, newPassword} = request.body

  const userQuery = `SELECT * FROM user WHERE username = ?;`
  const dbUser = await db.get(userQuery, [username])

  if (dbUser === undefined) {
    response.status(400).send('Invalid user')
  } else {
    const isPasswordMatched = await bcrypt.compare(oldPassword, dbUser.password)

    if (!isPasswordMatched) {
      response.status(400).send('Invalid current password')
    } else if (newPassword.length < 5) {
      response.status(400).send('Password is too short')
    } else {
      const hashedPassword = await bcrypt.hash(newPassword, 10)
      const updateQuery = `
        UPDATE user
        SET password = ?
        WHERE username = ?;
      `
      await db.run(updateQuery, [hashedPassword, username])
      response.status(200).send('Password updated')
    }
  }
})

module.exports = app
