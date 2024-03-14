import React from 'react'

const FooterColumn = ({title, content, className}) => {
  return (
    <>
    <div className={`col-span-1 border-l border-gray-300 h-full p-4 ${className}`}>
            <h2 className="text-xl font-bold text-accent-black mb-2 ">
              <a
                href="#"
                className="hover:border-b-2 hover:border-dark-red transition-colors duration-300"
              >
                {title}
              </a>
            </h2>

            <ul>
                {content.map((item,index) =>
                 <li key={index} className="mb-2">
                 <span className="font-bold text-red hover:border-b-2 hover:border-dark-red hover:text-dark-red transition-colors duration-300 ">
                 <a href={item.link}>{item.text}</a> 
                 </span>
               </li>
                )}
             

              
            </ul>
          </div>

    </>
  )
}

export default FooterColumn
