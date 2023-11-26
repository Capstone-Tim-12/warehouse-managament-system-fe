import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import dashboardIcon from "../../assets/dashboard-sidebar-icon.svg";
import manageGudangIcon from "../../assets/manage-gudang-icon.svg";
import managerUserIcon from "../../assets/manage-user-icon.svg";
import transaksiIcon from "../../assets/transaksi-icon.svg";
import pengaturanIcon from "../../assets/pengaturan-icon.svg";

const SidedarAdmin = () => {
  const location = useLocation();

  const isLinkActive = (pathname) => {
    return location.pathname === pathname
      ? "bg-[#102543] text-white font-bold"
      : "text-[#eee]";
  };

  return (
    <div className="bg-cloud-burst-500    pb-20 md:pb-0 md:grid">
      <div
        id="sidebar-wrapper"
        className="border border-cloud-burst-500 h-screen"
      >
        <div
          id="sidebar-header"
          className="flex flex-col items-center justify-center mt-[30px]"
        >
          <img src={logo} alt="logo" />
          <p className="text-crusta-500">DigiHouse</p>
        </div>

        <div className="flex flex-col items-center justify-center mt-24">
          <ul className="flex flex-col items-center justify-center gap-[20px] text-center">
            <li>
              <Link
                to="/admin/dashboard"
                className={` py-1 px-5 rounded w-[200px] flex items-center justify-start gap-2   ${isLinkActive(
                  "/admin/dashboard"
                )}`}
              >
                <img src={dashboardIcon} alt="dashboard icon" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/manage-gudang"
                className={`py-1 px-5 rounded w-[200px] flex items-center justify-start gap-2   ${isLinkActive(
                  "/admin/manage-gudang"
                )}`}
              >
                <img src={manageGudangIcon} alt="manage gudang icon" />
                Manage Gudang
              </Link>
            </li>
            <li>
              <Link
                to="/admin/transaksi"
                className={`py-1 px-5 rounded w-[200px] flex items-center justify-start gap-2   ${isLinkActive(
                  "/admin/transaksi"
                )}`}
              >
                <img src={transaksiIcon} alt="transaksi icon" />
                Transaksi
              </Link>
            </li>
            <li>
              <Link
                to="/admin/manage-user"
                className={`py-1 px-5 rounded w-[200px] flex items-center justify-start gap-2  ${isLinkActive(
                  "/admin/manage-user"
                )}`}
              >
                <img src={managerUserIcon} alt="manage icon" />
                Manage User
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center mt-24">
          <ul className="flex flex-col items-center justify-center gap-[20px] ">
            <li>
              <Link
                to="/admin/pengaturan"
                className={`py-1 px-5 rounded w-[200px] flex items-center justify-start text-left gap-2 ${isLinkActive(
                  "/admin/pengaturan"
                )}`}
              >
                <img src={pengaturanIcon} alt="pengaturan icon" />
                Pengaturan
              </Link>
            </li>
            <li>
              <Link
                to="/admin/logout"
                className={`py-1 px-5 rounded w-[200px] flex items-center justify-start gap-2  ${isLinkActive(
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
  );
};

export default SidedarAdmin;
