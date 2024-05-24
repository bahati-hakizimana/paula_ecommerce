// import React, { useState } from "react";
// import Img1 from "../../assets/women/women.png";
// import Img2 from "../../assets/women/women2.jpg";
// import Img3 from "../../assets/women/women3.jpg";
// import Img4 from "../../assets/women/women4.jpg";
// import { FaStar } from "react-icons/fa6";
// import { IoMdSearch } from "react-icons/io";

// const ProductsData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Women Ethnic",
//     rating: 5.0,
//     color: "white",
//     aosDelay: "0",
//     price:"25000Rwf"
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Women western",
//     rating: 4.5,
//     color: "Red",
//     aosDelay: "200",
//     price:"25000Rwf"
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     rating: 4.7,
//     color: "brown",
//     aosDelay: "400",
//     price:"25000Rwf"
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed T-Shirt",
//     rating: 4.4,
//     color: "Yellow",
//     aosDelay: "600",
//     price:"25000Rwf"
//   },
//   {
//     id: 5,
//     img: Img2,
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//     price:"25000Rwf"
//   },
//   {
//     id: 6,
//     img: Img2,
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//     price:"25000Rwf"
//   },
//   {
//     id: 7,
//     img: Img2,
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//     price:"25000Rwf"
//   },
//   {
//     id: 8,
//     img: Img2,
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//     price:"25000Rwf"
//   },
//   {
//     id: 9,
//     img: Img2,
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//     price:"25000Rwf"
//   },
//   {
//     id: 10,
//     img: Img2,
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//     price:"25000Rwf"
//   },
// ];

// const themeColors = ["blue", "yellow", "green", "black"];

// const ThemeChanger = ({ currentTheme, onChangeTheme }) => {
//   return (
//     <div className="flex gap-2 mt-2">
//       {themeColors.map((color) => (
//         <button
//           key={color}
//           className={`w-6 h-6 rounded-full flex items-center justify-center`}
//           onClick={() => onChangeTheme(color)}
//           style={{ backgroundColor: color }}
//         >
//           {currentTheme === color && <span className="text-white text-xs">✔</span>}
//         </button>
//       ))}
//     </div>
//   );
// };

// const Products = ({ handleOrderPopup }) => {
//   const [themes, setThemes] = useState(
//     ProductsData.reduce((acc, product) => {
//       acc[product.id] = "white";
//       return acc;
//     }, {})
//   );

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState(ProductsData);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 5;

//   const handleThemeChange = (id, color) => {
//     setThemes((prevThemes) => ({ ...prevThemes, [id]: color }));
//   };

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);
//     const filtered = ProductsData.filter((product) =>
//       product.title.toLowerCase().includes(value)
//     );
//     setFilteredProducts(filtered);
//     setCurrentPage(1);
//   };

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);


//   return (
//     <div className="mt-14 mb-12">
//       <div className="container flex justify-center gap-2">
//         {/* Category section */}
//         <div className="w-72 h-full bg-gray-800 text-white p-4 rounded-lg shadow-lg">
//           <h1 className="text-xl font-bold mb-4">Categories</h1>
//           <ul className="space-y-2">
//             {Array.from({ length: 30 }).map((_, index) => (
//               <li key={index} className="cursor-pointer hover:bg-gray-700 p-2 rounded">
//                 Category {index + 1}
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Product section */}
//         <div>
//           <div className="text-center mb-10 max-w-[600px] mx-auto">
//             <p data-aos="fade-up" className="text-sm text-primary">
//               Top Selling Products for you
//             </p>
//             <h1 data-aos="fade-up" className="text-3xl font-bold">
//               Products
//             </h1>
//             <p data-aos="fade-up" className="text-xs text-gray-400">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//               asperiores modi Sit asperiores modi
//             </p>
//           </div>
//           {/* Search input */}
//           <div className="mb-4 flex justify-center">
//             <div className="relative">
//               <input
//                 type="text"
//                 className="py-2 pl-10 pr-4 w-80 border border-gray-300 rounded-full focus:outline-none focus:border-primary"
//                 placeholder="Search products..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//               />
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//                 <IoMdSearch className="text-gray-400" />
//               </div>
//             </div>
//           </div>
//           {/* Body section */}
//           <div>
//             <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
//               {/* card section */}
//               {currentProducts.map((data) => (
//                 <div
//                   data-aos="fade-up"
//                   data-aos-delay={data.aosDelay}
//                   key={data.id}
//                   className="space-y-3 p-4 rounded-lg shadow-lg"
//                 >
//                   <div
//                     className="h-[220px] w-[150px] rounded-md flex items-center justify-center"
//                     style={{ backgroundColor: themes[data.id] }}
//                   >
//                     <img
//                       src={data.img}
//                       alt={data.title}
//                       className="h-[220px] w-[150px] object-cover rounded-md"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">{data.title}</h3>
//                     <p className="text-sm text-gray-600">{data.color}</p>
//                     <div className="flex items-center gap-1">
//                       <FaStar className="text-yellow-400" />
//                       <span>{data.rating}</span>
//                     </div>
//                     <ThemeChanger
//                       currentTheme={themes[data.id]}
//                       onChangeTheme={(color) => handleThemeChange(data.id, color)}
//                     />
//                   </div>
//                   {/* <button
//                   className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
//                   onClick={handleOrderPopup}
//                 >
//                   Order Now
//                 </button> */}
//                 <p>
//                   {data.price}
//                 </p>
//                   <button
//                   className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
//                   onClick={handleOrderPopup}
//                 >
//                   Add Cart
//                 </button>
//                 </div>
//               ))}
//             </div>
//             {/* Pagination */}
//             <div className="flex justify-center items-center mt-4">
//               <button
//                 onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
//                 disabled={currentPage === 1}
//                 className={`mx-1 px-3 py-1 rounded-full ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-default' : 'bg-primary text-white'}`}
//               >
//                 Previous
//               </button>
//               {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => paginate(index + 1)}
//                   className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'}`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//               <button
//                 onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredProducts.length / productsPerPage)))}
//                 disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
//                 className={`mx-1 px-3 py-1 rounded-full ${currentPage === Math.ceil(filteredProducts.length / productsPerPage) ? 'bg-gray-300 text-gray-600 cursor-default' : 'bg-primary text-white'}`}
//               >
//                 Next
//               </button>
//             </div>
//             {/* view all button */}
//             <div className="flex justify-center">
//               <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
//                 View All Button
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;




import React, { useState } from "react";
// import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/products/p7.jpg";
import Img3 from "../../assets/products/p12.jpg";
import Img4 from "../../assets/products/p11.jpg";
import Img1 from "../../assets/products/p1.jpg";
import { FaStar } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { CartProvider } from "../Navbar/CartContext";
import { useCart } from "../Navbar/CartContext";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Very beautful",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
    price: "25000Rwf",
    category: "Furniture"
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
    price: "25000Rwf",
    category: "Decorative Accents"
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    price: "25000Rwf",
    category: "Textiles"
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "25000Rwf",
    category: "Wall Decor"
  },
  {
    id: 5,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "25000Rwf",
    category: "Wall Decor"
  },
  {
    id: 6,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "25000Rwf",
    category: "Wall Decor"
  },
  {
    id: 7,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "25000Rwf",
    category: "Wall Decor"
  },
  {
    id: 8,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "25000Rwf",
    category: "Wall Decor"
  },
  {
    id: 9,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "25000Rwf",
    category: "Wall Decor"
  },
  {
    id: 10,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "25000Rwf",
    category: "Wall Decor"
  },
  {
    id: 11,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "25000Rwf",
    category: "Wall Decor"
  },
  {
    id: 12,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "25000Rwf",
    category: "Wall Decor"
  },
  {
    id: 13,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "25000Rwf",
    category: "Wall Decor"
  },
  {
    id: 14,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "25000Rwf",
    category: "Wall Decor"
  },
  {
    id: 15,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "25000Rwf",
    category: "Wall Decor"
  },
  // Add more products here
];

const themeColors = ["blue", "yellow", "green", "black"];

const ThemeChanger = ({ currentTheme, onChangeTheme }) => {
  return (
    <div className="flex gap-2 mt-2">
      {themeColors.map((color) => (
        <button
          key={color}
          className={`w-6 h-6 rounded-full flex items-center justify-center`}
          onClick={() => onChangeTheme(color)}
          style={{ backgroundColor: color }}
        >
          {currentTheme === color && <span className="text-white text-xs">✔</span>}
        </button>
      ))}
    </div>
  );
};

const Products = ({ handleOrderPopup }) => {
  const [themes, setThemes] = useState(
    ProductsData.reduce((acc, product) => {
      acc[product.id] = "white";
      return acc;
    }, {})
  );

  // ad to cart

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };


  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(ProductsData);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleThemeChange = (id, color) => {
    console.log("Changing theme for product:", id, "to color:", color);
    setThemes((prevThemes) => ({ ...prevThemes, [id]: color }));
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = ProductsData.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(ProductsData);
    } else {
      const filtered = ProductsData.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-14 mb-12" id="product">
      <div className="container flex justify-center gap-2">
        {/* Category section */}
        <div className="w-72 h-screen bg-gray-400 text-white p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold mb-4">Categories</h1>
          <ul className="space-y-8 ">
            {["Furniture", "Decorative Accents", "Textiles", "Wall Decor", "All"].map((category, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:bg-gray-700 border-b border-s-gray-800 text-black p-2 rounded ${selectedCategory === category ? "bg-gray-700" : ""}`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        {/* Product section */}
        <div>
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">
              Top Selling Products for you
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>
          {/* Search input */}
          <div className="mb-4 flex justify-center">
            <div className="relative">
              <input
                type="text"
                className="py-2 pl-10 pr-4 w-80 border border-gray-300 rounded-full focus:outline-none focus:border-primary"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IoMdSearch className="text-gray-400" />
              </div>
            </div>
          </div>
          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* card section */}
              {currentProducts.map((data) => (
                <div
                  key={data.id}
                  className="space-y-3 p-4 rounded-lg shadow-lg"
                  style={{ backgroundColor: themes[data.id] }}
                >
                  <div
                    className="h-[220px] w-[150px] rounded-md flex items-center justify-center"
                  // style={{ backgroundColor: themes[data.id] }}
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="h-[220px] w-[150px] object-cover rounded-md"

                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                    <ThemeChanger
                      currentTheme={themes[data.id]}
                      onChangeTheme={(color) => handleThemeChange(data.id, color)}
                    />
                  </div>
                  <p>{data.price}</p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={() => handleAddToCart(data)}
                  >
                    Add Cart
                  </button>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
                disabled={currentPage === 1}
                className={`mx-1 px-3 py-1 rounded-full ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-default' : 'bg-primary text-white'}`}
              >
                Previous
              </button>
              {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'}`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredProducts.length / productsPerPage)))}
                disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
                className={`mx-1 px-3 py-1 rounded-full ${currentPage === Math.ceil(filteredProducts.length / productsPerPage) ? 'bg-gray-300 text-gray-600 cursor-default' : 'bg-primary text-white'}`}
              >
                Next
              </button>
            </div>
            {/* view all button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;









// import React, { useState } from "react";
// import Img1 from "../../assets/women/women.png";
// import Img2 from "../../assets/women/women2.jpg";
// import Img3 from "../../assets/women/women3.jpg";
// import Img4 from "../../assets/women/women4.jpg";
// import { FaStar } from "react-icons/fa6";
// import { IoMdSearch } from "react-icons/io";

// const ProductsData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Women Ethnic",
//     rating: 5.0,
//     color: "white",
//     aosDelay: "0",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Women western",
//     rating: 4.5,
//     color: "Red",
//     aosDelay: "200",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     rating: 4.7,
//     color: "brown",
//     aosDelay: "400",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed T-Shirt",
//     rating: 4.4,
//     color: "Yellow",
//     aosDelay: "600",
//   },
//   {
//     id: 5,
//     img: Img2,
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//   },
//   {
//     id: 6,
//     img: Img2,
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//   },
//   {
//     id: 7,
//     img: Img2,
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//   },
//   {
//     id: 8,
//     img: Img2,
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//   },
//   {
//     id: 9,
//     img: Img2,
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//   },
//   {
//     id: 10,
//     img: Img2,
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//   },
//   // Add more products as needed
// ];

// const themeColors = ["blue", "yellow", "green", "black"];

// const ThemeChanger = ({ currentTheme, onChangeTheme }) => {
//   return (
//     <div className="flex gap-2 mt-2">
//       {themeColors.map((color) => (
//         <button
//           key={color}
//           className={`w-6 h-6 rounded-full flex items-center justify-center`}
//           onClick={() => onChangeTheme(color)}
//           style={{ backgroundColor: color }}
//         >
//           {currentTheme === color && <span className="text-white text-xs">✔</span>}
//         </button>
//       ))}
//     </div>
//   );
// };

// const Products = ({ handleOrderPopup, handleAddToCart }) => {
//   const [themes, setThemes] = useState(
//     ProductsData.reduce((acc, product) => {
//       acc[product.id] = "white";
//       return acc;
//     }, {})
//   );

//   // Rest of your code

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState(ProductsData);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 5;

//   const handleThemeChange = (id, color) => {
//     setThemes((prevThemes) => ({ ...prevThemes, [id]: color }));
//   };

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);
//     const filtered = ProductsData.filter((product) =>
//       product.title.toLowerCase().includes(value)
//     );
//     setFilteredProducts(filtered);
//     setCurrentPage(1);
//   };

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container flex justify-center gap-2">
//         {/* Category section */}
//         {/* Rest of your code */}
//         {/* Product section */}
//         <div>
//           {/* Rest of your code */}
//           {/* Body section */}
//           <div>
//             <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
//               {/* card section */}
//               {currentProducts.map((data) => (
//                 <div
//                   data-aos="fade-up"
//                   data-aos-delay={data.aosDelay}
//                   key={data.id}
//                   className="space-y-3 p-4 rounded-lg shadow-lg"
//                 >
//                       <div
//                     className="h-[220px] w-[150px] rounded-md flex items-center justify-center"
//                     style={{ backgroundColor: themes[data.id] }}
//                   >
//                     <img
//                       src={data.img}
//                       alt={data.title}
//                       className="h-[220px] w-[150px] object-cover rounded-md"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">{data.title}</h3>
//                     <p className="text-sm text-gray-600">{data.color}</p>
//                     <div className="flex items-center gap-1">
//                       <FaStar className="text-yellow-400" />
//                       <span>{data.rating}</span>
//                     </div>
//                     <ThemeChanger
//                       currentTheme={themes[data.id]}
//                       onChangeTheme={(color) => handleThemeChange(data.id, color)}
//                     />
//                   </div>
//                   {/* Rest of your card content */}
//                   <button
//                     className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
//                     onClick={() => handleAddToCart(data.id)}
//                   >
//                     Add Cart
//                   </button>
//                 </div>
//               ))}
//             </div>
//             {/* Pagination */}

//             <div className="flex justify-center items-center mt-4">
// //               <button
//                 onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
//                 disabled={currentPage === 1}
//                 className={`mx-1 px-3 py-1 rounded-full ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-default' : 'bg-primary text-white'}`}
//               >
//                 Previous
//               </button>
//               {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => paginate(index + 1)}
//                   className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'}`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//               <button
//                 onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredProducts.length / productsPerPage)))}
//                 disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
//                 className={`mx-1 px-3 py-1 rounded-full ${currentPage === Math.ceil(filteredProducts.length / productsPerPage) ? 'bg-gray-300 text-gray-600 cursor-default' : 'bg-primary text-white'}`}
//               >
//                 Next
//               </button>
//             </div>
//             {/* Rest of your pagination code */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
