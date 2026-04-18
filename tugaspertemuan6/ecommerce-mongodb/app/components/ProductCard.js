export default function ProductCard({ product }) {
  return (
    <div className="card p-3">
      <h5>{product.name}</h5>
      <p>Rp {product.price}</p>
    </div>
  );
}
