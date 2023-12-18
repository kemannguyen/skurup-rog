import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./componenets/Header";
import Home from "./componenets/Home";
import AboutUs from "./componenets/AboutUs";
import Menu from "./componenets/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./componenets/Footer";
import Gallery from "./componenets/Gallery";
import ContactUs from "./componenets/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meny" element={<Menu />} />
        <Route path="/om-oss" element={<AboutUs />} />
        <Route path="/galleri" element={<Gallery />} />
        <Route path="/kontakta-oss" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
