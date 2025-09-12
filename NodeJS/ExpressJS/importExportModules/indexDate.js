const addDays = require('date-fns/addDays')

function getDateAfterXDays(d) {
  const date = addDays(new Date(2020, 7, 22), d)
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

module.exports = getDateAfterXDays