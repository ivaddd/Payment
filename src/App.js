import "./App.css";
import React, { Fragment } from "react";
import Nav from "./components/navbar/nav";
import uang1 from "./uang1.png";
import Card from "./components/card/card";
import Card2 from "./components/card/card2";
import Circle from "./components/circle/Circle";
function App() {
  return (
    <Fragment>
      <div className=" overflow-auto h-screen  w-full  bg-[#2A1F85] lg:overflow-hidden ">
        <Nav />
        <div className="flex h-full relative">
          <div className="hidden sm:block w-8/12 ">
            <div className="hidden lg:block bulat outlinecircle absolute bottom-0 left-0  rounded-full bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500  "></div>
            <div className="circlel">
              <Circle />
            </div>
            <div className="card2">
              <Card />
            </div>
            <div className="card1">
              <Card />
            </div>
          </div>
          <div className="  w-full   bg-[#2A1F85] flex flex-col items-center  sm:w-4/12  justify-center h-full px-10 ">
            <div>
              <h4 className="text-left text-lx md:text-lg  flex text-yellow-500 text-semibold">
                <img className="w-5" src={uang1} alt="" />
                <span className="pr-2"></span>
                STAR SAVING YOUR MONEY SMARTLY
              </h4>
              <h2 className="w-full text-5xl lg:text-6xl pt-5 font-bold md:w-3/4 text-white text-left">
                Payments have never been easier
              </h2>
              <div className="md:hidden card3 pt4">
                <Card2></Card2>
              </div>
              <p className="text-left pt-5 text-white font-semibold">
                Discover the easiest and smartest way to manage your personal
                finance. Save,analyse,invest,withdraw,send, and receive money
                all over world with no limit
              </p>
              <div className="flex  pt-5 gap-4">
                <div>
                  <button className="bg-purple-800 hover:bg-pink-500 text-white font-bold py-2 px-6 rounded-full">
                    Get Started
                  </button>{" "}
                  <button className="  bg-inherit  text-gray-200 font-bold py-2 px-3 rounded inline-flex items-center">
                    <svg
                      className="fill-current w-4 h-4 mr-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Download app</span>
                  </button>
                            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Card /> */}
    </Fragment>
  );
}

export default App;
