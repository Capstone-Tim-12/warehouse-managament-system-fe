import React, { useEffect, useState } from "react";
import rightArrowIcon from "../../assets/right-arrow.svg";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const RecentCustomer = () => {
  const [recentCustomer, setRecentCustomer] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleRecentCustomer = () => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(
        "http://ec2-18-139-162-85.ap-southeast-1.compute.amazonaws.com:8086/dasboard/list/trx-history?page=1&limit=10",
        { headers }
      )
      .then((response) => {
        setRecentCustomer(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleRecentCustomer();
  }, []);

  return (
    <div className="bg-white rounded-[8px] p-3">
      <h3 className="text-[20px] font-bold">Recent Customer</h3>
      {loading ? (
        <p className="text-xl py-5">Memuat data...</p>
      ) : (
        <div className="  flex flex-col gap-5 my-2">
          {recentCustomer.slice(0, 4).map((item) => {
            return (
              <div
                className=" bg-cloud-burst-200 w-full h-auto p-3 rounded-[12px] flex items-center gap-4 border border-black"
                key={item.transactionId}
              >
                <div className="bg-cloud-burst-500 w-[30px] h-[30px] flex justify-center items-center text-white rounded-full">
                  <h5>{item.username.charAt(0).toUpperCase()}</h5>
                </div>
                <div className="">
                  <p>{item.username}</p>
                  <p>{item.regencyName}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <button
        className="flex items-center gap-5"
        onClick={() => {
          navigate("/admin/transaksi");
        }}
      >
        Lihat Selengkapnya
        <img src={rightArrowIcon} alt="right arrow" />
      </button>
    </div>
  );
};

export default RecentCustomer;
