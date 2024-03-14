import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import Icon from '../Icon';
import Example from '../DropDownHeader/DropDownHeader';
import SearchDropDown from '../SearchDropDown/SearchDropDown';

const Search = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
   

  return (
    <>
    <div className='hover:cursor-pointer' >
    <div className="flex flex-row mr-20 border-b hover:border-red  border-black w-[450px] h-[35px] " >
  
  <div className="flex flex-col  items-center mt-1  "onClick={toggleDropdown}>
    <div></div>
 <Icon icon={IoSearchSharp} link='#' />
  </div>

 
  <div className="flex flex-col justify-start items-center ml-2 mt-1 w-full   " onClick={toggleDropdown}>
    <input type="text" className="text-sm w-full " placeholder='Search' style={{ cursor: 'pointer' }} onFocus={(e) => {
    
    e.target.blur();
  }}/>
  </div>

  
  <div className="flex flex-col justify-center items-center ml-auto   ">
    <Example/>
  </div>
</div>
</div>

<SearchDropDown isOpen={isDropdownOpen} setIsOpen={()=> toggleDropdown()} />

    </>
  )
}

export default Search
