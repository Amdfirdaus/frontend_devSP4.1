import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav className="navbar navbar-dark bg-dark px-3">
          <a href="/" className="navbar-brand">
            Produk
          </a>
          <a href="/cart" className="navbar-brand">
            Cart
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
