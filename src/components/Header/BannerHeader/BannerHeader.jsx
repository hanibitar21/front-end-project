import React from 'react'
import { FaTruckArrowRight } from "react-icons/fa6";
import { GiPlainCircle } from "react-icons/gi";



const BannerHeader = () => {
  return (
    <>
    <div className="flex flex-row justify-center items-center bg-accent-gray  border-t border-gray-400 w-full p-5">
        <div className="  inline-flex justify-center items-center  mr-4  ">
            <FaTruckArrowRight className='h-[24px] w-[24px] text-red mx-2' />
            <strong>Free shipping&nbsp;</strong> on orders 50$ or more.&nbsp; <a href='#' className='underline'>Restrictions apply</a>
        </div>
        
        <div className=" inline-flex justify-center items-center  ml-4  nav-hide-or-view pl-5" style={{borderLeft:'1px solid black',}}>
            <GiPlainCircle className='h-[24px] w-[24px] text-red mr-2'/>
            Earn &nbsp;<strong><a href="#" className='underline'>My Nintendo Points</a></strong>&nbsp; on digital games.
        </div>
    </div>
    </>
  )
}

export default BannerHeader
