import BarChart from "./BarChart";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function StatisticCarts() {
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: ["Total Pendapatan"],
        data: [],
        backgroundColor: ["#17345F"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const token = useSelector((state) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleRecentCustomer = () => {
    axios
      .get(
        "https://digiwarehouse-app.onrender.com/dasboard/payment/statistic",
        { headers }
      )
      .then((response) => {
        const years = response?.data?.data.map((data) => data.year);
        setUserData((prevUserData) => ({
          ...prevUserData,
          labels: years,
          datasets: [
            {
              ...prevUserData.datasets[0],
              data: response?.data?.data.map((data) => data.totalPayment),
            },
          ],
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleRecentCustomer();
  }, []);

  return (
    <div>
      <div style={{ height: 350 }} className="bg-[#E8EBEF] p-3 rounded">
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default StatisticCarts;
