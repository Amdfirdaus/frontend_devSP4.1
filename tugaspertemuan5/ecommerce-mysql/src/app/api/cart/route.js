import db from "@/lib/db";

// GET (ambil cart + join produk)
export async function GET() {
  const [rows] = await db.query(`
    SELECT cart.id, products.name, products.price, products.image
    FROM cart
    JOIN products ON cart.product_id = products.id
  `);

  return Response.json(rows);
}

// POST (tambah ke cart)
export async function POST(req) {
  const body = await req.json();

  await db.query("INSERT INTO cart (product_id) VALUES (?)", [body.product_id]);

  return Response.json({ message: "Masuk ke cart" });
}

// DELETE (hapus dari cart)
export async function DELETE(req) {
  const { id } = await req.json();

  await db.query("DELETE FROM cart WHERE id = ?", [id]);

  return Response.json({ message: "Dihapus dari cart" });
}
