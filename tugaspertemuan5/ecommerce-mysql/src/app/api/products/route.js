import db from "@/lib/db";

export async function GET() {
  const [rows] = await db.query("SELECT * FROM products");
  return Response.json(rows);
}

export async function POST(req) {
  const body = await req.json();
  const { name, price } = body;

  await db.query("INSERT INTO products (name, price) VALUES (?, ?)", [
    name,
    price,
  ]);

  return Response.json({ message: "Produk ditambahkan" });
}
