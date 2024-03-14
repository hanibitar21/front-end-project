import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import coinImg from "../../Assets/gold-coin.avif";
import { LuDownload } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import Carousel from "../Carousel/Carousel";
import esrb from "../../Assets/E10plus.svg";
const Hero = () => {
  return (
    <>
      <div className=" bg-accent-lightblue z-0 w-full lg:px-40 ">
        <div className=" bg-accent-white mx-auto translate-y-8 border rounded-3xl shadow-md">
          <div className="text-sm m-auto p-8">
            <ol class="flex flex-row items-center list-none  full-w">
              <li className="inline-flex items-center mr-2 text-gray-500 whitespace-nowrap">
                <a href="#">Store</a>
                <IoIosArrowForward className="ml-1 mt-1" />
              </li>

              <li className="inline-flex items-center mr-2 text-gray-500 whitespace-nowrap">
                <a href="#">Games</a>
                <IoIosArrowForward className="ml-1 mt-1" />
              </li>

              <li className="inline-flex items-center mr-2 text-gray-500 whitespace-nowrap">
                <a href="#" className="font-bold">
                  Stardey Valley
                </a>
                <IoIosArrowForward className="ml-1 mt-1" />
              </li>
            </ol>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 items-center w-full  gap-10">
              <div className="flex  mt-3 w-full ">
                <Carousel />
                
                  
              </div>
              
              <div className="flex flex-col mt-3 ">
                <div className="text-sm border-l-2 border-red text-gray-500 pl-2 ">
                  Nintendo Switch
                </div>

                <div className="text-3xl font-bold text-accent-black mt-6">
                  Stardew Valley
                </div>
                
                <div className="flex flex-row items-center justify-between">
                <div className="text-3xl font-bold text-accent-black mt-8">
                  $14.99
                </div>
                <div className="mt-8 ml-4 ">
                <FaRegHeart className="text-red w-7 h-7 "/>

                </div>
                </div>

                <div className="text-sm  text-gray-500 mt-8 ">
                  <img
                    src={coinImg}
                    alt=""
                    className="w-[24px] h-[24px] inline-block mr-2"
                  />
                  <div className="text-accent-black inline-block">
                    Eligible for up to <strong>75</strong>&nbsp;Gold Points
                  </div>
                </div>

                <button className="bg-red hover:bg-red-700 hover:border-red-700 transform hover:scale-105 text-accent-white font-bold text-lg py-5 mt-5 inline-flex items-center justify-center rounded-xl"  >
                  <LuDownload className="w-[24px] h-[24px] mr-2 mb-1" />
                  Direct download
                </button>

                <p className='text-0.75rem text-accent-black leading-6 mt-5'>This item will be sent to your system automatically after purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
