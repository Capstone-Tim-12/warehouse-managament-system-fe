import React from "react";
import ImagePeta from "../../assets/Rectangle 4176-peta.svg";
import IconDelete from '../../assets/icon-delete.svg'; 

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
      <button className='bg-[#FF3B3B] w-[150px] h-[40px] px-2 sm:px-4 sm:py-3 mt-8 rounded-xl flex  items-center justify-items-center '>
                <img src={IconDelete} alt="IconDelete" className='w-6 h-6' />
                <span className='text-white ml-2 '>Reset Map</span>
            </button>
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
            placeholder="Latitude"
          />
        </div>
      </div>
    </div>
  );
};
export default Peta;
