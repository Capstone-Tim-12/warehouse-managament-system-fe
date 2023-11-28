import React from "react";
import TopBar from "../../../components/global-component/TopBar";
import SidebarAdmin from "../../../components/global-component/SidebarAdmin";
import TransactionList from "../../../components/admin-transaction/TransactionList";

const Transaction = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[0fr_3fr]">
      <SidebarAdmin />
      <div>
        <TopBar title={"Transaksi"} />
        <TransactionList />
      </div>
    </div>
  );
};

export default Transaction;
