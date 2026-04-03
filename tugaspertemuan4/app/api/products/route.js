import { connectDB } from "../db";

// GET
export async function GET() {
  const db = await connectDB();
  const [rows] = await db.execute("SELECT * FROM products");
  return Response.json(rows);
}

// POST
export async function POST(req) {
  const { nama_produk, harga, stok } = await req.json();

  const db = await connectDB();
  await db.execute(
    "INSERT INTO products (nama_produk, harga, stok) VALUES (?, ?, ?)",
    [nama_produk, harga, stok],
  );

  return Response.json({ message: "Berhasil tambah" });
}
