import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Peta from "../admin-create-warehouse/Peta";

const DetailGudang = () => {
  const [provinsi, setProvinsi] = useState([]);
  const [kota, setKota] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [selectedProvinsi, setSelectedProvinsi] = useState("");
  const [selectedKota, setSelectedKota] = useState("");
  const [selectedKecamatan, setSelectedKecamatan] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [typeOptions, setTypeOptions] = useState([]);

  const token = Cookies.get("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleTypeWarehouse = () => {
    axios
      .get("https://digiwarehouse-app.onrender.com/dasboard/warehouse/type", {
        headers,
      })
      .then((response) => {
        const data = response.data.data;

        const formattedData = data.map((item) => ({
          value: item.id,
          label: item.name,
        }));

        setTypeOptions(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    handleTypeWarehouse();
  }, []);

  useEffect(() => {
    axios
      .get("https://digiwarehouse-app.onrender.com/user/province")
      .then((response) => {
        console.log("Data:", response.data.data);
        setProvinsi(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleProvinsiChange = (event) => {
    setSelectedProvinsi(event.target.value);
  };

  useEffect(() => {
    if (selectedProvinsi !== "") {
      axios
        .get(
          `https://digiwarehouse-app.onrender.com/user/regency/${selectedProvinsi}`
        )
        .then((response) => {
          console.log("Data Kota:", response.data.data);
          setKota(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching city data:", error);
        });
    }
  }, [selectedProvinsi]);

  const handleKotaChange = (event) => {
    setSelectedKota(event.target.value);
  };

  useEffect(() => {
    if (selectedKota !== "") {
      axios
        .get(
          `https://digiwarehouse-app.onrender.com/user/district/${selectedKota}`
        )
        .then((response) => {
          console.log("Data Kecamatan:", response.data.data);
          setKecamatan(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching district data:", error);
        });
    }
  }, [selectedKota]);

  const handleKecamatanChange = (event) => {
    setSelectedKecamatan(event.target.value);
  };

  return (
    <form className="">
      <div className="mt-8 mb-8">
        <input
          className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
          id="name"
          name="name"
          type="text"
          placeholder="Nama Warehouse"
        />
      </div>
      <div className="mt-8 mb-8">
        <textarea
          className="shadow appearance-none border rounded-xl w-full h-[120px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
          id="description"
          name="description"
          placeholder="Deskripsi Gudang"
        ></textarea>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-[8px] items-center justify-center w-full">
        <select
          className="w-full h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none relative"
          value={selectedProvinsi}
          onChange={handleProvinsiChange}
        >
          <option value="" disabled hidden>
            Provinsi
          </option>
          {provinsi.length > 0 ? (
            provinsi.map((prov) => (
              <option key={prov.id} value={prov.id}>
                {prov.name}
              </option>
            ))
          ) : (
            <option>Loading...</option>
          )}
        </select>
        <select
          className="w-full h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none "
          value={selectedKota}
          onChange={handleKotaChange}
        >
          <option value="" disabled hidden>
            Kota/Kabupaten
          </option>
          {kota.length > 0 ? (
            kota.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))
          ) : (
            <option>Loading...</option>
          )}
        </select>
        <select
          id="disctridId"
          name="districId"
          className="w-full h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none "
          value={selectedKecamatan}
          onChange={handleKecamatanChange}
        >
          <option value="" disabled hidden>
            Kecamatan
          </option>
          {kecamatan.length > 0 ? (
            kecamatan.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))
          ) : (
            <option>Loading...</option>
          )}
        </select>
      </div>
      <div className="mt-4 mb-4">
        <input
          className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
          id="address"
          name="address"
          type="text"
          placeholder="Alamat"
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-[8px] items-center justify-center w-full">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
            id="surfaceArea"
            name="surfaceArea"
            type="text"
            placeholder="Luas Tanah"
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
            id="buildingArea"
            name="buildingArea"
            type="text"
            placeholder="Luas Bangunan"
          />
        </div>
        <div className="mb-4">
          <select
            id="warehouseTypeId"
            name="warehouseTypeId"
            className="w-full h-[56px] p-2.5 bg-white border font text-[#2C2C2E] rounded-xl shadow-sm outline-none"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="" disabled hidden>
              Ukuran
            </option>
            {typeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
          id="price"
          name="price"
          type="text"
          placeholder="Harga"
        />
      </div>
      <div className="mt-8 mb-4">
        <input
          className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
          id="owner"
          name="owner"
          type="text"
          placeholder="Nama Pemilik"
        />
      </div>
      <div className="mt-4 mb-4">
        <input
          className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="No. Telp"
        />
      </div>
      <Peta />
      <div>
        <h2 className="mt-8 text-[20px] text-cloud-burst-500 font-semibold">
          Picture
        </h2>
        <input
          className="w-full h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none appearance-none mt-3"
          type="file"
          id="foto1"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            handleSubmitAddPicture(e.target.files[0]);
          }}
        />
      </div>
      <div>
        <button className="bg-orange-500 w-[101px] h-[40px] px-2 sm:px-4 sm:py-3 rounded-lg  text-white font-bold text-center justify-center flex  items-center mt-8">
          Submit
        </button>
      </div>
    </form>
  );
};
export default DetailGudang;
