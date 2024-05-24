import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { CartProvider } from "./components/Navbar/CartContext";
import About from "./components/about/About";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <BrowserRouter>
        <CartProvider>
          <Navbar handleOrderPopup={handleOrderPopup} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero handleOrderPopup={handleOrderPopup} />
                  <Products handleAddToCart={handleAddToCart} />
                  {/* <TopProducts handleOrderPopup={handleOrderPopup} />
                  <Banner /> */}
                  <Subscribe />
                  <Testimonials />
                  <Footer />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
