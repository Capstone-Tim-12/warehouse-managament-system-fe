import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/search-icon.svg";
import arrowBack from "../../assets/arrow-back-left-Icons.svg";
import arrowNext from "../../assets/arrow-next-right-Icons.svg";
import Cookies from "js-cookie";
import axios from "axios";

import Popup from "./Popup";

const TransactionList = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(false);
  const [searchInput, setSearchInput] = useState([]);
  const [provinceId, setProvinceId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTransactionList = (page) => {
    setLoading(true);
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(`http://ec2-18-139-162-85.ap-southeast-1.compute.amazonaws.com:8086/dasboard/list/trx-history?page=${page}&limit=10&search=${searchQuery}`, { headers })
      .then((response) => {
        const responseData = response?.data;
        if (responseData && responseData.data) {
          setTransactionList(responseData.data);
          setSearchInput(responseData.data);
          setLoading(false);
          setTotalPages(responseData.pagination?.totalPage || 1);
        } else {
          setTransactionList([]);
          setSearchInput([]);
          setLoading(false);
          setTotalPages(1);
        }
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
    handleTransactionList();
  }, []);

  const selectLocation = () => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get("http://ec2-18-139-162-85.ap-southeast-1.compute.amazonaws.com:8086/user/province", { headers })
      .then((response) => {
        setProvinceId(response?.data?.data);
        console.log(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    selectLocation();
  }, []);

  const handleStatusClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const closePopup = () => {
    setSelectedTransaction(false);
  };

  const filterSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchInput(transactionList.filter((item) => item.username.toLowerCase().includes(searchTerm) || item.provinceName.toLowerCase().includes(searchTerm) || item.warehouseName.toLowerCase().includes(searchTerm)));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    handleTransactionList(newPage);
  };

  return (
    <div>
      <div className="flex flex-col items-start md:items-center sm:items-center sm:flex-row md:flex-row md:gap-x-5 sm:gap-x-5 my-4 ml-4 lg:p-3 ">
        <div>
          <h2 className="text-[20px] font-bold text-cloud-burst-500">Daftar Transaksi</h2>
        </div>
        <div>
          <select className="w-[120px] sm:w-[180px] md:w-[257px] border border-[#D1D1D6] focus:outline-none py-3 items-center px-[17px] rounded-[10px] appearance-none" value="">
            <option value="" disabled hidden>
              Cari berdasarkan lokasi
            </option>
            {provinceId.map((item, index) => (
              <option key={index}>{item?.name}</option>
            ))}
          </select>
        </div>
        <div>
          <select className="w-[120px] sm:w-[180px] md:w-[257px] border border-[#D1D1D6] focus:outline-none py-3 items-center px-[17px] rounded-[10px] appearance-none" value="">
            <option value="" disabled hidden>
              Cari berdasarkan status
            </option>
            {[...new Set(searchInput.map((item) => item.status))].map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="relative rounded-[28px] flex items-center">
          <button className="absolute pl-3">
            <img src={searchIcon} alt="search" />
          </button>
          <input type="text" placeholder="Search" className="w-[120px] sm:w-[180px] md:w-[257px] border border-[#D1D1D6] focus:outline-none py-3 px-9 rounded-[10px]" onChange={filterSearch} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="ml-4 md:table md:w-[93.2%]">
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
          {loading ? (
            <tbody className="h-14 relative">
              <tr className="absolute top-2 text-slate-500 font-semibold text-[24px] mt-2">
                <td>Memuat data...</td>
              </tr>
            </tbody>
          ) : transactionList && transactionList.length > 0 ? (
            <tbody>
              {searchInput.map((item, index) => {
                const transactionNumber = (currentPage - 1) * 10 + index + 1;
                return (
                  <tr key={index} className="h-16 text-cloud-burst-500 border-b align-bottom">
                    <td className="pb-2 pr-3 md:pr-6 pl-3 text-center">{transactionNumber}</td>
                    <td className="pb-2 pr-3 md:pr-6">{item?.username}</td>
                    <td className="pb-2 pr-3 md:pr-6">{item?.provinceName}</td>
                    <td className="pb-2 pr-3 md:pr-6">{item?.warehouseName}</td>
                    <td className="pb-2 pr-3 md:pr-6">
                      {item?.duration} {item?.paymentScheme}
                    </td>
                    <td className="pb-2 pr-3 md:pr-24 text-center">
                      <button
                        className={`w-[141px] h-[30px] rounded-md p-1 px-2 text-sm border font-regular text-white ${item?.status === "disetujui" ? "bg-[#06C270]" : item?.status === "butuh persetujuan" ? "bg-[#EABC03]" : "bg-[#FF3B3B]"}`}
                        onClick={() => handleStatusClick(item)}
                      >
                        {item?.status}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody className="h-14 relative">
              <tr className="absolute top-8 inset-0 flex justify-center text-slate-500 font-semibold">Tidak Ada Transaksi</tr>
            </tbody>
          )}
        </table>
      </div>
      <div className="flex justify-center sm:justify-end md:justify-end items-center gap-x-3 my-8 mr-6">
        <button className="cursor-pointer" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
          <img src={arrowBack} alt="Prev Page" />
        </button>{" "}
        <p className="text-[#17345F] font-semibold">Halaman {currentPage}</p>
        <button className="cursor-pointer" onClick={() => handlePageChange(currentPage + 1)}>
          <img src={arrowNext} alt="Next Page" />
        </button>
      </div>
      {selectedTransaction && <Popup transaction={selectedTransaction} onClose={closePopup} />}
    </div>
  );
};

export default TransactionList;
