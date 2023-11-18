import React from 'react'
import TopBar from "../../../components/global-component/TopBar";
import SidedarAdmin from "../../../components/global-component/SidedarAdmin";
import IconEdit from '../../../assets/icons-edit.svg';
const DetailGudang = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_3fr]">
      <SidedarAdmin />
      {/* lanjut di bagian sini, kalian bisa import component2 lain disini */}
      <div>
        <TopBar title={"Manage Gudang"} />

        <div>
            <div className="container mx-auto px-10 py-12 bg-red-300">
                {/* componen top */}
                <div className='flex w-full h-[56px] bg-pink-200 justify-between items-center'>
                    <h1 className='text-[20px] font-bold text-cloud-burst-500'>Detail Warehouse</h1>
                  
                    <button className='bg-orange-500 h-[56px] px-4 py-3 rounded-lg flex  items-center '>
                        <img src={IconEdit} alt="IconEdit" className='' />
                        <span className='text-white ml-2 '>Edit Gudang</span>
                    </button>
                    
                </div>
                {/* end component top */}

                {/* main content 1 nama & deskripsi */}
                <div className='mt-12 bg-green-300'>
                    <h2 className='text-[16px] font-semibold text-cloud-burst-500 mb-2.5'>Nama Dan Deskripsi</h2>
                    <hr className='border-solid'/>
                    <h2 className='mt-3 text-2xl text-cloud-burst-500'>Warehouse Abadi</h2>
                    <p className='text-justify mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iste. Animi temporibus corrupti quae natus eaque recusandae praesentium quisquam est, distinctio itaque, architecto in libero saepe aperiam blanditiis sint facere obcaecati veritatis cupiditate earum, mollitia doloribus. Quod tenetur fugit, sint recusandae voluptatum suscipit repudiandae soluta quas minima quidem? Voluptas, maiores?</p>

                </div>
                {/* end main content 1 nama & deskripsi */}

                

            </div>
        </div>
      </div>
      
    </div>
  )
}

export default DetailGudang