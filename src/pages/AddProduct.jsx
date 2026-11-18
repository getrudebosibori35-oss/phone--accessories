import {useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import useProducts from "../hooks/useProducts";

function AddProduct() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  async function handleAddProduct(newProduct) {
    await addProduct(newProduct);
    navigate("/products");
  }

  return (
    <section className="form-page">
      <div className="page-heading">
        <h1>Add New Product</h1>

        <p>
          Enter the details of the phone accessory you
          want to add to your store.
        </p>
      </div>

      <ProductForm
        onSubmit={handleAddProduct}
        buttonText="Add Product"
      />
    </section>
  );
}

export default AddProduct;
