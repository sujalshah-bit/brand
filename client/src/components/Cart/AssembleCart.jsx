import PropTypes from "prop-types";
import Footer from "../Footer";
import LargeCartVersion from "./LargeCartVersion";
import MobileCartVersion from "./MobileCartVersion";

const AssembleCart = ({Toshow}) => {
  return (
    <section>
        { Toshow == "LG" && <LargeCartVersion/> }
        { Toshow == "MOB" && <MobileCartVersion/> }
        {/* <Footer/> */}
    </section>
  )
}
AssembleCart.propTypes = {
    Toshow: PropTypes.oneOf(["LG", "MOB"]).isRequired,
  };
export default AssembleCart