import { Pool } from 'pg';

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "royalty",
  password: "123456",
  port: 3000,
})
module.exports = {
  query: (text, params) => pool.query(text, params),
};