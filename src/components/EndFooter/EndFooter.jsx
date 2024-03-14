import React from "react";
import flagImg from "../../Assets/Flag.webp";

const EndFooter = () => {
  return (
    <div
      className="w-full mt-10 p-8 flex flex-wrap justify-between items-center sm:flex-col md:flex-row"
      style={{ backgroundColor: "rgb(36, 36, 36)" }}
    >
      <div className="flex flex-col text-accent-white text-xs mb-4 sm:mb-0 sm:mr-4">
        © Nintendo. Games are property of their respective owners. Nintendo
        of America Inc. Headquarters are in Redmond, Washington, USA
      </div>

      <div className="flex text-accent-white text-xs">
        <div className="font-bold hover:border-b-2 hover:border-dark-red transition-colors duration-300 mr-4">
          <a href="#">Contact us</a>
        </div>

        <div className="font-bold hover:border-b-2 hover:border-dark-red transition-colors duration-300 mr-4">
          <a href="#">Website feedback</a>
        </div>

        <div className="font-bold hover:border-b-2 hover:border-dark-red transition-colors duration-300 mr-4">
          <a href="#">Terms of Use</a>
        </div>

        <div className="font-bold hover:border-b-2 hover:border-dark-red transition-colors duration-300 mr-4">
          <a href="#">Documents & Policies</a>
        </div>

        <div className="ml-4">
          <a href="#">
            <img
              src={flagImg}
              alt=""
              className="rounded border border-white w-[24px] h-[15px]"
            />
          </a>
        </div>

        <div className="text-white font-bold hover:border-b-2 hover:border-dark-red transition-colors duration-300 ml-2">
          <a href="#">English (United States)</a>
        </div>
      </div>
    </div>
  );
};

export default EndFooter;
