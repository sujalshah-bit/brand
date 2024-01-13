import React from 'react';
import items from '../../utility/CompBLinks';

const CompB = () => {
  return (
    <section className="flex flex-col cust-break:gap-4 cust-break:mt-5 cust-break:flex-row cust-break:w-[1150px] cust-break:mx-auto bg-white  border-x-gray-300 border ">
      {/* Deals And offer Section  */}
      <div className="py-3 flex cust-break:flex-col cust-break:px-5 gap-5 justify-around items-center sm:py-6">
        <div className="sm:text-xl">
          <div>
            <strong>Deals and offers</strong>
          </div>
          <p>Electronic equipment</p>
        </div>
        {/* Date  */}
        <div className="flex text-xs   gap-2 justify-between">
          <span className="rounded  p-1 text-center w-[40px] h-[45px] sm:w-[60px] sm:-[60px] flex  justify-around flex-col  bg-gray-200 text-gray-600">
            <span className="text-[15px] ">23</span> <span> Hour</span>
          </span>
          <span className="rounded  p-1 w-[40px] h-[45px] sm:w-[60px] sm:-[60px] bg-gray-200 text-gray-600 text-center flex  justify-around flex-col">
            <span className="text-[15px] ">04</span> <span> Min</span>
          </span>
          <span className="rounded  p-1 w-[40px] h-[45px] sm:w-[60px] sm:-[60px] bg-gray-200 text-gray-600 text-center flex  justify-around flex-col">
            <span className="text-[15px] ">12</span> <span> Sec</span>
          </span>
        </div>
      </div>

      <div className="flex   justify-center  w-full">
        {/* Lines Of boxes */}
        <div
          className={`flex ${
            window.innerWidth < 740 ? 'horizontal-scroll-container' : ''
          } sm:justify-center`}
        >
          {/* particular Box  */}
          {items.map((element, index) => {
            return (
              <div
                className="flex items-center border w-36 lg:w-[179px] p-3  border-gray-300 flex-col"
                key={index}
              >
                {/* image */}
                <img
                  className="bg-cover bg-center w-full h-32"
                  src={`${element.src}`}
                  alt=""
                />

                {/* content */}
                <a className="mt-1 text-center py-1" href="#">
                  <p>{element.title}</p>
                  <button className="px-2 text-sm rounded-xl bg-rose-200 text-rose-500 font-medium">
                    {element.discount}
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompB;
