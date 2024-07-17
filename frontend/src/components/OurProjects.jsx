import React, { useState } from "react";
import sampleImage1 from "../assets/box1.png";
import sampleImage2 from "../assets/img1.png";
import sampleImage3 from "../assets/img2.png";

const OurProjects = () => {
  const [currentImage, setCurrentImage] = useState(sampleImage1);
  const [activeSection, setActiveSection] = useState(null);

  const handleImageChange = (newImage, index) => {
    setCurrentImage(newImage);
    setActiveSection(index);
  };

  return (
    <div className="main h-screen w-full bg-white flex flex-col">
      <div className="top  flex flex-col justify-center items-center">
        <h3 className="text-sm text-[#ED3C64]">WHY CHOOSE US</h3>
        <h1 className="text-2xl text-black font-bold">WHY WE ARE BEST</h1>
      </div>
      <div className="bottom red  flex-1 w-full relative">
        <div className="bottom1 h-24 w-full  flex justify-between gap-0.5 p-2">
          <div
            className={`h-full w-1/5  flex items-center justify-center text-black font-semibold p-2 rounded-md shadow-md cursor-pointer ${
              activeSection === 0 ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => handleImageChange(sampleImage1, 0)}
          >
            Clarified Vision & Target
          </div>
          <div
            className={`h-full w-1/5  flex items-center justify-center text-black font-semibold p-2 rounded-md shadow-md cursor-pointer ${
              activeSection === 1 ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => handleImageChange(sampleImage2, 1)}
          >
            High Performance
          </div>
          <div
            className={`h-full w-1/5  flex items-center justify-center text-black font-semibold p-2 rounded-md shadow-md cursor-pointer ${
              activeSection === 2 ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => handleImageChange(sampleImage3, 2)}
          >
            Maintain Security
          </div>
          <div
            className={`h-full w-1/5  flex items-center justify-center text-black font-semibold p-2 rounded-md shadow-md cursor-pointer ${
              activeSection === 3 ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => handleImageChange(sampleImage1, 3)}
          >
            Better Strategy and Quality
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-lg font-bold text-white">OUR PROJECTS</h2>
          <h3 className="text-base text-white">WHY WE ARE BEST</h3>
        </div>
        <div className="box mt-4 w-64 h-64 bg-gray-300 flex items-center justify-center absolute left-16">
          <img
            src={currentImage}
            alt="Box Image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="other-box mt-4 w-56 h-64 flex flex-col justify-between absolute left-80 ml-2 border border-black">
          <div
            className={`h-full w-full flex justify-center items-center border-b border-black cursor-pointer ${
              activeSection === 0 ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => handleImageChange(sampleImage1, 0)}
          >
            <p className="text-black">Genderless kei - Japan</p>
          </div>
          <div
            className={`h-full w-full flex justify-center items-center border-b border-black cursor-pointer ${
              activeSection === 1 ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => handleImageChange(sampleImage2, 1)}
          >
            <p className="text-black">Better Strategy & Quality</p>
          </div>
          <div
            className={`h-full w-full flex justify-center items-center cursor-pointer ${
              activeSection === 2 ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => handleImageChange(sampleImage3, 2)}
          >
            <p className="text-black">Genderless kei - Japan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
