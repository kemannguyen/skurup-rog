import React, { Component } from "react";
import "../style/NavigationLayer.css";
import { useNavigate } from "react-router-dom";

const NavigationLayer = ({ openMenu, setIndex }) => {
  const navigate = useNavigate();
  const TillHem = () => {
    window.scrollTo(0, 0);
    navigate("/");
    openMenu(false);
    setIndex(0);
  };
  const TillMeny = () => {
    window.scrollTo(0, 0);
    navigate("/meny");
    openMenu(false);
    setIndex(1);
  };
  const TillOmOss = () => {
    window.scrollTo(0, 0);
    navigate("/om-oss");
    openMenu(false);
    setIndex(2);
  };
  const TillGalleri = () => {
    window.scrollTo(0, 0);
    navigate("/galleri");
    openMenu(false);
    setIndex(3);
  };
  const TillKontaktaOss = () => {
    window.scrollTo(0, 0);
    navigate("/kontakta-oss");
    openMenu(false);
    setIndex(4);
  };

  return (
    <div className="bg-layercover">
      <div className="btn-container">
        <p className="navmenu-btn" onClick={TillHem}>
          HEM
        </p>
        <p className="navmenu-btn" onClick={TillMeny}>
          MENY
        </p>
        <p className="navmenu-btn" onClick={TillOmOss}>
          OM OSS
        </p>
        <p className="navmenu-btn" onClick={TillGalleri}>
          GALLERI
        </p>
        <p className="navmenu-btn" onClick={TillKontaktaOss}>
          KONTAKTA OSS
        </p>
      </div>
    </div>
  );
};

export default NavigationLayer;
