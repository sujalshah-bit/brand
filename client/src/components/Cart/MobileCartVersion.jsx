import { useState } from "react";
import { RxDotsVertical } from "react-icons/rx";

const MobileCartVersion = () => {
  const Counter = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
      setCount(count + 1);
    };

    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    return (
      <>
        <div className="flex items-center border-2 rounded  border-gray-300 space-x-4">
          <button
            className=" text-xl border-r-2  border-gray-300 px-2 "
            onClick={handleIncrement}
          >
            +
          </button>
          <div className="w-6  text-center">{count}</div>
          <button
            className=" text-xl border-l-2 border-gray-300  px-2 "
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
        <h1 className="font-bold">${count * 10}</h1>
      </>
    );
  };

  return (
    <>
      {[1, 2, 3, 4].map((_, index) => {
        return (
          <div key={index}>
            <div className="flex justify-between px-1 sm:px-3">
              <div className="flex gap-3">
                <img
                  src="./src/assets/img-group.png"
                  className="w-16 h-16"
                  alt=""
                />
                <div className="w-3/6 sm:w-full">
                  <h1 className="font-medium text-sm">
                    T-shirts with multiple colors for men
                  </h1>
                  <p className="text-gray-400 text-xs">
                    Size: medium, Color: blue Seller: Artel Market
                  </p>
                </div>
              </div>
              <RxDotsVertical size={20} />
            </div>
            <div className="flex justify-between my-3 px-2">
              <Counter />
            </div>
          </div>
        );
      })}

      <section className="px-4 sm:w-96 ">
        <table className="min-w-full text-[#919191] text-sm  ">
          <tbody>
            <tr>
              <td className=" ">Subtotal:</td>
              <td className=" text-black text-right font-semibold ">$140</td>
            </tr>
            <tr>
              <td className=" ">Discount:</td>
              <td className=" text-black  font-semibold text-right">-$20</td>
            </tr>
            <tr className="mt-10">
              <td className="font-bold text-black text-base  mt-10">Total:</td>
              <td className=" text-black  font-semibold text-right text-base mt-10">$120</td>
            </tr>
          </tbody>
        </table>

        <button className="bg-green-600 w-full rounded text-white text-sm my-3 h-10 focus:outline-none  active:bg-green-700 focus:shadow-outline-green">
              Checkout
            </button>
      </section>
    </>
  );
};

export default MobileCartVersion;
