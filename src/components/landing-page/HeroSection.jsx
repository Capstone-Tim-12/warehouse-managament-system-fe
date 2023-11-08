import React from "react";
import HeroImage1 from "../../assets/hero1-image.svg";
import HeroImage2 from "../../assets/hero2-image.svg";
import PlaystoreImg from "../../assets/play-store.svg";
import AppstoreImg from "../../assets/app-store.svg";

const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-evenly h-screen overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full gap-8 z-50 ">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <p className="border border-x-[50px] border-[#000]"></p>
              <p>#1 Warehouse Management System</p>
            </div>
            <h2 className="text-[48px] font-bold leading-[55px] w-[600px]">
              Sewa Gudang dengan Mudah
            </h2>
            <p className="w-[450px]">
              Dengan mudah menemukan dan menyewa gudang untuk bisnis anda
            </p>
            <div className="flex gap-x-4">
              <img src={PlaystoreImg} alt="" />
              <img src={AppstoreImg} alt="" />
            </div>
          </div>
        </div>
        <img src={HeroImage1} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
