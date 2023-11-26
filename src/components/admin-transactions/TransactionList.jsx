import React from "react";
import ArrowBack from "../../assets/arrow-back-left-Icons.svg"
import ArrowNext from "../../assets/arrow-next-right-Icons.svg"

const TransactionList = () => {
  const dataTransactions = [
    {
      id: "USE001",
      Waktu: "2023-09-11",
      Jenis: "Bulanan",
      Nama: "Sucipto",
      Jumlah: "12.000.000.00",
      Potongan: "200.000",
    },
    {
      id: "USE002",
      Waktu: "2023-09-11",
      Jenis: "Mingguan",
      Nama: "Darsono",
      Jumlah: "12.000.000.00",
      Potongan: "-",
    },
    {
      id: "USE003",
      Waktu: "2023-09-11",
      Jenis: "Tahunan",
      Nama: "Jono",
      Jumlah: "560.000.000",
      Potongan: "120.000.000",
    },
    {
      id: "USE004",
      Waktu: "2023-09-11",
      Jenis: "Mingguan",
      Nama: "Santoso",
      Jumlah: "12.000.000.00",
      Potongan: "-",
    },
    {
      id: "USE005",
      Waktu: "2023-09-11",
      Jenis: "Bulanan",
      Nama: "Susilo",
      Jumlah: "50.000.000",
      Potongan: "200.000",
    },
    {
      id: "USE005",
      Waktu: "2023-09-11",
      Jenis: "Mingguan",
      Nama: "Sainto",
      Jumlah: "12.000.000.00",
      Potongan: "-",
    },
    {
      id: "USE006",
      Waktu: "2023-09-11",
      Jenis: "Tahunan",
      Nama: "Sucipto lagi",
      Jumlah: "20.000.00",
      Potongan: "400.000",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-between items-start md:items-center sm:items-center sm:flex-row md:flex-row md:gap-x-5 sm:gap-x-5 my-4 lg:p-8">
        <div className="flex items-center gap-x-4">
          <h2 className="text-[20px] font-bold text-cloud-burst-500">
            Detail Transaksi
          </h2>
          <div>
            <select
              className="w-[300px] h-[56px] p-2.5 font text-[#2C2C2E] bg-white border rounded-xl shadow-sm outline-none"
              value=""
            >
              <option value="" disabled hidden>
                Filter Jenis Transaksi
              </option>
              <option>Mingguan</option>
              <option>Bulanan</option>
              <option>Tahunan</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-x-4 ">
          <h2 className="text-[20px] font-bold text-cloud-burst-500">
            Total Tagihan
          </h2>
          <input
            className="shadow appearance-none border rounded-xl w-[300px] h-[56px] py-2 px-3  font text-[#2C2C2E] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#2C2C2E]"
            id="username"
            type="text"
            placeholder="113.700.000"
          />
        </div>
      </div>

      <div className="overflow-hidden px-8">
        <table className="w-full">
          <thead>
            <tr className="text-cloud-burst-500 border-b text-left">
              <th className="pb-2">Kode Transaksi </th>
              <th className="pb-2">Waktu Transaksi</th>
              <th className="pb-2">Jenis Transaksi</th>
              <th className="pb-2">Nama Pemesan</th>
              <th className="pb-2">Jumlah Transaksi</th>
              <th className="pb-2">Jumlah Potongan</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {dataTransactions.map((item) => (
              <tr className="h-16 text-cloud-burst-500">
                <td className="pb-2">{item?.id}</td>
                <td className="pb-2">{item?.Waktu}</td>
                <td className="pb-2">{item?.Jenis}</td>
                <td className="pb-2">{item?.Nama}</td>
                <td className="pb-2">{item?.Jumlah}</td>
                <td className="pb-2">{item?.Potongan}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
