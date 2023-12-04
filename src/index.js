import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./componenets/Header";
import Home from "./componenets/Home";
import AboutUs from "./componenets/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./componenets/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meny" element={<Home />} />
        <Route path="/om-oss" element={<AboutUs />} />
        <Route path="/galleri" element={<AboutUs />} />
        <Route path="/kontakta-oss" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
