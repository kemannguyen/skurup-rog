import React, { Component, useEffect, useState } from "react";
import "../style/Header.css";
import { useNavigate } from "react-router-dom";
import icon from "../images/menu-icon1.png";
import xicon from "../images/x-icon1.png";
import NavigationLayer from "./NavigationLayer";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => setMenu(!menu);

  const navigate = useNavigate();
  const TillHem = () => {
    navigate("/");
  };
  const TillMeny = () => {
    navigate("/meny");
  };
  const TillOmOss = () => {
    navigate("/om-oss");
  };
  const TillGalleri = () => {
    navigate("/galleri");
  };
  const TillKontaktaOss = () => {
    navigate("/kontakta-oss");
  };

  const screenWidth = () => {
    if (window.outerWidth >= 842) {
      setMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", screenWidth);
    return () => window.removeEventListener("resize", screenWidth);
  }, []);

  return (
    <div className="header">
      <span className="title mx-20" onClick={TillHem}>
        Skurup Restaurang & Grill
      </span>
      <div className="navbtns">
        <span className="navbtn" onClick={TillHem}>
          {" "}
          hem
        </span>
        <span className="navbtn" onClick={TillMeny}>
          {" "}
          meny
        </span>
        <span className="navbtn" onClick={TillOmOss}>
          {" "}
          om oss
        </span>
        <span className="navbtn" onClick={TillGalleri}>
          {" "}
          galleri
        </span>
        <span className="navbtn" onClick={TillKontaktaOss}>
          {" "}
          kontakta oss
        </span>
      </div>
      <img
        src={menu ? xicon : icon}
        className="menu-btn"
        onClick={openMenu}
      ></img>
      <div className={menu ? "unhide" : "hide"}>
        <NavigationLayer openMenu={setMenu} />
      </div>
    </div>
  );
};

export default Header;
