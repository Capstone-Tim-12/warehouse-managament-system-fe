import React from "react";

const Picture = () => {
  return (
    <form className="">
        <div>
          <input
            className="w-full h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none appearance-none mt-8"
            type="file"
            id="foto1"
            accept="image/png, image/jpeg"
          />
        </div>
    </form>
  );
};
export default Picture;