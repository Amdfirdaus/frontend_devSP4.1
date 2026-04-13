import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "firdaus",
  database: "ecommerce",
});

export default db;
