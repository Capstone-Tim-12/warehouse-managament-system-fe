import TopBar from "../../../components/global-component/TopBar";
import SidedarAdmin from "../../../components/global-component/SidedarAdmin";
import Foto1 from '../../../assets/foto-1.jpg';
import Foto2 from '../../../assets/foto-2.jpg';
import Foto3 from '../../../assets/foto-3.jpg';
import Foto4 from '../../../assets/foto-4.jpg';
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
