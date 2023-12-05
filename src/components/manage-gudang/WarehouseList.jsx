import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import searchIcon from "../../assets/search-icon.svg";
import plusIcon from "../../assets/plus-Icons.svg";
import deleteWhiteIcon from "../../assets/delete(white)-Icons.svg";
import arrowBack from "../../assets/arrow-back-left-Icons.svg";
import arrowNext from "../../assets/arrow-next-right-Icons.svg";
import arrowTopDown from "../../assets/arrow-top-down-icons.svg";
import dropDownIcon from "../../assets/icon-dropdown.svg";
import moreIcon from "../../assets/icon-more.svg";
import { useEffect, useState } from "react";

const WarehouseList = () => {
  const navigate = useNavigate();
  const [openDropDown, setOpenDropDown] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectId, setSelectId] = useState([]);
  const [dataWarehouse, setDataWarehouse] = useState([]);

  const handleDataWarehouse = () => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(
        "http://ec2-18-139-162-85.ap-southeast-1.compute.amazonaws.com:8086/warehouse/user/list?page=1&limit=10",
        { headers }
      )
      .then((response) => {
        setDataWarehouse(response?.data?.data);
        console.log(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleDataWarehouse();
  }, []);

  const handleDropDown = (id) => {
    setOpenDropDown(openDropDown === id ? null : id);
  };

  const handleSelectAllCheckBox = () => {
    setSelectAll(!selectAll);
    setSelectId(selectAll ? [] : dataWarehouse.map((item) => item.id));
  };

  const handleSelectIdCheckBox = (id) => {
    setSelectId((prevId) => {
      if (prevId.includes(id)) {
        return prevId.filter((prevId) => prevId !== id);
      } else {
        return [...prevId, id];
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col items-start md:items-center sm:items-center sm:flex-row md:flex-row md:gap-x-5 sm:gap-x-5 my-4 ml-4 lg:p-3">
        <div>
          <h2 className="text-cloud-burst-500 text-[20px] font-bold mb-3 md:mb-0">
            Daftar Warehouse
          </h2>
        </div>
        <div className="flex gap-x-3">
          <button
            id="addWarehouse"
            onClick={() => navigate("/admin/edit-warehouse")}
            className="bg-crusta-500 flex gap-x-3 rounded-md p-3 md:p-2 md:py-3 text-white "
          >
            <img src={plusIcon} />
            <p className="hidden md:block">Tambah Gudang</p>
          </button>
          <button
            id="deleteWarehouse"
            className="bg-crusta-500 flex gap-x-3 rounded-md p-3 md:p-2 md:py-3 text-white "
          >
            <img src={deleteWhiteIcon} />
            <p className="hidden md:block">Hapus Gudang</p>
          </button>
          <form
            className="relative rounded-[28px] flex items-center"
            // onSubmit={(e) => e.preventDefault()}
          >
            <button className="absolute pl-3">
              <img src={searchIcon} alt="search" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="w-[220px] sm:w-[380px] md:w-[410px] border border-[#D1D1D6] focus:outline-none  py-3 px-9 rounded-[10px]  "
            />
          </form>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className={`ml-4 md:ml-10 w-max md:w-[93.2%]`}>
          <thead>
            <tr className="text-cloud-burst-500 text-center md:text-left border-b-2">
              <th className="relative pb-5 md:pr-6">
                <input
                  className="absolute left-0 focus:outline-none focus:ring-0 border-slate-700 border-2 rounded-sm"
                  checked={selectAll}
                  onChange={handleSelectAllCheckBox}
                  type="checkbox"
                />
              </th>
              <th className="pb-2 pr-[12px] pl-[12px] md:pr-6">No. </th>
              <th className="pb-2 pr-[160px] md:pr-26">Nama Warehouse</th>
              <th className="pb-2 pr-[90px] md:pr-24">Lokasi</th>
              <th className="cursor-pointer relative pb-2 pr-6 md:pr-8">
                Ukuran
                <img
                  className="absolute right-0 md:left-[55px] bottom-[6px] md:bottom-1.5"
                  src={arrowTopDown}
                />
              </th>
              <th className="cursor-pointer relative pb-2 pl-4 pr-[12px] md:pr-24">
                Harga
                <img
                  className="absolute right-[15px] md:left-[61px] bottom-[6px] md:bottom-1.5"
                  src={arrowTopDown}
                />
              </th>
              <th className="cursor-pointer relative pr-5">
                Status
                <img
                  className="absolute left-16 md:left-[50px] bottom-[4px] md:bottom-1"
                  src={dropDownIcon}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {dataWarehouse &&
              dataWarehouse.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="h-[70px] border-b align-bottom text-cloud-burst-500"
                  >
                    <td className="pb-2">
                      <input
                        onChange={() => handleSelectIdCheckBox(item.id)}
                        type="checkbox"
                        checked={selectId.includes(item.id)}
                        className="focus:ring-0 border-slate-700 border-2 rounded-sm"
                      />
                    </td>
                    <td className="pb-2 pl-[12px] ">{item?.id}</td>
                    <td className="pb-2" onClick={() => navigate(`/admin/detail-gudang/${item.id}`, {state: {id:item.id}})}>{item?.name}</td>
                    <td className="pb-2">{item?.provinceName}</td>
                    <td className="pb-2">{item?.buildingArea}</td>
                    <td className="pb-2 pl-9 md:pl-0">{item?.annualPrice}</td>
                    <td className="pb-2 px-4 md:px-0">
                      <button
                        className={`${
                          item?.status === "tersewa"
                            ? "bg-[#FF3B3B]"
                            : "bg-[#06C270]"
                        } rounded-md p-1 px-2 text-sm text-[#E8EBEF] font-regular`}
                      >
                        {item?.status}
                      </button>
                    </td>
                    <td
                      className={`md:w-[182px] relative ${
                        openDropDown ? "w-[182px]" : "pr-5"
                      }`}
                    >
                      <button className="px-0 md:px-5 pb-2">
                        <img
                          onClick={() => handleDropDown(item.id)}
                          src={moreIcon}
                        />
                      </button>
                      <td
                        className={`absolute left-1 md:left-3 top-[60px] z-50 px-3 py-4 rounded-md shadow-md shadow-gray-500 bg-[#F2F2F5] font-semibold ${
                          openDropDown === item.id ? "block" : "hidden"
                        }`}
                      >
                        <div>
                          <p className="cursor-pointer mb-4">Hapus Gudang</p>
                          <p
                            onClick={() => navigate("/admin/edit-warehouse")}
                            className="cursor-pointer"
                          >
                            Tambahkan Gudang
                          </p>
                        </div>
                      </td>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center sm:justify-end md:justify-end items-center gap-x-3 my-8 mr-6">
        <img src={arrowBack} alt="" />
        <p className="text-[#17345F] font-semibold">Halaman 1</p>
        <img src={arrowNext} alt="" />
      </div>
    </div>
  );
};

export default WarehouseList;
