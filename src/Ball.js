import React from "react";

const Ball = ({ size }) => {
  //console.log(question_number); 
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

