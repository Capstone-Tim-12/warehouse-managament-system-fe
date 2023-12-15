import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { removeToken } from "../../features/authSlice";

import logo from "../../assets/logo.svg";
import dashboardIcon from "../../assets/dashboard-sidebar-icon.svg";
import manageGudangIcon from "../../assets/manage-gudang-icon.svg";
import managerUserIcon from "../../assets/manage-user-icon.svg";
import transaksiIcon from "../../assets/transaksi-icon.svg";
import pengaturanIcon from "../../assets/pengaturan-icon.svg";
import sidebarDropdown from "../../assets/dropdown-sidebar-admin.svg";

const SidebarAdmin = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isLinkActive = (pathname) => {
    return location.pathname === pathname
      ? "bg-[#102543] h-12 text-white font-bold rounded rounded-lg transition-all duration-300"
      : "text-[#eee] transition-all duration-300";
  };

  const handleLogOut = () => {
    Modal.confirm({
      title: "Konfirmasi",
      content: "Apakah Anda yakin ingin Logout",
      okText: "Ya",
      okType: "danger",
      cancelText: "Batal",
      onOk() {
        dispatch(removeToken());
        navigate("/admin/login-admin");
      },
    });
  };

  return (
    <div className="bg-cloud-burst-500 pb-20 md:pb-0 md:grid md:sticky md:top-0 h-screen md:w-[320px]">
      <div
        id="sidebar-wrapper"
        className="border border-cloud-burst-500 h-screen "
      >
        <div
          id="sidebar-header"
          className="flex flex-col items-center justify-center mt-[30px]"
        >
          <img src={logo} alt="logo" />
          <p className="text-crusta-500">DigiHouse</p>
        </div>

        <div className="flex flex-col   ">
          <div className="flex flex-col items-center justify-center mt-24 ">
            <ul className="flex flex-col items-center justify-center gap-y-[20px] text-center">
              <li>
                <Link
                  id="dashboard"
                  to="/admin/dashboard"
                  className={` h-12 rounded-lg py-1 px-5 w-[200px] flex items-center justify-start gap-2   ${isLinkActive(
                    "/admin/dashboard"
                  )}`}
                >
                  <img src={dashboardIcon} alt="dashboard icon" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  id="manage-gudang"
                  to="/admin/manage-gudang"
                  className={` h-12 rounded-lg py-1 px-5 w-[200px] flex items-center justify-start gap-2   ${isLinkActive(
                    "/admin/manage-gudang"
                  )}`}
                >
                  <img src={manageGudangIcon} alt="manage gudang icon" />
                  Manage Gudang
                </Link>
              </li>
              <li>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      id="transaksi"
                      onClick={toggleDropdown}
                      className={`${
                        isDropdownOpen
                          ? "bg-[#102543] h-12 text-white font-bold  rounded-lg transition-all duration-300"
                          : "text-[#eee] transition-all duration-300"
                      }  h-12 rounded-lg py-1 px-5 w-[200px] flex items-center justify-start gap-2`}
                    >
                      <img src={transaksiIcon} alt="transaksi icon" />
                      Transaksi
                      <span className="ml-10">
                        <img src={sidebarDropdown} />
                      </span>
                    </button>
                  </div>

                  {isDropdownOpen && (
                    <div
                      className="absolute right-0 mt-2 origin-top-right bg-[#102543] divide-y divide-gray-800 rounded-md shadow-lg"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="py-1">
                        <Link
                          id="daftar-transaksi"
                          to="/admin/transaksi"
                          className="block px-4 py-2 text-sm text-white "
                          role="menuitem"
                        >
                          Daftar Transaksi
                        </Link>
                      </div>
                      <div className="py-1">
                        <Link
                          id="laporan-transaksi"
                          to="/admin/all-transactions"
                          className="block px-4 py-2 text-sm text-white "
                          role="menuitem"
                        >
                          Laporan Transaksi
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link
                  id="manage-user"
                  to="/admin/manage-user"
                  className={`py-1 px-5  h-12 rounded-lg w-[200px] flex items-center justify-start gap-2  ${isLinkActive(
                    "/admin/manage-user"
                  )}`}
                >
                  <img src={managerUserIcon} alt="manage icon" />
                  Manage User
                </Link>
              </li>
              <li>
                <Link
                  id="pengaturan"
                  to="/admin/pengaturan"
                  className={`py-1 px-5 h-12 rounded-lg w-[200px] flex items-center justify-start text-left gap-2 ${isLinkActive(
                    "/admin/pengaturan"
                  )}`}
                >
                  <img src={pengaturanIcon} alt="pengaturan icon" />
                  Pengaturan
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center mt-[120px] ">
            <ul>
              <li>
                <Link
                  id="logout"
                  onClick={handleLogOut}
                  className={`py-1 hover:bg-[#102543] h-12 rounded-lg px-5 w-[200px] flex items-center justify-start gap-2  ${isLinkActive(
                    "/admin/logout"
                  )}`}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/152/152534.png"
                    alt="logout icon"
                    className="w-5"
                    style={{
                      filter:
                        "invert(83%) sepia(28%) saturate(115%) hue-rotate(176deg) brightness(90%) contrast(84%)",
                    }}
                  />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
