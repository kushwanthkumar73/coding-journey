const express = require('express')
const path = require('path')

const {open} = require('sqlite')
const sqlite3 = require('sqlite3')

const app = express()
app.use(express.json())
const dbPath = path.join(__dirname, 'covid19India.db')
let db = null

const intilizerDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('Server Running at http://localhost:3000/')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1);
  }
}
intilizerDBAndServer()
// API 1: Get all states
app.get('/states/', async (request, response) => {
  const getStatesQuery = `
    SELECT 
      state_id AS stateId,
      state_name AS stateName,
      population
    FROM state;
  `
  const statesArray = await db.all(getStatesQuery)
  response.send(statesArray)
})
// API 2: Get state by ID
app.get('/states/:stateId/', async (request, response) => {
  const {stateId} = request.params
  const getStateQuery = `
    SELECT 
      state_id AS stateId,
      state_name AS stateName,
      population
    FROM state
    WHERE state_id = ${stateId};
  `
  const state = await db.get(getStateQuery)
  response.send(state)
})
// API 3: Add a district
app.post('/districts/', async (request, response) => {
  const {districtName, stateId, cases, cured, active, deaths} = request.body
  const addDistrictQuery = `
    INSERT INTO district (district_name, state_id, cases, cured, active, deaths)
    VALUES ('${districtName}', ${stateId}, ${cases}, ${cured}, ${active}, ${deaths});
  `
  await db.run(addDistrictQuery)
  response.send('District Successfully Added')
})
// API 4: Get district by ID
app.get('/districts/:districtId/', async (request, response) => {
  const {districtId} = request.params
  const getDistrictQuery = `
    SELECT
      district_id AS districtId,
      district_name AS districtName,
      state_id AS stateId,
      cases,
      cured,
      active,
      deaths
    FROM district
    WHERE district_id = ${districtId};
  `
  const district = await db.get(getDistrictQuery)
  response.send(district)
})
// API 5: Delete district by ID
app.delete('/districts/:districtId/', async (request, response) => {
  const {districtId} = request.params
  const deleteDistrictQuery = `
    DELETE FROM district
    WHERE district_id = ${districtId};
  `
  await db.run(deleteDistrictQuery)
  response.send('District Removed')
})

// API 6: Update district by ID
app.put('/districts/:districtId/', async (request, response) => {
  const {districtId} = request.params
  const {districtName, stateId, cases, cured, active, deaths} = request.body

  const updateDistrictQuery = `
    UPDATE district
    SET 
      district_name = '${districtName}',
      state_id = ${stateId},
      cases = ${cases},
      cured = ${cured},
      active = ${active},
      deaths = ${deaths}
    WHERE district_id = ${districtId};
  `
  await db.run(updateDistrictQuery)
  response.send('District Details Updated')
})

// API 7: Get stats of a state
app.get('/states/:stateId/stats/', async (request, response) => {
  const {stateId} = request.params
  const getStatsQuery = `
    SELECT 
      SUM(cases) AS totalCases,
      SUM(cured) AS totalCured,
      SUM(active) AS totalActive,
      SUM(deaths) AS totalDeaths
    FROM district
    WHERE state_id = ${stateId};
  `
  const stats = await db.get(getStatsQuery)
  response.send(stats)
})

// API 8: Get state name of a district
app.get('/districts/:districtId/details/', async (request, response) => {
  const {districtId} = request.params
  const getStateNameQuery = `
    SELECT state.state_name AS stateName
    FROM state
    INNER JOIN district ON state.state_id = district.state_id
    WHERE district.district_id = ${districtId};
  `
  const state = await db.get(getStateNameQuery)
  response.send(state)
})

module.exports = app
