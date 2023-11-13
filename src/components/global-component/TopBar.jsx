import searchIcon from "../../assets/search-icon.svg";
import notificationIcon from "../../assets/notification-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import { Link } from "react-router-dom";
const TopBar = ({ title }) => {
  return (
    <div id="top-bar" className="bg-crusta-500 p-1 lg:p-3">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <h2 className="text-cloud-burst-500 text-[28px] font-bold mb-3 md:mb-0">
          {title}
        </h2>
        <div className=" flex items-center gap-8">
          <form
            className="relative bg-white rounded-[28px] flex items-center"
            // onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Pencarian"
              className="w-[180px] md:w-[300px]  focus:outline-none py-3 px-3 rounded-[28px]  "
            />
            <button className="  pr-3  ">
              <img src={searchIcon} alt="search" />
            </button>
          </form>
          <div className="flex items-center gap-1 lg:gap-6">
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
