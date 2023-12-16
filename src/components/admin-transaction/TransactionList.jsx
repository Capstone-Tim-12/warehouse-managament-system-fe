import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/search-icon.svg";
import arrowBackDisable from "../../assets/arrow-back-left-Icons.svg";
import arrowBack from "../../assets/arrow-back-left-Icons(orange-500).svg";
import arrowNext from "../../assets/arrow-next-right-Icons.svg";
import arrowNextDisable from "../../assets/arrow-next-right-Icons(orange-200).svg";
import axios from "axios";
import { Skeleton } from "antd";

import Popup from "./Popup";
import { useSelector } from "react-redux";

const TransactionList = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(false);
  const [searchInput, setSearchInput] = useState([]);
  const [provinceId, setProvinceId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const token = useSelector((state) => state.auth.token);
  const headers = { Authorization: `Bearer ${token}` };

  const handleData = (page, searchText) => {
    setLoading(true);

    const filterStatus =
      selectedStatus !== "" ? `&status=${selectedStatus}` : "";
    const filterSearch = searchText ? `&search=${searchText}` : "";
    const filterLocation =
      selectedLocation !== "" ? `&provinceId=${selectedLocation}` : "";

    axios
      .get(
        `https://digiwarehouse-app.onrender.com/dasboard/list/trx-history?page=${page}&limit=10${filterStatus}${filterSearch}${filterLocation}`,
        { headers }
      )
      .then((response) => {
        const data = response?.data;
        setTransactionList(data?.data || []);
        setSearchInput(data?.data || []);
        setLoading(false);
        setTotalPages(data?.pagination?.totalPage || 1);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setTransactionList([]);
        setSearchInput([]);
        setTotalPages(1);
      });
  };

  useEffect(() => {
    handleData(currentPage);
  }, [currentPage, selectedStatus, selectedLocation]);

  const selectLocation = () => {
    axios
      .get("https://digiwarehouse-app.onrender.com/user/province", { headers })
      .then((response) => {
        setProvinceId(response?.data?.data || []);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    selectLocation();
  }, []);

  const handleStatusClick = (transaction) =>
    setSelectedTransaction(transaction);

  const closePopup = () => setSelectedTransaction(false);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    handleData(newPage);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    setSearchInput(searchText);
    handleData(currentPage, searchText);
  };

  return (
    <div>
      <div className="flex flex-col items-start md:items-center sm:items-center sm:flex-row md:flex-row md:gap-x-5 sm:gap-x-5 my-4 ml-4 lg:p-3 ">
        <div>
          <h2 className="text-[20px] font-bold text-cloud-burst-500">
            Daftar Transaksi
          </h2>
        </div>
        <div>
          <select
            className="w-[120px] sm:w-[180px] md:w-[257px] border border-[#D1D1D6] focus:outline-none py-3 items-center px-[17px] rounded-[10px] appearance-none"
            onChange={(e) => setSelectedLocation(e.target.value)}
            value={selectedLocation}
          >
            <option value="" disabled hidden>
              Cari berdasarkan lokasi
            </option>
            <option value="semua lokasi">Seluruh Lokasi</option>
            {provinceId.map((item, index) => (
              <option key={index} value={item?.id}>
                {item?.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className="w-[120px] sm:w-[180px] md:w-[257px] border border-[#D1D1D6] focus:outline-none py-3 items-center px-[17px] rounded-[10px] appearance-none"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="" disabled hidden>
              Cari berdasarkan Status
            </option>
            <option value="">Seluruh Status</option>
            <option value="butuh persetujuan">Butuh Persetujuan</option>
            <option value="disetujui">Disetujui</option>
            <option value="ditolak">Ditolak</option>
          </select>
        </div>
        <div className="flex items-center justify-center">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <img src={searchIcon} alt="" className="absolute pl-3 left-0" />
            <input
              type="text"
              placeholder="Search"
              className="w-[120px] sm:w-[180px] md:w-[257px] border border-[#D1D1D6] focus:outline-none py-3 px-9 rounded-[10px]"
              onChange={(e) => {
                setSearchInput(transactionList);
                handleSearch(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e);
                }
              }}
            />
          </form>
        </div>
      </div>
      <div className="overflow-x-auto px-4">
        {loading ? (
          <Skeleton active />
        ) : !transactionList || transactionList.length === 0 ? (
          <p className="text-xl py-5 text-center text-slate-500 font-semibold">
            Tidak ada data transaksi
          </p>
        ) : (
          <table className="md:table md:w-[93.2%]">
            <thead>
              <tr className="text-cloud-burst-500 border-b">
                <th className="pb-2 pr-3 md:pr-6 pl-3 text-center">No.</th>
                <th className="pb-2 pr-3 md:pr-6 text-left">Nama User</th>
                <th className="pb-2 pr-3 md:pr-6 text-left">Lokasi</th>
                <th className="pb-2 pr-3 md:pr-6 text-left">Nama Warehouse</th>
                <th className="pb-2 pr-3 md:pr-6 text-left">Durasi Sewa</th>
                <th className="pb-2 pr-3 md:pr-24 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactionList.map((item, index) => {
                const transactionNumber = (currentPage - 1) * 10 + index + 1;
                return (
                  <tr
                    key={index}
                    className="h-16 text-cloud-burst-500 border-b align-bottom"
                  >
                    <td className="pb-2 pr-3 md:pr-6 pl-3 text-center">
                      {transactionNumber}
                    </td>
                    <td className="pb-2 pr-3 md:pr-6">{item?.username}</td>
                    <td className="pb-2 pr-3 md:pr-6">{item?.provinceName}</td>
                    <td className="pb-2 pr-3 md:pr-6">{item?.warehouseName}</td>
                    <td className="pb-2 pr-3 md:pr-6">
                      {item?.duration} {item?.paymentScheme}
                    </td>
                    <td className="pb-2 pr-3 md:pr-24 text-center">
                      <button
                        className={`w-[141px] h-[30px] rounded-md p-1 px-2 text-sm border font-regular text-white ${
                          item?.status === "disetujui"
                            ? "bg-[#06C270]"
                            : item?.status === "butuh persetujuan"
                            ? "bg-[#EABC03]"
                            : "bg-[#FF3B3B]"
                        }`}
                        onClick={() => handleStatusClick(item)}
                      >
                        {item?.status}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex justify-center sm:justify-end md:justify-end items-center gap-x-3 my-8 mr-6">
        <button
          id="prevPage"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {currentPage === 1 ? (
            <img src={arrowBackDisable} />
          ) : (
            <img src={arrowBack} />
          )}
        </button>
        <p className="text-[#17345F] font-semibold">Halaman {currentPage}</p>
        <button
          id="nextPage"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {currentPage === totalPages ? (
            <img src={arrowNextDisable} />
          ) : (
            <img src={arrowNext} />
          )}
        </button>
      </div>
      {selectedTransaction && (
        <Popup transaction={selectedTransaction} onClose={closePopup} />
      )}
    </div>
  );
};

export default TransactionList;
