import React from "react";
import HeroImage1 from "../../assets/hero1-image.svg";
import PlaystoreImg from "../../assets/play-store.svg";
import AppstoreImg from "../../assets/app-store.svg";

const HeroSection = () => {
  return (
    <div id="heroSection">
      <div className="flex flex-col lg:flex-row sm:flex-row pl-6 justify-center lg:justify-evenly h-[340px] md:h-[580px] sm:h-[500px] lg:h-screen overflow-hidden w-full">
        <div className="flex flex-col lg:items-center justify-center w-full">
          <div className="flex flex-col gap-5 ">
            <div className="flex items-center gap-5">
              <p className="border border-x-[10px] sm:border sm:border-x-[100px] md:border md:border-x-[40px] border-[#000]"></p>
              <p className="sm:text-lg md:text-lm lg:text-xl">
                #1 Warehouse Management System
              </p>
            </div>
            <h2 className="text-[24px] sm:text-[50px] md:text-[38px] lg:text-[48px] font-bold leading-[55px] md:w-[400px] lg:w-[600px] sm:w-[800px]">
              Sewa Gudang dengan Mudah
            </h2>
            <p className="w-[320px] sm:w-[500px] md:w-[400px] lg:w-[550px] sm:mb-4 lg:text-xl">
              Dengan mudah menemukan dan menyewa gudang untuk bisnis anda
            </p>
            <div className="flex gap-x-4">
              <img src={PlaystoreImg} alt="" className="md:w-32 lg:w-48" />
              <img src={AppstoreImg} alt="" className="md:w-32 lg:w-48" />
            </div>
          </div>
        </div>
        <div className="relative -z-50">
          <img
            src={HeroImage1}
            alt=""
            className="w-[30rem] md:w-[40rem] 2xl:w-[60rem] hidden md:flex  lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
