import React, { useEffect } from "react";
import "../style/General.css";
import "../style/AboutUs.css";

const AboutUs = () => {
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
      <div>
        <div className="home-imgtxt">
          <div className="bg-gray-50 flex items-center bg-opacity-0">
            <section className="w-full bg-cover bg-center py-6 home-imgcontainer">
              <div className="container mx-auto text-center text-white">
                <h1 className="mt-10 mb-6 home-imgtitle font-strong">OM OSS</h1>
                <div className="home-imgdesc">
                  <p className="mb-12 text-3xl">
                    Vi serverar svensk husmankost
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <img
          className="about-img"
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <div className="text-center">
        <p className="text-m mb-32 mt-auto about-desc">
          I Skurup är gemenskap en viktig faktor som håller igång och livar upp
          vardagen. Därför föredrar vi att använda oss av så mycket råvaror från
          vår närhet som möjligt. På Skurup Restaurang & Grill serveras det två
          nya klassiska husmansrätter dagligen tillsammans med ett utbud av
          snabbmat.
        </p>
        <p className="text-4xl font-handwritten">Följ oss på</p>
        <button
          className="contact-btn relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-200 group-hover:to-blue-200 hover:text-white dark:text-white focus:ring- focus:outline-none focus:ring-cyan-200"
          onClick={() =>
            openLinkInNewTab(
              "https://www.facebook.com/profile.php?id=100063565211709"
            )
          }
        >
          <div className="contact-btn-fill relative px-5 py-2.5 transition-all ease-in duration-75 bg-gradient-to-br from-cyan-500 to-blue-500 dark:bg-gray-900 rounded-md group-hover:from-cyan-400 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring- focus:outline-none focus:ring-cyan-200">
            {" "}
            <svg
              className="w-11 ml-2 mt-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="white"
                d="M279.1 288l14.22-92.65h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
