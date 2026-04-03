"use client";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");

  const getData = async () => {
    const res = await fetch("/api/products");
    const result = await res.json();
    setData(result);
  };

  const tambah = async () => {
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        nama_produk: nama,
        harga,
        stok,
      }),
    });

    setNama("");
    setHarga("");
    setStok("");
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Toko Bangunan</h2>

      <input
        className="form-control mb-2"
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Harga"
        value={harga}
        onChange={(e) => setHarga(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Stok"
        value={stok}
        onChange={(e) => setStok(e.target.value)}
      />

      <button className="btn btn-primary" onClick={tambah}>
        Tambah
      </button>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Stok</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.nama_produk}</td>
              <td>Rp {d.harga}</td>
              <td>{d.stok}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
