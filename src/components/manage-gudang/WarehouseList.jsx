import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { Skeleton, notification } from "antd";
import { Modal } from "antd";

import searchIcon from "../../assets/search-icon.svg";
import plusIcon from "../../assets/plus-Icons.svg";
import deleteWhiteIcon from "../../assets/delete(white)-Icons.svg";
import arrowBackDisable from "../../assets/arrow-back-left-Icons.svg";
import arrowBack from "../../assets/arrow-back-left-Icons(orange-500).svg";
import arrowNext from "../../assets/arrow-next-right-Icons.svg";
import arrowNextDisable from "../../assets/arrow-next-right-Icons(orange-200).svg";
import arrowTopDown from "../../assets/arrow-top-down-icons.svg";
import dropDownIcon from "../../assets/icon-dropdown.svg";
import moreIcon from "../../assets/icon-more.svg";

const WarehouseList = () => {
  const navigate = useNavigate();
  const [openDropDown, setOpenDropDown] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectId, setSelectId] = useState([]);
  const [dataWarehouse, setDataWarehouse] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedWarehouses, setSelectedWarehouses] = useState([]);

  const token = useSelector((state) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleDataWarehouse = (page) => {
    setLoading(true);

    axios
      .get(
        `https://digiwarehouse-app.onrender.com/warehouse/user/list?page=${page}&limit=10&search=${searchQuery}`,
        { headers }
      )
      .then((response) => {
        setDataWarehouse(response?.data?.data);
        setTotalPages(response?.data?.pagination?.totalPage);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleDeleteWarehouse = (id) => {
    Modal.confirm({
      title: "Konfirmasi",
      content: "Apakah Anda yakin ingin menghapus gudang yang dipilih?",
      okText: "Ya",
      okType: "danger",
      cancelText: "Batal",
      onOk() {
        axios
          .delete(
            `https://digiwarehouse-app.onrender.com/warehouse/detail/${id}`,
            {
              headers,
            }
          )
          .then((response) => {
            notification.success({
              message: "Success",
              description: "Gudang Berhasil dihapus",
              placement: "top",
            });
            // Refresh data setelah delete
            handleDataWarehouse(currentPage);
          })
          .catch((error) => {
            console.error("Error deleting warehouse:", error);
          });
      },
    });
  };

  const handleDeleteSelectedWarehouses = () => {
    let notificationMessage = "";
    Modal.confirm({
      title: "Konfirmasi",
      content: "Apakah Anda yakin ingin menghapus gudang yang dipilih?",
      okText: "Ya",
      okType: "danger",
      cancelText: "Batal",
      onOk() {
        for (const warehouseId of selectId) {
          try {
            axios.delete(
              `https://digiwarehouse-app.onrender.com/warehouse/detail/${warehouseId}`,
              { headers }
            );
            notificationMessage += `Gudang dengan ID ${warehouseId} berhasil dihapus,\n`;
          } catch (error) {
            console.error(
              `Gagal menghapus gudang dengan ID ${warehouseId}:`,
              error
            );
          }
        }

        // Reset state setelah penghapusan selesai
        setSelectAll(false);
        setSelectId([]);
        setSelectedWarehouses([]);

        // Menampilkan notifikasi tunggal jika ada gudang yang berhasil dihapus
        if (notificationMessage) {
          notification.success({
            message: "Sukses",
            description: notificationMessage,
            placement: "top",
          });

          // Refresh data setelah penghapusan berhasil (sesuaikan dengan kebutuhan)
          handleDataWarehouse(currentPage);
        }
      },
    });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    handleDataWarehouse(newPage);
  };

  const handleSearch = () => {
    handleDataWarehouse();
  };

  useEffect(() => {
    handleDataWarehouse();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      handleDataWarehouse(1);
    }
  }, [searchQuery]);

  const handleDropDown = (index) => {
    setOpenDropDown(openDropDown === index ? null : index);
  };

  const handleSelectAllCheckBox = () => {
    setSelectAll(!selectAll);
    setSelectId(selectAll ? [] : dataWarehouse.map((item) => item.id));
  };

  const handleSelectIdCheckBox = (id) => {
    setSelectId((prevId) => {
      const updatedIds = prevId.includes(id)
        ? prevId.filter((prevId) => prevId !== id)
        : [...prevId, id];

      setSelectedWarehouses(updatedIds);
      return updatedIds;
    });
  };

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
            id="addWarehouse"
            onClick={() => navigate("/admin/create-warehouse")}
            className="bg-crusta-500 hover:bg-crusta-600 flex gap-x-3 rounded-md p-3 md:p-2 md:py-3 text-white "
          >
            <img src={plusIcon} />
            <p className="hidden md:block">Tambah Gudang</p>
          </button>
          <button
            id="deleteWarehouse"
            className={`bg-crusta-500 flex gap-x-3 rounded-md p-3 md:p-2 md:py-3 text-white ${
              selectId.length === 0
                ? "opacity-70"
                : "opacity-100 hover:bg-crusta-600"
            }`}
            onClick={handleDeleteSelectedWarehouses}
            disabled={selectId.length === 0}
          >
            <img src={deleteWhiteIcon} />
            <p className="hidden md:block">Hapus Gudang</p>
          </button>
          <form
            className="relative rounded-[28px] flex items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <button id="searchInput" className="absolute pl-3">
              <img
                onClick={() => handleDataWarehouse(currentPage)}
                src={searchIcon}
                alt="search"
              />
            </button>
            <input
              id="input-search"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e.target.value);
                }
              }}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[220px] sm:w-[380px] md:w-[410px] border border-[#D1D1D6] focus:outline-none focus:ring-0 py-3 px-9 rounded-[10px]  "
            />
          </form>
        </div>
      </div>

      <div
        className={`overflow-x-auto ${
          dataWarehouse.length < 8 ? "h-screen" : ""
        }`}
      >
        {loading ? (
          <p className="mt-2 mx-7 mb-5">
            <Skeleton active />
          </p>
        ) : (
          <table
            className={`ml-4 md:ml-10 w-max md:w-[93.2%] ${
              openDropDown === 9 ? "mb-[90px]" : ""
            } ${openDropDown === 8 ? "mb-[20px]" : ""} ${
              searchQuery ? "mb-[90px]" : ""
            }`}
          >
            <thead>
              <tr className="text-cloud-burst-500 text-center md:text-left border-b-2">
                <th className="relative pb-5 md:pr-6">
                  <input
                    className="absolute left-0 focus:outline-none focus:ring-0 border-slate-700 border-2 rounded-sm"
                    checked={selectAll}
                    onChange={handleSelectAllCheckBox}
                    type="checkbox"
                    id="checkbox-input"
                  />
                </th>
                <th className="pb-2 pr-[12px] pl-[12px] md:pr-6">No. </th>
                <th className="pb-2 pr-[160px] md:pr-26">Nama Warehouse</th>
                <th className="pb-2 pr-[90px] md:pr-24">Lokasi</th>
                <th className="cursor-pointer relative pb-2 pr-6 md:pr-8">
                  Ukuran
                  <img
                    className="absolute right-0 md:left-[55px] bottom-[6px] md:bottom-1.5"
                    src={arrowTopDown}
                  />
                </th>
                <th className="cursor-pointer relative pb-2 pl-4 pr-[12px] md:pr-24">
                  Harga
                  <img
                    className="absolute right-[40px] md:left-[61px] bottom-[6px] md:bottom-1.5"
                    src={arrowTopDown}
                  />
                </th>
                <th className="cursor-pointer relative pr-5">
                  Status
                  <img
                    className="absolute left-20 md:left-[50px] bottom-[4px] md:bottom-1"
                    src={dropDownIcon}
                  />
                </th>
              </tr>
            </thead>
            {dataWarehouse && dataWarehouse.length > 0 ? (
              <tbody>
                {dataWarehouse &&
                  dataWarehouse.map((item, index) => {
                    const userNumber = (currentPage - 1) * 10 + index + 1;
                    return (
                      <tr
                        key={index}
                        className="h-[70px] border-b align-bottom text-cloud-burst-500"
                      >
                        <td className="pb-2">
                          <input
                            onChange={() => handleSelectIdCheckBox(item.id)}
                            type="checkbox"
                            checked={selectId.includes(item.id)}
                            className="focus:ring-0 border-slate-700 border-2 rounded-sm"
                          />
                        </td>
                        <td className="pb-2 pl-[12px] ">{userNumber}</td>
                        <td
                          className="pb-2 cursor-pointer"
                          onClick={() =>
                            navigate(`/admin/detail-gudang/${item.id}`, {
                              state: { id: item.id },
                            })
                          }
                        >
                          {item?.name}
                        </td>
                        <td className="pb-2">{item?.provinceName}</td>
                        <td className="pb-2">
                          {item?.buildingArea} m<sup>2</sup>
                        </td>
                        <td className="pb-2 pl-9 md:pl-0">
                          {item?.annualPrice.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </td>
                        <td className="pb-2 px-4 md:px-0">
                          <button
                            className={`${
                              item?.status === "tidak tersedia"
                                ? "bg-[#FF3B3B]"
                                : "bg-[#06C270]"
                            } ${
                              item?.status === "pending"
                                ? "bg-[#EABC03]"
                                : "bg-[#06C270]"
                            } rounded-md p-1 px-2 w-[100px] text-sm text-[#E8EBEF] font-regular`}
                          >
                            {item?.status}
                          </button>
                        </td>
                        <td
                          className={`md:w-[182px] relative ${
                            openDropDown ? "w-[182px]" : "pr-5"
                          }`}
                        >
                          <button id="moreIcon" className="px-0 md:px-5 pb-2">
                            <img
                              onClick={() => handleDropDown(index)}
                              src={moreIcon}
                            />
                          </button>
                          <td
                            className={`absolute left-1 md:left-3 top-[60px] z-50 px-5 py-4 rounded-md shadow-md shadow-gray-500 bg-[#F2F2F5] font-semibold ${
                              openDropDown === index ? "block" : "hidden"
                            }`}
                          >
                            <div>
                              <p
                                id="deleteGudangForId"
                                onClick={() => handleDeleteWarehouse(item.id)}
                                className="cursor-pointer mb-4 hover:text-cloud-burst-900"
                              >
                                Hapus Gudang
                              </p>
                              <p
                                id="editGudang"
                                onClick={() =>
                                  navigate(`/admin/edit-warehouse/${item.id}`, {
                                    state: { id: item.id },
                                  })
                                }
                                className="cursor-pointer hover:text-cloud-burst-900"
                              >
                                Edit Gudang
                              </p>
                            </div>
                          </td>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            ) : (
              <tbody className="h-14 relative">
                <tr className="absolute top-8 inset-0 flex justify-center text-slate-500 font-semibold">
                  Tidak Ada Warehouse Terdaftar
                </tr>
              </tbody>
            )}
          </table>
        )}
      </div>
      <div
        className={`flex justify-center sm:justify-end md:justify-end items-center gap-x-3 my-8 mr-6 ${
          searchQuery || loading || dataWarehouse.length === 0 ? "hidden" : ""
        }`}
      >
        <button
          id="prevPage"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {currentPage === 1 ? (
            <img src={arrowBackDisable} />
          ) : (
            <img src={arrowBack} />
          )}
        </button>
        <p className="text-[#17345F] font-semibold">Halaman {currentPage}</p>
        <button
          id="nextPage"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {currentPage === totalPages ? (
            <img src={arrowNextDisable} />
          ) : (
            <img src={arrowNext} />
          )}
        </button>
      </div>
    </div>
  );
};

export default WarehouseList;
