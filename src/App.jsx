import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { CartProvider } from "./components/Navbar/CartContext";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const handleAddToCart = (productId) => {
    setCartItems((prevCartItems) => [...prevCartItems, productId]);
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
          <CartProvider>
          <Navbar handleOrderPopup={handleOrderPopup} cartItems={cartItems} />
          <Hero handleOrderPopup={handleOrderPopup} />
          <Products handleAddToCart={handleAddToCart} />
    </CartProvider>

      

      
      {/* <TopProducts handleOrderPopup={handleOrderPopup} /> */}
      {/* <Banner /> */}
      <Subscribe />
      {/* <Products handleAddToCart={handleAddToCart} /> */}
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
