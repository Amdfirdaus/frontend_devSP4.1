import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "firdaus",
  database: "db_toko_bangunan",
});
