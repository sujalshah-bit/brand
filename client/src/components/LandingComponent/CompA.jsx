import items from '../../utility/CompALinks';

const CompA = () => {
  return (
    <div className="tab-break:bg-white tab-break:px-2 tab-break:py-1 bg-shadow tab-break:border-[1px] rounded  cust-break:w-[1150px] mx-auto border-gray-300 flex justify-around gap-3">
      <ul className="tab-break:flex flex-col p-2 cust-break:w-[250px] hidden  w-[200px] gap-2 ">
        {items.map((elem, index) => {
          return (
            <li
              className="p-2 hover:bg-indigo-100   rounded-md hover:font-semibold text-xs"
              key={index}
            >
              <a href={`${elem.link}`}>{elem.item}</a>
            </li>
          );
        })}
      </ul>

      <div className="tab-break:p-2 cust-break:w-[600px] w-full h-[200px] bg-cover bg-center bg-no-repeat sm:h-[370px] relative">
        <img
          className="w-full h-full"
          src="./src/assets/hero-section.png"
          alt=""
        />
        <div className="absolute top-10 md:top-20 md:left-5 flex gap-2 px-2 flex-col">
          <p className=" text-medium  md:text-2xl  tracking-wider  flex flex-col gap-1 w-52 md:w-72  top-10 left-0 ">
            Latest trending{' '}
            <strong className="text-lg">Electronic items.</strong>{' '}
          </p>
          <button className=" text-medium bg-white text-indigo-500 p-1 rounded w-28 top-15 left-0  text-center">
            {' '}
            Learn More.{' '}
          </button>
        </div>
      </div>

      <div className="p-2 tab-break:flex flex-col hidden  max-w-[250px] gap-3">
        <div className=" text-sm ">
          <div className=" flex flex-col gap-2 bg-[#E3F0FF] p-2 rounded-md">
            <div className="flex  gap-2 items-center">
              <img src="./src/assets/Avatar.png" alt="" />
              <div>
                <p>Hi, user </p>
                <span>let&apos;s get Started </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <a
                href="#"
                className="text-center rounded-md py-1 text-white bg-[#0660FF] "
              >
                Join Now
              </a>
              <a
                href="#"
                className="text-center rounded-md py-1 text-[#0660FF] bg-white"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#F38332] h-24 grid place-items-center text-white rounded-md py-3  px-1">
          Get US $10 off with a new supplier
        </div>

        <div className="bg-[#55BDC3] text-white rounded-md py-3 px-1">
          Send quotes with supplier preferences.
        </div>
      </div>
    </div>
  );
};

export default CompA;
