import searchIcon from "../../assets/search-icon.svg";
import plusIcon from "../../assets/plus-Icons.svg";
import deleteWhiteIcon from "../../assets/delete(white)-Icons.svg";

const WarehouseList = () => {
  return (
    <div>
      <div className="flex items-center gap-x-5 p-1 my-4 lg:p-3">
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
            className="w-[180px] md:w-[430px] border border-[#D1D1D6] focus:outline-none py-3 px-9 rounded-[10px]  "
          />
        </form>
      </div>
    </div>
  );
};

export default WarehouseList;
