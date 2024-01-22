import styles from "./products.module.css";
import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsAsync,
  productSelector,
  sortProducts,
} from "../../../redux/slices/productSlice";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const { products, sortList } = useSelector(productSelector);
  const [sortClicked, setSortClicked] = useState(false);

  const handleSort = () => {
    dispatch(sortProducts()).then(() => {
      console.log(sortList);
    });
    setSortClicked(true);
  };

  useLayoutEffect(() => {
    dispatch(getProductsAsync());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className={styles.sortWrapper}>
        <button onClick={() => handleSort()}>Sort by Price</button>
        {sortClicked && (
          <img
            src="https://cdn-icons-png.flaticon.com/128/190/190406.png"
            alt="cross"
            onClick={() => setSortClicked(false)}
          />
        )}
      </div>
      <div className={styles.productsContainer}>
        {products?.map((product) => {
          return (
            <ProductCard product={product} id={product.id} key={product.id} />
          );
        })}
        {sortList?.length !== 0 && <div>Good</div>}
      </div>
    </>
  );
};

export default Products;
