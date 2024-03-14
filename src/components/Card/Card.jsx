import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import data from "../../Data/Data";

const Card = ({ img, title, date, price }) => {
  return (
    <div className="w-[230px] rounded-xl overflow-hidden shadow-lg border border-gray-300 m-2 cursor-pointer">
      <img className="w-full" src={img} alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <div className="font-bold text-accent-black mt-2">{title}</div>
        <p className="text-gray-700 text-sm ">{date}</p>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-accent-black mt-2">{price}</div>
        <div className="text-sm border-l-2 border-red text-gray-500 pl-2 mt-2 w-full grid grid-cols-2">
          Nintendo Switch
          <div className="flex justify-end items-end">
            <FaRegHeart className='text-red w-5 h-5' />
          </div>
        </div>
      </div>
    </div>
  );
};

const CardsContainer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
 

  const handleScrollLeft = () => {
    setScrollPosition(scrollPosition + 100); 
  };

  const handleScrollRight = () => {
    setScrollPosition(scrollPosition - 100);
  };

  const isFirstCard = scrollPosition === 0;
  const isLastCard = scrollPosition === (data.length ) * 100; 

  return (
    <div className="relative flex justify-center mx-auto overflow-hidden">
      <div
        className="flex"
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        {data.map((item, index) => (
          <div key={index} className="flex-none w-64 p-4">
            <Card {...item} />
          </div>
        ))}
      </div>
      {!isFirstCard &&
        <button
          className="absolute top-0 left-0 h-full px-4 py-2 bg-gray-700 bg-opacity-50 text-gray-700 sm:w-5 md:w-16 lg:w-20 xl:w-24 "
          onClick={handleScrollLeft}
        >
          &lt;
        </button>
      }
      {!isLastCard &&
        <button
          className="absolute top-0 right-0 h-full px-4 py-2 bg-gray-700 bg-opacity-50 text-gray-700 sm:w-12 md:w-16 lg:w-20 xl:w-24 "
          onClick={handleScrollRight}
        >
          &gt;
        </button>
      }
    </div>
  );
};

export default CardsContainer;
