import React from "react";
import TopBar from "../../../components/global-component/TopBar";
import SidebarAdmin from "../../../components/global-component/SidebarAdmin";
import TopEdit from "../../../components/admin-create-warehouse/TopEdit";
import DetailGudang from "../../../components/admin-create-warehouse/DetailGudang";

const CreateWarehouse = () => {

  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_5fr]">
      <SidebarAdmin />
      <div>
        <TopBar title={"Manage Gudang"} />
        <div>
          <div className="container mx-auto px-2 lg:px-9 sm:px-9 md:px-3 py-12 ">
            <TopEdit />
            <div className="mt-12 ">
              <h2 className="text-[20px] font-semibold text-cloud-burst-500 mb-2.5">
                Detail Gudang
              </h2>
              <hr className="border-solid" />
              <DetailGudang/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWarehouse;
