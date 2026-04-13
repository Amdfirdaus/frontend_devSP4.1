"use client";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const loadCart = () => {
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  };

  useEffect(() => {
    loadCart();
  }, []);

  const deleteItem = async (id) => {
    await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    loadCart(); // refresh
  };

  return (
    <div className="container mt-4">
      <h2>Keranjang</h2>

      {cart.length === 0 && <p>Cart kosong</p>}

      <ul className="list-group">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center">
              <img src={item.image} width="60" className="me-3 rounded" />
              <div>
                <div>{item.name}</div>
                <small>Rp {item.price}</small>
              </div>
            </div>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteItem(item.id)}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
