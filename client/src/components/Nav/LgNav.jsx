import InputBar from './InputBar';
import PropTypes from 'prop-types';
import { BiSolidUser } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import SubNav from './SubNav';
const LgNav = (props) => {
  const MainNav = () => {
    // all Navigation
    return (
      <>
        <nav
          className={`flex justify-between bg-white  items-center  gap-28 cust-break:w-[1150px] mx-auto py-3 `}
        >
          <div className="flex items-center justify-between px-2 py-1">
            <img
              src="./src/assets/logo.png"
              width={34}
              height={34}
              alt="Logo"
            />
            <h2 className="text-indigo-400 font-bold text-2xl">Brand</h2>
          </div>
          {/* input bar */}
          <InputBar />

          {/* Icons  */}
          <div className="flex gap-4   items-center">
            <div className="flex flex-col items-center text-gray-500">
              <BiSolidUser size={24} fill="gray" />
              <a href="/profile" className="text-xs">
                profile
              </a>
            </div>
            <div className="flex flex-col items-center text-gray-500">
              <AiFillHeart size={22} fill="gray" />
              <a href="#" className="text-xs">
                Orders
              </a>
            </div>
            <div className="flex flex-col items-center text-gray-500">
              <HiShoppingCart size={24} fill="gray" />
              <Link to="/cart" className="text-xs">
                Cart
              </Link>
            </div>
          </div>
        </nav>
        <div className="bg-shadow">
          <hr />
          <SubNav />

          <hr />
        </div>
      </>
    );
  };

  const CartNav = () => {
    // Cart Navigation
    return (
      <nav
        className={`flex justify-between border-t-yellow-600  items-center  gap-28 w-[890px] cust-break:w-[1150px] mx-auto py-3 `}
      >
        <div className="flex items-center justify-between px-2 py-1">
          <img src="./src/assets/logo.png" width={34} height={34} alt="Logo" />
          <h2 className="text-indigo-400 font-bold text-2xl">Brand</h2>
        </div>

        {/* Icons  */}
        <div className="flex gap-4   items-center">
          <div className="flex flex-col items-center text-gray-500">
            <BiSolidUser size={24} fill="gray" />
            <a href="#" className="text-xs">
              profile
            </a>
          </div>
          <div className="flex flex-col items-center text-gray-500">
            <AiFillHeart fill="gray" />
            <a href="#" className="text-xs">
              Orders
            </a>
          </div>
          <div className="flex flex-col items-center text-gray-500">
            <HiShoppingCart size={24} fill="gray" />
            <Link to="/cart" className="text-xs">
              Cart
            </Link>
          </div>
        </div>
      </nav>
    );
  };

  const config = {
    main: <MainNav />,
    listView: <MainNav />,
    gridView: <MainNav />,
    cart: <CartNav />,
  };

  LgNav.propTypes = {
    Toshow: PropTypes.oneOf(['main', 'listView', 'gridView', 'cart'])
      .isRequired,
  };

  const componentToRender = config[props.Toshow];
  return <>{componentToRender}</>;
};

export default LgNav;
