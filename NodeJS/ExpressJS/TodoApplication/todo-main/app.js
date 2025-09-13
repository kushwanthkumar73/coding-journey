const express = require('express')
const path = require('path')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')

const app = express()
app.use(express.json())

const dbPath = path.join(__dirname, 'todoApplication.db')
let db = null

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })

    // Create the table if not exists
    await db.run(`
      CREATE TABLE IF NOT EXISTS todo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        todo TEXT,
        priority TEXT,
        status TEXT
      );
    `)

    app.listen(3000, () => {
      console.log('Server Running at http://localhost:3000/')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}

initializeDBAndServer()
// ====================== API 1: GET with multiple scenarios ======================
app.get('/todos/', async (request, response) => {
  const {status, priority, search_q = ''} = request.query
  let getTodosQuery = ''

  if (status !== undefined && priority !== undefined) {
    // Scenario 3: Filter by both priority and status
    getTodosQuery = `
      SELECT * FROM todo
      WHERE status = '${status}' AND priority = '${priority}';
    `
  } else if (status !== undefined) {
    // Scenario 1: Filter by status
    getTodosQuery = `
      SELECT * FROM todo
      WHERE status = '${status}';
    `
  } else if (priority !== undefined) {
    // Scenario 2: Filter by priority
    getTodosQuery = `
      SELECT * FROM todo
      WHERE priority = '${priority}';
    `
  } else if (search_q !== '') {
    // Scenario 4: Search by todo text
    getTodosQuery = `
      SELECT * FROM todo
      WHERE todo LIKE '%${search_q}%';
    `
  } else {
    // Default: return all todos
    getTodosQuery = `SELECT * FROM todo;`
  }

  const todos = await db.all(getTodosQuery)
  response.send(todos)
})
// ====================== API 2: GET a specific todo ======================
app.get('/todos/:todoId/', async (request, response) => {
  const {todoId} = request.params
  const getTodoQuery = `SELECT * FROM todo WHERE id = ?;`
  const todoItem = await db.get(getTodoQuery, [todoId])
  response.send(todoItem)
})

// ====================== API 3: POST a new todo ======================
app.post('/todos/', async (request, response) => {
  const {id, todo, priority, status} = request.body
  const addTodoQuery = `
    INSERT INTO todo (id, todo, priority, status)
    VALUES (?, ?, ?, ?);
  `
  await db.run(addTodoQuery, [id, todo, priority, status])
  response.send('Todo Successfully Added')
})

// ====================== API 4: PUT update a todo ======================
app.put('/todos/:todoId/', async (request, response) => {
  const {todoId} = request.params
  const {status, priority, todo} = request.body
  let updateQuery = ''
  let responseMessage = ''

  if (status !== undefined) {
    updateQuery = `UPDATE todo SET status = ? WHERE id = ?;`
    await db.run(updateQuery, [status, todoId])
    responseMessage = 'Status Updated'
  } else if (priority !== undefined) {
    updateQuery = `UPDATE todo SET priority = ? WHERE id = ?;`
    await db.run(updateQuery, [priority, todoId])
    responseMessage = 'Priority Updated'
  } else if (todo !== undefined) {
    updateQuery = `UPDATE todo SET todo = ? WHERE id = ?;`
    await db.run(updateQuery, [todo, todoId])
    responseMessage = 'Todo Updated'
  }

  response.send(responseMessage)
})

app.delete('/todos/:todoId/', async (request, response) => {
  const {todoId} = request.params
  const deleteQuery = `DELETE FROM todo WHERE id = ?;`
  await db.run(deleteQuery, [todoId])
  response.send('Todo Deleted')
})
module.exports = app;
