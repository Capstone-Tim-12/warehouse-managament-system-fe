import TopBar from "../../../components/global-component/TopBar";
import SidedarAdmin from "../../../components/global-component/SidedarAdmin";
import WarehouseList from "../../../components/manage-gudang/WarehouseList";

const ManageGudang = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_3fr]">
      <SidedarAdmin />
      <div>
        <TopBar title={"Manage Gudang"} />
        <WarehouseList />
      </div>
    </div>
  );
};
export default ManageGudang;
