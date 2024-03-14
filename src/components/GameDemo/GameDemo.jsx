import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import heroImg from "../../Assets/hero.avif"

const GameDemo = () => {
  const [isHidden, setIsHidden] = useState(true);

  const readMore = () => {
    // setIsHidden
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  return (
    <>
      <div className={`w-full mb-10 bg-accent-white `}>

        <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:px-40 ">
          <div className="mt-20"> 
            <p className="text-xl font-bold text-accent-black leading-2">
              You're moving to the valley...
            </p>

            <div className=" h-full w-full ">
              <p className="text-accent-black ">
                You've inherited your grandfather's old farm plot in Stardew
                Valley. Armed with hand-me-down tools and a few coins, you set
                out to begin your new life. Can you learn to live off the land
                and turn these overgrown fields into a thriving home? It won't
                be easy. Ever since Joja Corporation came to town, the old ways
                of life have all but disappeared. The community center, once the
                town's most vibrant hub of activity, now lies in shambles. But
                the valley seems full of opportunity. With a little dedication,S
                you might just be the one to restore Stardew Valley to
                greatness!
              </p>

              <p className="mt-3 text-accent-black">
                Now with Multiplayer! Invite 1-3 players to join you in the
                valley! 
              </p>

              {isHidden ? (
                <div>
                  <button
                    onClick={() => readMore()}
                    className="text-red font-bold inline-flex items-center justify-center mt-3 transition-colors duration-300 group hover:text-dark-red "
                  >
                    <FaPlus className="w-[24px] h-[30px] text-red mr-2 transition-colors duration-300 group-hover:text-dark-red " />
                    Read More{" "}
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-accent-black mt-3 ">
                     Players can work together to build a thriving farm,
                    share resources, and build relationships with townspeople or
                    each other. As more hands are better than one, players have
                    the option to scale profit margin on produce sold for a more
                    challenging experience..
                  </p>
                  <button
                    onClick={() => readMore()}
                    className="text-red font-bold inline-flex items-center justify-center mt-3 transition-colors duration-300 group hover:text-dark-red "
                  >
                    <FaMinus className="w-[24px] h-[30px] text-red mr-2 transition-colors duration-300 group-hover:text-dark-red " />
                    Read Less
                  </button>
                </div>
              )}

              <div>
                <p className="text-xs text-accent-black mt-1">Software description provided by the publisher.</p>
              </div>

              <button className="bg-red text-accent-white font-bold text-lg py-5 mt-5 inline-flex items-center justify-center rounded-xl w-[342px] h-[47px] ">
                
                  Explore this game's official website
                </button>
            </div>
          </div>
          <div className="mt-20">   
            <img src={heroImg} alt=""  className="rounded-xl   "/>         
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDemo;
