import React from "react";
import HeroImg2 from "../../assets/hero2-image.svg";
import SafetyPolicyImg from "../../assets/safety-policy.svg";
import EasyConnectionImg from "../../assets/easy-connection.svg";
import SimplicityImg from "../../assets/simplicity.svg";

const WhyUs = () => {
  return (
    <div className="bg-[#17345F] relative">
      <div className="flex md:justify-center lg:justify-between items-center text-white px-10">
        <div className="relative z-10">
          <img
            src={HeroImg2}
            alt=""
            className="hidden lg:flex lg:w-full lg:h-auto md:hidden max-w-full -mt-10 lg:-mt-32 xl:-mt-40 2xl:-mt-48 3xl:-mt-56"
          />
        </div>
        <div className="flex flex-col gap-y-4 w-full max-w-2xl py-8">
          <div className="flex items-center gap-2 md:gap-5">
            <p className="border border-x-[10px] md:border md:border-x-[30px] lg:border lg:border-x-[40px] border-[#ffffff]"></p>
            <p className="text-sm md:text-[14px] lg:text-[24px]">#1 Warehouse Management System</p>
          </div>
          <h2 className="text-[23px] md:text-[20px] lg:text-[48px] lg:w-[600px] font-bold w-full">
            Mengapa Menyewa melalui Digihouse
          </h2>
          <div className="bg-white w-full h-[141px] lg:w-[525px] lg:h-[161px] flex items-center rounded p-5 lg:p-8 gap-5 lg:gap-10 text-[#17345F]">
            <img
              src={SafetyPolicyImg}
              alt=""
              className="w-12 h-12 lg:w-20 lg:h-20"
            />
            <div>
              <h3 className="font-bold text-sm md:text-lg lg:text-2xl ">
                Kebijakan Keamanan Kami
              </h3>
              <h4 className="text-[13px] lg:text-xl">Kepatuhan Dan Kewajiban Hukum</h4>
              <p className="text-[10px] pt-2 lg:leading-[21px] lg:text-base">
                Kebijakan keselamatan yang baik memastikan bahwa organisasi
                mematuhi semua undang undang, peraturan, dan standar industri
                yang relevan
              </p>
            </div>
          </div>
          <div className="bg-white w-full h-[131px] lg:w-[525px] lg:h-[161px] flex items-center rounded p-5 lg:p-8 gap-5 lg:gap-10 text-[#17345F]">
            <img
              src={EasyConnectionImg}
              alt=""
              className="w-12 h-12  lg:w-20 lg:h-20"
            />
            <div>
              <h3 className="font-bold text-sm md:text-lg lg:text-2xl">
                Koneksi Mudah
              </h3>
              <h4 className="text-[13px] lg:text-lg">
                Efisiensi Dan peninangkatan produktifitas
              </h4>
              <p className="text-[10px] pt-2 lg:leading-[21px] lg:text-base">
                Koneksi mudah, menyederhanakan proses, menghemat waktu dan
                tenaga
              </p>
            </div>
          </div>
          <div className="bg-white w-full h-[131px] lg:w-[525px] lg:h-[161px] flex items-center rounded p-5 lg:p-8 gap-5 lg:gap-10 text-[#17345F]">
            <img
              src={SimplicityImg}
              alt=""
              className="w-12 h-12 lg:w-20 lg:h-20"
            />
            <div>
              <h3 className="font-bold text-sm md:text-lg lg:text-2xl">
                Kesederhanaan yang Terbaik
              </h3>
              <h4 className="text-sm lg:text-xl">Kepuasan Pelanggan</h4>
              <p className="text-xs pt-2 lg:leading-[21px] lg:text-base">
                Menjaga segala sesuatunya tetap lugas, rapi, dan mudah
                dimengerti
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
