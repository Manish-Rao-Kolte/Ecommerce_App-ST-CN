import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./page404.module.css";

const Page404 = () => {
  const [time, setTime] = useState(10);
  const navigate = useNavigate();

  time < 1 && navigate("/");

  useEffect(() => {
    const id =
      time >= 1 &&
      setInterval(() => {
        setTime(time - 1);
      }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [time]);

  return (
    <div className={styles.errorContainer}>
      <br />
      <br />
      <h1>OOPS! Something went wrong</h1>
      <h2>Page {"<404>"} not found.</h2>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5KT414Ujw986oE6K1ITG0MywlU_obc812ug&usqp=CAU"
          alt="dog"
        />
      </div>
      <p>You will be redirected to home in {time}</p>
      <p>
        Click <Link to="/">here</Link> to go on HOME page.
      </p>
    </div>
  );
};

export default Page404;
