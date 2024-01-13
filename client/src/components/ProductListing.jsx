import useWindowWidth from '../utility/useWindowWidth';
import LgNav from './Nav/LgNav';
import MobileNav from './Nav/MobileNav';
import Assemble from './ProductListingComponent/Assemble';

const ProductListing = () => {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="font-inter">
        {windowWidth > 900 ? (
          <LgNav Toshow={`gridView`} />
        ) : (
          <MobileNav Toshow={`itemlist`} />
        )}

        <section className="bg-[#F7FAFC]">
          .
          <Assemble Toshow={windowWidth > 900 ? 'LG' : 'MOB'} />
        </section>
      </div>
    </>
  );
};

export default ProductListing;
