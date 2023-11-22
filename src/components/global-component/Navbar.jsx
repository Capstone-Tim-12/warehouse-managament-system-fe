import React, { useState } from "react";
import { useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Logo from "../../assets/logo.svg";
import HumbergerIcon from "../../assets/humberger-icon.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div  className={`flex flex-col fixed lg:fixed sm:flex-row md:fixed justify-between md:p-3 sm:items-center md:items-center w-full lg:flex-row sm:absolute z-50 ${
      isScrolled ? "bg-white" : "bg-transparent"
    }`}>
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
        >
          <p id="beranda" className="hover:text-[#455D7F]">Beranda</p>
        </ScrollLink>
        <ScrollLink to="aboutUs" smooth={true} duration={500}>
          <p id="tentang" className="hover:text-[#455D7F]">Tentang</p>
        </ScrollLink>
        <ScrollLink to="Faq" smooth={true} duration={500}>
          <p id="faq" className="hover:text-[#455D7F]">FAQ</p>
        </ScrollLink>
        <ScrollLink to="contactUs" smooth={true} duration={500}>
          <p id="kontak" className="hover:text-[#455D7F]">Kontak</p>
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
          <div className="flex flex-col cursor-pointer">
            <ScrollLink
              to="heroSection"
              smooth={true}
              duration={500}
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              <p id="beranda" className="block hover:text-[#455D7F] p-4">Beranda</p>
            </ScrollLink>

            <ScrollLink
              to="aboutUs"
              smooth={true}
              duration={500}
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              <p id="tentang" className="block hover:text-[#455D7F] p-4">Tentang</p>
            </ScrollLink>
            <ScrollLink
              to="Faq"
              smooth={true}
              duration={500}
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              <p id="faq" className="block hover:text-[#455D7F] p-4">FAQ</p>
            </ScrollLink>
            <ScrollLink
             to="contactUs"
             smooth={true}
             duration={500}
             onClick={() => {
               toggleMobileMenu();
             }}>
              <p id="kontak" className="block hover:text-[#455D7F] p-4">Kontak</p>
            </ScrollLink>
          </div>
          <button id="download-sekarang" className="block bg-[#17345F] text-white font-bold p-4 w-full hover:bg-[#455D7F] rounded-b-md">
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
