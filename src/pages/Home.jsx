import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function Home() {
  const { products, loading } = useProducts();

  return (
    <section className="home-page">
      <div className="hero">
        <p className="eyebrow">STORE MANAGEMENT</p>

        <h1>Welcome to Voltix Accessories</h1>

        <p>
          Manage your phone accessories, update your inventory
          and keep your store organized.
        </p>

        <div className="hero-buttons">
          <Link to="/products" className="primary-button">
            View Products
          </Link>

          <Link to="/add-product" className="secondary-button">
            Add New Product
          </Link>
        </div>
      </div>

      <div className="dashboard-summary">
        <div className="summary-card">
          <h2>Total Products</h2>

          <p className="summary-number">
            {loading ? "..." : products.length}
          </p>

          <p>Products in your store</p>
        </div>
      </div>

      <div className="home-info">
        <h2>Manage Your Store</h2>

        <p>
          Use the products section to view, search and edit
          your accessories. You can also add new products
          whenever your store receives new stock.
        </p>
      </div>
    </section>
  );
}

export default Home;
