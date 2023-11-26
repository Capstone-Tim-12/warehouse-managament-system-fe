import React from 'react'
import TopBar from '../../../components/global-component/TopBar'
import SidedarAdmin from '../../../components/global-component/SidedarAdmin'
import TransactionList from '../../../components/admin-transactions/TransactionList'

const AllTransactions = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_3fr]">
    <SidedarAdmin />
    <div>
      <TopBar title={"Seluruh Transaksi"} />
      <TransactionList/>
    </div>
  </div>
  )
}

export default AllTransactions
