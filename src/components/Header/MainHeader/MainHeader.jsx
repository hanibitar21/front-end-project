import React from 'react'
import Icon from '../../Icon';
import Search from '../../Search/Search';
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const MainHeader = () => {



  
  return (
    <header className="nav-hide-or-view flex justify-between items-center  text-accent-black  px-8 w-full" >
      
      <div className='flex items-center space-x-4'>
      <div className="flex items-center bg-red -ml-8 w-28 h-14 ">
        <p className=" font-bold mr-4  text-accent-white text-center w-full  border-accent-white rounded-lg border-2 text-xs  ">Nintendo</p>
      </div>
      <Search/>
      </div>
      <div className="flex items-center space-x-8">
    
    <div className='text-sm text-accent-black font-bold'> 
     <Icon icon={RiQuestionnaireFill} link='#' text="Support"  />
    </div>

    <div className='text-sm text-accent-black font-bold '> 
      <Icon icon={FaHeart} link='#' text="Wish List"/> 
      </div> 

      <div className='text-sm text-accent-black font-bold'>      
      <Icon icon={FaShoppingCart } link='#' text="Cart"/>
      </div>

      <div className='text-sm text-accent-black font-bold'> 
      <Icon icon={FaUser } link='#' text="Log in / Sign up"/>     
      </div>   
       
      </div>
    </header>
  );
};

export default MainHeader;