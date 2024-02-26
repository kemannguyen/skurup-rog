import React from "react";

const Gallerylistitem = ({ title, imgsrc, desc }) => {
  return (
    <div className="gallery-img p-4">
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-80 object-cover object-center"
          src={imgsrc}
        />
        <div className="px-8 py-10 relative z-10 w-full h-80 border-9 border-gray-200 bg-white opacity-0 hover:opacity-80">
          <h1 className="text-2xl font-medium text-gray-900 mb-3 font-handwritten">
            {title}
          </h1>
          <p className="text-gray-800 mt-10 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Gallerylistitem;
