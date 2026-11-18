import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import useProducts from "../hooks/useProducts";

function EditProduct() {
  const { id } = useParams();
  const { products, updateProduct, loading, error } = useProducts();
  const navigate = useNavigate();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  async function handleUpdateProduct(updatedData) {
    await updateProduct(id, updatedData);
    navigate("/products");
  }

  if (loading) {
    return <p className="loading-message">Loading product...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!product) {
    return (
      <section className="form-page">
        <h1>Product Not Found</h1>
        <p>The product you are trying to edit does not exist.</p>
        <button onClick={() => navigate("/products")}>
          Back to Products
        </button>
      </section>
    );
  }

  return (
    <section className="form-page">
      <div className="page-heading">
        <h1>Edit Product</h1>

        <p>
          Update the details of {product.name}.
        </p>
      </div>

      <ProductForm
        product={product}
        onSubmit={handleUpdateProduct}
        buttonText="Save Changes"
      />
    </section>
  );
}

export default EditProduct;
