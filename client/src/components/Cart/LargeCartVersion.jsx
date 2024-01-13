import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";

const LargeCartVersion = () => {
  const QuantityDropdown = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
      setQuantity(parseInt(e.target.value, 10));
    };

    const options = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
      <div className="flex items-center border border-gray-300 rounded  px-1">
        <span className="text-gray-600">Qty</span>
        <select
          value={quantity}
          onChange={handleQuantityChange}
          className=" py-1 px-2 focus:outline-none  "
        >
          {options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <>
      <h1 className="font-bold text-xl py-2 w-[900px] cust-break:w-[1100px] m-auto">
        My Cart (3)
      </h1>

      <section className="w-[900px] cust-break:w-[1100px] flex gap-3 m-auto ">
        <div className=" bg-white border w-[650px] cust-break:w-[850px] rounded py-2 px-2 border-gray-300">
          {[1, 2, 3, 4, 5, 7].map((elem, index) => {
            return (
              <div
                key={index}
                className="flex justify-between my-2 border-y-[1px] border-gray-300  p-2"
              >
                <div className="flex gap-3 ">
                  <img
                    src="./src/assets/img-group.png "
                    className="w-20 h-20"
                    alt=""
                  />
                  <div className="">
                    <h1 className="font-medium ">
                      T-shirts with multiple colors, for men and lady
                    </h1>
                    <div className="flex flex-col gap-1 my-2">
                      <span className="text-gray-400 text-xs">
                        Size: medium, Color: blue, Material: Plastic
                      </span>
                      <span className="text-gray-400 text-xs">
                        Seller: Artel Market
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className=" border rounded border-gray-300 px-3 py-1 text-sm font-medium text-[#fb4d4e]">
                        Remove
                      </button>
                      <button className=" border rounded border-gray-300 px-3 py-1 text-sm font-medium text-[#1774fe]">
                        Save for later
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-col ">
                  <p className="font-semibold">$78.22</p>
                  <QuantityDropdown />
                </div>
              </div>
            );
          })}

          <div className="flex w-full justify-between my-6">
            <button className="text-white bg-[#127FFF] flex px-3 py-1 rounded text-sm">
              <IoIosArrowRoundBack size={22} />
              Go back
            </button>
            <button className=" border rounded border-gray-300 px-3 py-1 text-sm font-medium text-[#1774fe]">
              Remove all
            </button>
          </div>
        </div>
        <div className="  w-[250px] space-y-3 ">
          <div className="bg-white border p-2 rounded border-gray-300 h-24 space-y-3">
            <h1 className="text-[#6f6f6f]">Have a coupon?</h1>
            <input
              type="text"
              placeholder="Add a coupon"
              className="p-1 w-3/5 outline-none border-y-2 border-l-2 text-sm rounded-s border-gray-300"
            />
            <button className="p-1 text-sm rounded-e text-[#1774fe] border-y-2 border-x-2 border-gray-300">
              Apply
            </button>
          </div>
          <div className="bg-white border rounded p-2  border-gray-300">
            <div>
              <table className="min-w-full text-[#919191] text-sm  ">
                <tbody>
                  <tr>
                    <td className=" ">Subtotal:</td>
                    <td className=" text-right font-medium ">$140</td>
                  </tr>
                  <tr>
                    <td className=" ">Discount:</td>
                    <td className=" text-[#fb4d4e]  font-medium text-right">
                      -$20
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <hr />
            <hr />
            <br />
            <div className="flex justify-between">
              <h1 className="font-bold  ">Total </h1>
              <span className="font-bold text-right">$120</span>
            </div>
            <button className="bg-green-600 w-56 rounded text-white text-sm my-3 h-10 focus:outline-none  active:bg-green-700 focus:shadow-outline-green">
              Checkout
            </button>
          </div>
        </div>
      </section>

      <section className="w-[900px] cust-break:w-[1100px] border border-gray-300 rounded mt-10 m-auto bg-white">
        <h1 className="font-bold px-4 py-1">Recommended</h1>
        <div className="flex">
          {[1, 2, 3, 4].map((_, index) => {
            return (
              <div key={index} className="px-4 w-72 my-2">
                <img
                  src="./src/assets/tab-img.png"
                  className="w-72 h-64"
                  alt=""
                />
                <div className="flex gap-2 mt-2 flex-col">
                  <p className="font-bold">$99.8</p>
                  <p className="text-gray-400 text-sm">
                    GoPro HERO6 4K Action Camera - Black
                  </p>
                  <button className=" border flex gap-3 rounded w-36 border-gray-300 px-3 py-1 text-sm font-medium text-[#1774fe]">
                    <IoCartOutline size={20} />
                    Move to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LargeCartVersion;
