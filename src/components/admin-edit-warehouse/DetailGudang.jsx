import React from "react";
import IconDropdown from '../../assets/icons-dropdown.svg';

const DetailGudang = () => {

    
    return (
      <form className="">
        <div className="mt-8 mb-8">
          <input
            className="shadow appearance-none border rounded w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Nama Warehouse"
          />
        </div>
        <div className="mt-8 mb-8">
          <textarea
            className="shadow appearance-none border rounded w-full h-[120px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Deskripsi Gudang"
          ></textarea>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-[8px] items-center justify-center w-full">
            <select className="w-full h-[56px] p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none">
                <option>ReactJS Dropdown</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
            </select>
            <select className="w-full h-[56px] p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none">
                <option>ReactJS Dropdown</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
            </select>
            <select className="w-full h-[56px] p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none">
                <option>ReactJS Dropdown</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
            </select>
        </div>
      </form>
    );
    };
 export default DetailGudang