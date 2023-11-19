import React from "react";
import ImagePeta from "../../assets/Rectangle 4176-peta.svg";

const Peta = () => {
  return (
    <div>
      <div>
        <img
          src={ImagePeta}
          alt="IconEdit"
          className="w-full h-[360px] rounded-lg mt-8"
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-1 gap-[12px] items-center justify-center">
        <div>
          <input
            className="w-full h-[56px] mt-8 p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none appearance-none placeholder:text-[#2C2C2E]"
            type="text"
            placeholder="Longtitude"
          />
        </div>
        <div>
          <input
            className="w-full h-[56px] mt-8 p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none appearance-none placeholder:text-[#2C2C2E]"
            type="text"
            placeholder="Altitude"
          />
        </div>
      </div>
    </div>
  );
};
export default Peta;
