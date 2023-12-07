import { useState } from 'react'
import Profile from '../../../components/admin-setting/Profile'
import Security from '../../../components/admin-setting/Security'
import SidebarAdmin from '../../../components/global-component/SidebarAdmin'
import TopBar from '../../../components/global-component/TopBar'

const AdminSetting = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white">
      <div className=" grid grid-cols-1 md:grid-cols-[1fr_5fr]">
        <SidebarAdmin />
        <div>
          <TopBar title={"Pengaturan Pengguna"} />
          <div className="mx-[100px] max-w-screen-lg">
            <div className=" text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul className="grid grid-cols-2 -mb-px">
                <li>
                  <a
                    href="#"
                    className={`w-full p-4 border-b-2 border-transparent rounded-t-lg hover:text-cloud-burst-600 hover:border-cloud-burst-600  ${activeTab === 'profile' ? 'text-cloud-burst-500 border-b-2 !border-cloud-burst-500' : ''
                      }`}
                    onClick={() => handleTabClick('profile')}
                  >
                    Profil Admin
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`w-full p-4 border-b-2 border-transparent rounded-t-lg hover:text-cloud-burst-600 hover:border-cloud-burst-600 ${activeTab === 'security' ? 'text-cloud-burst-500 border-b-2 !border-cloud-burst-500' : ''
                      }`}
                    onClick={() => handleTabClick('security')}
                  >
                    Keamanan Akun
                  </a>
                </li>
              </ul>
            </div>
            <div className="my-5">
              {activeTab === 'profile' && <Profile />}
              {activeTab === 'security' && <Security />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSetting