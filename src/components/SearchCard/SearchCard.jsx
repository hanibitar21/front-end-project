import React from 'react';
import img1 from "../../Assets/card1.avif";
import { FaRegHeart } from "react-icons/fa";

const SearchCard = () => {
  return (
    <>
      <div className="max-w-md w-full  flex border border-gray-400 rounded-lg cursor-pointer group items-center">
        <div className="h-10       overflow-hidden items-center">
          <img
            className="  h-10 "
            src={img1}
            alt='...'
          />
        </div>
        <div className="bg-white   p-4 flex flex-col justify-between leading-normal w-full">
          
            <p className="text-gray-900 font-bold   group-hover:text-red ">
              Nintendo Switch™ - OLED Model: Mario Red Edition
            </p>
            
          
          <div className="text-xs border-l-2 border-red text-gray-500  mt-2 w-full grid grid-cols-2">
            <div className="flex justify-start items-start pl-1">
              Nintendo Switch
            </div>
          
          <div className="flex justify-end items-end">
            <FaRegHeart className='text-red w-5 h-5' />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
