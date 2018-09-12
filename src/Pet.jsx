import React from "react";

const Pet = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.animal}</p>
      <p>{props.breed}</p>
    </div>
  );
};

export default Pet;
