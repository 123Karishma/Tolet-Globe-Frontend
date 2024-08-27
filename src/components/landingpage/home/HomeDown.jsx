import "animate.css";
import BottomBg from "./BottomBg";
import React, { useEffect, useState } from "react";

const HomeDown = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen">
      <div className="flex justify-center items-center h-full mb-20 mt-20">
        <div className="w-10/12 md:w-8/12 lg:w-6/12">
        <div className=" flex flex-col ">
          <h1
            className={`absolute transform text-3xl sm:text-[2.3rem] font-normal text-white tracking-widest transition-all lg:duration-[2000ms] md:duration-[1000ms] sm:duration-[700ms] duration-[500ms]  ease-in-out ${
              isScrolled
                ? "left-[5%] top-[14.5rem] lg:top-[12rem] opacity-100"
                : "left-[30%] top-[12.5rem] lg:top-[12rem] opacity-0"
            } `}
          >
            Welcome to To-Let Globe
          </h1>
          <h6
            className={`absolute transform text-center text-[#c8a21c] font-light transition-all lg:duration-[2000ms] md:duration-[1000ms] sm:duration-[700ms] duration-[500ms]  ease-in-out ${
              isScrolled
                ? "left-[5%] top-[17rem] lg:left-[8%] lg:top-[15rem] opacity-100"
                : "left-[30%] top-[17rem] lg:top-[15rem] opacity-0"
            } `}
          >
            NO BROKERAGE ON PGS | FLATS | HOUSES | OFFICES
          </h6>
          </div>
          <div
            className={` absolute transform transition-all lg:duration-[2000ms] md:duration-[1000ms] sm:duration-[700ms] duration-[500ms] ease-in-out w-[20%] ${
              isScrolled
                ? "left-[5%] w-[20%] top-[42%] lg:top-[53%] lg:w-[33%] opacity-100"
                : "left-[30%] w-[20%] top-[39%] lg:top-[56%] lg:w-[33%] opacity-0"
            } `}
            id="inputGroup"
          >
          <div className="flex">
            <input
              className="flex-1 py-2 px-4 border border-gray-300 rounded-l-md"
              placeholder="Search PG, Flats and Houses"
              aria-label="Search PG, Flats and Houses"
            />
            <button
              className="bg-[#40b5a8] text-white rounded-r-md px-4"
              onClick={() => console.log("connect")}
            >
              Search
            </button>
          </div>
          </div>
        </div>
      </div>
      <BottomBg />
    </div>
  );
};

export default HomeDown;
