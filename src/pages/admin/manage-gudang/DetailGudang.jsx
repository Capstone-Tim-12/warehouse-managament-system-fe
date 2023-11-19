import React from 'react'
import TopBar from "../../../components/global-component/TopBar";
import SidedarAdmin from "../../../components/global-component/SidedarAdmin";
import IconEdit from '../../../assets/icons-edit.svg';
import Foto1 from '../../../assets/foto-1.jpg';
import Foto2 from '../../../assets/foto-2.jpg';
import Foto3 from '../../../assets/foto-3.jpg';
import Foto4 from '../../../assets/foto-4.jpg';
import IconLuasTanah from '../../../assets/icon-luas-tanah.svg'
import IconLuasBangunan from '../../../assets/icon-luas-bangunan.svg'
import IconHarga from '../../../assets/icon-harga.svg'
import IconStatus from '../../../assets/icon-status.svg'
import IconNamaPemilik from '../../../assets/icon-nama-pemilik.svg'
import IconNoPemilik from '../../../assets/icon-no-pemilik.svg'
import IconSkemaPembayaran from '../../../assets/icon-skema-pembayaran.svg'
import IconKoordinatGudang from '../../../assets/icon-koordinat-gudang.svg'

const DetailGudang = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_3fr]">
      <SidedarAdmin />
      {/* lanjut di bagian sini, kalian bisa import component2 lain disini */}
      <div>
        <TopBar title={"Manage Gudang"} />

        <div>
            <div className="container mx-auto px-2 lg:px-9 sm:px-9 md:px-3 py-12 ]  ">
                {/* componen top */}
                <div className='flex w-full h-full justify-between items-center '>
                    <h1 className='text-[20px] font-bold text-cloud-burst-500'>Detail Warehouse</h1>
                  
                    <button className='bg-orange-500 h-[54px] px-2 sm:px-4 sm:py-3 rounded-lg flex  items-center '>
                        <img src={IconEdit} alt="IconEdit" className='w-8 h-8' />
                        <span className='text-white ml-2 '>Edit Gudang</span>
                    </button>
                    
                </div>
                {/* end component top */}

                {/* main content 1 nama & deskripsi */}
                <div className='mt-12 '>
                    <h2 className='text-[20px] font-semibold text-cloud-burst-500 mb-2.5'>Nama Dan Deskripsi</h2>
                    <hr className='border-solid'/>
                    <h2 className='mt-3 text-2xl text-cloud-burst-500'>Warehouse Abadi</h2>
                    <p className='text-justify mt-3 sm:mt-2 text-cloud-burst-500 text-[16px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iste. Animi temporibus corrupti quae natus eaque recusandae praesentium quisquam est, distinctio itaque, architecto in libero saepe aperiam blanditiis sint facere obcaecati veritatis cupiditate earum, mollitia doloribus. Quod tenetur fugit, sint recusandae voluptatum suscipit repudiandae soluta quas minima quidem? Voluptas, maiores?</p>

                </div>
                {/* end main content 1 nama & deskripsi */}

                {/* component foto */}
                <div className=''>
                  <h2 className="mt-8 text-[20px] text-cloud-burst-500 font-semibold mb-2.5">Foto</h2>
                  <hr className="border-solid" />
                  <div className='flex lg:flex gap-2 sm:ml-5 md:grid md:grid-rows-2 md:grid-flow-col '>
                    <div className='h-[150px] w-[190px] sm:h-[205px] rounded-[28px] bg-slate-400 mt-4 overflow-hidden  '>
                      <img src={Foto1} alt="foto1" className='w-full h-full' />
                    </div>
                    <div className='h-[150px] w-[190px] sm:h-[205px] rounded-[28px] bg-slate-400 mt-4 overflow-hidden '>
                      <img src={Foto2} alt="foto2" className='w-full h-full' />
                    </div>
                    <div className='h-[150px] w-[190px] sm:h-[205px] rounded-[28px] bg-slate-400 mt-4 overflow-hidden '>
                      <img src={Foto3} alt="foto3" className='w-full h-full' />
                    </div>
                    <div className='h-[150px] w-[190px] sm:h-[205px] rounded-[28px] bg-slate-400 mt-4 overflow-hidden '>
                      <img src={Foto4} alt="foto4" className='w-full h-full' />
                    </div>
                  </div>

                </div>
                {/* end component foto */}

                {/* component detail */}
                <div className='text-cloud-burst-500 '>
                  <h2 className="mt-8 text-[20px] text-cloud-burst-500 font-semibold mb-2.5">Detail</h2>
                  <hr className='border-solid'/>

                  <div className='grid  sm:flex sm:gap-10 gap-3 mt-4 lg:text-[16px] md:text-[14px]'>
                    
                  <div className='flex justify-between h-full sm:w-1/2  '>

                  <div className='grid grid-rows-4 gap-y-4'>
                    <span className='flex gap-2 justify-start items-center'><img src={IconLuasTanah}  alt="Lt" className='' />Luas Tanah</span>
                    <span className='flex gap-2 justify-start items-center'>
                    <img src={IconLuasBangunan}  alt="Lt" />Luas Bangunan</span>
                    <span className='flex gap-2 justify-start items-center'>
                    <img src={IconHarga}  alt="Lt" />Harga</span>
                    <span className='flex gap-2 justify-start items-center'>
                    <img src={IconStatus}  alt="Lt" />Status</span>
                  </div>
                  <div className='grid grid-rows-4 gap-y-4 text-end '>
                    <span>1700 m<sup>2</sup></span>
                    <span>1200 m<sup>2</sup></span>
                    <span className=''>Rp10.000.000,00</span>
                    <div className='flex justify-end   '>
                    <div className=' bg-crusta-300 rounded-lg text-cloud-burst-500 border-[#79747E] border-2 font-semibold   '>
                      <span className='p-3  '>Tersedia</span></div>
                    </div>
                  </div>

                  </div>

                  <div className='flex justify-between h-full sm:w-1/2 '>
                  <div className='grid grid-rows-4 gap-y-4'>
                    <span className='flex gap-2 justify-start items-center'>
                    <img src={IconNamaPemilik}  alt="nama-pemilik" className='' />Nama Pemilik</span>
                    <span className='flex gap-2 justify-start items-center'>
                    <img src={IconNoPemilik}  alt="no pemilik" className='' />No. Ponsel Pemilik</span>
                    <span className='flex gap-2 justify-start items-center'>
                    <img src={IconSkemaPembayaran}  alt="skema pembayaran" className='' />Skema Pembayaran</span>
                    <span className='flex gap-2 justify-start items-center'>
                    <img src={IconKoordinatGudang}  alt="koordinator gudang" className='' />Koordinat Gudang</span>
                  </div>
                  <div className='grid grid-rows-4 gap-y-4 text-end items-center'>
                    <span >Abadi Budiyanto</span>
                    <span >081244556677</span>
                    <span >Bulanan, Tahunan</span>
                    <span className='' >6°10'08.5"S 106°44'33.7"E</span>
                  </div>
                  </div>
                  
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