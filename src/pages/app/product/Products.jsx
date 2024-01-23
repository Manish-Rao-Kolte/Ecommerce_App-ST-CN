import styles from "./products.module.css";
import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsAsync,
  productSelector,
  removeSort,
  sortProducts,
} from "../../../redux/slices/productSlice";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const { products, sortedList } = useSelector(productSelector);
  const [sortClicked, setSortClicked] = useState(false);

  // function to sort list data on product page.
  const handleSort = () => {
    setSortClicked(true);
    dispatch(sortProducts());
  };

  //functionn to remove sort.
  const handleRemoveSort = () => {
    dispatch(removeSort());
    setSortClicked(false);
  };

  // layoutEffect is used to fetch products list from API.
  useLayoutEffect(() => {
    products.length === 0 && dispatch(getProductsAsync());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className={styles.sortWrapper}>
        <button onClick={() => handleSort()}>Sort by Price</button>
        {sortClicked && (
          <img
            src="https://cdn-icons-png.flaticon.com/128/190/190406.png"
            alt="cross"
            onClick={() => handleRemoveSort()}
          />
        )}
      </div>
      <div className={styles.productsContainer}>
        {sortedList?.length !== 0
          ? sortedList?.map((product) => {
              return (
                <ProductCard
                  product={product}
                  id={product.id}
                  key={product.id}
                />
              );
            })
          : products?.map((product) => {
              return (
                <ProductCard
                  product={product}
                  id={product.id}
                  key={product.id}
                />
              );
            })}
      </div>
    </>
  );
};

export default Products;
