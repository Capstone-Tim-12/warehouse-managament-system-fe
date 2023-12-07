import arrowDownLeft from "../../assets/arrow-down-left.svg";
import rightArrowIcon from "../../assets/right-arrow.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const TransactionDashboard = () => {
  const [transactionData, setTransactionData] = useState([]);

  const fetchTransaction = () => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(
        "http://ec2-18-139-162-85.ap-southeast-1.compute.amazonaws.com:8086/dasboard/home/trx-history?page=1&limit=10",
        { headers }
      )
      .then((response) => {
        const formattedData = response?.data?.data.map((item) => ({
          ...item,
          paymentSchemeName: capitalizeFirstLetter(item.paymentSchemeName),
          username: capitalizeFirstLetter(item.username),
          nominal: formatNominal(item.nominal),
          transactionDate: formatDate(item.transactionDate),
        }));
        setTransactionData(formattedData);
        console.log(formattedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const capitalizeFirstLetter = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  };

  const formatNominal = (value) => {
    return value?.toLocaleString("id-ID");
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID");
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <>
      <div className="mx-3 bg-white p-3 w-max md:w-auto">
        <h4 className="text-2xl font-bold mb-4">Transaction</h4>
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-start">ID User</th>
              <th className="py-2 px-4 border-b text-start">
                Tanggal Transaksi
              </th>
              <th className="py-2 px-4 border-b text-start">
                Nama Skema Pembayaran
              </th>
              <th className="py-2 px-4 border-b text-start">Username</th>
              <th className="py-2 px-4 border-b text-start">Nominal</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((item) => (
              <tr key={item.userId} className="border-b">
                <td className="py-2 px-4">{item.userId}</td>
                <td className="py-2 px-4">{item.transactionDate}</td>
                <td className="py-2 px-4">
                  {capitalizeFirstLetter(item.paymentSchemeName)}
                </td>
                <td className="py-2 px-4">
                  {capitalizeFirstLetter(item.username)}
                </td>
                <td className="py-2 px-4">{item.nominal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="flex items-center gap-5 mt-3">
          Lihat Selengkapnya
          <img src={rightArrowIcon} alt="right arrow" />
        </button>
      </div>
    </>
  );
};

export default TransactionDashboard;
