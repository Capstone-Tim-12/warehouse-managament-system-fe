import React from "react";
import TopBar from "../../../components/global-component/TopBar";
import SidedarAdmin from "../../../components/global-component/SidedarAdmin";
import TopEdit from "../../../components/admin-edit-warehouse/TopEdit";
import DetailGudang from "../../../components/admin-edit-warehouse/DetailGudang";
import Picture from "../../../components/admin-edit-warehouse/Pictures";
const EditWarehouse = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_3fr]">
      <SidedarAdmin />
      <div>
        <TopBar title={"Manage Gudang"} />
        <div>
          <div className="container mx-auto px-2 lg:px-9 sm:px-9 md:px-3 py-12 ]  ">
            <TopEdit />
            <div className="mt-12 ">
              <h2 className="text-[20px] font-semibold text-cloud-burst-500 mb-2.5">
                Detail Gudang
              </h2>
              <hr className="border-solid" />
              <DetailGudang />
            </div>
            <div className="">
              <h2 className="mt-8 text-[20px] text-cloud-burst-500 font-semibold mb-2.5">
                Peta
              </h2>
              <hr className="border-solid" />
            </div>
            <div className="">
              <h2 className="mt-8 text-[20px] text-cloud-burst-500 font-semibold mb-2.5">
                Picture
              </h2>
              <hr className="border-solid" />
              <Picture />
            </div>
            <div>
                <button className='bg-orange-500 w-[101px] h-[40px] px-2 sm:px-4 sm:py-3 rounded-lg  text-white font-bold text-center justify-center flex  items-center mt-8'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditWarehouse;
