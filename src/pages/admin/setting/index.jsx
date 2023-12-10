import Profile from '../../../components/admin-setting/Profile'
import SidebarAdmin from '../../../components/global-component/SidebarAdmin'
import TopBar from '../../../components/global-component/TopBar'

const AdminSetting = () => {

  return (
    <div className="bg-white">
      <div className=" grid grid-cols-1 md:grid-cols-[1fr_5fr]">
        <SidebarAdmin />
        <div>
          <TopBar title={"Pengaturan Pengguna"} />
          <div className="mx-8 max-w-screen-lg max-h-screen">
            <div>
              <div>
                <h1
                  className='py-3 font-bold text-cloud-burst-500 text-xl mb-8 mt-9'
                >Pengaturan Akun</h1>
              </div>
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSetting