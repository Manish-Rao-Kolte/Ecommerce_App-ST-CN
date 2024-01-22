import React from "react";
import styles from "./cart.module.css";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../redux/slices/cartSlice";
import CartProductCard from "../../../Components/CartProductCard/CartProductCard";

const Cart = () => {
  const { cart } = useSelector(cartSelector);

  return (
    <div className={styles.cartContainer}>
      {cart?.map((product) => {
        return <CartProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Cart;
