import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Products() {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });

  return (
    <section className="products-page">
      <div className="page-heading">
        <h1>Our Products</h1>

        <p>
          View and manage all the accessories available
          in your store.
        </p>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {loading && <p>Loading products...</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <>
          <p className="results-count">
            {filteredProducts.length} product(s) found
          </p>

          {filteredProducts.length === 0 ? (
            <p className="empty-message">
              No products found. Try another search.
            </p>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Products;
