import styles from "./cartProductCard.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeProductFromCartAsync } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const CartProductCard = (props) => {
  const { product } = props;
  const { title, image, rating, price, description } = product;
  const dispatch = useDispatch();

  const deleteProductFromCart = () => {
    dispatch(removeProductFromCartAsync(product))
      .then(() => {
        toast.success("Product removed!!");
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
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>
              &#x20B9;{Math.round(price).toFixed(2)}
            </div>
          </div>
          <div>
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
          </div>
        </div>
      </div>
      <div className={styles.secondSection}>
        <p className={styles.description}>{description}</p>
        <div className={styles.btnWrapper}>
          <button onClick={() => deleteProductFromCart()}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
