import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { WiDirectionRight } from "react-icons/wi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Texile",
    link: "/#",
  },
  {
    title: "New Arrival",
    link: "/#about",
  },
  // {
  //   title: "Contact",
  //   link: "/#contact",
  // },
  // {
  //   title: "Blog",
  //   link: "/#blog",
  // },
];

const Footer = () => {
  return (

    <>
      <div className="text-white bg-black h-1/2">
        <div className="container">
          <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
            {/* company details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                {/* <img src={footerLogo} alt="" className="max-w-[50px]" /> */}
                CD
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
                beatae ea recusandae blanditiis veritatis.
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Products
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* social links */}

              <div>
                <h1 className="text-xl !text-center sm:text-left sm:text-xl font-semibold">
                  Subscribe
                </h1>
                <div className=" flex flex-col md:flex-row md:justify-center md:items-center  justify-center">
                <input
                  data-aos="fade-up"
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-3"
                />
                <button className="bg-primary hover:scale-105 duration-300 text-white rounded-full group-hover:bg-white group-hover:text-primary">
                  <WiDirectionRight className=" text-4xl" />
                </button>
              </div>
              </div>

              


            </div>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center gap-4">
        <div className="flex items-center gap-3 mt-4 mb-4">
          <a href="#">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="#">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="#">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
        {/* <div className="mt-6">
  <div className="flex items-center gap-3">
    <FaLocationArrow />
    <p>Kigali, KST</p>
  </div>
  <div className="flex items-center gap-3 mt-3">
    <FaMobileAlt />
    <p>+250782458449</p>
  </div>
</div> */}
      </div>
    </>



  );
};

export default Footer;
