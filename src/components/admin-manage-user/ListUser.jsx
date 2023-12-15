import React, { useEffect, useState } from "react";
import AvatarUser from "../../assets/avatar-user.png";
import IconDeleteUser from "../../assets/icon-delete.svg";
import IconLihatUser from "../../assets/icon-lihat-user.svg";
import arrowBackDisable from "../../assets/arrow-back-left-Icons.svg";
import arrowBack from "../../assets/arrow-back-left-Icons(orange-500).svg";
import arrowNext from "../../assets/arrow-next-right-Icons.svg";
import arrowNextDisable from "../../assets/arrow-next-right-Icons(orange-200).svg";
import IconSearchUser from "../../assets/icon-search-user.svg";
import IconStatusUser from "../../assets/icon-status-user.svg";
import IconX from "../../assets/icon-x-modal-user.svg";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import axios from "axios";

const ListUser = () => {
  const navigate = useNavigate();

  const [dataUser, setDataUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading

  const handleDataUser = (page) => {
    setLoading(true); // Set loading to true when data fetching starts
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(
        `https://digiwarehouse-app.onrender.com/dasboard/user/list?limit=10&page=${page}&search=${searchQuery}`,
        { headers }
      )
      .then((response) => {
        setDataUser(response?.data?.data);
        setTotalPages(response?.data?.pagination?.totalPage);
        setLoading(false); // Set loading to false when data fetching is complete
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Set loading to false in case of an error
      });
  };

  useEffect(() => {
    handleDataUser();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    handleDataUser(newPage);
  };

  const handleSearch = () => {
    handleDataUser();
  };

  useEffect(() => {
    if (searchQuery === "") {
      handleDataUser();
    }
  }, [searchQuery]);

  const imgDefault =
    "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";

  // delete user by id
  const handleDeleteUser = (userId) => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .delete(
        `https://digiwarehouse-app.onrender.com/dasboard/user/${userId}`,
        { headers }
      )
      .then(() => {
        console.log("User deleted successfully.");
        alert("data berhasil dihapus");
        handleDataUser(currentPage); // Refresh data after deletion
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  //modal delete user
  const [modalDeleteUser, setModalDeleteUser] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenModalDeleteUser = (user) => {
    setSelectedUser(user);
    setModalDeleteUser(true);
  };

  //end modal delete user

  //end delete user

  return (
    <>
      <div className="grid grid-cols-2">
        <h1 className="text-[18px] sm:text-[20px] text-cloud-burst-500 font-bold">
          Data Pengguna
        </h1>
        <div className="flex sm:justify-end sm:px-4 px-6 justify-center items-center">
          <input
            type="text"
            placeholder="Cari Pengguna"
            className="sm:rounded-lg w-[150px]  sm:w-[360px] sm:h-auto h-[29px] rounded-md"
            value={searchQuery}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch(e.target.value);
              }
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="searchUser"
          />
          <button
            className="sm:-ml-10 -ml-6 "
            onClick={() => handleDataUser(currentPage)}
            id="btnSearchUser"
          >
            <img
              src={IconSearchUser}
              alt="search"
              className="sm:w-[23px] sm:h-[23px] w-[18px] h-[18px]"
            />
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto mt-5">
        {loading ? (
          <p className="text-[24px]  text-slate-500 font-semibold mt-2">
            Memuat data...
          </p>
        ) : (
          <table className="w-full text-center rtl:text-right">
            <thead className="text-cloud-burst-500 ">
              <tr className="border-b">
                <th scope="col" className="px-6 py-3 ">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Profil
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Username
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Tindakan
                </th>
              </tr>
            </thead>
            {dataUser && dataUser.length > 0 ? (
            <tbody>
              {dataUser &&
                dataUser.map((item, index) => {
                  const userNumber = (currentPage - 1) * 10 + index + 1;
                  return (
                    <tr className="" key={index}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {userNumber}
                      </th>
                      <td className="px-6 py-4 flex items-center justify-center">
                        <img
                          src={item.photo || imgDefault}
                          alt="avataruser"
                          className="max-w-[41px] max-h-[40px] "
                        />
                      </td>
                      <td className="px-6 py-4">{item.username}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4 ">
                        <div className="flex items-center justify-center">
                          <img src={IconStatusUser} alt="status" />
                        </div>
                      </td>
                      <td className="px-6 py-4 flex gap-4 items-center justify-center">
                        <button
                          className="w-24 bg-crusta-500 rounded-lg p-2 gap-2 text-white flex items-center"
                          onClick={() => handleOpenModalDeleteUser(item)}
                          id="showModalDeleteUserId"
                        >
                          <img
                            src={IconDeleteUser}
                            alt="delete"
                            className="w-6 h-6"
                          />
                          Hapus
                        </button>

                        <button
                          className="w-24 bg-crusta-500 rounded-lg p-2 gap-2 text-white flex items-center"
                          onClick={() =>
                            navigate(`/admin/detail-user/${item.userId}`, {
                              state: { id: item.userId },
                            })
                          }
                          id="btnViewUserId"
                        >
                          <img
                            src={IconLihatUser}
                            alt=""
                            className="w-6 h-6 "
                          />
                          Lihat
                        </button>
                      </td>
                    </tr>

                    
                  );
                })}
            </tbody>
            ) : (
              <tbody >
                <tr>
                  <th colSpan="6" className="text-slate-500 font-semibold text-center text-xl py-3">
                    User tidak ditemukan.
                  </th>
                </tr>
              </tbody>
            )}
            <tfoot className="border-b">
              <tr>
                <th>
                  
                </th>
              </tr>
            </tfoot>
          </table>
        )}
      </div>

      {/* component pagination */}
      <div className="flex justify-center sm:justify-end md:justify-end items-center gap-x-3 my-8 mr-6">
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
          disabled={currentPage === totalPages || dataUser < 1}
        >
          {currentPage === totalPages || dataUser < 1 ?  (
            <img src={arrowNextDisable} />
          ) : (
            <img src={arrowNext} />
          )}
        </button>
      </div>
      {/* end component pagination */}

      {/* modal hapus user */}
      {modalDeleteUser && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-5 rounded-md w-96 relative">
            <h2 className="text-xl text-cloud-burst-500 font-bold mb-1 relative">
              Informasi
              <img
                src={IconX}
                alt="iconx"
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => {
                  setSelectedUser(null);
                  setModalDeleteUser(false);
                }}
                id="closeModalDeleteUser"
              />
            </h2>
            <hr className="border-1" />
            <p className="text-cloud-burst-500 mt-3">
              Hapus akun {selectedUser.username} dari sistem
            </p>
            <div className="mt-5 flex justify-end gap-3">
            <button
                className="bg-white border border-crusta-500 px-4 py-2 text-crusta-500 rounded-md"
                onClick={() => {
                  setSelectedUser(null);
                  setModalDeleteUser(false);
                }}
                id="btnCancelModalDeleteUser"
              >
                Cancel  
              </button>

              <button
                className="bg-crusta-500 px-4 py-2 text-white rounded-md"
                onClick={() => {
                  handleDeleteUser(selectedUser.userId);
                  setModalDeleteUser(false);
                }}
                id="btnDeleteUser"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
      {/* modal hapus user */}
    </>
  );
};

export default ListUser;
