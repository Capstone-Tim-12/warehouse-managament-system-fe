import React from 'react'
import TopBar from "../../../components/global-component/TopBar";
import SidebarAdmin from "../../../components/global-component/SidebarAdmin";
import Foto1 from '../../../assets/foto-1.jpg';
import Foto2 from '../../../assets/foto-2.jpg';
import Foto3 from '../../../assets/foto-3.jpg';
import Foto4 from '../../../assets/foto-4.jpg';
import TopDetail from '../../../components/admin-detail-gudang/TopDetail';
import Foto from '../../../components/admin-detail-gudang/Foto';
import NamaDeskripsi from '../../../components/admin-detail-gudang/NamaDeskripsi';
import Detail from '../../../components/admin-detail-gudang/Detail';

const DetailGudang = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_5fr]">
      <SidebarAdmin />
      <div>
        <TopBar title={"Manage Gudang"} />

        <div>
            <div className="container mx-auto px-2 lg:px-9 sm:px-9 md:px-3 py-12 ]  ">
                {/* componen top */}
                <TopDetail/>
                {/* end component top */}

                {/* main content 1 nama & deskripsi */}
                <div className='mt-12 '>
                    <h2 className='text-[20px] font-semibold text-cloud-burst-500 mb-2.5'>Nama Dan Deskripsi</h2>
                    <hr className='border-solid'/>
                    <NamaDeskripsi/>

                </div>
                {/* end main content 1 nama & deskripsi */}

                {/* component foto */}
                <div className=''>
                  <h2 className="mt-8 text-[20px] text-cloud-burst-500 font-semibold mb-2.5">Foto</h2>
                  <hr className="border-solid" />
                  <div className='flex lg:flex gap-2 sm:ml-5 md:grid md:grid-rows-2 md:grid-flow-col '>
                    <Foto FotoDetail={Foto1}/>
                    <Foto FotoDetail={Foto2}/>
                    <Foto FotoDetail={Foto3}/>
                    <Foto FotoDetail={Foto4}/>
                  </div>

                </div>
                {/* end component foto */}

                {/* component detail */}
                <div className='text-cloud-burst-500 '>
                  <h2 className="mt-8 text-[20px] text-cloud-burst-500 font-semibold mb-2.5">Detail</h2>
                  <hr className='border-solid'/>

                  <div className='grid  sm:flex sm:gap-10 gap-3 mt-4 lg:text-[16px] md:text-[14px]'>
                    
                    <Detail/>
                  
                  </div>

                </div>
                {/* end component detail */}

            </div>
        </div>
      </div>
      
    </div>
  )
}

export default DetailGudang