import React from "react";
import "../style/Home.css";

const Home = () => {
  return (
    <div>
      <img
        className="home-img"
        src="https://tecdn.b-cdn.net/img/new/slides/041.webp"
        alt=""
      />
      <div className="home-imgtxt">
        <div className="bg-gray-50 flex items-center bg-opacity-0">
          <section className="w-full bg-cover bg-center py-6 home-imgcontainer">
            <div className="container mx-auto text-center text-white">
              <h1 className="text-6xl font-medium mt-10 mb-6 home-imgtitle">
                Smak från landet
              </h1>
              <div className="home-imgdesc">
                <p className="text-2xl mb-12">
                  För oss som vill njuta av vardagen
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className=" container text-center x-center">
        <p className="text-4xl mb-0 font-strong txt-darkgray">
          VÄLKOMMEN TILL SKURUP RESTAURANG & GRILL
        </p>
        <p className="text-2xl mb-28 font-handwritten">
          Vi serverar svensk husmankost
        </p>
        <p className="text-m mb-32 mx-auto mt-auto w-2/4">
          I Skurup är gemenskap en viktig faktor som håller igång och livar upp
          vardagen. Därför föredrar vi att använda oss av så mycket
          närproducerade råvaror från som möjligt. På Skurup Restaurang & Grill
          serveras det två nya klassiska husmansrätter dagligen tillsammans med
          ett utbud av snabbmat.
        </p>
      </div>
      <div className="square text-center">
        <p className="text-3xl mb-9 font-strong text-decoration-line: underline txt-darkgray">
          Öppettider
        </p>
        <p className="mb-3">
          <span className="font-bold"> Måndag-Fredag:</span>
          <span> 11:00-19:00</span>
        </p>
        <p className="mb-3">
          <span className="font-bold ml-8"> Lördag:</span>
          <span> Stängt</span>
        </p>
        <p className="mb-3">
          <span className="font-bold ml-8"> Söndag:</span>
          <span> Stängt</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
