import React from "react";
import FooterColumn from "../FooterColumn/FooterColumn";
import esrbImg from "../../Assets/esrb.svg"
const MidFooter = () => {
  return (
    <>
      <div className="grid grid-cols-1  sm:grid-cols-6 md:grid-cols-6 justify-center items-center p-4 mt-20 w-full lg:px-40">
       
          <FooterColumn
            title="About Nintendo"
            content={[
              { text: "Careers", link: "/careers" },
              {
                text: "Corporate Social Responsibility",
                link: "/corporate-social-responsibility",
              },
            ]}

            className='border-none'
          />

          <FooterColumn
            title="Shop"
            content={[
              { text: "Games", link: "#" },
              {
                text: "Hardware",
                link: "#",
              },
              {
                text: "Merchandise",
                link: "#",
              },

              {
                text: "Sales & deals",
                link: "#",
              },

              {
                text: "Exclusives",
                link: "#",
              },

              {
                text: "Online service",
                link: "#",
              },

              {
                text: "Nintendo NY store",
                link: "#",
              },
            ]}
          />

<FooterColumn
            title="My Nintendo Store orders"
            content={[
              { text: "Order details", link: "#" },
              {
                text: "Shipping info",
                link: "#",
              },
              {
                text: "Returns & exchanges",
                link: "#",
              },

              {
                text: "FAQ",
                link: "#",
              },

            
            ]}
          />

<FooterColumn
            title="Support"
            content={[
              { text: "Nintendo Switch", link: "#" },
              {
                text: "Nintendo Account",
                link: "#",
              },
              {
                text: "Other systems",
                link: "#",
              },

              {
                text: "Repairs",
                link: "#",
              },

              {
                text: "Nintendo product recycling",
                link: "#",
              },

            ]}
          />



<div className="col-span-1">
  <div className="grid grid-rows-2 gap-4">
   
    <div className="row-span-1 mb-5">
    <FooterColumn
            title="Parents"
            content={[
              { text: "Info for parents", link: "#" },
              {
                text: "Parental controls",
                link: "#",
              },
            ]}
          />
    </div>
    <div className="row-span-1">
    <FooterColumn
            title="Parents"
            content={[
              { text: "Privacy policy", link: "#" },
              {
                text: 'Cookies and interest-\nbased ads',
                link: "#",
              },

              
            ]}
          />
    </div>
  </div>
</div>

<FooterColumn
            title="Community"
            content={[
              { text: "Community guidelines", link: "#" },
              {
                text: "Online safety principles",
                link: "#",
              },
            ]}
            
          />


        </div>

        


      <div className="flex flex-row h-[125px] justify-end items-center p-10 ">
         <a href="#">  <img src={esrbImg} alt="" className="w-[68px] h-[85px]" /></a> 
        </div>
    </>
  );
};

export default MidFooter;
