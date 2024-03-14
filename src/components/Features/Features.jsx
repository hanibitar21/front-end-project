import React from "react";
import { BsNintendoSwitch } from "react-icons/bs";
import controllerImg from "../../Assets/Pro-Controller-Hands.avif"


const Features = () => {
  return (
    <>
      <div className="w-full  justify-center flex  ">
        <div className="flex flex-row w-full  bg-accent-gray rounded-xl bg-opacity-50">
          <div className="flex flex-col w-1/2 p-[32px] ">
            <div className="w-[200px] h-[53px] bg-red">
                <div className="text-accent-white h-full justify-center items-center flex  w-full" style={{fontWeight:'bolder' , fontSize:'30px' , fontFamily:'    font-family: museo-sans, -apple-system, BlinkMacSystemFont, sans-serif' , lineHeight:'1.4' , letterSpacing:'2px'}} >
                <BsNintendoSwitch className="mr-1"/>
                ONLINE
                </div>
            </div>

            <div className=" font-bold text-gray-700 text-xl my-[21px] leading-8" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
>
            Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership.
            </div>

            <div className="mt-[3px] inline-flex items-center ">
                
                <span className="mr-[12px] text-gray-700 font-bold ">This game supports:</span>
                
                <span className="text-red font-bold underline transition-colors duration-300 hover:text-dark-red cursor-pointer mr-[15px]"> Online Play</span>
                <span className="text-red font-bold underline transition-colors duration-300 hover:text-dark-red cursor-pointer mr-[15px]">Save Data Cloud</span>
                
            </div>

            
            <button className="bg-red text-accent-white font-bold text-lg py-5 mt-5 inline-flex items-center justify-center rounded-xl w-[144px] h-[47px] ">
            Learn more
            </button>
            

            


          </div>

          <div className=" nav-play-image-view flex flex-col w-1/2 items-center justify-center mt-3.5 ">

            <img src={controllerImg} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
