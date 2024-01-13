import LgNav from './Nav/LgNav';
import MobileNav from './Nav/MobileNav';
import CompA from './LandingComponent/CompA';
import CompB from './LandingComponent/CompB';
import CompC from './LandingComponent/CompC';
import CompD from './LandingComponent/CompD';
import CompE from './LandingComponent/CompE';
import Footer from './Footer';
import useWindowWidth from '../utility/useWindowWidth';

const Home = () => {
  const windowWidth = useWindowWidth();
  return (
    <div className="font-inter">
      {windowWidth > 900 ? (
        <LgNav Toshow={`main`} />
      ) : (
        <MobileNav Toshow={`main`} />
      )}
      <section className="bg-[#F7FAFC] ">
        .
        <CompA />
        <CompB />
        <CompC />
        <CompC />
        <CompD />
        <CompE />
        <Footer />
      </section>
    </div>
  );
};

export default Home;

// import Carousel from "./Carousel";
// import MobileNav from "./Nav/MobileNav";
// <div className="w-full mx-auto">
// {/* <MobileNav/> */}
//   <div className="text-center font-raleway w-full max-w-5xl mx-auto my-6">
//     <div
//       className="font-extrabold text-transparent text-6xl my-10 bg-clip-text
//     bg-gradient-to-r from-yellow-400 to-yellow-800"
//     >
//       Chocolate Corner
//     </div>
//     <div
//       className="flex flex-col lg:flex-row justify-center items-center
//     mx-auto w-full my-16 border-2 bg-[#fcf6f6] border-slate-100 shadow-md py-4"
//     >
//       <div
//         className="flex lg:justify-end justify-center items-center mx-auto
//         my-24 w-full lg:w-6/12"
//       >
//         <img src={"df"} alt="" />
//       </div>
//       <div className="flex flex-col lg:w-6/12 w-full py-8">
//         <div className="text-4xl font-bold text-yellow-700">{itemName}</div>
//         <div className="text-3xl font-semibold my-6 text-slate-600">
//           price:&nbsp;&nbsp;₹{itemPrice}
//         </div>

//         <small className="mt-10 mb-3 font-semibold">Add Quantity</small>
//         <div className="flex text-slate-900 justify-center items-center mb-10">
//           <span
//             onClick={decrement}
//             className="select-none w-auto px-4
//             py-2 text-5xl bg-red-100 cursor-pointer"
//           >
//             -
//           </span>
//           <span className="w-auto px-4 py-2 text-3xl font-semibold">
//             {quantity}
//           </span>
//           <span
//             onClick={increment}
//             className="select-none w-auto px-4 py-2 text-5xl bg-green-100
//             cursor-pointer"
//           >
//             +
//           </span>
//         </div>

//         <div className="my-6 text-xl">
//           Amount to be paid:
//           <span className="text-green-500 text-3xl font-bold pl-3">
//             ₹{finalAmount}
//           </span>
//         </div>
//         <div className="my-6">
//           <button
//             onClick={checkout}
//             className="bg-green-400 text-white px-8 py-4 rounded-md text-2xl
//           font-semibold"
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>

//   <Carousel/>
// </div>
