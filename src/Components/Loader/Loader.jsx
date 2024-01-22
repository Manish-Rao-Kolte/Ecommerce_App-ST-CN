import styles from "./loader.module.css";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={styles.spinnerContainer}>
      <ThreeCircles
        visible={true}
        height="125"
        width="125"
        color="rgb(129, 23, 236)"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
