import arrowDownLeft from "../../assets/arrow-down-left.svg";
import rightArrowIcon from "../../assets/right-arrow.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TransactionDashboard = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const fetchTransaction = () => {
    axios
      .get(
        "https://digiwarehouse-app.onrender.com/dasboard/home/trx-history?page=1&limit=10",
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
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
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
      <div className="mx-3 bg-[#E8EBEF] p-3 w-max md:w-auto">
        <h4 className="text-2xl font-bold mb-4">Transaction</h4>

        {loading ? (
          <p className="text-xl py-5">Memuat data...</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-start">
                  Kode Transaksi
                </th>
                <th className="py-2 px-4 border-b text-start">
                  Waktu Transaksi
                </th>
                <th className="py-2 px-4 border-b text-start">
                  Jenis Transaksi
                </th>
                <th className="py-2 px-4 border-b text-start">Nama Pemesan</th>
                <th className="py-2 px-4 border-b text-start">
                  Jumlah Tagihan
                </th>
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
        )}

        <button
          id="see-more-transaction"
          className="flex items-center gap-5 mt-3 text-[#17345F] font-bold"
          onClick={() => {
            navigate("/admin/all-transactions");
          }}
        >
          Lihat Selengkapnya
          <img src={rightArrowIcon} alt="right arrow" />
        </button>
      </div>
    </>
  );
};

export default TransactionDashboard;
