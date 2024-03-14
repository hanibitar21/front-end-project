import React from "react";
import SearchCard from "../SearchCard/SearchCard";

const SearchDropDown = ({ isOpen,setIsOpen }) => {


    const closeDropDown = () => {
        setIsOpen(false);
      }; 

  return (
    <div
    className={`pb-10 absolute right-0 bg-white border border-gray-300 mt-[320px]  w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:px-40  transition-all duration-300 z-[9999] ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >

<button
        className="absolute top-0 right-0 m-2 p-2 text-accent-black cursor-pointer"
        onClick={closeDropDown}
        
      ><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="26" role="presentation" alt="" data-testid="CloseCircleIcon" size="26" color="currentColor"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.735 8L16 13.735 10.265 8 8 10.265 13.735 16 8 21.735 10.265 24 16 18.265 21.735 24 24 21.735 18.265 16 24 10.265 21.735 8z" fill="currentColor" fill-rule="evenodd"></path></svg></button>

    
      <div className="col-span-1 mt-4"> 
        <h1 className="text-gray-700 font-bold ">
        Trending topics
        </h1>

        <p className="text-red hover:text-dark-red mt-1"><a href=""> Nintendo Switch™ - OLED Model: Mario Red Edition</a></p>
        <p className="text-red hover:text-dark-red mt-1"><a href=""> Nintendo Switch</a></p>
        <p className="text-red hover:text-dark-red mt-1"><a href=""> Super Mario Bros. Wonder</a></p>
        <p className="text-red hover:text-dark-red mt-1"><a href=""> Nintendo Switch games</a></p>
        <p className="text-red hover:text-dark-red mt-1"><a href=""> Zelda games</a></p>

      
      
      </div>
      <div className="col-span-1 grid grid-cols-2 mt-4 gap-4">
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
      </div>
      
     
    </div>
  );
};

export default SearchDropDown;

