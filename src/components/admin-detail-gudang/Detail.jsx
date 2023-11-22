import React from 'react'
import IconLuasTanah from '../../assets/icon-luas-tanah.svg'
import IconLuasBangunan from '../../assets/icon-luas-bangunan.svg'
import IconHarga from '../../assets/icon-harga.svg'
import IconStatus from '../../assets/icon-status.svg'
import IconNamaPemilik from '../../assets/icon-nama-pemilik.svg'
import IconNoPemilik from '../../assets/icon-no-pemilik.svg'
import IconSkemaPembayaran from '../../assets/icon-skema-pembayaran.svg'
import IconKoordinatGudang from '../../assets/icon-koordinat-gudang.svg'

const Detail = () => {
  return (
    <>
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
    </>
  )
}

export default Detail