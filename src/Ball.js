import React from "react";

const Ball = ({ size }) => {
  return (
    <>
      <div className="ball">
        <br />
        {size - 150}%
      </div>
    </>
  );
};

export { Ball };

/*<div
        className="ball"
        style={{
          "--size": size
        }}
      />*/
