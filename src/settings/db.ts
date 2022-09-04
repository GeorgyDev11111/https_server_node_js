import pg from "pg"
import { config } from "./config.js"

const { Pool } = pg

const pool = new Pool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.name,
  password: config.db.passwd,
  port: config.db.port
})

export default pool