import React from 'react'
import TopBar from '../../../components/global-component/TopBar'
import SidebarAdmin from '../../../components/global-component/SidebarAdmin'
import AllTransaction from '../../../components/admin-transaction/AllTransaction'

const AllTransactions = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[0fr_3fr]">
    <SidebarAdmin />
    <div>
      <TopBar title={"Seluruh Transaksi"} />
      <AllTransaction/>
    </div>
  </div>
  )
}

export default AllTransactions
