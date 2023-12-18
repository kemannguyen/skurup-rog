import React from "react";
import { GalleryData } from "./Gallerydata";
import Gallerylistitem from "./Gallerylistitem";

const Gallerylist = () => {
  return (
    <>
      {GalleryData.map((image) => {
        return (
          <Gallerylistitem
            key={image.imgsrc}
            title={image.title}
            imgsrc={image.imgsrc}
            desc={image.description}
          />
        );
      })}
    </>
  );
};

export default Gallerylist;
