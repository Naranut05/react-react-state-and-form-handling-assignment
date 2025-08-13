import { useState } from "react";

function ProductForm() {
const [name, setName] = useState('');
const [image, setImage] = useState('');
const [price, setPrice] = useState('');
const [description, setDescription] = useState('');
const [email, setEmail] = useState('');



const [nameError, setNameError] = useState('');
const [imageError, setImageError] = useState('');
const [priceError, setPriceError] = useState('');
const [descriptionError, setDescriptionError] = useState('');
const [emailError, setEmailError] = useState('');



const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


function handleSubmit (event){
  event.preventDefault();
  let errors = false;
  if(!name){
    setNameError('Name is required');
    errors = true;
  } else{
    setNameError ('');
  }
  if(!image){
    setImageError ('Image URL is required');
    errors = true;
  } else{
    setImageError ('');
  }
  if(!price){
    setPriceError ('Price is required');
    errors = true;
  }else if(price < 0){
    setPriceError ('Price cannot be less than 0');
    errors = true;
  } else{
    setPriceError ('');
  }
  if(!description){
    setDescriptionError ('Description is required');
    errors = true;
  } else{
    setDescriptionError ('');
  }
  if(!email){
    setEmailError ('Email is required');
    errors = true;
  }else if(!isValidEmail.test(email)){
    setEmailError ('Invalid email format');
    errors = true;
  } else{
    setEmailError ('');
  }
  console.log('errors:', errors);
  if(!errors){
    let newForm = {name, image, price, description, email}

    alert(JSON.stringify(newForm, null, 2));
    setName("");
    setImage("");
    setPrice("");
    setDescription("");
    setEmail("");
  }
}


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
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </label>
        {nameError && <p className="error">{nameError}</p>}
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => setImage(event.target.value)}
            value={image}
          />
        </label>
        {imageError && <p className="error">{imageError}</p>}
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => setPrice(event.target.value)}
            value={price}
          />
        </label>
        {priceError && <p className="error">{priceError}</p>}
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
        {descriptionError && <p className="error">{descriptionError}</p>}
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
