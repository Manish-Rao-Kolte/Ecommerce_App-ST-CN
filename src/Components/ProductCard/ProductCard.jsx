import React, { useState } from "react";
import styles from "./productCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  modifyProductAsync,
  removeProductAsync,
} from "../../redux/slices/productSlice";
import { addProductToCartAsync } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductCard = (props) => {
  const { product } = props;
  const { title, image, rating, price, description } = product;
  const [data, setData] = useState({
    title: title,
    price: price,
    description: description,
    rating: rating,
  });
  const [isUpdateRequired, setIsUpdateRequired] = useState(false);
  const dispatch = useDispatch();

  const updateProduct = () => {
    const newData = {
      id: product.id,
      image: product.image,
      title: data.title,
      price: data.price,
      description: data.description,
      rating: data.rating,
    };
    dispatch(modifyProductAsync(newData))
      .then(() => {
        toast.success("Product details updated!!");
      })
      .catch((err) => toast.error("Error occured!!"));
    setIsUpdateRequired(false);
  };

  const deleteProduct = () => {
    dispatch(removeProductAsync(product))
      .then(() => {
        toast.success("Product Removed!!");
      })
      .catch((err) => toast.error("Error occured!!"));
  };

  const addToCart = () => {
    dispatch(addProductToCartAsync(product))
      .then(() => {
        toast.success("Product Added to Cart!!");
      })
      .catch((err) => toast.error("Error occured!!"));
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.firstSection}>
        <div className={styles.imgContainer}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.priceRatingWrapper}>
          <div className={styles.titlePriceWrapper}>
            {isUpdateRequired ? (
              <input
                type="text"
                className={styles.titleInput}
                defaultValue={title}
                required
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            ) : (
              <div className={styles.title}>{title}</div>
            )}
            {isUpdateRequired ? (
              <div>
                <span>&#x20B9; </span>
                <input
                  type="number"
                  className={styles.priceInput}
                  defaultValue={price}
                  required
                  onChange={(e) =>
                    setData({
                      ...data,
                      price: e.target.value,
                    })
                  }
                />
              </div>
            ) : (
              <div className={styles.price}>
                &#x20B9;{Math.round(price).toFixed(2)}
              </div>
            )}
          </div>
          <div>
            {isUpdateRequired ? (
              <>
                <span>Rating </span>
                <input
                  type="number"
                  className={styles.ratingInput}
                  defaultValue={rating}
                  required
                  min="1"
                  max="5"
                  onChange={(e) =>
                    setData({
                      ...data,
                      rating: e.target.value,
                    })
                  }
                />
              </>
            ) : (
              <div className={styles.rating}>
                {[...Array(Math.floor(rating))].map((star, index) => {
                  return <FontAwesomeIcon icon={faStar} key={index} />;
                })}
                {Math.ceil(rating) - rating < 1 &&
                  Math.ceil(rating) - rating > 0 &&
                  [...Array(1)].map((star, index) => {
                    return (
                      <FontAwesomeIcon icon={faStarHalfStroke} key={index} />
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.secondSection}>
        {isUpdateRequired ? (
          <textarea
            type="text"
            defaultValue={description}
            required
            onChange={(e) =>
              setData({
                ...data,
                description: e.target.value,
              })
            }
          />
        ) : (
          <p className={styles.description}>{description}</p>
        )}
        <div
          className={
            isUpdateRequired ? styles.btnWrapper : styles.imgBtnWrapper
          }
        >
          {isUpdateRequired ? (
            <>
              <button onClick={() => setIsUpdateRequired(false)}>
                {" "}
                Cancel{" "}
              </button>
              <button onClick={updateProduct}> Submit </button>
            </>
          ) : (
            <>
              <img
                src="https://cdn-icons-png.flaticon.com/128/8866/8866177.png"
                alt="add to cart"
                onClick={() => addToCart()}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/11149/11149783.png"
                alt="edit"
                onClick={() => setIsUpdateRequired(true)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/6722/6722996.png"
                alt="delete"
                onClick={() => deleteProduct()}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
