import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { RecoilRoot } from "recoil";
import ProductListing from "./components/ProductListing";
import Admin from "./admin/Admin";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
