import React, { useState } from 'react';
import img1 from "../../Assets/carousel1.avif";
import img2 from "../../Assets/carousel2.avif";
import img3 from "../../Assets/carousel3.avif";
import img4 from "../../Assets/carousel4.avif";
import img5 from "../../Assets/carousel5.avif";
import esrb from "../../Assets/E10plus.svg";
const Carousel = () => {
  // Array of image URLs
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const choose = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className='w-full'>
        <div id="controls-carousel" className="relative w-full" data-carousel="static">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96 w-full">
            {images.map((image, index) => (
              <div key={index} className={`duration-700 ease-in-out ${index === currentIndex ? '' : 'hidden'}`}>
                <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='aa' style={{borderRadius:'25px'}}/>
              </div>
            ))}
          </div>

          <button type="button" onClick={previous} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" onClick={next} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
        <div className='flex w-full items-center content-center justify-center gap-4'>
          {images.map((image, index) => (
            <div key={index} className={`duration-700 ease-in-out `} onClick={() => choose(index)}>
              <img src={image} className="h-15" alt='aa' style={{borderRadius:'15px'}}/>
            </div>
          ))}
        </div>
              <div className="bg-accent-white rounded-lg flex items-center shadow-lg pt-5">
                <div className="">
                  <img src={esrb} className=" ml-7 "></img>
                </div>

                <div className="container p-4">
                  <p className="text-accent-black text-xs border-b border-accent-black p-1">
                    Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                    <br /> Gambling, Mild Language, Mild Blood
                  </p>
                  <p className="text-xs text-accent-black p-1">
                    Users Interact
                  </p>
                </div>
              </div>
      </div>
    </>
  );
};

export default Carousel;
