import React from 'react'
import TopBar from "../../../components/global-component/TopBar";
import SidedarAdmin from "../../../components/global-component/SidedarAdmin";
import TopManageUser from '../../../components/admin-manage-user/TopManageUser';

const ManageUser = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_3fr]">
    <SidedarAdmin />
    <div>
      <TopBar title={"Pengaturan Pengguna"} />
        <div className='container sm:p-3 p-1 '>
           <TopManageUser/>
        </div>
    </div>
  </div>
  )
}

export default ManageUser