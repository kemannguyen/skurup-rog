import React, { useEffect, useState } from "react";
import Menulist from "./Menulist";

const Menu = () => {
  const [weekNumber, setWeekNumber] = useState();
  const [firstweekdate, setfwd] = useState();
  const [lastweekdate, setlwd] = useState();
  const [month, setMonth] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    //get week number
    let currentDate = new Date();
    let dateFormat = new Intl.DateTimeFormat("sv-SE");

    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    setWeekNumber(Math.ceil(days / 7));

    //get dates of mon and fri in the week
    let first = currentDate.getDate() - currentDate.getDay(); // First day is the day of the month - the day of the week
    let last = first + 6; // last day is the first day + 6

    let firstdayofweek = new Date(currentDate.setDate(first + 1)).toString();
    let lastdayofweek = new Date(currentDate.setDate(last - 2)).toString();

    let firstdaysplitted = firstdayofweek.split(" ");
    setfwd(firstdaysplitted[2]);

    let lastdaysplitted = lastdayofweek.split(" ");
    setlwd(lastdaysplitted[2]);

    setMonth(currentDate.getMonth() + 1);
    console.log(firstdayofweek + lastdayofweek);
  });

  return (
    <div className="mtg">
      <div>
        <h1 className="text-center ">
          <span className="font-strong font-bold text-2xl">
            Dagens rätt för vecka {weekNumber}:{" "}
          </span>
          <span className="ml-3 font-strong text-2xl">
            {firstweekdate}/{month} -{lastweekdate}/{month}
          </span>
        </h1>
        <p className="text-center">Priserna gäller hela dagen: 10:00- 19:00</p>
        <p className="text-center">
          Avhämtning: <span className="font-bold">85 kr</span>
        </p>
        <p className="text-center">
          Servering(inkl. 1 läsk, salladsbar, kaffe):{" "}
          <span className="font-bold">100 kr</span>
        </p>
        <br></br>
      </div>
      <Menulist />
    </div>
  );
};

export default Menu;
