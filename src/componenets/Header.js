import React, { useEffect, useState } from "react";
import "../style/Header.css";
import { useNavigate } from "react-router-dom";
import icon from "../images/menu-icon1.png";
import xicon from "../images/x-icon1.png";
import NavigationLayer from "./NavigationLayer";

const Header = () => {
  var pathname = window.location.pathname;

  const [menu, setMenu] = useState(false);
  const openMenu = () => setMenu(!menu);
  const [tabindex, setindex] = useState(0);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setindex(0);
        break;
      case "/meny":
        setindex(1);
        break;
      case "/om-oss":
        setindex(2);
        break;
      case "/galleri":
        setindex(3);
        break;
      case "/kontakta-oss":
        setindex(4);
        break;
      default:
        break;
    }
  }, [pathname]);

  const navigate = useNavigate();
  const TillHem = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };
  const TillMeny = () => {
    window.scrollTo(0, 0);
    navigate("/meny");
  };
  const TillOmOss = () => {
    window.scrollTo(0, 0);
    navigate("/om-oss");
  };
  const TillGalleri = () => {
    window.scrollTo(0, 0);
    navigate("/galleri");
  };
  const TillKontaktaOss = () => {
    window.scrollTo(0, 0);
    navigate("/kontakta-oss");
  };

  const screenWidth = () => {
    if (window.outerWidth >= 842) {
      setMenu(false);
    }
  };

  let homebtn;
  if (tabindex === 0) {
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
  if (tabindex === 1) {
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
  if (tabindex === 2) {
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
  if (tabindex === 3) {
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
  if (tabindex === 4) {
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
        Skurup Restaurang & Grill + {pathname}
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
        alt=""
      ></img>
      <div className={menu ? "unhide" : "hide"}>
        <NavigationLayer openMenu={setMenu} setIndex={setindex} />
      </div>
    </div>
  );
};

export default Header;
