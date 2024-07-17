import React from "react";

const Highlight = () => {
  return (
    <div className="min-h-screen w-screen  flex flex-col items-center justify-start">
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-[#ED3C64] text-xl font-bold mb-4">
          EXPERTS GROWTH
        </h1>
        <h1 className="text-black text-xl font-bold">OUR COMPANY GROWTH</h1>
      </div>
      <div className="w-full max-w-4xl h-60 mt-4 flex items-center justify-center overflow-hidden">
        <div className="flex justify-between w-full px-2">
          <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center mb-4 max-w-[24rem] hover:shadow-xl transition duration-300">
            <i className="bi bi-heart-fill text-red-500 w-8 h-8 mb-2"></i>
            <div className="text-center">
              <h2 className="text-gray-800 text-lg font-bold">199+</h2>
              <div className="h-24">
                <p className="text-gray-600">Satisfied customers</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center mb-4 max-w-[24rem] hover:shadow-xl transition duration-300">
            <i className="bi bi-clock text-red-500 w-8 h-8 mb-2"></i>
            <div className="text-center">
              <h2 className="text-gray-800 text-lg font-bold">1591+</h2>
              <div className="h-24">
                <p className="text-gray-600">Days of operation</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center mb-4 max-w-[24rem] hover:shadow-xl transition duration-300">
            <i className="bi bi-clock text-red-500 w-8 h-8 mb-2"></i>
            <div className="text-center">
              <h2 className="text-gray-800 text-lg font-bold">283+ </h2>
              <div className="h-24">
                <p className="text-gray-600">Completed projects</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center mb-4 max-w-[24rem] hover:shadow-xl transition duration-300">
            <i className="bi bi-trophy text-red-500 w-8 h-8 mb-2"></i>
            <div className="text-center">
              <h2 className="text-gray-800 text-lg font-bold">75+ </h2>
              <div className="h-24">
                <p className="text-gray-600">WIN AWARDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
