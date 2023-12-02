import React, { useState } from "react";
import Overlay from "./Overlay";
import foto1 from "../../assets/gudang-1.png";

const Popup = () => {
  const [showSelect, setShowSelect] = useState(false);

  const handleTolakClick = () => {
    setShowSelect(true);
  };
  return (
    <Overlay>
      <div className="bg-white w-[546px] p-4 rounded-xl flex flex-col gap-y-5 py-4 text-cloud-burst-500">
        <div className="flex items-center border-b justify-between">
          <h1 className="font-bold text-xl py-1">Butuh Persetujuan Pengajuan Sewa</h1>
          <p className="text-cloud-burst-500 text-xl font-bold cursor-default">X</p>
        </div>
        <img src={foto1} alt="" className="rounded-xl" />
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between text-xl font-bold">
            <h2>Mega Store Center</h2>
            <p>Rp. 2.000.000.00</p>
          </div>
          <div className="flex justify-between font-bold text-[16px]">
            <p>Darsono</p>
            <p>Tanpa KTP</p>
          </div>
          <div className="flex justify-between font-bold text-[16px]">
            <p>Durasi</p>
            <p>3 Minggu</p>
          </div>
          <p>Jl. Panjang No. 17 Kec. Kebon Jeruk Jakarta Barat</p>
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
