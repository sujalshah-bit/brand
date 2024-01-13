import PropTypes from "prop-types";
import Footer from "../Footer";
import LargeDeviceVersion from "./LargeDeviceVersion";
import MobileVersion from "./MobileVersion";
import { RiStarSFill } from "react-icons/ri";

const Assemble = ({ Toshow }) => {
  const Stars = () => {
    const elements = [];
    for (let star = 0; star < 5; star++) {
      elements.push(<RiStarSFill fill="orange" />);
    }
    return elements;
  };
  const images = [
    "https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    "./src/assets/product-image.png",
    "https://images.unsplash.com/photo-1700049749655-981db614536f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
  ];
  
  return (
    <section>
      {Toshow === "LG" && <LargeDeviceVersion images={images} Stars={<Stars/>} />}
      {Toshow === "MOB" && <MobileVersion images={images} Stars={<Stars/>} />}
      <Footer />
    </section>
  );
};
Assemble.propTypes = {
  Toshow: PropTypes.oneOf(["LG", "MOB"]).isRequired,
};

export default Assemble;
