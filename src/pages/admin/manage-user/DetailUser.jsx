import React, { useState, useEffect } from "react";
import TopBar from "../../../components/global-component/TopBar";
import SidebarAdmin from "../../../components/global-component/SidebarAdmin";
import TopDetailUser from "../../../components/admin-manage-user/TopDetailUser";
import IconX from "../../../assets/icon-x-modal-user.svg";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
import Popup from "../../../components/global-component/Popup";

const DetailUser = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleDataUserId = () => {
    axios
      .get(`https://digiwarehouse-app.onrender.com/dasboard/user/${id}`, {
        headers,
      })
      .then((response) => {
        setItem(response?.data?.data);
        // console.log(response?.data?.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    handleDataUserId();
  }, [id]);

  const [transactionHistory, setTransactionHistory] = useState([]);
  const [loadingTransactionHistory, setLoadingTransactionHistory] =
    useState(false);

  const handleTransactionHistory = (userId) => {
    setLoadingTransactionHistory(true);
    axios
      .get(
        `https://digiwarehouse-app.onrender.com/dasboard/user/${userId}/transaction?page=1&limit=10`,
        { headers }
      )
      .then((response) => {
        setTransactionHistory(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoadingTransactionHistory(false);
      });
  };

  useEffect(() => {
    handleDataUserId();
    handleTransactionHistory(id);
  }, [id]);

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleViewDetail = (transactionId) => {
    //menampilkan loading sebelum data modal muncul
    setLoading(true);

    axios
      .get(
        `https://digiwarehouse-app.onrender.com/dasboard/user/transaction/${transactionId}`,
        { headers }
      )
      .then((response) => {
        setSelectedTransaction(response?.data?.data || null);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // Sembunyikan loader setelah panggilan API selesai
        setLoading(false);
        setShowModal(true); // Tampilkan modal setelah loader selesai
      });
  };

  // delete user by id
  const handleDeleteUser = (userId) => {
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus pengguna ini?"
    );

    if (isConfirmed) {
      axios
        .delete(
          `https://digiwarehouse-app.onrender.com/dasboard/user/${userId}`,
          { headers }
        )
        .then(() => {
          console.log("User deleted successfully.");
          alert("data berhasil dihapus");
          navigate("/admin/manage-user");
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };
  //end delete user

  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_5fr]">
      <SidebarAdmin />
      <div>
        <TopBar title={"Pengaturan Pengguna"} />
        <div className="container sm:p-5 py-5 px-1 ">
          {item ? (
            <>
              <TopDetailUser
                username={item.username}
                photo={item.photo}
                handleDeleteUser={() => handleDeleteUser(id)}
              />

              {/* Riwayat Penyewaan Gudang */}
              <div className="mt-6">
                <h1 className="text-xl text-cloud-burst-500 font-bold">
                  Riwayat Penyewaan Gudang
                </h1>

                <div className="table-riwayat-penyewaan mt-7">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right">
                      <thead className="text-[16px] text-cloud-burst-500 border-b">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            No.
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Waktu
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Gudang
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Total
                          </th>
                        </tr>
                      </thead>
                      {loadingTransactionHistory ? (
                        <tbody>
                          <tr>
                            <th
                              colSpan="4"
                              className="text-slate-500 font-semibold text-center text-xl py-3"
                            >
                              <Skeleton active />
                            </th>
                          </tr>
                        </tbody>
                      ) : (
                        <>
                          {transactionHistory &&
                          transactionHistory.length > 0 ? (
                            <tbody>
                              {transactionHistory &&
                                transactionHistory.map((transaction, index) => (
                                  <tr
                                    key={index}
                                    className="cursor-pointer"
                                    onClick={() =>
                                      handleViewDetail(
                                        transaction.transactionId
                                      )
                                    }
                                  >
                                    <th
                                      scope="row"
                                      className="px-6 py-4 font-medium text-cloud-burst-500 whitespace-nowrap dark:text-white"
                                    >
                                      {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                      {transaction.rentalDuration}{" "}
                                      {transaction.paymentScheme}
                                    </td>
                                    <td className="px-6 py-4">
                                      {transaction.warehouseName}
                                    </td>
                                    <td className="px-6 py-4">
                                      {transaction.paymentTotal.toLocaleString(
                                        "id-ID",
                                        {
                                          style: "currency",
                                          currency: "IDR",
                                        }
                                      )}
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          ) : (
                            <tbody>
                              <tr>
                                <th
                                  colSpan="4"
                                  className="text-slate-500 font-semibold text-center text-xl py-3"
                                >
                                  Tidak ada Transaksi
                                </th>
                              </tr>
                            </tbody>
                          )}
                        </>
                      )}
                    </table>
                  </div>
                </div>
              </div>
              {/* End Riwayat Penyewaan Gudang */}

              <div className="catatan">
                <h2 className="text-[16px] text-cloud-burst-500 font-bold mt-4">
                  Catatan
                </h2>
                <input
                  type="text"
                  className="w-full rounded-md border-solid mt-3"
                  placeholder="Masukan Catatan"
                  id="catatan"
                />
              </div>

              {/* Modal detail transaksi */}

              {loading && (
                <div className="text-cloud-burst-500 font-semibold">
                    <Popup open={loading}/>
                  </div>
                
              )}
              {showModal && selectedTransaction && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="bg-white p-5 rounded-md w-auto relative overflow-auto max-h-screen">
                    <h2 className="text-xl text-cloud-burst-500 font-bold mb-1 relative">
                      Detail Riwayat Penyewaan
                      <img
                        src={IconX}
                        alt="iconx"
                        className="absolute top-1 right-1 cursor-pointer"
                        onClick={handleModalClose}
                      />
                    </h2>
                    <table className="mt-6 mb-6 text-cloud-burst-500 ">
                      <tbody>
                        <tr>
                          <td className=" py-4">Nama Gudang</td>
                          <td>:</td>
                          <td>{selectedTransaction.warehouseName}</td>
                        </tr>
                        <tr>
                          <td className=" py-4">Nama Penyewa</td>
                          <td>:</td>
                          <td>{selectedTransaction.username}</td>
                        </tr>
                        <tr>
                          <td className=" py-4">Status</td>
                          <td>:</td>
                          <td>Tanpa Ktp</td>
                        </tr>
                        <tr>
                          <td className=" py-4">Alamat</td>
                          <td>:</td>
                          <td>{selectedTransaction.address}</td>
                        </tr>
                        <tr>
                          <td className=" py-4">Durasi Sewa</td>
                          <td>:</td>
                          <td>
                            {selectedTransaction.duration}{" "}
                            {selectedTransaction.paymentScheme}
                          </td>
                        </tr>
                        <tr>
                          <td className=" py-4">Tanggal Masuk</td>
                          <td>:</td>
                          <td>
                            {new Intl.DateTimeFormat("id-ID", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }).format(new Date(selectedTransaction.entryDate))}
                          </td>
                        </tr>
                        <tr>
                          <td className=" py-4">Tanggal Keluar</td>
                          <td>:</td>
                          <td>
                            {new Intl.DateTimeFormat("id-ID", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }).format(new Date(selectedTransaction.outDate))}
                          </td>
                        </tr>
                        <tr>
                          <td className=" py-4">Total Pembayaran</td>
                          <td>:</td>
                          <td>
                            {selectedTransaction.totalPayment.toLocaleString(
                              "id-ID",
                              {
                                style: "currency",
                                currency: "IDR",
                              }
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td className=" py-4">Status Pembayaran</td>
                          <td>:</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                    {/* component instalment */}
                    {selectedTransaction.instalment.map((instalment, index) => (
                      <div key={index} className="text-cloud-burst-500">
                        <p className="my-3">Minggu {index + 1}</p>
                        <hr className="mb-[24px]" />
                        <div className="grid grid-cols-2 ">
                          <p className="mb-4 ">
                            {instalment.paymentName || "Belum Bayar"}
                          </p>
                          <p className="text-center ml-[150px] mt-1">
                            {instalment.nominal.toLocaleString("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            })}
                          </p>
                          <p>1 Januari 2023</p>
                          <button className="bg-green-500 py-2 px-10 rounded-md text-white ml-[150px] -mt-2">
                            {instalment.status}
                          </button>
                        </div>
                      </div>
                    ))}
                    {/* end instalment */}
                  </div>
                </div>
              )}

              {/* end modal detail transaksi */}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
