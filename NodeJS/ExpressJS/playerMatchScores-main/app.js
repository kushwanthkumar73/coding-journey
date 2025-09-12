const express = require('express')
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
const path = require('path')

const app = express()
app.use(express.json())

const dbPath = path.join(__dirname, 'cricketMatchDetails.db')
let db = null

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('Server running at http://localhost:3000/')
    })
  } catch (error) {
    console.error(`DB Error: ${error.message}`)
    process.exit(1)
  }
}

initializeDBAndServer()

// API 1: GET all players
app.get('/players/', async (request, response) => {
  const getPlayersQuery = `
    SELECT
      player_id AS playerId,
      player_name AS playerName
    FROM player_details;
  `
  const players = await db.all(getPlayersQuery)
  response.send(players)
})

// API 2: GET player by ID
app.get('/players/:playerId/', async (request, response) => {
  const {playerId} = request.params
  const getPlayerQuery = `
    SELECT
      player_id AS playerId,
      player_name AS playerName
    FROM player_details
    WHERE player_id = ${playerId};
  `
  const player = await db.get(getPlayerQuery)
  response.send(player)
})
// API 3: PUT - Update player details
app.put('/players/:playerId/', async (request, response) => {
  const {playerId} = request.params
  const {playerName} = request.body
  const updatePlayerQuery = `
    UPDATE player_details
    SET player_name = ?
    WHERE player_id = ?;
  `
  await db.run(updatePlayerQuery, [playerName, playerId])
  response.send('Player Details Updated')
})

// API 4: GET match details by match ID
app.get('/matches/:matchId/', async (request, response) => {
  const {matchId} = request.params
  const getMatchQuery = `
    SELECT
      match_id AS matchId,
      match,
      year
    FROM match_details
    WHERE match_id = ?;
  `
  const match = await db.get(getMatchQuery, [matchId])
  response.send(match)
})
// API 5: GET all matches of a player
app.get('/players/:playerId/matches', async (request, response) => {
  const {playerId} = request.params
  const getMatchesQuery = `
    SELECT 
      match_details.match_id AS matchId,
      match_details.match,
      match_details.year
    FROM player_match_score
    INNER JOIN match_details
    ON player_match_score.match_id = match_details.match_id
    WHERE player_match_score.player_id = ?;
  `
  const matches = await db.all(getMatchesQuery, [playerId])
  response.send(matches)
})

// API 6: GET all players of a match
app.get('/matches/:matchId/players', async (request, response) => {
  const {matchId} = request.params
  const getPlayersQuery = `
    SELECT 
      player_details.player_id AS playerId,
      player_details.player_name AS playerName
    FROM player_match_score
    INNER JOIN player_details
    ON player_match_score.player_id = player_details.player_id
    WHERE player_match_score.match_id = ?;
  `
  const players = await db.all(getPlayersQuery, [matchId])
  response.send(players)
})
// API 7: GET player statistics
app.get('/players/:playerId/playerScores', async (request, response) => {
  const {playerId} = request.params
  const getStatsQuery = `
    SELECT 
      player_details.player_id AS playerId,
      player_details.player_name AS playerName,
      SUM(score) AS totalScore,
      SUM(fours) AS totalFours,
      SUM(sixes) AS totalSixes
    FROM player_match_score
    INNER JOIN player_details
    ON player_match_score.player_id = player_details.player_id
    WHERE player_match_score.player_id = ?
    GROUP BY player_details.player_id;
  `
  const stats = await db.get(getStatsQuery, [playerId])
  response.send(stats)
})

module.exports = app
