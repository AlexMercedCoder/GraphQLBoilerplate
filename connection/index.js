require('../../template/connection/node_modules/dotenv').config()
const { Client } = require('pg')

const db = new Client({
  user: 'test',
  host: 'localhost',
  database: 'test',
  password: 'test',
  port: 5432,
})

db.connect()

module.exports = db
