const express = require('express')
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

const dbPath = path.join(__dirname, 'covid19IndiaPortal.db')
let db = null

// Initialize DB + Server
const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })

    app.listen(3000, () =>
      console.log('Server running at http://localhost:3000/'),
    )
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}

initializeDbAndServer()

// ---------------------------------------------------------
// MIDDLEWARE for JWT Authentication
// ---------------------------------------------------------
const authenticateToken = (request, response, next) => {
  const authHeader = request.headers['authorization']
  if (authHeader === undefined) {
    response.status(401).send('Invalid JWT Token')
  } else {
    const jwtToken = authHeader.split(' ')[1]
    jwt.verify(jwtToken, 'MY_SECRET_KEY', (error, payload) => {
      if (error) {
        response.status(401).send('Invalid JWT Token')
      } else {
        request.username = payload.username
        next()
      }
    })
  }
}

// ---------------------------------------------------------
// API 1: LOGIN
// ---------------------------------------------------------
app.post('/login/', async (request, response) => {
  const {username, password} = request.body

  const userQuery = `SELECT * FROM user WHERE username = ?;`
  const dbUser = await db.get(userQuery, [username])

  if (dbUser === undefined) {
    response.status(400).send('Invalid user')
  } else {
    const isPasswordMatched = await bcrypt.compare(password, dbUser.password)
    if (isPasswordMatched) {
      const payload = {username: username}
      const jwtToken = jwt.sign(payload, 'MY_SECRET_KEY')
      response.send({jwtToken})
    } else {
      response.status(400).send('Invalid password')
    }
  }
})

// ---------------------------------------------------------
// API 2: GET all states
// ---------------------------------------------------------
app.get('/states/', authenticateToken, async (request, response) => {
  const statesQuery = `SELECT state_id AS stateId, state_name AS stateName, population FROM state;`
  const states = await db.all(statesQuery)
  response.send(states)
})

// ---------------------------------------------------------
// API 3: GET state by ID
// ---------------------------------------------------------
app.get('/states/:stateId/', authenticateToken, async (request, response) => {
  const {stateId} = request.params
  const stateQuery = `SELECT state_id AS stateId, state_name AS stateName, population FROM state WHERE state_id = ?;`
  const state = await db.get(stateQuery, [stateId])
  response.send(state)
})

// ---------------------------------------------------------
// API 4: CREATE district
// ---------------------------------------------------------
app.post('/districts/', authenticateToken, async (request, response) => {
  const {districtName, stateId, cases, cured, active, deaths} = request.body
  const addDistrictQuery = `
    INSERT INTO district (district_name, state_id, cases, cured, active, deaths)
    VALUES (?, ?, ?, ?, ?, ?);
  `
  await db.run(addDistrictQuery, [
    districtName,
    stateId,
    cases,
    cured,
    active,
    deaths,
  ])
  response.send('District Successfully Added')
})

// ---------------------------------------------------------
// API 5: GET district by ID
// ---------------------------------------------------------
app.get(
  '/districts/:districtId/',
  authenticateToken,
  async (request, response) => {
    const {districtId} = request.params
    const districtQuery = `
      SELECT 
        district_id AS districtId,
        district_name AS districtName,
        state_id AS stateId,
        cases,
        cured,
        active,
        deaths
      FROM district
      WHERE district_id = ?;
    `
    const district = await db.get(districtQuery, [districtId])
    response.send(district)
  },
)

// ---------------------------------------------------------
// API 6: DELETE district
// ---------------------------------------------------------
app.delete(
  '/districts/:districtId/',
  authenticateToken,
  async (request, response) => {
    const {districtId} = request.params
    const deleteQuery = `DELETE FROM district WHERE district_id = ?;`
    await db.run(deleteQuery, [districtId])
    response.send('District Removed')
  },
)

// ---------------------------------------------------------
// API 7: UPDATE district
// ---------------------------------------------------------
app.put(
  '/districts/:districtId/',
  authenticateToken,
  async (request, response) => {
    const {districtId} = request.params
    const {districtName, stateId, cases, cured, active, deaths} = request.body

    const updateQuery = `
      UPDATE district
      SET 
        district_name = ?,
        state_id = ?,
        cases = ?,
        cured = ?,
        active = ?,
        deaths = ?
      WHERE district_id = ?;
    `

    await db.run(updateQuery, [
      districtName,
      stateId,
      cases,
      cured,
      active,
      deaths,
      districtId,
    ])
    response.send('District Details Updated')
  },
)

// ---------------------------------------------------------
// API 8: GET stats of a state
// ---------------------------------------------------------
app.get(
  '/states/:stateId/stats/',
  authenticateToken,
  async (request, response) => {
    const {stateId} = request.params
    const statsQuery = `
      SELECT 
        SUM(cases) AS totalCases,
        SUM(cured) AS totalCured,
        SUM(active) AS totalActive,
        SUM(deaths) AS totalDeaths
      FROM district
      WHERE state_id = ?;
    `
    const stats = await db.get(statsQuery, [stateId])
    response.send(stats)
  },
)

module.exports = app
