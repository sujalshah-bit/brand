// src/components/MobileNav.js
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { sideBarLinks } from '../../utility/MobNavLinks';
import { customerSupportLinks } from '../../utility/MobNavLinks';

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/*  Hamburger Menu Icon */}
      <button
        className="text-black p-2 focus:outline-none "
        onClick={toggleMenu}
      >
        <RxHamburgerMenu size={20} />
      </button>
      {/* Black Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-black opacity-80 z-50"
          onClick={closeMenu}
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 bg-white text-black left-0 h-full w-[280px] transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-[280px]'
        } z-50`}
      >
        {/* User Profile Section */}
        <div className="p-5 max-h-36 w-full bg-gray-200">
          <img src="./src/assets/person.png" width={44} height={44} alt="" />
          <div className="mt-5">
            <a href="#">Sign in</a> | <a href="#">Sign up</a>
          </div>
          <button
            className="relative bottom-[110px] left-56 font-bold p-2 focus:outline-none hover:text-blue-500"
            onClick={closeMenu}
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links - SideBarLinks */}
        <ul className="p-5">
          {sideBarLinks.map((link, index) => {
            return (
              <li className="p-2 gap-3 text-lg flex items-center" key={index}>
                <span>{link.logo}</span> <a href="#">{link.name}</a>
              </li>
            );
          })}
        </ul>

        <div className="px-5">
          <hr />
          <hr />
        </div>

        {/* Sidebar Links - CustomerSupportLinks */}
        <ul className="p-5">
          {customerSupportLinks.map((link, index) => {
            return (
              <li className="p-3 gap-3 text-lg flex items-center" key={index}>
                <span>{link.logo}</span> {link.name}
              </li>
            );
          })}
        </ul>

        <div className="px-5">
          <hr />
          <hr />
        </div>

        {/* Additional Links */}
        <ul className="p-5">
          <li className="p-3 gap-3 text-lg flex items-center">
            <a href="#">User agreement</a>
          </li>
          <li className="p-3 gap-3 text-lg flex items-center">
            <a href="#">Partnership</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileSidebar;
