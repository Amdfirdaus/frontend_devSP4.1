import { connectDB } from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const db = await connectDB();
    const products = await db.collection("products").find().toArray();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
