import { IoBagCheckOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { LiaCommentSolid } from 'react-icons/lia';
import PropTypes from 'prop-types';
import { useState } from 'react';

const LargeDeviceVersion = ({ images, Stars }) => {
  const [image, setImage] = useState('./src/assets/product-image.png');

  const Tabs = () => {
    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    const TabItem = ({ tab, activeTab, onClick, children }) => {
      const isActive = activeTab === tab;
      return (
        <div
          className={`cursor-pointer h-full ${
            isActive ? 'border-b-2  border-blue-500 text-blue-500' : ''
          }`}
          onClick={() => onClick(tab)}
        >
          {children}
        </div>
      );
    };
    TabItem.propTypes = {
      tab: PropTypes.string.isRequired,
      activeTab: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      children: PropTypes.node.isRequired,
    };

    return (
      <div className=" ">
        <div className="flex space-x-8 h-[4vh]  mb-3 border-b-2 border-gray-300  px-1">
          <TabItem
            tab="description"
            activeTab={activeTab}
            onClick={handleTabClick}
          >
            Description
          </TabItem>
          <TabItem tab="reviews" activeTab={activeTab} onClick={handleTabClick}>
            Reviews
          </TabItem>
          <TabItem
            tab="shipping"
            activeTab={activeTab}
            onClick={handleTabClick}
          >
            Shipping
          </TabItem>
          <TabItem
            tab="about-seller"
            activeTab={activeTab}
            onClick={handleTabClick}
          >
            About Seller
          </TabItem>
        </div>
        {/* Content for each tab */}
        {activeTab === 'description' && (
          <div className="p-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A culpa
            adipisci magnam, quia minima consequuntur ullam sunt at, aperiam
            obcaecati neque impedit itaque numquam qui hic error unde cumque id.
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className="p-1">
            Under development Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Neque, illo facilis adipisci obcaecati illum
            nesciunt tempore nihil fuga error, eum excepturi harum amet ea
            perferendis deserunt natus distinctio eos fugit!
          </div>
        )}
        {activeTab === 'shipping' && (
          <div className="p-1">
            shipping COntent is under development Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quos facilis ut exercitationem id
            numquam adipisci expedita illo eum eveniet, suscipit impedit
            distinctio sit delectus rerum. Perferendis placeat aspernatur ex
            laboriosam.
          </div>
        )}
        {activeTab === 'about-seller' && (
          <div className="p-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            similique voluptates assumenda dolor consequatur veniam neque illo
            porro, suscipit nesciunt impedit, vero, rem blanditiis a culpa
            accusamus! Earum, obcaecati officia.
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="bg-[#F7FAFC] px-2 py-1  ">
      {/* first Section product image and info */}
      <section className="w-[900px] flex gap-4 m-auto border border-gray-300 bg-white rounded mb-5">
        <div className="flex flex-col gap-3 mb-3 py-1 px-2">
          <img
            src={image}
            alt=""
            className="w-96 h-96 border border-gray-300 rounded"
          />
          <div className="space-x-2 flex ">
            {images.map((image, index) => {
              return (
                <img
                  key={index}
                  onClick={() => setImage(image)}
                  src={images[index]}
                  alt=""
                  className="w-10  h-10 bg-cover bg-center border border-gray-300"
                />
              );
            })}
          </div>
        </div>
        <div className="mb-3">
          <div className="mb-3 py-1 px-2">
            <h1 className="text-green-500 font-medium">&#10003; in Stock</h1>
            <h1 className="font-medium text-lg">
              Men &apos;s Long Sleeve T-Shirt Cotton Base Layer Slim Muscle
            </h1>
            <div className="flex gap-5 ">
              <div className="flex">{Stars}</div>
              <span className="flex text-xs text-gray-500 gap-1 items-center">
                <LiaCommentSolid size={18} />
                32 reviews
              </span>
              <span className="flex text-xs text-gray-500 gap-1  items-center">
                <IoBagCheckOutline size={18} />
                150 Sold
              </span>
            </div>
            <p className="text-rose-600">
              <strong>$129.59</strong>
              <span className="text-gray-500 text-xs ml-2">(50 - 100pcs)</span>
            </p>
            <div className="flex mt-3 gap-1">
              <button className="text-white  w-80 h-10 rounded-md bg-[#0973FF]">
                send inquiry
              </button>
              <button className="w-12 h-10 rounded border bg-[#F7FAFC] px-3 border-[#DEE2E7]">
                <FaRegHeart size={22} className="text-[#0973FF]" />
              </button>
            </div>
          </div>

          <div className=" max-w-sm px-2 text-sm  mt-8">
            <table className="min-w-full bg-white border border-gray-200">
              <tbody>
                <tr className="border-b-2  border-gray-200 ">
                  <td className=" px-2 py-1 text-gray-400">Price:</td>
                  <td className=" px-2 py-2 ">Negotiable</td>
                </tr>
                <tr>
                  <td className=" px-2 py-1 text-gray-400">Type:</td>
                  <td className=" px-2 py-1 ">classNameic Shoes</td>
                </tr>
                <tr>
                  <td className=" px-2 py-1 text-gray-400 ">Material:</td>
                  <td className=" px-2 py-1 ">Plastic material</td>
                </tr>
                <tr>
                  <td className=" px-2 py-1 text-gray-400">Design:</td>
                  <td className=" px-2 py-1 ">Modern nice</td>
                </tr>
                <tr className="border-b-2   border-gray-200">
                  <td className=" px-2 py-3 text-gray-400">Customization:</td>
                  <td className=" px-2 py-1 ">
                    Customized logo and design custom packages
                  </td>
                </tr>
                <tr>
                  <td className=" px-2 py-1 text-gray-400">Protection:</td>
                  <td className=" px-2 py-1 ">Refund Policy</td>
                </tr>
                <tr>
                  <td className=" px-2 py-1 text-gray-400">Warranty:</td>
                  <td className=" px-2 py-1 ">2 years full warranty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="flex gap-3 m-auto w-[900px]">
        <div className="bg-white border text-[#666666] text-sm border-gray-300  w-[700px] p-2 rounded">
          <nav className="">
            <Tabs />
          </nav>
        </div>
        <aside className="bg-white border  border-gray-300 w-60 p-1 rounded">
          <h1 className="font-bold my-2 text-center">You may like</h1>

          {[1, 2, 3, 4, 5].map((elem, index) => {
            return (
              <div
                key={index}
                className="flex my-5 pl-2 cursor-pointer w-full gap-2 "
              >
                <img
                  className="border border-gray-300 self-start rounded bg-cover bg-center "
                  width={60}
                  height={60}
                  src="./src/assets/product-image.png"
                  alt=""
                />
                <div>
                  <h1 className="text-sm font-medium">
                    Men&apos;s Blazer Sets Elegant Formal
                  </h1>
                  <span className="text-xs text-gray-400">$7.29 - $8.23</span>
                </div>
              </div>
            );
          })}
        </aside>
      </section>

      <section className="w-[900px] m-auto my-6 bg-white  p-2 rounded border border-gray-300">
        <h1 className=" font-semibold px-3 py-1">Related Products</h1>
        <div className="flex gap-5 p-3">
          {[1, 2, 3, 4, 5, 6].map((elem, index) => {
            return (
              <div key={index} className=" w-32">
                <img
                  src="./src/assets/img.png"
                  className="w-32 h-32 bg-cover bg-center"
                  alt=""
                />
                <h3 className="text-[13px] mt-2 text-gray-500   ">
                  Blue Wallet Luxury Look
                </h3>
                <span className="text-gray-400 text-xs ">$3 - $4</span>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

LargeDeviceVersion.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  Stars: PropTypes.element.isRequired,
};

export default LargeDeviceVersion;
