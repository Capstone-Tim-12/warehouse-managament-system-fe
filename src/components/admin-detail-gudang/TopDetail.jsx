import React from "react";
import IconEdit from "../../assets/icon-edit.svg";

const TopDetail = ({navigate, item}) => {
  return (
    <>
      <div className="flex w-full h-full justify-between items-center ">
        <h1 className="text-[20px] font-bold text-cloud-burst-500">
          Detail Warehouse
        </h1>
        <button className="bg-orange-500 h-[54px] px-2 sm:px-4 sm:py-3 rounded-lg flex  items-center  cursor cursor-pointer"
        onClick={()=> navigate(`/admin/edit-warehouse/${item.id}`, {state:{id:item.id}})}
        id="btnEditGudang"
        >
          <img src={IconEdit} alt="IconEdit" className="w-8 h-8" />
          <span className="text-white ml-2 "
          >Edit Gudang</span>
        </button>
      </div>
    </>
  );
};

export default TopDetail;
