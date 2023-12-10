import manageGudangIcon from "../../assets/manage-gudang-icon.svg";
import transaksiIcon from "../../assets/transaksi-icon.svg";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

const CardTotal = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const handleCartTotal = () => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get("https://digiwarehouse-app.onrender.com/dasboard/payment/total", {
        headers,
      })
      .then((response) => {
        setData(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleCartTotal();
  }, []);

  return (
    <div
      id="card-wrapper"
      className="grid grid-cols-1 gap-5 mt-[50px] mx-3 lg:grid lg:grid-cols-3 "
    >
      <div className="bg-[#E8EBEF] py-6 px-5 rounded-[8px]">
        <img src={manageGudangIcon} alt="manage gudang icon" />
        <p className="text-[20px] my-[20px]">Total gudang yang tersedia</p>
        <h3 className="font-bold text-[24px]">
          {" "}
          {loading ? "Memuat data..." : data.totalWarehouseAvailabe}
        </h3>
      </div>
      <div className="bg-[#E8EBEF] py-6 px-5  rounded-[8px]">
        <img src={manageGudangIcon} alt="manage gudang icon" />
        <p className="text-[20px] my-[20px]">Total gudang yang disewa</p>
        <h3 className="font-bold text-[24px]">
          {loading ? "Memuat data..." : data.totalWarehouseNotAvailable}
        </h3>
      </div>
      <div className="bg-[#E8EBEF]  py-6 px-5  rounded-[8px]">
        <img src={transaksiIcon} alt="transaksi icon" />
        <p className="text-[20px] my-[20px]">Total pendapatan</p>
        <h3 className="font-bold text-[24px]">
          {loading
            ? "Memuat data..."
            : new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(data.totalPayment)}
        </h3>
      </div>
    </div>
  );
};

export default CardTotal;
