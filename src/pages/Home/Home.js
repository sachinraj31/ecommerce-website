import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <h1 className={classes.header__summary}>The Generics</h1>

      <h3
        style={{ fontFamily: "Metal Mania" }}
        className="text-center fw-bold fs-1 mt-4 mb-4"
      >
        Tours
      </h3>
    </>
  );
};

export default Home;
