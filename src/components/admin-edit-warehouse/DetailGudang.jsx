import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { notification } from "antd";
import { Upload, message } from "antd";
import { InboxOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import IconDelete from "../../assets/icon-delete.svg";
import customMarkerIcon from "../../assets/marker.svg";
import { useSelector } from "react-redux";
import { data } from "jquery";

const Dragger = Upload.Dragger;
const JakartaCoordinates = [-6.2088, 106.8456];

const customIcon = new L.Icon({
  iconUrl: customMarkerIcon,
  iconSize: [25, 40],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const DetailGudang = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataWarehouse, setDataWarehouse] = useState({
    name: "",
    description: "",
    districId: "",
    address: "",
    provinceId: "",
    regencyId: "",
    surfaceArea: 0,
    buildingArea: 0,
    price: 0,
    owner: "",
    warehouseTypeId: 0,
    phoneNumber: "",
    longitude: 0,
    latitude: 0,
    image: [],
  });

  const [provinsi, setProvinsi] = useState([]);
  const [kota, setKota] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [selectedProvinsi, setSelectedProvinsi] = useState("");
  const [selectedKota, setSelectedKota] = useState("");
  const [selectedKecamatan, setSelectedKecamatan] = useState("");
  const [typeOptions, setTypeOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate()

  const token = useSelector((state) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleDataWarehouseId = () => {
    axios
      .get(`https://digiwarehouse-app.onrender.com/warehouse/detail/${id}`, {
        headers,
      })
      .then((response) => {
        const warehouseData = response?.data?.data;
        setDataWarehouse({
          name: warehouseData.name || "",
          description: warehouseData.description || "",
          districId: warehouseData.districtId || "",
          address: warehouseData.address || "",
          provinceId: warehouseData.provinceId || "",
          regencyId: warehouseData.regencyId || "",
          surfaceArea: warehouseData.surfaceArea || 0,
          buildingArea: warehouseData.buildingArea || 0,
          price: warehouseData.annualPrice || 0, // Assuming annualPrice is the price
          owner: warehouseData.owner || "",
          warehouseType: warehouseData.warehouseType || "",
          warehouseTypeId: warehouseData.warehouseTypeId,
          phoneNumber: warehouseData.phoneNumber || "",
          longitude: warehouseData.longitude || 0,
          latitude: warehouseData.latitude || 0,
          image: warehouseData.image || [],
          status: warehouseData.status || "",
        });
        console.log(warehouseData);

        const images = warehouseData.image || [];
        const updatedFileList = images.map((image, index) => ({
          uid: `image-${index}`,
          name: `Image-${index}`,
          status: "done",
          url: image, // Assuming image is a URL string
        }));

        setFileList(updatedFileList);

        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    setIsLoading(true);
    handleDataWarehouseId();
  }, [id]);

  useEffect(() => {
    if (dataWarehouse) {
      const selectedTypeId = dataWarehouse?.warehouseTypeId;
      const selectedWarehouseType = typeOptions.find(
        (item) => item.value === selectedTypeId
      );

      if (selectedWarehouseType) {
        setSelectedOptions(selectedWarehouseType.value);
      } else {
        console.error("Selected warehouse type not found:", selectedTypeId);
        // Handle error or set default option if needed
      }
    }
  }, [dataWarehouse, typeOptions]);

  useEffect(() => {
    if (typeOptions.length > 0) {
      const selectedWarehouseType = typeOptions.find(
        (item) => item.id === dataWarehouse.warehouseTypeId
      );
      if (selectedWarehouseType) {
        setSelectedOptions(selectedWarehouseType.id);
      }
    }
  }, [typeOptions, dataWarehouse.warehouseTypeId]);

  useEffect(() => {
    if (provinsi.length > 0) {
      const selectedProvince = provinsi.find(
        (prov) => prov.id === dataWarehouse.provinceId
      );
      if (selectedProvince) {
        setSelectedProvinsi(selectedProvince.id);
      }
    }
  }, [provinsi, dataWarehouse.provinceId]);

  useEffect(() => {
    if (kota.length > 0) {
      const selectedKota = kota.find(
        (city) => city.id === dataWarehouse.regencyId
      );
      if (selectedKota) {
        setSelectedKota(selectedKota.id);
      }
    }
  }, [kota, dataWarehouse.regencyId]);

  useEffect(() => {
    if (kecamatan.length > 0) {
      const selectedDistrict = kecamatan.find(
        (district) => district.id === dataWarehouse.districId
      );
      if (selectedDistrict) {
        setSelectedKecamatan(selectedDistrict.id);
      }
    }
  }, [kecamatan, dataWarehouse.districId]);

  const handleProvinsiChange = (event) => {
    setSelectedProvinsi(event.target.value);
  };

  const handleKotaChange = (event) => {
    setSelectedKota(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataWarehouse((prevFormData) => ({ ...prevFormData, [name]: value }));
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

  const [fileList, setFileList] = useState([]);

  const handleSubmitAddPicture = async (file) => {
    return new Promise(async (resolve, reject) => {
      let formData = new FormData();
      formData.append("photos", file);

      try {
        const response = await fetch(
          "https://digiwarehouse-app.onrender.com/warehouse/photo/upload",
          {
            method: "POST",
            body: formData,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setDataWarehouse((prev) => ({
            ...prev,
            image: [...prev.image, ...data.data.images],
          }));

          setFileList((prev) => [
            ...prev,
            {
              uid: `${file.uid}-${fileList.length}`,
              name: file.name,
              status: "done",
              url: data.data.images[0],
            },
          ]);

          resolve();
        } else {
          console.log("Oops! something err");
          reject("Upload failed");
        }
      } catch (error) {
        console.error("Error occurred:", error);
        reject(error);
      }
    });
  };

  const handleRemove = (file) => {
    setFileList((prev) => prev.filter((item) => item.uid !== file.uid));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dataWarehouse.name) {
      message.error({
        content: "Nama Gudang Tidak boleh kosong",
        duration: 2,
      });
      return;
    }

    if (!dataWarehouse.description) {
      message.error({
        content: "Deskripsi Tidak boleh kosong",
        duration: 2,
      });
      return;
    }

    if (!selectedProvinsi) {
      message.error({
        content: "Provinsi belum dipilih",
        duration: 2,
      });
      return;
    }

    if (!selectedKota) {
      message.error({
        content: "Kota/Kabupaten belum dipilih",
        duration: 2,
      });
      return;
    }

    if (!dataWarehouse.districId) {
      message.error({
        content: "Kecamatan belum dipilih",
        duration: 2,
      });
      return;
    }

    if (!dataWarehouse.address) {
      message.error({
        content: "Alamat Tidak boleh kosong",
        duration: 2,
      });
      return;
    }

    if (!dataWarehouse.surfaceArea || isNaN(dataWarehouse.surfaceArea)) {
      message.error({
        content: "Luas Tanah Tidak Boleh Kosong Dan Harus Berisi Angka",
        duration: 2,
      });
      return;
    }

    if (!dataWarehouse.buildingArea || isNaN(dataWarehouse.buildingArea)) {
      message.error({
        content: "Luas Bangunan Tidak Boleh Kosong Dan Harus Berisi Angka",
        duration: 2,
      });
      return;
    }

    if (!dataWarehouse.warehouseTypeId) {
      message.error({
        content: "Ukuran Gudang Belum Di Pilih",
        duration: 2,
      });
      return;
    }

    if (!dataWarehouse.price || isNaN(dataWarehouse.price)) {
      message.error({
        content: "Harga Tidak Boleh Kosong Dan Harus Berisi Angka",
        duration: 2,
      });
      return;
    }

    if (!dataWarehouse.owner) {
      message.error({
        content: "Nama Pemilik Tidak Boleh Kosong",
        duration: 2,
      });
      return;
    }

    if (!dataWarehouse.phoneNumber) {
      message.error({
        content: "Nomor Telp Tidak Boleh Kosong",
        duration: 2,
      });
    }

    if (dataWarehouse.longitude == null || dataWarehouse.longitude === 0) {
      message.error({
        content: "Longitude tidak boleh kosong",
        duration: 2,
      });
      return;
    }

    if (dataWarehouse.latitude == null || dataWarehouse.latitude === 0) {
      message.error({
        content: "Latitude tidak boleh kosong",
        duration: 2,
      });
      return;
    }

    if (!fileList || fileList.length === 0) {
      message.error({
        content: "File gambar masih kosong",
        duration: 2,
      });
      return;
    }

    const dataWarehouseUpdate = {
      name: "",
      description: "",
      districId: "",
      address: "",
      provinceId: "",
      regencyId: "",
      surfaceArea: 0,
      buildingArea: 0,
      price: 0,
      owner: "",
      warehouseTypeId: 0,
      phoneNumber: "",
      longitude: 0,
      latitude: 0,
      image: [],
    };

    const allFields = Object.keys(dataWarehouse);

    allFields.forEach((field) => {
      if (dataWarehouse[field]) {
        dataWarehouseUpdate[field] = dataWarehouse[field];
      }
    });

    axios
      .put(
        `https://digiwarehouse-app.onrender.com/warehouse/detail/${id}`,
        dataWarehouseUpdate,
        {
          headers,
        }
      )
      .then((res) => {
        console.log(res);
        setIsSuccess(true);

        notification.success({
          message: "Success",
          description: "Data warehouse berhasil ditambahkan.",
          placement: "top",
        });

        navigate("/admin/manage-gudang")
      })
      .catch((err) => {
        console.log(err);

        notification.error({
          message: "Error",
          description: "Terjadi kesalahan saat menambahkan data warehouse.",
          placement: "top",
        });
      });
  };

  const handleChangeType = (value) => {
    setSelectedOptions(value);
    setDataWarehouse((prevFormData) => ({
      ...prevFormData,
      warehouseTypeId: value,
    }));
  };
  
  useEffect(() => {
    axios
      .get("https://digiwarehouse-app.onrender.com/user/province")
      .then((response) => {
        setProvinsi(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedProvinsi !== "") {
      axios
        .get(
          `https://digiwarehouse-app.onrender.com/user/regency/${selectedProvinsi}`
        )
        .then((response) => {
          setKota(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching city data:", error);
        });
    }
  }, [selectedProvinsi]);

  useEffect(() => {
    if (selectedKota !== "") {
      axios
        .get(
          `https://digiwarehouse-app.onrender.com/user/district/${selectedKota}`
        )
        .then((response) => {
          setKecamatan(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching district data:", error);
        });
    }
  }, [selectedKota]);

  // Bagian Peta
  const [position, setPosition] = useState(JakartaCoordinates);
  const [longitude, setLongitude] = useState(JakartaCoordinates[1].toString());
  const [latitude, setLatitude] = useState(JakartaCoordinates[0].toString());
  const mapRef = useRef(null);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
    setLongitude(lng.toString());
    setLatitude(lat.toString());
  };

  const handleLongitudeChange = (e) => {
    const newLongitude = parseFloat(e.target.value);

    setDataWarehouse((prev) => ({
      ...prev,
      longitude: isNaN(newLongitude) ? null : newLongitude,
    }));

    setLongitude(e.target.value);
  };

  const handleLatitudeChange = (e) => {
    const newLatitude = parseFloat(e.target.value);

    setDataWarehouse((prev) => ({
      ...prev,
      latitude: isNaN(newLatitude) ? null : newLatitude,
    }));
    setLatitude(e.target.value);
  };

  useEffect(() => {
    const newLongitude = parseFloat(dataWarehouse.longitude);
    const newLatitude = parseFloat(dataWarehouse.latitude);

    // Periksa apakah nilai longitude dan latitude valid
    if (!isNaN(newLongitude) && !isNaN(newLatitude)) {
      setPosition([newLatitude, newLongitude]);
    }
  }, [dataWarehouse.longitude, dataWarehouse.latitude]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(position, 13);
    }
  }, [position]);

  const handleResetMap = () => {
    setPosition(JakartaCoordinates);
    setLongitude(JakartaCoordinates[1].toString());
    setLatitude(JakartaCoordinates[0].toString());

    if (mapRef.current) {
      mapRef.current.setView(JakartaCoordinates, 13);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="mt-8 mb-8">
        <input
          className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
          id="name"
          name="name"
          type="text"
          placeholder="Nama Warehouse"
          value={dataWarehouse.name}
          onChange={handleChange}
        />
      </div>
      <div className="mt-8 mb-8">
        <textarea
          className="shadow appearance-none border rounded-xl w-full h-[120px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
          id="description"
          name="description"
          placeholder="Deskripsi Gudang"
          value={dataWarehouse.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-[8px] items-center justify-center w-full">
        <select
          id="province"
          name="province"
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
          id="regency"
          name="regency"
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
          onChange={handleChange}
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
          value={dataWarehouse.address}
          onChange={handleChange}
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
            value={dataWarehouse.surfaceArea}
            onChange={(e) =>
              setDataWarehouse((prevFormData) => ({
                ...prevFormData,
                surfaceArea: parseInt(e.target.value),
              }))
            }
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
            id="buildingArea"
            name="buildingArea"
            type="text"
            placeholder="Luas Bangunan"
            value={dataWarehouse.buildingArea}
            onChange={(e) =>
              setDataWarehouse((prevFormData) => ({
                ...prevFormData,
                buildingArea: parseInt(e.target.value),
              }))
            }
          />
        </div>
        <div className="mb-4">
          <select
            id="warehouseTypeId"
            name="warehouseTypeId"
            className="w-full h-[56px] p-2.5 bg-white border font text-[#2C2C2E] rounded-xl shadow-sm outline-none"
            value={selectedOptions}
            onChange={(e) => handleChangeType(e.target.value)}
          >
            <option value="" disabled selected>
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
          value={dataWarehouse.price}
          onChange={(e) =>
            setDataWarehouse((prevFormData) => ({
              ...prevFormData,
              price: parseInt(e.target.value),
            }))
          }
        />
      </div>
      <div className="mt-8 mb-4">
        <input
          className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
          id="owner"
          name="owner"
          type="text"
          placeholder="Nama Pemilik"
          value={dataWarehouse.owner}
          onChange={handleChange}
        />
      </div>
      <div className="mt-4 mb-4">
        <input
          className="shadow appearance-none border rounded-xl w-full h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="No. Telp"
          value={dataWarehouse.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <MapContainer
          ref={mapRef}
          center={position}
          zoom={13}
          style={{ height: "360px", width: "100%" }}
          onClick={handleMapClick}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <div>
                <h2>Selected Location</h2>
                <p>Longitude: {position[1]}</p>
                <p>Latitude: {position[0]}</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
        <button
          type="button"
          className="bg-[#FF3B3B] hover:bg-red-600 w-[150px] h-[40px] px-2 sm:px-4 sm:py-3 mt-8 rounded-xl flex items-center justify-items-center "
          onClick={handleResetMap}
        >
          <img src={IconDelete} alt="IconDelete" className="w-6 h-6" />
          <span className="text-white ml-2 ">Reset Map</span>
        </button>
        <div className="grid grid-cols-2 grid-rows-1 gap-[12px] items-center justify-center">
          <div>
            <input
              className="w-full h-[56px] mt-8 p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none appearance-none placeholder:text-[#2C2C2E]"
              type="text"
              placeholder="Longitude"
              value={dataWarehouse.longitude}
              onChange={handleLongitudeChange}
            />
          </div>
          <div>
            <input
              className="w-full h-[56px] mt-8 p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none appearance-none placeholder:text-[#2C2C2E]"
              type="text"
              placeholder="Latitude"
              value={dataWarehouse.latitude}
              onChange={handleLatitudeChange}
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="mt-8 text-[20px] text-cloud-burst-500 font-semibold">
          Picture
        </h2>
        <Dragger
          id="upload-image"
          multiple
          listType="picture-card"
          fileList={fileList}
          customRequest={({ file, onSuccess, onError }) => {
            handleSubmitAddPicture(file)
              .then(() => onSuccess())
              .catch((error) => {
                console.error("Error uploading picture:", error);
                onError(error);
              });
          }}
          onRemove={(file) => handleRemove(file)}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </div>
      <div>
        <button
          id="submit"
          className="bg-orange-500 hover:bg-orange-600 w-[101px] h-[40px] px-2 sm:px-4 sm:py-3 rounded-lg  text-white font-bold text-center justify-center flex  items-center mt-8"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default DetailGudang;
