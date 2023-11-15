import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Logo from "../../assets/logo.svg";
import HumbergerIcon from "../../assets/humberger-icon.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="flex flex-col sm:flex-row md:absolute justify-between md:p-3 md:bg-transparent sm:items-center md:items-center w-full lg:flex-row sm:absolute sm:z-50">
      <div className="sm:hidden p-4">
        <button onClick={toggleMobileMenu} className="outline-none">
          <img
            src={HumbergerIcon}
            alt=""
            width={40}
            className={`${isMobileMenuOpen} `}
          />
        </button>
      </div>

      <div className="hidden sm:flex md:flex items-center">
        <img src={Logo} alt="Logo" />
        <p className="text-[#17345F] font-bold text-lg">DigiHouse</p>
      </div>

      <div className="hidden sm:flex gap-x-4 text-[#17345F] font-bold cursor-pointer">
        <ScrollLink
          to="heroSection"
          smooth={true}
          duration={500}
          onClick={scrollToTop}
        >
          <p className="hover:text-[#455D7F]">Beranda</p>
        </ScrollLink>
        <ScrollLink to="aboutUs" smooth={true} duration={500}>
          <p className="hover:text-[#455D7F]">Tentang</p>
        </ScrollLink>
        <ScrollLink to="faq" smooth={true} duration={500}>
          <p className="hover:text-[#455D7F]">FAQ</p>
        </ScrollLink>
        <ScrollLink to="contactUs" smooth={true} duration={500}>
          <p className="hover:text-[#455D7F]">Kontak</p>
        </ScrollLink>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-white">
          <div className="flex justify-between pr-4 bg-[#17345F] items-center text-center">
            <div className="flex items-center p-4 space-x-2 text-white">
              <img src={Logo} alt="Logo" className="w-8 h-8" />
              <p className="text-lg font-bold">DigiHouse</p>
            </div>
          </div>
          <div className="flex flex-col">
            <ScrollLink
              to="heroSection"
              smooth={true}
              duration={500}
              onClick={() => {
                scrollToTop();
                toggleMobileMenu();
              }}
            >
              <p className="block hover:text-[#455D7F] p-4">Beranda</p>
            </ScrollLink>

            <ScrollLink
              to="aboutUs"
              smooth={true}
              duration={500}
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              <p className="block hover:text-[#455D7F] p-4">Tentang</p>
            </ScrollLink>
            <ScrollLink
              to="faq"
              smooth={true}
              duration={500}
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              <p className="block hover:text-[#455D7F] p-4">FAQ</p>
            </ScrollLink>
            <ScrollLink
             to="contactUs"
             smooth={true}
             duration={500}
             onClick={() => {
               toggleMobileMenu();
             }}>
              <p className="block hover:text-[#455D7F] p-4">Kontak</p>
            </ScrollLink>
          </div>
          <button className="block bg-[#17345F] text-white font-bold p-4 w-full hover:bg-[#455D7F] rounded-b-md">
            Download Sekarang
          </button>
        </div>
      )}

      <button className="hidden sm:block md:block bg-[#17345F] text-white font-bold w-[215px] h-[40px] rounded-[10px] hover:bg-[#455D7F] mt-4 md:mt-0">
        Download Sekarang
      </button>
    </div>
  );
};

export default Navbar;
