import React, { useEffect } from "react";
import Gallerylist from "./Gallerylist";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-strong about-title">GALLERI</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Place holder text for now.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <Gallerylist />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
