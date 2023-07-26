import React from "react";
import classes from "./Home.module.css";
import MovieForm from "../../Components/UI/MovieForm/MovieForm";

const Home = () => {
  return (
    <div className="container fw-bold fs-1">
      <MovieForm></MovieForm>
    </div>
  );
};

export default Home;
