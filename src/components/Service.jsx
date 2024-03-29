import React from "react";

const Service = ({data}) => {
  return (
    <section className="pt-20">
      <div className="container  mx-auto">
        <div className="max-w-lg mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold font-heading">
            Lorem ipsum dolor sit amet consectutar domor
          </h2>
          <p className="text-gray-400 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>
        <div className="grid xl:grid-cols-12 grid-cols-6 gap-[30px] mx-5">
          {
            data.map((item,index)=><div key={index} className=" col-span-3 rounded px-[20px] py-[50px] mb-20 shadow-xl">
            <img
              className="w-32 h-20 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl cursor-pointer"
              src={item?.imgCDN}
              alt=""
            />
            <h3 className="sm:text-2xl font-bold font-heading text-center cursor-pointer">
             {item?.title}
            </h3>
          </div>)
          }
          
        </div>
      </div>
    </section>
  );
};

export default Service;
