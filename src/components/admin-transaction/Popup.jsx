import React, { useState, useEffect } from "react";
import Overlay from "./Overlay";
import axios from "axios";
import { Skeleton } from "antd";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const Popup = ({ onClose, transaction }) => {
  const [showSelect, setShowSelect] = useState(false);
  const [transactionPopup, setTransactionPopup] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  // const [reasoneOption, setReasoneOption] = useState([]);

  const token = useSelector((state) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handlePopup = () => {
    axios
      .get(`https://digiwarehouse-app.onrender.com/dasboard/transaction/detail/${transaction.transactionId}`, { headers })
      .then((response) => {
        setTransactionPopup(response?.data?.data);
        setLoading(false);
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

  //Handle transaksi diterima
  const handleTransactionApprove = () => {
    axios
      .put(`https://digiwarehouse-app.onrender.com/dasboard/transaction/approval/${transaction.transactionId}`, transactionPopup, { headers })
      .then((response) => {
        console.log(response?.data?.data);
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Handle transaksi ditolak
  const handleTolakClick = () => {
    setShowSelect(true);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleTransactionRejected = () => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    if (!selectedOption) {
      console.log("Silakan pilih alasan penolakan.");

      return;
    }

    axios
      .put(`https://digiwarehouse-app.onrender.com/dasboard/transaction/rejected/${transaction.transactionId}`, transactionPopup, { headers })
      .then((response) => {
        window.location.reload();
        console.log(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imgNotFound = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";

  const handleImagePopup = () => {
    setImageLoading(false);
  };

  // const hanldeRadioButton = () => {
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //   };
  //   axios
  //     .get("https://digiwarehouse-app.onrender.com/dasboard/payment/reasone", { headers })
  //     .then((response) => {
  //       setReasoneOption(response?.data?.data || []);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   hanldeRadioButton();
  // }, []);

  return (
    <Overlay>
      <div className="bg-white w-[546px] p-4 rounded-xl flex flex-col gap-y-5 py-4 text-cloud-burst-500">
        {loading ? (
          <Skeleton active />
        ) : (
          <>
            <div className="flex items-center border-b justify-between">
              <h1 className="font-bold text-xl py-1">Butuh Persetujuan Pengajuan Sewa</h1>
              <p id="close-button" className="text-cloud-burst-500 text-xl font-bold cursor-default" onClick={onClose}>
                X
              </p>
            </div>
            {imageLoading && <p className="text-xl py-5 text-center text-slate-500 font-semibold">Memuat...</p>}
            <img src={transactionPopup.warehouseImage || imgNotFound} alt="foto1" onLoad={handleImagePopup} className="rounded-xl h-[257px]" />
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
                <select id="reason" className="w-full border border-[#D1D1D6] focus:outline-none py-3 items-center px-[17px] rounded-[10px] appearance-none" value={selectedOption} onChange={handleSelectChange}>
                  <option value="" disabled hidden>
                    Alasan Menolak
                  </option>
                  <option value="permintaan penyewa">Permintaan penyewa</option>
                  <option value="permintaan penyewa">Pelanggaran kontrak oleh penyewa</option>
                  <option value="permintaan penyewa">Penyewa tidak memenuhi tagihan</option>
                  <option value="permintaan penyewa">Kesepakatan kedua belah pihak</option>
                  {/* {reasoneOption.map((item, index) => (
                    <option key={index} value={item?.id} id="list-reasone">
                      {item?.name}
                    </option>
                  ))} */}
                </select>
                {selectedOption === "" && <p className="text-red-500 text-sm mt-1">Alasan penolakan wajib diisi.</p>}
                <button className="bg-crusta-500 text-white w-[177px] h-[40px] rounded-lg" onClick={handleTransactionRejected} id="transaction-rejected">
                  Kirim
                </button>
              </div>
            ) : (
              <div className="flex justify-evenly">
                <button id="approve-button" className="bg-crusta-500 text-white w-[177px] h-[40px] rounded-lg" onClick={handleTransactionApprove}>
                  Terima
                </button>
                <button id="reject-button" className="text-crusta-500 w-[177px] h-[40px] rounded-lg border border-crusta-500" onClick={handleTolakClick}>
                  Tolak
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </Overlay>
  );
};

export default Popup;
