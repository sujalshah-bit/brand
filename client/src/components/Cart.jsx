import useWindowWidth from "../utility/useWindowWidth";
import AssembleCart from "./Cart/AssembleCart";
import LgNav from "./Nav/LgNav";
import MobileNav from "./Nav/MobileNav";

const Cart = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      <div className="font-inter">
        {windowWidth > 900 ? (
          <LgNav Toshow={`cart`} />
        ) : (
          <MobileNav Toshow={`cart`} />
        )}
        <section className="bg-[#F7FAFC]">
          <AssembleCart Toshow={windowWidth > 900 ? "LG" : "MOB"} />
        </section>
      </div>
    </>
  );
};

export default Cart;
