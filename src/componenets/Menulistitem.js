import React from "react";

const Menulistitem = ({ day, dish1, dish2, price }) => {
  return (
    <div className="px-r20">
      <div className="flex justify-between font-bold">
        <span> {day}</span>
        <span> {price}</span>
      </div>
      <div>
        <p className=""> {dish1}</p>
        <p className=""> {dish2}</p>
      </div>
      <br></br>
    </div>
  );
};

export default Menulistitem;
