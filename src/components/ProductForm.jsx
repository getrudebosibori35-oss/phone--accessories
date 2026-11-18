import { useState, useId} from "react";

function ProductForm({ product, onSubmit, buttonText }) {
  const id = useId();

  const [formData, setFormData] = useState({
    name: product?.name || "",
    description: product?.description || "",
    category: product?.category || "",
    price: product?.price || "",
    image: product?.image || "",
  });

  const [formError, setFormError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFormError("");

    try {
      await onSubmit({
        ...formData,
        price: Number(formData.price),
      });
    } catch (error) {
      setFormError(error.message || "Something went wrong.");
    }
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor={`${id}-name`}>Product Name</label>
        <input
          id={`${id}-name`}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor={`${id}-description`}>Description</label>
        <textarea
          id={`${id}-description`}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the product"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor={`${id}-category`}>Category</label>
        <input
          id={`${id}-category`}
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="e.g. Chargers"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor={`${id}-price`}>Price (KSh)</label>
        <input
          id={`${id}-price`}
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          min="1"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor={`${id}-image`}>Image URL</label>
        <input
          id={`${id}-image`}
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      {formError && (
        <p className="form-error">{formError}</p>
      )}

      <button type="submit" className="submit-button">
        {buttonText}
      </button>
    </form>
  );
}

export default ProductForm;
