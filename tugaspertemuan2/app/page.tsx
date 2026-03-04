"use client";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  nama_produk: string;
  harga: number;
  gambar: string;
  kategori_id: number;
  deskripsi: string;
  stok: number;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Daftar Produk</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
          >
            <img
              src={`/images/${product.gambar}`}
              alt={product.nama_produk}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            <h2 className="text-xl font-semibold">{product.nama_produk}</h2>

            <p className="text-gray-600 text-sm mt-2">{product.deskripsi}</p>

            <p className="mt-3 font-bold text-blue-600">
              Rp {product.harga.toLocaleString()}
            </p>

            <p className="text-sm mt-1">Stok: {product.stok}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
