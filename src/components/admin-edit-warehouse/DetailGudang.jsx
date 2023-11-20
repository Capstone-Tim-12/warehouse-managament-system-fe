import React from "react";
import IconDropdown from '../../assets/icons-dropdown.svg';

const DetailGudang = () => {

    
    return (
      <form className="">
        <div className="mt-8 mb-8">
          <input
            className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
            id="username"
            type="text"
            placeholder="Nama Warehouse"
          />
        </div>
        <div className="mt-8 mb-8">
          <textarea
            className="shadow appearance-none border rounded-xl w-full h-[120px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
            id="description"
            placeholder="Deskripsi Gudang"
          ></textarea>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-[8px] items-center justify-center w-full">
          <select
            className="w-full h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none"
            value=""
          >
            <option value="" disabled hidden>
              Provinsi
            </option>
            <option>Provinsi 1</option>
            <option>Provinsi 2</option>
            <option>Provinsi 3</option>
            <option>Provinsi 4</option>
          </select>
          <select
            className="w-full h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none "
            value=""
          >
            <option value="" disabled hidden>
              Kota/Kabupaten
            </option>
            <option>Kota 1</option>
            <option>Kota 2</option>
            <option>Kota 3</option>
            <option>Kota 4</option>
          </select>
          <select
            className="w-full h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none "
            value=""
          >
            <option value="" disabled hidden>
              Kecamatan
            </option>
            <option>Kecamatan 1</option>
            <option>Kecamatan 2</option>
            <option>Kecamatan 3</option>
            <option>Kecamatan 4</option>
          </select>
        </div>
        <div className="mt-4 mb-4">
          <input
            className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
            id="username"
            type="text"
            placeholder="Alamat"
          />
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-[8px] items-center justify-center w-full">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
              id="username"
              type="text"
              placeholder="Luas Tanah"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
              id="username"
              type="text"
              placeholder="Luas Bangunan"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
              id="username"
              type="text"
              placeholder="Harga"
            />
          </div>
        </div>
        <div className="mt-8 mb-4">
          <input
            className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
            id="username"
            type="text"
            placeholder="Nama Pemilik"
          />
        </div>
        <div className="mt-4 mb-4">
          <input
            className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
            id="username"
            type="text"
            placeholder="No. Telp"
          />
        </div>
        <div className="mt-4">
          <select
            className=" w-[185px] h-[56px] p-2.5 bg-white border font text-[#2C2C2E] rounded-xl shadow-sm outline-none "
            value=""
          >
            <option value="" disabled hidden>
              Skema Pembayaran
            </option>
            <option>Mingguan</option>
            <option>Bulanan</option>
            <option>Tahunan</option>
          </select>
        </div>
      </form>
    );
    };
 export default DetailGudang