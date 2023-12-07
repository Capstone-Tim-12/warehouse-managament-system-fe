import React from 'react'
import IconLuasTanah from '../../assets/icon-luas-tanah.svg'
import IconLuasBangunan from '../../assets/icon-luas-bangunan.svg'
import IconHarga from '../../assets/icon-harga.svg'
import IconStatus from '../../assets/icon-status.svg'
import IconNamaPemilik from '../../assets/icon-nama-pemilik.svg'
import IconNoPemilik from '../../assets/icon-no-pemilik.svg'
import IconSkemaPembayaran from '../../assets/icon-skema-pembayaran.svg'
import IconKoordinatGudang from '../../assets/icon-koordinat-gudang.svg'

const Detail = ({luasTanah, luasBangunan, status, noTelpon, namaPemilik, longitude, latitude, harga}) => {
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
          <span>{luasTanah} m<sup>2</sup></span>
          <span>{luasBangunan} m<sup>2</sup></span>
          <span className=''>{harga}</span>
          <div className='flex justify-end   '>
          <button
            className={`${
              status === "tersewa"
                ? "bg-[#FF3B3B]"
                : "bg-[#06C270]"
            } rounded-md p-1 px-2 text-sm text-[#E8EBEF] font-regular`}
            >
              {status}
            </button>
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
          <img src={IconKoordinatGudang}  alt="koordinator gudang" className='' />Koordinat Gudang</span>
        </div>
        <div className='grid grid-rows-4 gap-y-4 text-end items-center'>
          <span >{namaPemilik}</span>
          <span >{noTelpon}</span>
          <span className='' >{longitude} {latitude}</span>
    </div>
    </div>
    </>
  )
}

export default Detail