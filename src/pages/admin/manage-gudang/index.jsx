import TopBar from "../../../components/global-component/TopBar";
import SidebarAdmin from "../../../components/global-component/SidebarAdmin";
import WarehouseList from "../../../components/manage-gudang/WarehouseList";

const ManageGudang = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_5fr]">
      <SidebarAdmin />
      <div className="overflow-hidden">
        <TopBar title={"Manage Gudang"} />
        <WarehouseList />
      </div>
    </div>
  );
};
export default ManageGudang;
