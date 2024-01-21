import styles from "./products.module.css";
import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsAsync,
  productSelector,
} from "../../../redux/slices/productSlice";

import ProductCard from "../../../Components/ProductCard/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(productSelector);
  const path = process.env.REACT_APP_DB_URL;

  useLayoutEffect(() => {
    dispatch(getProductsAsync(path));
    console.log(products);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.productsContainer}>
      {products.map((product) => {
        return <ProductCard product={product} id={product.id} />;
      })}
    </div>
  );
};

export default Products;
