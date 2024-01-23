import React, { useLayoutEffect } from "react";
import styles from "./Navbar.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, getCartAsync } from "../../redux/slices/cartSlice";

const Navbar = () => {
  // destructuring cart data from selector.
  const { cart } = useSelector(cartSelector);
  const dispatch = useDispatch();

  // layoutEffect is used to get cart item count and cart data when Component mounts.
  useLayoutEffect(() => {
    cart.length === 0 && dispatch(getCartAsync());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className={styles.navbarForPC}>
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
            Add a Product
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
      <div className={styles.navbarForSD}>
        <NavLink className={`${styles.navLink} ${styles.logoContainer}`} to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pupinS3-HR5Mbi5q6zS-yx8Qqt8rctkeRg&usqp=CAU"
            alt="e-commerce"
          />
          <i style={{ color: "rgb(89, 137, 67)" }}>-commerce</i>
        </NavLink>
        <div className={styles.cartProfWrapper}>
          <NavLink className={styles.navLink} to="/add">
            <div className={styles.addLink}>Add product</div>
          </NavLink>
          <NavLink
            to="/cart"
            className={`${styles.cartNavLink} ${styles.navLink}`}
          >
            Cart <div className={styles.cartCount}>{cart?.length}</div>
          </NavLink>
          <div className={styles.profileWrapper}>
            <NavLink className={styles.profileNavLink}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/947/947688.png"
                alt="user"
              />
            </NavLink>
            <div className={styles.profileItems}>
              <div className={styles.greeting}>Hello User!</div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/947/947688.png"
                alt="user"
              />
              <div className={styles.logOut}>Sign-Out</div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
