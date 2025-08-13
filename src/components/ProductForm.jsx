import { useState } from "react";

function ProductForm() {
  const [_formData, _setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    email: "",
  });
  const [_errors, _setErrors] = useState({});

  const _handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    _setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const _validate = () => {
    const errTemp = {};

    if (!_formData.name.trim()) {
      errTemp.name = "Name is required";
    }
    if (!_formData.image.trim()) {
      errTemp.image = "Image is required";
    }
    if (!_formData.price.trim()) {
      errTemp.price = "Price is required";
    } else if (Number(_formData.price <= 0)) {
      errTemp.price = "Price cannot be less than 0.";
    }
    if (!_formData.description.trim()) {
      errTemp.description = "Description is required";
    }
    if (_formData.email.trim().length === 0) {
      errTemp.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(_formData.email.trim())) {
      errTemp.email = "Invalid email format.";
    }
    return errTemp;
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    let validateForm = _validate();
    console.log(validateForm);
    if (Object.keys(validateForm).length > 0) {
      _setErrors({ ...validateForm });
    } else {
      _setErrors({});
      alert(JSON.stringify(_formData, null, 2));
    }
  };

  const errStyle = {
    borderRadius: "10px",
    padding: "10px",
    color: "white",
    background: "red",
    width: "fit-content",
    marginTop: "10px",
  };

  return (
    <form className="post-form" onSubmit={_handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={_formData.name}
            onChange={_handleChange}
          />
        </label>
        {_errors.name && <p style={errStyle}>{_errors.name}</p>}
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={_formData.image}
            onChange={_handleChange}
          />
        </label>
        {_errors.image && <p style={errStyle}>{_errors.image}</p>}
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={_formData.price}
            onChange={_handleChange}
          />
        </label>
        {_errors.price && <p style={errStyle}>{_errors.price}</p>}
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={_formData.description}
            onChange={_handleChange}
            rows={4}
            cols={30}
          />
        </label>
        {_errors.description && <p style={errStyle}>{_errors.description}</p>}
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email here"
            value={_formData.email}
            onChange={_handleChange}
          />
        </label>
        {_errors.email && <p style={errStyle}>{_errors.email}</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
