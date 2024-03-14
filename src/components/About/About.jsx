import React from "react";
import esrb from "../../Assets/E10plus.svg";
import { SlCalender } from "react-icons/sl";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdGamepad } from "react-icons/md";
import InfoRow from "./InfoRow/InfoRow";
import { BsBuildingFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { GiDatabase } from "react-icons/gi";

const About = () => {
  return (
    <>
      <div className="w-full  py-12 px-0 bg-accent-white ">
        <div className="  grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:px-40">
          <div className="bg-accent-gray rounded-lg   items-center  bg-opacity-50 lg:p-3 ">
            
              <div className="flex items-center justify-center p-5">
                <h1 className="text-accent-black font-bold">ESRB rating</h1>
              </div>

              <div className="bg-accent-white rounded-lg flex items-center shadow-lg ">
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

          <div className="bg-accent-gray rounded-lg   col  items-center  bg-opacity-50 h-full   p-3">
            
              <div className="flex items-center justify-center p-5">
                <h1 className="text-accent-black font-bold">
                  Supported play modes
                </h1>
              </div>
              <div className=" row inline-flex w-full items-center mt-1 mr-4">
                <div className="flex flex-col w-1/3  ml-8 ">
                  <div className="bg-accent-black h-20 rounded-lg">
                    <svg
                      className="mx-auto text-white mt-4"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      role="presentation"
                      alt=""
                      data-testid="TvModeIcon"
                      size="48"
                      color="currentColor"
                    >
                      <g fill="currentColor">
                        <path d="M11.903 16.114l-1.154-3.56H9.591l1.641 4.627h1.357l1.632-4.627h-1.163zm-7.604-2.58h1.36v3.646h1.058v-3.646h1.371v-.981H4.299zm17.743 9.126v.758H32v-6.702h-9.958z"></path>
                        <path d="M8.433 21.6H4.784v1.808h3.649v.01h1.656v-.01h3.645V21.6H10.09v-.737h8.443V8.582H0v12.281h8.433v.737zM2.11 18.956v-8.453h14.31v8.453H2.11z"></path>
                        <path d="M16.333 21.6h-.603v1.801h5.589v-.602h-4.986z"></path>
                      </g>
                    </svg>

                    <p className="text-accent-black font-bold text-center mt-7">
                      TV
                    </p>
                  </div>
                </div>

                <div className="flex flex-col w-1/3  ml-8 ">
                  <div className="bg-accent-black h-20 rounded-lg">
                    <svg
                      className="mx-auto text-white mt-4"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      role="presentation"
                      alt=""
                      data-testid="TabletopModeIcon"
                      size="48"
                      color="currentColor"
                    >
                      <path
                        d="M31.32 18.242l-2.657-6.94-1.285 6.94h3.943zM28.174 5.336H6.418l-2.74 12.906h21.754l2.741-12.906zm-5.035 10.505H6.99l1.722-8.094h16.143l-1.717 8.094zm-21.741 5.03H0v.995h.02a.098.098 0 0 0-.02.059v2.008a2.734 2.734 0 0 0 2.736 2.731h7.426a2.737 2.737 0 0 0 2.741-2.731v-2.008a.18.18 0 0 0-.01-.06h.01v-.994H1.397zm7.64.31a1 1 0 1 1-1.004 1.002c0-.554.45-1.002 1.004-1.001zm-5.845 4.43a1.837 1.837 0 1 1 1.858-1.833c-.003.49-.2.958-.55 1.302a1.839 1.839 0 0 1-1.308.53zm3.24-1.833a1.009 1.009 0 0 1 1.004-.985.981.981 0 1 1-1.004.985zm2.605 2.57a.983.983 0 1 1 .99-.978.988.988 0 0 1-.99.977zm1.591-1.591a.982.982 0 1 1 0-1.964.982.982 0 1 1 0 1.964zM32 20.87H19.097v.995h.02a.098.098 0 0 0-.02.059v2.008a2.73 2.73 0 0 0 2.731 2.731h7.431A2.738 2.738 0 0 0 32 23.933v-2.009a.18.18 0 0 0-.01-.06H32v-.994zm-3.866.31a1 1 0 0 1-.006 1.999.999.999 0 1 1 .006-1.998zm-5.85 4.43a1.836 1.836 0 0 1 0-3.673 1.837 1.837 0 1 1 0 3.672zm3.24-1.833c.015-.545.459-.98 1.004-.985a.981.981 0 1 1 0 1.964c-.544 0-.99-.434-1.004-.979zm2.61 2.57a.983.983 0 1 1 .99-.978.988.988 0 0 1-.99.977zm1.586-1.591a.982.982 0 1 1 0-1.964.982.982 0 1 1 0 1.964z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-accent-black font-bold text-center mt-7">
                      Tabletop
                    </p>
                  </div>
                </div>

                <div className="flex flex-col w-1/3  ml-8 ">
                  <div className="bg-accent-black h-20 rounded-lg">
                    <svg
                      className="mx-auto text-white mt-4"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      role="presentation"
                      alt=""
                      data-testid="HandheldModeIcon"
                      size="48"
                      color="currentColor"
                    >
                      <path
                        d="M28.812 8.455h-2.353c-.014 0-.038.009-.052.009v-.01H5.621v.014c-.028-.004-.061-.013-.07-.013H3.192A3.196 3.196 0 0 0 0 11.65v8.696a3.203 3.203 0 0 0 3.193 3.198H5.55c.01 0 .043-.01.07-.015v.015h20.787v-.015a.163.163 0 0 0 .052.015h2.353A3.195 3.195 0 0 0 32 20.346V11.65a3.187 3.187 0 0 0-3.188-3.196zm-.183 1.973a1.014 1.014 0 1 1-1.012 1.012 1.006 1.006 0 0 1 1.012-1.012zm.994 4.276a1.003 1.003 0 1 1-2.005-.021 1.003 1.003 0 0 1 2.005.021zM3.521 10.428a1.89 1.89 0 1 1-.703 3.639 1.892 1.892 0 0 1-1.168-1.755c0-1.035.835-1.877 1.87-1.884zm1.007 6.22a1.001 1.001 0 0 1-1.509.882 1.007 1.007 0 0 1-.497-.882 1.024 1.024 0 0 1 .999-1.026 1.03 1.03 0 0 1 1.007 1.026zM.896 18.29a1.003 1.003 0 1 1 2.006.018 1.003 1.003 0 0 1-2.006-.018zm2.625 2.636a1.012 1.012 0 0 1-.725-1.727 1.013 1.013 0 0 1 1.732.713 1.008 1.008 0 0 1-1.007 1.014zm1.636-1.623a1.02 1.02 0 1 1-.004-2.04 1.02 1.02 0 0 1 .004 2.04zm20.092 1.42H6.774v-9.45H25.25v9.45zm.722-7.66a1.021 1.021 0 1 1 2.043.009 1.021 1.021 0 0 1-2.043-.009zm2.658 7.863a1.892 1.892 0 1 1 1.866-1.88 1.88 1.88 0 0 1-1.866 1.88zm1.622-6.836a1.019 1.019 0 0 1-.748-1.726 1.018 1.018 0 1 1 .748 1.726z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <p className="text-accent-black font-bold text-center mt-7">
                      Handheld
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
        </div>

        <div className="mt-10 lg:px-40">
          <table className="w-full   justify-center items-center ">
            <InfoRow
              icon={<SlCalender className="w-[28px] h-[28px]" />}
              label="Release date"
              values={["October 5, 2017"]}
              className='text-accent-black'
            />

            <InfoRow
              icon={<PiUsersThreeFill className="w-[28px] h-[28px]" />}
              label="No. of players"
              values={[
                "Single System (1)",
                "Local wireless (1)",
                "Online (1-4)",
              ]}
              valueClassName="text-red font-bold underline transition-colors duration-300 hover:text-dark-red cursor-pointer"
            />

            <InfoRow
              icon={ <svg className="w-[28px] h-[28px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="DPadIcon" size="28" color="currentColor"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg> }
              label="Genre"
              values={["Role-Playing", "Simulation"]}
              valueClassName="text-red font-bold underline transition-colors duration-300 hover:text-dark-red cursor-pointer"
            />

            <InfoRow
              icon={<BsBuildingFill className="w-[28px] h-[28px]" />}
              label="Publisher"
              values={["ConcernedApe"]}
              valueClassName="text-red font-bold underline transition-colors duration-300 hover:text-dark-red cursor-pointer"
            />

            <InfoRow
              icon={<IoSettingsSharp className="w-[28px] h-[28px]" />}
              label="ESRB rating"
              values={["Everyone 10+"]}
              valueClassName="text-red font-bold underline transition-colors duration-300 hover:text-dark-red cursor-pointer"
            />

            <InfoRow
              icon={
                <svg
                  className="w-[28px] h-[28px]"
                  data-name="Switch lite"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="28"
                  role="presentation"
                  alt=""
                  data-testid="SwitchLiteIcon"
                  size="28"
                  color="currentColor"
                >
                  <path
                    d="M28.737 9.41H3.262a3.218 3.218 0 0 0-3.218 3.218v7.164a3.218 3.218 0 0 0 3.218 3.218h25.475a3.218 3.218 0 0 0 3.219-3.218v-7.164a3.218 3.218 0 0 0-3.219-3.218zm.112 2.173a.563.563 0 1 1-.563.563.563.563 0 0 1 .563-.563zm0 2.32a.563.563 0 1 1-.563.564.563.563 0 0 1 .563-.563zM3.146 12.106a1.2 1.2 0 1 1-1.2 1.201 1.2 1.2 0 0 1 1.2-1.2zm1.437 5.85a.125.125 0 0 1-.125.125h-.731a.133.133 0 0 0-.133.134v.73a.126.126 0 0 1-.125.126h-.636a.125.125 0 0 1-.126-.126v-.73a.133.133 0 0 0-.132-.134h-.732a.125.125 0 0 1-.125-.125v-.636a.125.125 0 0 1 .125-.125h.732a.133.133 0 0 0 .132-.133v-.73a.125.125 0 0 1 .126-.126h.636a.126.126 0 0 1 .125.125v.731a.133.133 0 0 0 .133.133h.73a.125.125 0 0 1 .126.125zm1.674 3.654h19.497V10.82H6.257zm20.807-8.302a.563.563 0 1 1 .563.563.563.563 0 0 1-.563-.563zm1.778 5.532a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2zm1.23-4.97a.563.563 0 1 1 .562-.562.563.563 0 0 1-.563.563z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              }
              label="Supported play modes"
              values={["TV mode, Tabletop mode, Handheld mode"]}
              valueClassName="text-accent-black"
            />

<InfoRow
              icon={<GiDatabase className="w-[28px] h-[28px]" />}
              label="Game file size"
              values={["1.5 GB"]}
              valueClassName=" text-accent-black"
            />

<InfoRow
              icon={<svg className="w-[28px] h-[28px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="GlobeIcon" size="28" color="currentColor"><path d="M16 0C11.7 0 7.7 1.7 4.7 4.7S0 11.7 0 16c0 4.3 1.7 8.3 4.7 11.3S11.7 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm-5.2 4c-.5.9-1 1.9-1.4 3-.6-.2-1.3-.5-2-.8 1-1 2.2-1.7 3.4-2.2zM5.5 8.1c1 .5 2.1 1 3.2 1.4-.4 1.6-.6 3.4-.7 5.2H3c.2-2.4 1.1-4.6 2.5-6.6zM3 17.3h5.1c.1 1.8.3 3.5.7 5.2-1.1.4-2.2.8-3.2 1.4-1.5-2-2.4-4.2-2.6-6.6zm4.4 8.5c.7-.3 1.4-.6 2.1-.8.4 1.1.9 2.1 1.4 3-1.3-.5-2.5-1.2-3.5-2.2zm7.3 2.8c-1-.8-2-2.3-2.7-4.3.9-.2 1.8-.3 2.7-.4v4.7zm0-7.3c-1.1.1-2.3.2-3.4.5-.3-1.4-.5-2.9-.6-4.5h4v4zm0-6.6h-4c.1-1.6.3-3.1.6-4.5 1.1.2 2.3.4 3.4.5v4zm0-6.7c-1 0-1.8-.1-2.7-.3.7-2 1.7-3.5 2.7-4.2V8zM29 14.7h-5.1c-.1-1.8-.3-3.5-.7-5.2 1.1-.4 2.2-.8 3.2-1.4 1.5 2 2.4 4.2 2.6 6.6zm-4.4-8.5c-.7.3-1.4.6-2.1.8-.4-1.1-.9-2.2-1.4-3.1 1.3.6 2.5 1.3 3.5 2.3zm-7.3-2.7c1 .8 1.9 2.3 2.6 4.2-.8.2-1.7.3-2.6.3V3.5zm0 7.2c1.1-.1 2.3-.2 3.4-.4.3 1.4.5 2.9.6 4.5h-3.9v-4.1zm0 17.8V24c.9.1 1.8.2 2.6.4-.6 1.8-1.6 3.4-2.6 4.1zm0-7.2v-4h3.9c-.1 1.6-.3 3.1-.6 4.5-1-.2-2.1-.4-3.3-.5zm3.8 6.8c.5-.9 1-1.9 1.4-3.1.7.2 1.4.5 2.1.9-1 .9-2.2 1.6-3.5 2.2zm5.4-4.2c-1-.5-2.1-1-3.2-1.4.4-1.6.6-3.4.7-5.1h5c-.2 2.3-1.1 4.5-2.5 6.5z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg> }
              label="Supported languages"
              values={["English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese"]}
              valueClassName="text-accent-black"
            />

            





            {/* <tr className="border-t border-gray-300  ">
              <td className="font-bold text-accent-black w-[100px] h-[63px]">
                <div className="font-bold text-accent-black  items-center inline-flex  ">
                  
                  <MdGamepad className="w-[28px] h-[28px]" />
                

                <div className="font-bold text-accent-black ml-4 ">
                  Genre
                </div>
                </div>
              </td>
              <td className="w-[165px]">October 5, 2017</td>
            </tr>

            <tr className="border-t border-gray-300  ">
              <td className="font-bold text-accent-black w-[100px] h-[63px]">
                <div className="font-bold text-accent-black  items-center inline-flex  ">
                  
                  <MdGamepad className="w-[28px] h-[28px]" />
                

                <div className="font-bold text-accent-black ml-4 ">
                  Genre
                </div>
                </div>
              </td>
              <td className="w-[165px]">October 5, 2017</td>
            </tr> */}
          </table>
        </div>
      </div>
    </>
  );
};

export default About;
