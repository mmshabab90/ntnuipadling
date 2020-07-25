import React from "react";
import { Preloader } from "react-materialize";

const Spinner = () => {
  return (
    <div className="container spinner">
      <Preloader active color="yellow" flashing={true} size="big" />
      <p className="flow-text">Loading data, please wait...</p>
    </div>
  );
};

export default Spinner;
