import React from "react";
import searchIcon from "../../assets/search-icon.svg";
import arrowBack from "../../assets/arrow-back-left-Icons.svg";
import arrowNext from "../../assets/arrow-next-right-Icons.svg";
import moreIcon from "../../assets/icon-more.svg";

const TransactionList = () => {
  const dataTransaksi = [
    {
      id: 1,
      Name: "Sucipto",
      Lokasi: "Jakarta Barat",
      NamaWarehouse: "Warehouse Abadi",
      Durasi: "1 Bulan",
      Status: "Butuh Persetujuan",
    },
    {
      id: 2,
      Name: "Darsono",
      Lokasi: "Jakarta Barat",
      NamaWarehouse: "Mega Store Center",
      Durasi: "1 Minggu",
      Status: "Ditolak",
    },
    {
      id: 3,
      Name: "Santoso",
      Lokasi: "Jakarta Barat",
      NamaWarehouse: "Harmoni Warehouse",
      Durasi: "1 Minggu",
      Status: "Disetujui",
    },
    {
      id: 4,
      Name: "Fikri Januar",
      Lokasi: "Jakarta Barat",
      NamaWarehouse: "Jaya Baya",
      Durasi: "1 Bulan",
      Status: "Butuh Persetujuan",
    },
    {
      id: 5,
      Name: "Aminah",
      Lokasi: "Jakarta Timur",
      NamaWarehouse: "Amanah Warehouse",
      Durasi: "1 Tahun",
      Status: "Disetujui",
    },
    {
      id: 6,
      Name: "Adi Susanto",
      Lokasi: "Jakarta Selatan",
      NamaWarehouse: "Adimental Group",
      Durasi: "1 Bulan",
      Status: "Disetujui",
    },
    {
      id: 7,
      Name: "Rahmat",
      Lokasi: "Jakarta Timur",
      NamaWarehouse: "Gudang Idaman",
      Durasi: "1 Minggu",
      Status: "Butuh Persetujuan",
    },
    {
      id: 8,
      Name: "Benyawan",
      Lokasi: "Depok",
      NamaWarehouse: "Arum Warehouse",
      Durasi: "1 Tahun",
      Status: "Butuh Persetujuan",
    },
    {
      id: 9,
      Name: "Ahmad",
      Lokasi: "Tangerang Selatan",
      NamaWarehouse: "Gudang Gula Merah",
      Durasi: "1 Bulan",
      Status: "Disetujui",
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-start md:items-center sm:items-center sm:flex-row md:flex-row md:gap-x-5 sm:gap-x-5 my-4 ml-4 lg:p-3 ">
        <div>
          <h2 className="text-[20px] font-bold text-cloud-burst-500">Daftar Transaksi</h2>
        </div>
        <div>
          <select select className="w-[120px] sm:w-[180px] md:w-[257px] border border-[#D1D1D6] focus:outline-none py-3 items-center px-[17px] rounded-[10px] appearance-none" value="" onChange={(e) => {}}>
            <option value="" disabled hidden>
              Cari berdasarkan lokasi
            </option>

            <option value="Jakarta Pusat">Jakarta Pusat</option>
            <option value="Jakarta Barat">Jakarta Barat</option>
            <option value="Jakarta Timur">Jakarta Timur</option>
            <option value="Jakarta Selatan">Jakarta Selatan</option>
            <option value="Jawa Timur">jawa Timur</option>
            <option value="Jawa Tengah">Jawa Tengah</option>
            <option value="Jawa Barat">Jawa Barat</option>
            <option value="Sumatera Utara">Sumatera Utara</option>
            <option value="Sumatera Barat">Sumatera Barat</option>
            <option value="Sumatera Selatan">Sumatera Selatan</option>
            <option value="Kepulauan Riau">Kepulauan Riau</option>
            <option value="Kalimantan Timur">Kalimantan Timur</option>
            <option value="Kalimantan Barat">Kalimantan Barat</option>
            <option value="Kalimantan Selatan">Kalimantan Selatan</option>
          </select>
        </div>
        <div>
          <select className="w-[120px] sm:w-[180px] md:w-[257px] border border-[#D1D1D6] focus:outline-none py-3 items-center px-[17px] rounded-[10px] appearance-none" value="" onChange={(e) => {}}>
            <option value="" disabled hidden>
              Cari berdasarkan status
            </option>
            <option value="disetujui">Disetujui</option>
            <option value="butuhPersetujuan">Butuh Persetujuan</option>
          </select>
        </div>
        <div>
          <form
            className="relative rounded-[28px] flex items-center"
            // onSubmit={(e) => e.preventDefault()}
          >
            <button className="absolute pl-3">
              <img src={searchIcon} alt="search" />
            </button>
            <input type="text" placeholder="Search" className="w-[120px] sm:w-[180px] md:w-[257px] border border-[#D1D1D6] focus:outline-none py-3 px-9 rounded-[10px]  " />
          </form>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="ml-4 md:table md:w-[93.2%]">
          <thead>
            <tr className="text-cloud-burst-500 border-b">
              <th className="pb-2 pr-3 md:pr-6 pl-3 text-center">No.</th>
              <th className="pb-2 pr-3 md:pr-6 text-left">Nama User</th>
              <th className="pb-2 pr-3 md:pr-6 text-left">Lokasi</th>
              <th className="pb-2 pr-3 md:pr-6 text-left">Nama Warehouse</th>
              <th className="pb-2 pr-3 md:pr-6 text-left">Durasi Sewa</th>
              <th className="pb-2 pr-3 md:pr-24 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {dataTransaksi.map((item, index) => (
              <tr key={index} className="h-16 text-cloud-burst-500 border-b align-bottom">
                <td className="pb-2 pr-3 md:pr-6 pl-3 text-center">{index + 1}</td>
                <td className="pb-2 pr-3 md:pr-6">{item?.Name}</td>
                <td className="pb-2 pr-3 md:pr-6">{item?.Lokasi}</td>
                <td className="pb-2 pr-3 md:pr-6">{item?.NamaWarehouse}</td>
                <td className="pb-2 pr-3 md:pr-6">{item?.Durasi}</td>
                <td className="pb-2 pr-3 md:pr-24 text-center">
                  <button className={`w-[141px] h-[30px] rounded-md p-1 px-2 text-sm border font-regular text-white ${item?.Status === "Disetujui" ? "bg-[#06C270]" : item?.Status === "Butuh Persetujuan" ? "bg-[#EABC03]" : "bg-[#FF3B3B]"}`}>
                    {item?.Status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center sm:justify-end md:justify-end items-center gap-x-3 my-8 mr-6">
        <img src={arrowBack} alt="" />
        <p className="text-[#17345F] font-semibold">Halaman 1</p>
        <img src={arrowNext} alt="" />
      </div>
    </div>
  );
};

export default TransactionList;
