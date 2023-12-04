import React from 'react'
import TopBar from "../../../components/global-component/TopBar";
import SidedarAdmin from "../../../components/global-component/SidebarAdmin";
import TopManageUser from '../../../components/admin-manage-user/TopManageUser';
import ListUser from '../../../components/admin-manage-user/ListUser';

const ManageUser = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_5fr]">
    <SidedarAdmin />
    <div className='overflow-hidden'>
      <TopBar title={"Pengaturan Pengguna"} />
        <div className='container sm:p-3 py-5 '>
           <TopManageUser/>

            {/* list user component */}
            <ListUser/>

            {/* end list user component */}
        </div>
    </div>
  </div>
  )
}

export default ManageUser