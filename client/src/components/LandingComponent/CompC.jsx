import { useState, useEffect } from 'react';
import items from '../../utility/CompBLinks';
import collection from '../../utility/CompCLg';

const CompC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update windowWidth whenever the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Conditional rendering based on windowWidth
  if (windowWidth > 740) {
    return (
      <section className="cust-break:flex cust-break:flex-row flex-col  sm:w-[600px] md:w-[700px] lg:w-[900px]   cust-break:w-[1150px] mx-auto mt-6">
        <div className="cust-break:w-[280px]  h-[200px]  ">
          <img
            src="./src/assets/left-aside.png"
            className="bg-cover h-full   w-full  bg-center"
            alt=""
          />
          <span
            className={`bg-tr p-1 relative  bottom-44 ${
              windowWidth > 1150 ? 'block' : 'hidden'
            } `}
          >
            <h1 className="font-medium text-lg mb-4 w-24  ">
              {' '}
              Home and outdoor{' '}
            </h1>
            <button className="p-1 text-center font-medium rounded bg-white ">
              Source now
            </button>
          </span>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 cust-break:h-[200px]  w-full">
          {/* <!-- Content for the grid cells --> */}
          {collection.map((element, index) => {
            return (
              <div
                className="bg-white  justify-between border border-gray-300 flex gap-4"
                key={index}
              >
                <div className="text-sm px-4 py-1 ">
                  <p>Soft Chair</p>
                  <p className="text-xs text-gray-400">From USD 19</p>
                </div>
                <div className="  flex flex-col-reverse items-end h-full    ">
                  <img
                    src="./src/assets/test1.png"
                    width={66}
                    height={66}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section className=" mt-5">
        <div>
          <h2 className="font-semibold px-2 p-3 text-lg">Home and Outdoor</h2>
        </div>

        <div className="flex flex-col   justify-center  w-full">
          {/* Lines Of boxes */}
          <div
            className={`flex horizontal-scroll-container sm:justify-center ]`}
          >
            {/* particular Box  */}
            {items.map((element, index) => {
              return (
                <div
                  className="flex bg-white items-center border w-36 lg:w-[179px] p-3  border-gray-300 flex-col"
                  key={index}
                >
                  {/* image */}
                  <img
                    className="bg-cover bg-center w-full h-32"
                    src={`${element.src}`}
                    //   src={`./src/assets/test1.png`}
                    alt=""
                  />

                  {/* content */}
                  <a className="mt-1 text-center py-1" href="#">
                    <p>{element.title}</p>
                    <button className="px-2 text-xs rounded-xl text-gray-500 font-medium">
                      From USD 19
                    </button>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="border-b px-2 py-3 font-medium text-blue-500 border-gray-300">
            Source Now -&gt;
          </div>
        </div>
      </section>
    );
  }
};

export default CompC;
