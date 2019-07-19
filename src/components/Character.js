import React from "react";

const Character = props => {
  console.log("character", props);
  return <li>{props.character.name}</li>;
};

export default Character;
