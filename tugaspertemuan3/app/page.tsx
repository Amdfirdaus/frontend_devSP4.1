"use client";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  nama_produk: string;
  harga: number;
  gambar: string;
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
    <div className="bg-gray-100 min-h-screen">
      {/* NAVBAR */}
      <nav className="bg-orange-500 text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          {/* LOGO */}
          <h1 className="text-2xl font-bold">ShopeeClone</h1>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Cari barang murah..."
            className="w-1/2 p-2 rounded-md text-black"
          />

          {/* CART */}
          <div className="text-2xl cursor-pointer">🛒</div>
        </div>

        {/* MENU */}
        <div className="bg-white text-gray-700">
          <div className="max-w-6xl mx-auto flex gap-6 text-sm p-3">
            <span className="hover:text-orange-500 cursor-pointer">
              Elektronik
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              Fashion Pria
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              Fashion Wanita
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              Otomotif
            </span>
            <span className="hover:text-orange-500 cursor-pointer">Gaming</span>
            <span className="hover:text-orange-500 cursor-pointer">
              Perawatan
            </span>
            <span className="hover:text-orange-500 cursor-pointer">Laptop</span>
          </div>
        </div>
      </nav>

      {/* PRODUK */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={`/images/${product.gambar}`}
              alt={product.nama_produk}
              className="w-full h-40 object-cover rounded-t-lg"
            />

            <div className="p-4">
              <h2 className="font-semibold text-sm">{product.nama_produk}</h2>

              <p className="text-orange-500 font-bold mt-2">
                Rp {product.harga.toLocaleString("id-ID")}
              </p>

              <p className="text-xs text-gray-500 mt-1">Stok: {product.stok}</p>

              <button className="bg-orange-500 text-white w-full mt-3 py-2 rounded hover:bg-orange-600">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
