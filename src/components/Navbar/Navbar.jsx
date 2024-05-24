// Navbar.jsx
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About us",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    name: "Products",
    link: "/products",
  },
  {
    id: 5,
    name: "Blogs",
    link: "/products",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const { alertMessage } = useCart();
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useCart();

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Alert message */}
      {alertMessage && <div className="alert">{alertMessage}</div>}
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              {/* <img src={Logo} alt="Logo" className="w-10" /> */}
              CD
            </Link>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            {/* Cart button */}
            <button onClick={handleCartClick}>
              <FaCartShopping />
              {cartItems.length}
            </button>
            {showCart && (
              <div className="cart-items">
                {cartItems.map((item, index) => (
                  <div key={index}>{item.name}</div>
                ))}
              </div>
            )}

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
