import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const [isShow, setIsShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const data = {
    name: name,
    imageURL: imageURL,
    price: price,
    description: description,
    email: email,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validation
    if (name === "") {
      setAlertMessage("Name is required.");
      setIsShow(true);
    } else if (imageURL === "") {
      setAlertMessage("Image is required.");
      setIsShow(true);
    } else if (price === "" || price < 0) {
      setAlertMessage("Price cannot be less than 0.");
      setIsShow(true);
    } else if (description === "") {
      setAlertMessage("Description is required.");
      setIsShow(true);
    } else if (email === "") {
      setAlertMessage("Email is required");
      setIsShow(true);
    } else {
      setIsShow(false);
      setAlertMessage("");
    }

    alert(JSON.stringify(data));
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <div className="alertMessage">
          {isShow ? <h4>{alertMessage}</h4> : null}
        </div>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={imageURL}
            onChange={(e) => {
              setImageURL(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
