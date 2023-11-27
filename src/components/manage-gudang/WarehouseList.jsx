import searchIcon from "../../assets/search-icon.svg";
import plusIcon from "../../assets/plus-Icons.svg";
import deleteWhiteIcon from "../../assets/delete(white)-Icons.svg";
import deleteOrangeIcon from "../../assets/delete(orange)-Icons.svg";
import editIcon from "../../assets/edit-Icons.svg";
import arrowBack from "../../assets/arrow-back-left-Icons.svg";
import arrowNext from "../../assets/arrow-next-right-Icons.svg";
import { useNavigate } from "react-router-dom";

const WarehouseList = () => {
  const dataWarehouse = [
    {
      id: 1,
      Name: "Warehouse Abadi",
      Lokasi: "Jakarta Barat",
      Harga: "Rp 10.000.000.00",
      Ukuran: "1200m",
      Status: "Tersedia",
    },
    {
      id: 2,
      Name: "Mega Stroage Center",
      Lokasi: "Jakarta Barat",
      Harga: "Rp 40.000.000.00",
      Ukuran: "1000m",
      Status: "Tersedia",
    },
    {
      id: 3,
      Name: "Harmoni Warehouse",
      Lokasi: "Jakarta Barat",
      Harga: "Rp 80.000.000.00",
      Ukuran: "2000m",
      Status: "Tersedia",
    },
    {
      id: 4,
      Name: "Jaya Baya",
      Lokasi: "Jakarta Timur",
      Harga: "Rp 16.000.000.00",
      Ukuran: "500m",
      Status: "Tersedia",
    },
    {
      id: 5,
      Name: "Amanah Warehouse",
      Lokasi: "Jakarta Barat",
      Harga: "Rp 60.000.000.00",
      Ukuran: "1500m",
      Status: "Tersedia",
    },
    {
      id: 6,
      Name: "Adimental Group",
      Lokasi: "Jakarta Selatan",
      Harga: "Rp 28.000.000.00",
      Ukuran: "550m",
      Status: "Tersedia",
    },
    {
      id: 7,
      Name: "Gudang Idaman",
      Lokasi: "Jakarta Timut",
      Harga: "Rp 30.000.000.00",
      Ukuran: "620m",
      Status: "Tersedia",
    },
    {
      id: 8,
      Name: "Arum Warehouse",
      Lokasi: "Depok",
      Harga: "Rp 44.000.000.00",
      Ukuran: "1000m",
      Status: "Tersedia",
    },
    {
      id: 9,
      Name: "Gudang Gula Merah",
      Lokasi: "Tanggerang",
      Harga: "Rp 45.000.000.00",
      Ukuran: "700m",
      Status: "Tersedia",
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-start md:items-center sm:items-center sm:flex-row md:flex-row md:gap-x-5 sm:gap-x-5 my-4 ml-4 lg:p-3">
        <div>
          <h2 className="text-cloud-burst-500 text-[20px] font-bold mb-3 md:mb-0">
            Daftar Warehouse
          </h2>
        </div>
        <div className="flex gap-x-3">
          <button
            onClick={() => navigate("/admin/edit-warehouse")}
            className="bg-crusta-500 flex gap-x-3 rounded-md p-3 md:p-2 md:py-3 text-white "
          >
            <img src={plusIcon} />
            <p className="hidden md:block">Tambah Gudang</p>
          </button>
          <button className="bg-crusta-500 flex gap-x-3 rounded-md p-3 md:p-2 md:py-3 text-white ">
            <img src={deleteWhiteIcon} />
            <p className="hidden md:block">Hapus Gudang</p>
          </button>
          <form
            className="relative rounded-[28px] flex items-center"
            // onSubmit={(e) => e.preventDefault()}
          >
            <button className="absolute pl-3">
              <img src={searchIcon} alt="search" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="w-[220px] sm:w-[380px] md:w-[410px] border border-[#D1D1D6] focus:outline-none py-3 px-9 rounded-[10px]  "
            />
          </form>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="ml-4 md:ml-10 md:table md:w-[93.2%]">
          <thead>
            <tr className="text-cloud-burst-500">
              <th className="relative pb-2 md:pr-6">
                <input className="absolute left-0" type="checkbox" />
              </th>
              <th className="pb-2 pr-[12px] pl-[12px] md:pr-6">No. </th>
              <th className="pb-2 pr-[30px] md:pr-26">Nama Warehouse</th>
              <th className="pb-2 pr-[12px] md:pr-24">Lokasi</th>
              <th className="pb-2 pr-[1px] md:pr-8">Ukuran</th>
              <th className="pb-2 pr-[12px] md:pr-24">Harga</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dataWarehouse.map((item) => (
              <tr className="h-16 divide-y align-bottom text-cloud-burst-500">
                <td className="pb-2">
                  <input type="checkbox" />
                </td>
                <td className="pb-2 pl-[12px]">{item?.id}</td>
                <td className="pb-2">{item?.Name}</td>
                <td className="pb-2">{item?.Lokasi}</td>
                <td className="pb-2">{item?.Ukuran}</td>
                <td className="pb-2 pl-9 md:pl-0">{item?.Harga}</td>
                <td className="pb-2 px-4 md:px-0">
                  <button className="bg-[#06C270] rounded-md p-1 px-2 text-sm text-[#E8EBEF] font-regular">
                    {item?.Status}
                  </button>
                </td>
                <td className="px-0 md:px-5 pb-2">
                  <button className="flex items-center">
                    <img className="pr-1" src={deleteOrangeIcon} />
                    <p className="hidden md:block">Hapus</p>
                  </button>
                </td>
                <td className="pb-2">
                  <button className="flex items-center">
                    <img className="pr-1" src={editIcon} />
                    <p className="hidden md:block">Ubah</p>
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

export default WarehouseList;
