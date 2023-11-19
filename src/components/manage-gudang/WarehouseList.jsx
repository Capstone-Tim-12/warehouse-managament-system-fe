import searchIcon from "../../assets/search-icon.svg";
import plusIcon from "../../assets/plus-Icons.svg";
import deleteWhiteIcon from "../../assets/delete(white)-Icons.svg";
import deleteOrangeIcon from "../../assets/delete(orange)-Icons.svg";
import editIcon from "../../assets/edit-Icons.svg";
import arrowBack from "../../assets/arrow-back-left-Icons.svg";
import arrowNext from "../../assets/arrow-next-right-Icons.svg";

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

  return (
    <div>
      <div className="flex items-center gap-x-5 p-1 my-4 ml-4 lg:p-3">
        <h2 className="text-cloud-burst-500 text-[20px] font-bold mb-3 md:mb-0">
          Daftar Warehouse
        </h2>
        <button className="bg-crusta-500 flex gap-x-3 rounded-md p-2 py-3 text-white ">
          <img src={plusIcon} />
          Tambah Gudang
        </button>
        <button className="bg-crusta-500 flex gap-x-3 rounded-md p-2 py-3 text-white ">
          <img src={deleteWhiteIcon} />
          Hapus Gudang
        </button>
        <form
          className="relative bg-red-400 rounded-[28px] flex items-center"
          // onSubmit={(e) => e.preventDefault()}
        >
          <button className="absolute pl-3">
            <img src={searchIcon} alt="search" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="w-[180px] md:w-[410px] border border-[#D1D1D6] focus:outline-none py-3 px-9 rounded-[10px]  "
          />
        </form>
      </div>

      <div>
        <table className="ml-10">
          <thead>
            <tr className="gap-x-24 text-cloud-burst-500">
              <th className="pb-2 pr-6">
                <input type="checkbox" />
              </th>
              <th className="pb-2 pr-6">No. </th>
              <th className="pb-2 pr-24">Nama Warehouse</th>
              <th className="pb-2 pr-24">Lokasi</th>
              <th className="pb-2 pr-8">Ukuran</th>
              <th className="pb-2 pr-24">Harga</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dataWarehouse.map((item) => (
              <tr className="h-16 divide-y align-bottom text-cloud-burst-500">
                <td className="pb-2">
                  <input type="checkbox" />
                </td>
                <td className="pb-2">{item?.id}</td>
                <td className="pb-2">{item?.Name}</td>
                <td className="pb-2">{item?.Lokasi}</td>
                <td className="pb-2">{item?.Ukuran}</td>
                <td className="pb-2">{item?.Lokasi}</td>
                <td className="pb-2">
                  <button className="bg-[#FFD5C0] rounded-md p-1 px-2 text-sm text-[#17345F] border border-[#79747E] font-regular">
                    {item?.Status}
                  </button>
                </td>
                <td className="px-5 pb-2">
                  <button className="flex items-center">
                    <img className="pr-1" src={deleteOrangeIcon} />
                    Hapus
                  </button>
                </td>
                <td className="pb-2">
                  <button className="flex items-center">
                    <img className="pr-1" src={editIcon} />
                    Ubah
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center gap-x-3 my-8 mr-6">
        <img src={arrowBack} alt="" />
        <p className="text-[#17345F] font-semibold">Halaman 1</p>
        <img src={arrowNext} alt="" />
      </div>
    </div>
  );
};

export default WarehouseList;
