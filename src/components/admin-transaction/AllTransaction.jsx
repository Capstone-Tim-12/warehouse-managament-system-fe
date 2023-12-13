import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Skeleton } from "antd";
import ArrowBack from "../../assets/arrow-back-left-Icons.svg";
import searchIcon from "../../assets/search-icon.svg";
import ArrowNext from "../../assets/arrow-next-right-Icons.svg";

const TransactionList = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tempSearchTerm, setTempSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isInputCleared, setIsInputCleared] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(tempSearchTerm);
    setIsInputCleared(false);
  };

  const fetchTransactionData = () => {
    setLoading(true);
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const params = {
      page: currentPage,
      limit: 10,
    };

    axios
      .get("https://digiwarehouse-app.onrender.com/dasboard/home/trx-history", {
        headers,
        params,
      })
      .then((response) => {
        const allTransactions = response?.data?.data || [];

        const filteredTransactions = allTransactions.filter((item) =>
          item.nominal.toString().includes(searchTerm)
        );

        const finalFilteredTransactions = filteredTransactions.filter((item) =>
          selectedFilter === "seluruh-transaksi" || !selectedFilter
            ? true
            : item.paymentSchemeName.toLowerCase() ===
              selectedFilter.toLowerCase()
        );

        setTransactionList(finalFilteredTransactions);
        setTotalPages(response?.data?.meta?.totalPages || 1);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTransactionData();
  }, [searchTerm, selectedFilter, isInputCleared]);

  useEffect(() => {
    if (isInputCleared) {
      fetchTransactionData();
    }
  }, [isInputCleared]);

  return (
    <div>
      <div className="flex flex-col justify-between items-start md:items-center sm:items-center sm:flex-row md:flex-row md:gap-x-5 gap-5 my-4 p-8">
        <div className="flex items-center gap-x-4">
          <h2 className="text-sm md:text-lg lg:text-[20px] font-bold text-cloud-burst-500">
            Detail Transaksi
          </h2>
          <div>
            <select
              id="select-filter"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="w-[200px] lg:w-[300px] h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none"
            >
              <option value="" disabled>
                Filter Jenis Transaksi
              </option>
              <option value="seluruh-transaksi">Seluruh Transaksi</option>
              <option value="mingguan">Mingguan</option>
              <option value="bulanan">Bulanan</option>
              <option value="tahunan">Tahunan</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-x-8 md:gap-x-4">
          <h2 className="text-sm md:text-lg lg:text-[20px] font-bold text-cloud-burst-500">
            Total Tagihan
          </h2>
          <form
            onSubmit={handleSearch}
            className="relative rounded-[28px] flex items-center"
          >
            <input
              value={tempSearchTerm}
              onChange={(e) => setTempSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e);
                }
              }}
              className="shadow appearance-none border rounded-xl w-[200px] lg:w-[300px] h-[56px] py-2 px-3 font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
              id="input-search"
              type="text"
              placeholder="Search"
            />
            <button
              type="submit"
              id="button-search"
              className="absolute right-0 top-0 mt-5 mr-4 cursor-pointer"
            >
              <img src={searchIcon} alt="" />
            </button>
          </form>
        </div>
      </div>

      {loading ? (
        <Skeleton active />
      ) : !transactionList || transactionList.length === 0 ? (
        <p className="text-xl py-5 text-center">Tidak ada data transaksi</p>
      ) : (
        <div className="px-4 md:px-8">
          <table className="w-full">
            <thead>
              <tr className="text-cloud-burst-500 border-b text-left text-xs md:text-xl">
                <th className="pb-2">Kode Transaksi </th>
                <th className="pb-2">Waktu Transaksi</th>
                <th className="pb-2">Jenis Transaksi</th>
                <th className="pb-2">Nama Pemesan</th>
                <th className="pb-2">Jumlah Tagihan (IDR)</th>
              </tr>
            </thead>
            <tbody className="w-full text-xs md:text-lg">
              {transactionList.map((item) => (
                <tr
                  className="h-16 text-cloud-burst-500 border-b"
                  key={item?.userId}
                >
                  <td className="pb-2">{item?.userId}</td>
                  <td className="pb-2">{item?.transactionDate}</td>
                  <td className="pb-2">{item?.paymentSchemeName}</td>
                  <td className="pb-2">{item?.username}</td>
                  <td className="pb-2">
                    {item?.nominal.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center sm:justify-end md:justify-end items-center gap-x-3 my-8 mr-6">
            <img
             id="arrow-back"
              src={ArrowBack}
              alt=""
              onClick={() =>
                setCurrentPage((prevPage) => Math.max(1, prevPage - 1))
              }
              className={
                currentPage === totalPages
                  ? "hidden cursor-pointer"
                  : "inline-block cursor-pointer"
              }
            />
            <p className="text-[#17345F] font-semibold">
              Halaman {currentPage}
            </p>
            <img
              id="arrow-next"
              src={ArrowNext}
              alt=""
              onClick={() =>
                setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1))
              }
              className={
                currentPage === totalPages
                  ? "hidden cursor-pointer"
                  : "inline-block cursor-pointer"
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionList;
