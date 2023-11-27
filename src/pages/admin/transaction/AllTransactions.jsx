import React from 'react'
import TopBar from '../../../components/global-component/TopBar'
import SidedarAdmin from '../../../components/global-component/SidedarAdmin'
import AllTransaction from '../../../components/admin-transaction/AllTransaction'

const AllTransactions = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_3fr]">
    <SidedarAdmin />
    <div>
      <TopBar title={"Seluruh Transaksi"} />
      <AllTransaction/>
    </div>
  </div>
  )
}

export default AllTransactions
