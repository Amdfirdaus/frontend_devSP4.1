import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "E-Commerce",
  description: "Simple Ecommerce App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
