import React, { useEffect } from "react";
import "../style/Home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <div className="home-imgtxt">
          <div className="bg-gray-50 flex items-center bg-opacity-0">
            <section className="w-full bg-cover bg-center py-6 home-imgcontainer">
              <div className="container mx-auto text-center text-white">
                <h1 className="mt-10 mb-6 home-imgtitle">Smak från landet</h1>
                <div className="home-imgdesc">
                  <p className="mb-12">För oss som vill njuta av vardagen</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <img
          className="home-img"
          src="https://tecdn.b-cdn.net/img/new/slides/041.webp"
          alt=""
        />
      </div>
      <div className="container text-center x-center seperate">
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
      {/* <div className="post justify-center">
        <span className="post-title font-strong text-2xl">
          Sensate Inlägget
        </span>
        <div className="flex flex-row card">
          <div className="max-w-[200px]">
            <img
              className="responsive-img"
              src="https://img.freepik.com/free-vector/golden-sparkling-2024-new-year-eve-lettering-background-design-vector_1017-46452.jpg?w=826&t=st=1704680330~exp=1704680930~hmac=ba705918707bf3ba17bced6a90c1518605690340a305de2f06aa47207b9e121b"
              alt=""
            />
          </div>
          <div className=" max-w-[300px] p-5 font-handwritten responsive-text">
            <p>Gott nytt år och god fortsättning!</p>
            <br></br>
            <p>Må 2024 vara lika grym som förra året!</p>
          </div>
        </div>
      </div> */}
      <div className="square text-center mt-20">
        <p className="text-3xl mb-9 font-strong text-decoration-line: underline txt-darkgray">
          Öppettider
        </p>
        <p className="mb-3">
          <span className="font-bold"> Måndag-Fredag:</span>
          <span> 10:00-19:00</span>
        </p>
        <p className="mb-3">
          <span className="font-bold ml-8" style={{ paddingLeft: 37 }}>
            {" "}
            Lördag:
          </span>
          <span> 11:00-16:00</span>
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
