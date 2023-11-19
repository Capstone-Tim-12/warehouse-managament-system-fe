import React from "react";

const Picture = () => {
  return (
    <form className="">
      <div className="mt-8 mb-8">
        <input
          className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
          id="username"
          type="text"
          placeholder="Image Link URL"
        />
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-[12px] items-center justify-center">
        <div>
          <input
            className="w-full h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none appearance-none"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>
        <div>
          {" "}
          <input
            className="w-full h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none appearance-none"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>
        <div>
          {" "}
          <input
            className="w-full h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none appearance-none"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>
        <div>
          {" "}
          <input
            className="w-full h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none appearance-none"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
    </form>
  );
};
export default Picture;
