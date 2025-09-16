const express = require('express')
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
const path = require('path')
const {format, isValid} = require('date-fns')

const app = express()
app.use(express.json())

const dbPath = path.join(__dirname, 'todoApplication.db')
let database = null

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })

    // (Optional) Create table if not exists - safe if DB already has it
    await database.run(`
      CREATE TABLE IF NOT EXISTS todo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        todo TEXT,
        category TEXT,
        priority TEXT,
        status TEXT,
        due_date TEXT
      );
    `)

    app.listen(3000, () => {
      console.log('Server running at http://localhost:3000/')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}

initializeDbAndServer()

/* Allowed values */
const VALID_PRIORITIES = ['HIGH', 'MEDIUM', 'LOW']
const VALID_STATUSES = ['TO DO', 'IN PROGRESS', 'DONE']
const VALID_CATEGORIES = ['WORK', 'HOME', 'LEARNING']

/* Helper to format date string to yyyy-MM-dd and validate */
function formatAndValidateDate(dateString) {
  const dateObj = new Date(dateString)
  if (!isValid(dateObj)) {
    return null
  }
  return format(dateObj, 'yyyy-MM-dd')
}

/* Map DB row to response object (camelCase dueDate) */
function mapTodoRow(row) {
  if (!row) return row
  return {
    id: row.id,
    todo: row.todo,
    category: row.category,
    priority: row.priority,
    status: row.status,
    dueDate: row.due_date,
  }
}

/* ---------------- API 1: GET /todos/ ----------------
   Supports filters: status, priority, category, search_q
   Returns list of todos (id, todo, category, priority, status, dueDate)
*/
app.get('/todos/', async (request, response) => {
  try {
    const {status, priority, category, search_q = ''} = request.query

    // Validate inputs (if provided)
    if (status !== undefined && !VALID_STATUSES.includes(status)) {
      response.status(400).send('Invalid Todo Status')
      return
    }
    if (priority !== undefined && !VALID_PRIORITIES.includes(priority)) {
      response.status(400).send('Invalid Todo Priority')
      return
    }
    if (category !== undefined && !VALID_CATEGORIES.includes(category)) {
      response.status(400).send('Invalid Todo Category')
      return
    }

    // Build query dynamically (simple style)
    let getQuery = `SELECT * FROM todo WHERE todo LIKE "%${search_q}%"`
    if (status !== undefined) {
      getQuery += ` AND status = "${status}"`
    }
    if (priority !== undefined) {
      getQuery += ` AND priority = "${priority}"`
    }
    if (category !== undefined) {
      getQuery += ` AND category = "${category}"`
    }

    const rows = await database.all(getQuery)
    const result = rows.map(mapTodoRow)
    response.send(result)
  } catch (err) {
    response.status(500).send('Server Error')
  }
})

/* ---------------- API 2: GET /todos/:todoId/ ----------------
   Returns single todo by id
*/
app.get('/todos/:todoId/', async (request, response) => {
  try {
    const {todoId} = request.params
    const getQuery = `SELECT * FROM todo WHERE id = ${todoId};`
    const row = await database.get(getQuery)
    if (!row) {
      response.status(404).send('Todo Not Found')
      return
    }
    response.send(mapTodoRow(row))
  } catch (err) {
    response.status(500).send('Server Error')
  }
})

/* ---------------- API 3: GET /agenda/?date=yyyy-mm-dd ----------------
   Returns todos with the given due date (date normalization applied)
*/
app.get('/agenda/', async (request, response) => {
  try {
    const {date} = request.query
    const formattedDate = formatAndValidateDate(date)
    if (!formattedDate) {
      response.status(400).send('Invalid Due Date')
      return
    }
    const getQuery = `SELECT * FROM todo WHERE due_date = "${formattedDate}";`
    const rows = await database.all(getQuery)
    const result = rows.map(mapTodoRow)
    response.send(result)
  } catch (err) {
    response.status(500).send('Server Error')
  }
})

/* ---------------- API 4: POST /todos/ ----------------
   Create a todo
   Request body: { todo, category, priority, status, dueDate }
*/
app.post('/todos/', async (request, response) => {
  const {id, todo, category, priority, status, dueDate} = request.body

  // Validate inputs
  if (!VALID_STATUSES.includes(status)) {
    response.status(400).send('Invalid Todo Status')
    return
  }
  if (!VALID_PRIORITIES.includes(priority)) {
    response.status(400).send('Invalid Todo Priority')
    return
  }
  if (!VALID_CATEGORIES.includes(category)) {
    response.status(400).send('Invalid Todo Category')
    return
  }

  const formattedDate = formatAndValidateDate(dueDate)
  if (!formattedDate) {
    response.status(400).send('Invalid Due Date')
    return
  }

  // ✅ Do NOT insert id, let SQLite auto-increment it
  const insertQuery = `
    INSERT INTO todo (id, todo, category, priority, status, due_date)
    VALUES (?, ?, ?, ?, ?, ?);
  `
  const result = await database.run(insertQuery, [
    id,
    todo,
    category,
    priority,
    status,
    formattedDate,
  ])

  response.send('Todo Successfully Added')
})

/* ---------------- API 5: PUT /todos/:todoId/ ----------------
   Update one field based on request body:
   - { status: "DONE" }  -> "Status Updated"
   - { priority: "HIGH" } -> "Priority Updated"
   - { todo: "Some task" } -> "Todo Updated"
   - { category: "LEARNING" } -> "Category Updated"
   - { dueDate: "2021-01-12" } -> "Due Date Updated"
*/
app.put('/todos/:todoId/', async (request, response) => {
  try {
    const {todoId} = request.params
    const {status, priority, todo, category, dueDate} = request.body

    if (status !== undefined) {
      if (!VALID_STATUSES.includes(status)) {
        response.status(400).send('Invalid Todo Status')
        return
      }
      await database.run(
        `UPDATE todo SET status = "${status}" WHERE id = ${todoId};`,
      )
      response.send('Status Updated')
      return
    }

    if (priority !== undefined) {
      if (!VALID_PRIORITIES.includes(priority)) {
        response.status(400).send('Invalid Todo Priority')
        return
      }
      await database.run(
        `UPDATE todo SET priority = "${priority}" WHERE id = ${todoId};`,
      )
      response.send('Priority Updated')
      return
    }

    if (todo !== undefined) {
      await database.run(
        `UPDATE todo SET todo = "${todo}" WHERE id = ${todoId};`,
      )
      response.send('Todo Updated')
      return
    }

    if (category !== undefined) {
      if (!VALID_CATEGORIES.includes(category)) {
        response.status(400).send('Invalid Todo Category')
        return
      }
      await database.run(
        `UPDATE todo SET category = "${category}" WHERE id = ${todoId};`,
      )
      response.send('Category Updated')
      return
    }

    if (dueDate !== undefined) {
      const formattedDate = formatAndValidateDate(dueDate)
      if (!formattedDate) {
        response.status(400).send('Invalid Due Date')
        return
      }
      await database.run(
        `UPDATE todo SET due_date = "${formattedDate}" WHERE id = ${todoId};`,
      )
      response.send('Due Date Updated')
      return
    }

    // If no recognized field provided
    response.status(400).send('No valid field to update')
  } catch (err) {
    response.status(500).send('Server Error')
  }
})

/* ---------------- API 6: DELETE /todos/:todoId/ ----------------
   Delete a todo
*/
app.delete('/todos/:todoId/', async (request, response) => {
  try {
    const {todoId} = request.params
    await database.run(`DELETE FROM todo WHERE id = ${todoId};`)
    response.send('Todo Deleted')
  } catch (err) {
    response.status(500).send('Server Error')
  }
})

/* Export app for testing */
module.exports = app
