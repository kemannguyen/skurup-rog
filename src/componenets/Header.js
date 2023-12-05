import React, { Component, useEffect, useState } from "react";
import "../style/Header.css";
import { useNavigate } from "react-router-dom";
import icon from "../images/menu-icon1.png";
import xicon from "../images/x-icon1.png";
import NavigationLayer from "./NavigationLayer";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => setMenu(!menu);
  const [tabindex, setindex] = useState(0);

  const navigate = useNavigate();
  const TillHem = () => {
    navigate("/");
    setindex(0);
  };
  const TillMeny = () => {
    navigate("/meny");
    setindex(1);
  };
  const TillOmOss = () => {
    navigate("/om-oss");
    setindex(2);
  };
  const TillGalleri = () => {
    navigate("/galleri");
    setindex(3);
  };
  const TillKontaktaOss = () => {
    navigate("/kontakta-oss");
    setindex(4);
  };

  const screenWidth = () => {
    if (window.outerWidth >= 842) {
      setMenu(false);
    }
  };

  let homebtn;
  if (tabindex == 0) {
    homebtn = (
      <span className="navbtn-active" onClick={TillHem}>
        {" "}
        hem
      </span>
    );
  } else {
    homebtn = (
      <span className="navbtn" onClick={TillHem}>
        {" "}
        hem
      </span>
    );
  }

  let menubtn;
  if (tabindex == 1) {
    menubtn = (
      <span className="navbtn-active" onClick={TillMeny}>
        {" "}
        meny
      </span>
    );
  } else {
    menubtn = (
      <span className="navbtn" onClick={TillMeny}>
        {" "}
        meny
      </span>
    );
  }

  let omossbtn;
  if (tabindex == 2) {
    omossbtn = (
      <span className="navbtn-active" onClick={TillOmOss}>
        {" "}
        om oss
      </span>
    );
  } else {
    omossbtn = (
      <span className="navbtn" onClick={TillOmOss}>
        {" "}
        om oss
      </span>
    );
  }
  let galleribtn;
  if (tabindex == 3) {
    galleribtn = (
      <span className="navbtn-active" onClick={TillGalleri}>
        {" "}
        galleri
      </span>
    );
  } else {
    galleribtn = (
      <span className="navbtn" onClick={TillGalleri}>
        {" "}
        galleri
      </span>
    );
  }
  let kontaktaossbtn;
  if (tabindex == 4) {
    kontaktaossbtn = (
      <span className="navbtn-active" onClick={TillKontaktaOss}>
        {" "}
        kontakta oss
      </span>
    );
  } else {
    kontaktaossbtn = (
      <span className="navbtn" onClick={TillKontaktaOss}>
        {" "}
        kontakta oss
      </span>
    );
  }

  useEffect(() => {
    window.addEventListener("resize", screenWidth);
    return () => window.removeEventListener("resize", screenWidth);
  }, []);

  return (
    <div className="header">
      <span className="title" onClick={TillHem}>
        Skurup Restaurang & Grill
      </span>
      <div className="navbtns">
        {homebtn}
        {menubtn}
        {omossbtn}
        {galleribtn}
        {kontaktaossbtn}
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
