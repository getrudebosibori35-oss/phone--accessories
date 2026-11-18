import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        src={product.image || "https://placehold.co/300x200?text=Product"}
        alt={product.name}
        className="product-image"
      />

      <div className="product-card-content">
        <h3>{product.name}</h3>

        <p className="product-category">
          {product.category}
        </p>

        <p>{product.description}</p>

        <p className="product-price">
          KSh {Number(product.price).toLocaleString()}
        </p>

        <Link
          to={`/edit-product/${product.id}`}
          className="edit-button"
        >
          Edit Product
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
