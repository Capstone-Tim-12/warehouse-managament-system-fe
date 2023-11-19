import React from "react";

const DetailGudang = () => {

    
    return (
        <form className="">
          <div className="mt-8 mb-8">
            <input className="shadow appearance-none border rounded w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nama Warehouse" />
          </div>
          <div className="mt-8 mb-8">
            <textarea className="shadow appearance-none border rounded w-full h-[120px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Deskripsi Gudang"></textarea>
          </div>
        </form>
     );
    };
 export default DetailGudang