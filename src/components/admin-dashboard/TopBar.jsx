import searchIcon from "../../assets/search-icon.svg";
import notificationIcon from "../../assets/notification-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <div id="top-bar" className="bg-crusta-500 p-3">
      <div className="flex items-center justify-between">
        <h2 className="text-cloud-burst-500 text-[28px] font-bold">
          Statistik Umum
        </h2>
        <div className=" flex items-center gap-8">
          <div className=" flex items-center relative">
            <input
              type="text"
              placeholder="Pencarian"
              className="w-[300px]  focus:outline-none py-3 px-3 rounded-[28px]"
            />
            <img
              src={searchIcon}
              alt="search"
              className="z-10 absolute  right-3"
            />
          </div>
          <div className="flex items-center gap-6">
            <Link>
              <img src={notificationIcon} alt="notification icon" />
            </Link>
            <Link>
              <img src={userIcon} alt="user icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
