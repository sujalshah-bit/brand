const CompD = () => {
  return (
    <section className=' mt-3 bg-[url("./src/assets/banner.png")] md: cust-break:w-[1150px] cust-break:mx-auto rounded cust-break:rounded-md  flex items-center  p-3 h-40 sm:h-[420px] bg-cover bg-center'>
      <div className="p-1 md:py-10 md:px-8 sm:w-1/2">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold w-60 sm:w-80 lg:w-96 mb-4 ">
          An easy way to send requests to all suppliers
        </h1>
        <button className="bg-blue-600 text-sm rounded block md:hidden p-1 sm:text-base text-white">
          Send inquiry
        </button>
        <p className="text-sm text-white w-80 hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <div className="  bg-white rounded-lg gap-3 p-8 md:flex hidden flex-col md:ml-auto w-96 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-xl mb-1 font-bold title-font">
          Send quote to suppliers
        </h2>

        <div className="relative mb-4">
          <div className="w-full leading-7 text-sm text-gray-600 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none  py-1 px-3  transition-colors duration-200 ease-in-out">
            what item do you need?
          </div>
          <div className="relative mb-4 mt-4">
            <textarea
              id="message"
              placeholder="Type more detail"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 p-1 focus:outline-none hover:bg-indigo-600 rounded ">
            Send inquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompD;
