import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { CgBox } from "react-icons/cg";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsBuilding } from "react-icons/bs";


export const sideBarLinks = [
    { name: "Home", logo: <AiOutlineHome size={20}/> },
    { name: "Categories", logo: <MdOutlineFormatListBulleted size={20}/> },
    { name: "Favorites", logo: <AiOutlineHeart size={20}/> },
    { name: "My Orders", logo: <CgBox size={20}/> },
  ];
export  const customerSupportLinks = [
    { name: "Contact us", logo: <TfiHeadphoneAlt/> },
    { name: "About", logo: <BsBuilding/> },
  ];