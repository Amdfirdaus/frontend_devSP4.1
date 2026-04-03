import mysql from "mysql2/promise";

export async function connectDB() {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "firdaus",
    database: "db_toko_bangunan",
  });
}
