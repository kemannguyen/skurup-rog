import React from "react";
import { MenuDailyData, MenuPermanentData } from "./MenuData";
import Menulistitem from "./Menulistitem";

const Menulist = () => {
  return (
    <>
      {MenuDailyData.map((option) => {
        return (
          <Menulistitem
            key={option.dish1 + option.day}
            day={option.day}
            dish1={option.dish1}
            dish2={option.dish2}
          />
        );
      })}
      <br></br>
      <h1 className="text-2xl font-strong font-bold text-center">Meny</h1>
      {MenuPermanentData.map((option) => {
        return (
          <Menulistitem
            key={option.dish1 + option.day}
            day={option.day}
            dish1={option.dish1}
            price={option.price}
          />
        );
      })}
    </>
  );
};

export default Menulist;
