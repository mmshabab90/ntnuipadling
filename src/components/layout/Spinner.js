import React from "react";
import { Preloader } from "react-materialize";

const Spinner = (props) => {
  return (
    <div className="container spinner">
      <Preloader active color="yellow" flashing={true} size="big" />
      <p className="flow-text">{props.message}</p>
    </div>
  );
};

export default Spinner;
