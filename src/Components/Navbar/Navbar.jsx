import React, { useLayoutEffect } from "react";
import styles from "./Navbar.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, getCartAsync } from "../../redux/slices/cartSlice";

const Navbar = () => {
  const { cart } = useSelector(cartSelector);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getCartAsync());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navlinkContainer}>
          <NavLink className={styles.navlink} to="/">
            <div className={styles.imgContainer}>
              <img
                className={styles.logoImg}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pupinS3-HR5Mbi5q6zS-yx8Qqt8rctkeRg&usqp=CAU"
                alt="logo"
              />
            </div>
            <i style={{ color: "rgb(89, 137, 67)" }}>-commerce</i>
          </NavLink>
          <NavLink className={styles.navlink} to="/">
            {" "}
            Products
          </NavLink>
          <NavLink className={styles.navlink} to="/add">
            {" "}
            Add a Products
            <div className={styles.imgContainer}>
              <img
                className={styles.plusImg}
                src="https://cdn-icons-png.flaticon.com/128/14034/14034302.png"
                alt="plus"
              />
            </div>
          </NavLink>
        </div>
        <div className={styles.cartContainer}>
          <NavLink className={styles.navlink} to="/cart">
            Cart
            <div className={styles.cartCount}>{cart?.length}</div>
          </NavLink>
          <div className={styles.profileContainer}>
            <p>John Doe</p>
            <div className={styles.imgContainer}>
              <img
                className={styles.profileImg}
                src="https://cdn-icons-png.flaticon.com/128/947/947688.png"
                alt="user"
              />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
