import React from "react";
import styles from "./cart.module.css";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../redux/slices/cartSlice";
import CartProductCard from "../../../Components/CartProductCard/CartProductCard";

const Cart = () => {
  const { cart } = useSelector(cartSelector);
  if (cart?.length === 0) {
    return <div>No items in cart..</div>;
  }
  return (
    <div className={styles.cartContainer}>
      {cart?.map((product) => {
        return <CartProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Cart;
