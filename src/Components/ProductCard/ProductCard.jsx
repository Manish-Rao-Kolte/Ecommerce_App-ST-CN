import React from "react";
import styles from "./productCard.module.css";

const ProductCard = (props) => {
  const { product } = props;
  const { image, rating, title, price, description } = product;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.firstSection}>
        <img src={image} alt={title} />
        <div className={styles.priceRatingWrapper}>
          <div className={styles.titlePriceWrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>&#x20B9; {price}</div>
          </div>
          <div className={styles.rating}>{rating}</div>
        </div>
      </div>
      <div className={styles.secondSection}>
        <p className={styles.description}>{description}</p>
        <div className={styles.btnWrapper}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/11149/11149783.png"
            alt="edit"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/6722/6722996.png"
            alt="delete"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
