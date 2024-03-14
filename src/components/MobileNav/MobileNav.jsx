import React from 'react'
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const MobileNav = () => {
  return (
    <>
        <div className='fixed bottom-5 left-0 nav-mobile-view  px-20 flex justify-start  items-center content-center w-full'>
            <div className='grid grid-cols-5 w-full bg-white  rounded-full  justify-items-center items-center'> 
                <div className='text-center text-xl'><FaBars /></div>
                <div className='text-center text-xl'><FaHeart /></div>
                <div className='text-center text-2xl bg-red p-5 rounded-full relative bottom-5' style={{color:'white'}}><IoSearch /></div>
                
                <div className='text-center text-xl'><FaShoppingCart /></div>
                <div className='text-center text-xl'><FaUser /></div>
            </div>
        </div>
    </>
  )
}

export default MobileNav
