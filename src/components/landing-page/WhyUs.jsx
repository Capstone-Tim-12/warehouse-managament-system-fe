import React from "react";
import HeroImg2 from "../../assets/hero2-image.svg";
import SafetyPolicyImg from "../../assets/safety-policy.svg";
import EasyConnectionImg from "../../assets/easy-connection.svg";
import SimplicityImg from "../../assets/simplicity.svg";

const WhyUs = () => {
  return (
    <div className="bg-cloud-burst-500">
      <img src={HeroImg2} alt="" className="absolute inset-0 pt-[600px] w-full h-auto md:w-auto" />
      <div className="flex justify-end items-center text-white p-5 md:p-10 lg:p-20">
        <div className="flex flex-col gap-y-4 max-w-2xl w-full md:w-[500px]">
          <div className="flex items-center gap-2 md:gap-5">
            <p className="border border-x-[50px] border-white"></p>
            <p>#1 Warehouse Management System</p>
          </div>
          <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-bold w-full">
            Mengapa Menyewa melalui Digihouse
          </h2>
          <div className="bg-white w-full md:w-[525px] h-[161px] flex items-center rounded p-5 md:p-8 gap-5 md:gap-10 text-cloud-burst-500">
            <img src={SafetyPolicyImg} alt="" className="w-16 h-16 md:w-20 md:h-20" />
            <div>
              <h3 className="font-bold text-lg md:text-xl">Kebijakan Keamanan Kami</h3>
              <h4>Kepatuhan Dan Kewajiban Hukum</h4>
              <p className="text-sm pt-2 md:leading-[21px]">
                Kebijakan keselamatan yang baik memastikan bahwa organisasi
                mematuhi semua undang undang, peraturan, dan standar industri
                yang relevan
              </p>
            </div>
          </div>
          <div className="bg-white w-full md:w-[525px] h-[161px] flex items-center rounded p-5 md:p-8 gap-5 md:gap-10 text-cloud-burst-500">
            <img src={EasyConnectionImg} alt="" className="w-16 h-16 md:w-20 md:h-20" />
            <div>
              <h3 className="font-bold text-lg md:text-xl">Koneksi Mudah</h3>
              <h4>Efisiensi Dan peninangkatan produktifitas</h4>
              <p className="text-sm pt-2 md:leading-[21px]">
                Koneksi mudah, menyederhanakan proses, menghemat waktu dan
                tenaga
              </p>
            </div>
          </div>
          <div className="bg-white w-full md:w-[525px] h-[161px] flex items-center rounded p-5 md:p-8 gap-5 md:gap-10 text-cloud-burst-500">
            <img src={SimplicityImg} alt="" className="w-16 h-16 md:w-20 md:h-20" />
            <div>
              <h3 className="font-bold text-lg md:text-xl">Kesederhanaan yang Terbaik</h3>
              <h4>Kepuasan Pelanggan</h4>
              <p className="text-sm pt-2 md:leading-[21px]">
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
