import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:3000/products";

  // GET: Fetch products from the backend
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // POST: Add a new product
  async function addProduct(newProduct) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const savedProduct = await response.json();

      setProducts((currentProducts) => [
        ...currentProducts,
        savedProduct,
      ]);

      return savedProduct;
    } catch (err) {
      throw err;
    }
  }

  // PATCH: Update an existing product
  async function updateProduct(id, updatedData) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const updatedProduct = await response.json();

      setProducts((currentProducts) =>
        currentProducts.map((product) =>
          String(product.id) === String(id)
            ? updatedProduct
            : product
        )
      );

      return updatedProduct;
    } catch (err) {
      throw err;
    }
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        addProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
