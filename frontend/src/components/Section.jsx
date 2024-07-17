import React from "react";
import "./Section.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
// import OurProjects from "./OurProjects";

const Section = () => {
  const openFyleHQ = () => {
    window.open("https://fylehq.com", "_blank");
  };

  return (
    <div className="main relative min-h-screen w-[750px] h-[550px] bg-gray-100 flex flex-col items-center justify-center">
      <div className="left absolute top-0 left-0 bg-white w-[400px] h-[250px] flex flex-col p-10">
        <h3 className="text-red-400 text-xs font-bold mt-10 ml-15 md:ml-20">
          WHAT WE DO?
        </h3>
        <h1 className="text-black text-2xl font-bold mt-15 ml-15 md:ml-20">
          SERVICES PROVIDED
        </h1>
        <h1 className="text-black text-2xl font-bold mt-15 ml-15 md:ml-20">
          FOR YOU
        </h1>
      </div>
      <div className="right absolute top-0 right-0 bg-white w-[350px] h-[250px] flex flex-col p-10">
        <p className="text-xs pt-20 font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quidem
          debitis est praesentium excepturi ipsa.
        </p>
      </div>
      <div className="bottom absolute top-[250px] left-0 w-full h-[300px] bg-white flex items-center justify-center">
        <div className="bottom1 w-3/4 h-[230px] bg-white flex justify-between">
          <div className="child relative bg-white h-full w-[32%] perspective">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={img2}
                  alt="First slide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flip-card-back flex flex-col items-center justify-center bg-[#ED3C64] text-white text-center p-4">
                <h3 className="mb-2">WEB DEVELOPMENT</h3>
                <p className="text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button
                  className="flex items-center bg-white text-red-400 px-3 py-1 rounded hover:bg-gray-200 transition-colors duration-300"
                  onClick={openFyleHQ}
                >
                  READ MORE <span className="ml-1">&#8594;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="child relative bg-white h-full w-[32%] perspective">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={img3}
                  alt="Second slide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flip-card-back flex flex-col items-center justify-center bg-[#ED3C64] text-white text-center p-4">
                <h3 className="mb-2">WEB DEVELOPMENT</h3>
                <p className="text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button
                  className="flex items-center bg-white text-red-400 px-3 py-1 rounded hover:bg-gray-200 transition-colors duration-300"
                  onClick={openFyleHQ}
                >
                  READ MORE <span className="ml-1">&#8594;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="child relative bg-white h-full w-[32%] perspective">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={img1}
                  alt="Third slide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flip-card-back flex flex-col items-center justify-center bg-[#ED3C64] text-white text-center p-4">
                <h3 className="mb-2">WEB DEVELOPMENT</h3>
                <p className="text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button
                  className="flex items-center bg-white text-red-400 px-3 py-1 rounded hover:bg-gray-200 transition-colors duration-300"
                  onClick={openFyleHQ}
                >
                  READ MORE <span className="ml-1">&#8594;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
