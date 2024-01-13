import { IoBagCheckOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import { LiaCommentSolid } from 'react-icons/lia';
import { useState } from 'react';
import PropTypes from 'prop-types';
import items from '../../utility/CompBLinks';

const MobileVersion = ({ images, Stars }) => {
  const [toggleShow, setToggleShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <section>
      <div className="w-full bg-[#E7E7E7] h-72 relative flex flex-col">
        <img
          className="bg-center bg-cover m-auto h-full"
          // src="./src/assets/product-image.png"
          src={images[currentImage]}
          alt="product Image"
          width={305}
          height={305}
        />
        <span className="bg-black text-white opacity-25 flex justify-between  rounded-xl absolute bottom-1  self-end  w-20 p-1">
          <GoArrowLeft onClick={prevImage} size={24} />
          <GoArrowRight onClick={nextImage} size={24} />
        </span>
      </div>

      <div className="flex bg-white  flex-col mt-3 border border-b-gray-300 ">
        <div className=" px-3 sm:m-auto">
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
        </div>

        <div className="px-3  ">
          <h1 className="font-medium">T-Shirt</h1>
          <p className="text-rose-600">
            <strong>$129.59</strong>
            <span className="text-gray-500 text-xs ml-2">(50 - 100pcs)</span>
          </p>
          <div className="flex  gap-1">
            <button className="text-white  w-80 h-10 rounded-md bg-[#0973FF]">
              send inquiry
            </button>
            <button className="w-12 h-10 rounded border bg-[#F7FAFC] px-3 border-[#DEE2E7]">
              <FaRegHeart size={22} className="text-[#0973FF]" />
            </button>
          </div>
        </div>

        <div className="table mt-4 px-3 max-w-md">
          <div className="table-row-group">
            <div className="table-row ">
              <div className="table-cell text-gray-400">Condition</div>
              <div className="table-cell pl-4">Brand new</div>
            </div>
            <div className="table-row  ">
              <div className="table-cell py-2 text-gray-400">Material</div>
              <div className="table-cell py-2 pl-4">Plastic</div>
            </div>
            <div className="table-row ">
              <div className="table-cell text-gray-400">Category</div>
              <div className="table-cell pl-4">Electronics</div>
            </div>
          </div>
        </div>

        <div className="px-3 mt-4 mb-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quae
          tempora libero minima culpa expedita reiciendis. Voluptas culpa harum
          neque maiores porro totam amet hic, tenetur ut magni in reprehenderit.
          {toggleShow ? (
            <>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio cupiditate culpa vel, officiis id deserunt aspernatur
              sequi inventore explicabo consequatur rerum aliquid quas error,
              aut ab doloremque similique enim. Eos.
            </>
          ) : (
            <></>
          )}
          <button
            onClick={() => setToggleShow(!toggleShow)}
            className="text-[#0973FF] font-medium"
          >
            {toggleShow ? <>Show less...</> : <>Read more...</>}
          </button>
        </div>
      </div>

      {/* import from  */}
      <section className=" mt-5">
        <div>
          <h2 className="text-gray-400 px-2 p-3 text-lg">Recommended Items</h2>
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
    </section>
  );
};

MobileVersion.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  Stars: PropTypes.element.isRequired,
};

export default MobileVersion;
