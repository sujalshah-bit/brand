import LgNav from "./Nav/LgNav";
import MobileNav from "./Nav/MobileNav";
import Assemble from "./ProductDetailComponent/Assemble";
import useWindowWidth from "../utility/useWindowWidth";

const ProductDetail = () => {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="font-inter">
        {windowWidth > 900 ? (
          <LgNav Toshow={`main`} />
        ) : (
          <MobileNav Toshow={`detail`} />
        )}

        <section className="bg-[#F7FAFC]">
          <Assemble Toshow={windowWidth > 900 ? "LG" : "MOB"} />
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
