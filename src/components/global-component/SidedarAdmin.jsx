import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import dashboardIcon from "../../assets/dashboard-sidebar-icon.svg";
import manageGudangIcon from "../../assets/manage-gudang-icon.svg";
import managerUserIcon from "../../assets/manage-user-icon.svg";
import transaksiIcon from "../../assets/transaksi-icon.svg";
import pengaturanIcon from "../../assets/pengaturan-icon.svg";

const SidedarAdmin = () => {
  return (
    <div className="bg-cloud-burst-500 ">
      <div
        id="sidebar-wrapper"
        className=" border border-cloud-burst-500 h-screen  text-crusta-500"
      >
        <div
          id="sidebar-header"
          className="flex flex-col items-center justify-center mt-[30px] "
        >
          <img src={logo} alt="logo" />
          <p className="text-crusta-500">DigiHouse</p>
        </div>

        <div className="flex flex-col items-center justify-center mt-24">
          <ul className="flex flex-col items-center justify-center gap-[20px] text-center">
            <li>
              <Link className="bg-crusta-500 text-black font-bold py-1 px-5 rounded w-[185px] flex items-center justify-center gap-2">
                <img src={dashboardIcon} alt="dashboard icon" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="border border-crusta-500 py-1 px-5 rounded w-[185px]  flex items-center justify-center gap-2">
                <img src={manageGudangIcon} alt="manage gudang icon" />
                Manage Gudang
              </Link>
            </li>
            <li>
              <Link className="border border-crusta-500 py-1 px-5 rounded w-[185px]  flex items-center justify-center gap-2">
                <img src={transaksiIcon} alt="transaksi icon" />
                Transaksi
              </Link>
            </li>
            <li>
              <Link className="border border-crusta-500 py-1 px-5 rounded w-[185px]  flex items-center justify-center gap-2">
                <img src={managerUserIcon} alt="manage icon" />
                Manage User
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center mt-24">
          <ul className="flex flex-col items-center justify-center gap-[20px] text-center">
            <li>
              <Link className="border border-crusta-500 py-1 px-5 rounded w-[180px] flex items-center justify-center gap-2">
                <img src={pengaturanIcon} alt="pengaturan icon" />
                Pengaturan
              </Link>
            </li>
            <li>
              <Link className="border border-crusta-500 py-1 px-5 rounded w-[180px] flex items-center justify-center gap-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/152/152534.png"
                  alt="logout icon"
                  className="w-4"
                  style={{
                    filter:
                      "invert(70%) sepia(45%) saturate(5559%) hue-rotate(336deg) brightness(101%) contrast(105%)",
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
