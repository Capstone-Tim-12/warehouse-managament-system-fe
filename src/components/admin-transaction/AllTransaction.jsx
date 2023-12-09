import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import ArrowBack from "../../assets/arrow-back-left-Icons.svg";
import ArrowNext from "../../assets/arrow-next-right-Icons.svg";

const TransactionList = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPaymentScheme, setSelectedPaymentScheme] = useState("");

  const handleAllTransaction = () => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const params = {
      page: 1,
      limit: 10,
      paymentSchemeId: selectedPaymentScheme,
    };

    axios
      .get(
        "https://digiwarehouse-app.onrender.com/dasboard/home/trx-history",
        {
          headers,
          params,
        }
      )
      .then((response) => {
        setLoading(false);
        setTransactionList(response?.data?.data || []); 
        console.log(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleAllTransaction();
  }, [selectedPaymentScheme]);

  return (
    <div>
      <div className="flex flex-col justify-between items-start md:items-center sm:items-center sm:flex-row md:flex-row md:gap-x-5 gap-5 my-4 p-8">
        <div className="flex items-center gap-x-4">
          <h2 className="text-sm md:text-lg lg:text-[20px] font-bold text-cloud-burst-500">
            Detail Transaksi
          </h2>
          <div>
            <select
              className="w-[200px] lg:w-[300px] h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none"
              value={selectedPaymentScheme}
              onChange={(e) => setSelectedPaymentScheme(e.target.value)}
            >
              <option value="" disabled hidden>
                Filter Jenis Transaksi
              </option>
              <option value="1">Mingguan</option>
              <option value="2">Bulanan</option>
              <option value="3">Tahunan</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-x-8 md:gap-x-4 ">
          <h2 className="text-sm md:text-lg lg:text-[20px] font-bold text-cloud-burst-500">
            Total Tagihan
          </h2>
          <input
            className="shadow appearance-none border rounded-xl w-[200px] lg:w-[300px] h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
            id="username"
            type="text"
            placeholder="113.700.000"
          />
        </div>
      </div>

      <div className="px-4 md:px-8">
        {loading ? (
          <p className="text-xl py-5 text-center">Memuat data...</p>
        ) : !transactionList || transactionList.length === 0 ? (
          <p className="text-xl py-5 text-center">Tidak ada data transaksi</p>
        ) : (
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
                <tr className="h-16 text-cloud-burst-500 border-b" key={item?.userId}>
                  <td className="pb-2">{item?.userId}</td>
                  <td className="pb-2">{item?.transactionDate}</td>
                  <td className="pb-2">{item?.paymentSchemeName}</td>
                  <td className="pb-2">{item?.username}</td>
                  <td className="pb-2">Rp. {item?.nominal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="flex justify-center sm:justify-end md:justify-end items-center gap-x-3 my-8 mr-6">
        <img src={ArrowBack} alt="" />
        <p className="text-[#17345F] font-semibold">Halaman 1</p>
        <img src={ArrowNext} alt="" />
      </div>
    </div>
  );
};

export default TransactionList;
