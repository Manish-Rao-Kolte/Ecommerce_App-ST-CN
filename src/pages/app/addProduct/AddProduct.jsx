import { useDispatch, useSelector } from "react-redux";
import styles from "./addProduct.module.css";

import React, { useState } from "react";
import {
  addProductAsync,
  productSelector,
} from "../../../redux/slices/productSlice";

const AddProduct = () => {
  const { products } = useSelector(productSelector);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    image: "",
  });
  const dispatch = useDispatch();

  //function to add new product in DB.
  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProductAsync({ ...formData, id: products.length + 1 }));
    setFormData({
      title: "",
      description: "",
      price: "",
      rating: "",
      image: "",
    });
  };

  return (
    <div className={styles.formContainer}>
      <form
        className={styles.productForm}
        onSubmit={(e) => handleAddProduct(e)}
      >
        <div className={styles.header}>Add a Product</div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          required
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          value={formData.description}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          required
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          value={formData.price}
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          id="rating"
          required
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
          value={formData.rating}
          max="5"
          min="1"
          step="0.1"
        />
        <label htmlFor="image">Image</label>
        <input
          type="url"
          name="image"
          id="image"
          required
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          value={formData.image}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
