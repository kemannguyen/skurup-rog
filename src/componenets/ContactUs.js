import React, { useEffect } from "react";
import locicon from "../images/location-icon.png";
import phoneicon from "../images/phone-icon.png";
import fbicon from "../images/fb-icon.png";
import "../style/ContactUs.css";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLinkInNewTab = (url) => {
    try {
      const newTab = window.open(url, "_blank", "noopener,noreferrer");
      if (newTab) newTab.opener = null;
    } catch (e) {}
  };

  return (
    <div>
      <h1 className="text-4xl font-strong about-title text-center">
        KONTAKTA OSS
      </h1>
      <div className="mt-28 contact-layout">
        <div className="flex flex-col">
          <div className="flex justify-center mt-10">
            <img
              src={locicon}
              className="contact-img clickable"
              onClick={() =>
                openLinkInNewTab(
                  "https://www.google.com/maps/place/Asklidenv%C3%A4gen+1,+274+37+Skurup/@55.4934515,13.50497,17z/data=!3m1!4b1!4m6!3m5!1s0x46538199ab89fe27:0xd3e8938d77c65ad0!8m2!3d55.4934515!4d13.50497!16s%2Fg%2F11c1ktsk99?entry=ttu"
                )
              }
              alt=""
            />
          </div>
          <p className="text-2xl font-strong text-center mt-3">Adress:</p>
          <p className="text-l font-strong text-center mt-1">Asklidenvägen 1</p>
          <span className="text-l font-strong text-center">274 37, Skurup</span>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center mt-10">
            <img
              src={fbicon}
              className="contact-img clickable"
              onClick={() =>
                openLinkInNewTab(
                  "https://www.facebook.com/profile.php?id=100063565211709"
                )
              }
              alt=""
            />
          </div>
          <p className="text-2xl font-strong text-center mt-3">Facebook:</p>
          <span className="text-l font-strong text-center mt-1">
            {" "}
            Skurup Restaurang & Grill
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center mt-10">
            <img src={phoneicon} className="contact-img" alt="" />
          </div>
          <p className="text-2xl font-strong text-center mt-3">Telefon:</p>
          <span className="text-l font-strong text-center mt-1">
            {" "}
            072-860 54 36
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
