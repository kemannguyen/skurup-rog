import React, { Component } from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="footer-container">
        <div>
          <p className="font-strong">ADRESS</p>
          <p className="mt-5">Asklidenvägen 1</p>
          <p>274 37, Skurup</p>
        </div>
        <div>
          <p className="font-strong">ÖPPETTIDER</p>
          <p className="mt-5">MÅN-FRE: 11:00-19:00</p>
          <p>LÖR-SÖN: Stängt</p>
        </div>
        <div>
          <p className="font-strong">TELEFON</p>
          <p className="mt-5">0728605436</p>
        </div>
      </div>
      <div>
        <p className="mt-5 text-center">
          webplats skapad av <span className="font-strong">Keman Nguyen</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
