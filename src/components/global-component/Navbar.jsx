import React from "react";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
      <div className="flex flex-col absolute justify-between p-3 bg-transparent items-center w-full md:flex-row">
        <div className="flex items-center">
          <img src={Logo} alt="" />
          <p className="text-[#17345F] font-bold">DigiHouse</p>
        </div>
        <div className="flex gap-[30px] text-[#17345F] font-bold">
          <p className="hover:text-[#455D7F]">Beranda</p>
          <p className="hover:text-[#455D7F]">Tentang</p>
          <p className="hover:text-[#455D7F]">FAQ</p>
          <p className="hover:text-[#455D7F]">Kontak</p>
        </div>
        <button className="bg-[#17345F] text-white font-bold w-[215px] h-[40px] rounded-[10px] hover:bg-[#455D7F] mt-4 md:mt-0">Download Sekarang</button>
      </div>
  );
};

export default Navbar;
