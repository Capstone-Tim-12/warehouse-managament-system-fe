import TopBar from "../../../components/global-component/TopBar";
import SidedarAdmin from "../../../components/global-component/SidedarAdmin";

const ManageGudang = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_3fr]">
      <SidedarAdmin />

      {/* lanjut di bagian sini, kalian bisa import component2 lain disini */}
      <div>
        <TopBar title={"Manage Gudang"} />
      </div>
    </div>
  );
};
export default ManageGudang;
