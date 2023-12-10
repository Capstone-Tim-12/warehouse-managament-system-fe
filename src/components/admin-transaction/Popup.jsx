import React, { useState, useEffect } from "react";
import Overlay from "./Overlay";
import Cookies from "js-cookie";
import axios from "axios";

const Popup = ({ onClose, transaction }) => {
  const [showSelect, setShowSelect] = useState(false);
  const [transactionPopup, setTransactionPopup] = useState([]);

  const handleTolakClick = () => {
    setShowSelect(true);
  };

  const handlePopup = () => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(`https://digiwarehouse-app.onrender.com/dasboard/transaction/detail/${transaction.transactionId}`, { headers })
      .then((response) => {
        setTransactionPopup(response?.data?.data);
        console.log(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (transaction) {
      handlePopup(transaction?.transactionId);
    }
  }, [transaction]);
  return (
    <Overlay>
      <div className="bg-white w-[546px] p-4 rounded-xl flex flex-col gap-y-5 py-4 text-cloud-burst-500">
        <div className="flex items-center border-b justify-between">
          <h1 className="font-bold text-xl py-1">Butuh Persetujuan Pengajuan Sewa</h1>
          <p className="text-cloud-burst-500 text-xl font-bold cursor-default" onClick={onClose}>
            X
          </p>
        </div>
        <img src={transactionPopup.warehouseImage} alt="" className="rounded-xl" />
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between text-xl font-bold">
            <h2>{transactionPopup.warehouseName}</h2>
            <p>{transactionPopup.warehousePrice}</p>
          </div>
          <div className="flex justify-between font-bold text-[16px]">
            <p>{transactionPopup.username}</p>
            <p>{transactionPopup.isVerifyIdentity ? "Ada KTP" : "Tanpa KTP"}</p>
          </div>
          <div className="flex justify-between font-bold text-[16px]">
            <p>Durasi</p>
            <p>
              {transactionPopup.rentalDuration} {transactionPopup.paymentScheme}
            </p>
          </div>
          <p>{transactionPopup.warehouseAdreess}</p>
        </div>
        {showSelect ? (
          <div className="flex flex-col gap-y-4">
            <select className="w-full border border-[#D1D1D6] focus:outline-none py-3 items-center px-[17px] rounded-[10px] appearance-none" value="" onChange={(e) => {}}>
              <option value="" disabled hidden>
                Alasan Menolak
              </option>
              <option value="Opsi 1">Opsi 1</option>
              <option value="Opsi 2">Opsi 2</option>
              <option value="Opsi 3">Opsi 3</option>
              <option value="Opsi 4">Opsi 4</option>
              <option value="Opsi 5">Opsi 5</option>
            </select>
            <button className="bg-crusta-500 text-white w-[177px] h-[40px] rounded-lg">Kirim</button>
          </div>
        ) : (
          <div className="flex justify-evenly">
            <button className="bg-crusta-500 text-white w-[177px] h-[40px] rounded-lg" onClick={() => {}}>
              Terima
            </button>
            <button className="text-crusta-500 w-[177px] h-[40px] rounded-lg border border-crusta-500" onClick={handleTolakClick}>
              Tolak
            </button>
          </div>
        )}
      </div>
    </Overlay>
  );
};

export default Popup;
