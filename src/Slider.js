import React, { useState } from "react";
import { Ball } from "./Ball";

const BallResizer = ({ initialSize, minSize, maxSize }) => {
  const [ballSize, setBallSize] = useState(initialSize);
  const handleChange = (event) => {
    setBallSize(event.target.value);
  };
  return (
    <>
      <Ball size={ballSize} />
      <input
        type="range"
        className="slider"
        min={minSize}
        max={maxSize}
        value={ballSize}
        onChange={handleChange}
      /> 
      
    </>
  );
};

export { BallResizer };
