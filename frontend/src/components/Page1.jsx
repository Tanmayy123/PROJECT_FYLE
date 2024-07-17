import React from "react";
import { useNavigate } from "react-router-dom";
import screenshot1 from "../assets/screenshot1.png";
import Section from "./Section";
import OurProjects from "./OurProjects";
import Highlight from "./Highlight";

const Page1 = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/Contact");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="page-container flex w-full max-w-screen-lg">
        <div className="left w-3/5 h-screen bg-white flex flex-col items-start justify-start p-10 md:p-12">
          <div className="bg-white">
            <h1 className="text-xs text-[#ED3C64] md:text-xl ml-16 md:ml-20 mb-4 mt-20 md:mt-20">
              AWARD WINNING
            </h1>
            <h1 className="text-4xl ml-16 text-black font-bold">
              DIGITAL MARKETING
            </h1>
            <h1 className="text-4xl leading-10 ml-16 text-black font-bold">
              AGENCY
            </h1>
            <p className="text-black mt-4 ml-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero in justo tincidunt, nec bibendum mauris
              venenatis.
            </p>
            <div className="mt-4">
              <button
                className="bg-[#ED3C64] text-white px-4 py-2 ml-14 text-sm"
                onClick={navigateToContact}
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
        <div className="right w-2/5 bg-white flex items-center justify-center">
          <img
            className="max-w-full max-h-full"
            style={{ maxHeight: "50vh" }}
            src={screenshot1}
            alt="Screenshot"
          />
        </div>
      </div>

      <Section />
      <OurProjects />
      <Highlight />
    </div>
  );
};

export default Page1;
