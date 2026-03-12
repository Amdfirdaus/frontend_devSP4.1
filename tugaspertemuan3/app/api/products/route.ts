import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
