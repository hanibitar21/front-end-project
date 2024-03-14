import React from "react";

const InfoRow = ({ icon, label, values=[], valueClassName }) => {
  return (
    <tr className="border-t border-gray-300  ">
              <td className="font-bold text-accent-black w-[100px] h-[63px]">
                <div className="font-bold text-accent-black  items-center inline-flex  ">
                  
                  {icon}
                

                <div className="font-bold text-lg text-accent-black ml-4 ">
                  {label}
                </div>
                </div>
              </td>
              
              <td className="w-[225px]"  >
              {values.map((value, index) => (
          <span  className={valueClassName + " mr-[15px]"} key={index}>
            {value}
          </span>
        ))}
                </td>
            </tr>
  );
};

export default InfoRow;
