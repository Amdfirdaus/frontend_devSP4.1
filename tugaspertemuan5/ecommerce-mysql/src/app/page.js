"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = async (id) => {
    await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ product_id: id }),
    });
    alert("Ditambahkan ke cart");
  };

  return (
    <div className="container mt-4">
      <h2>Daftar Produk</h2>
      <div className="row">
        {products.map((p) => (
          <div className="col-md-4 mb-3" key={p.id}>
            <div className="card shadow-sm p-3">
              <img src={p.image} className="img-fluid mb-2" />
              <h5>{p.name}</h5>
              <p>Rp {p.price}</p>
              <button
                className="btn btn-primary w-100"
                onClick={() => addToCart(p.id)}
              >
                Tambah ke Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
