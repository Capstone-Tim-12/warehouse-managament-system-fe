import React from 'react'
import IconSearchUser from "../../assets/icon-search-user.svg"

const TopManageUser = () => {
  return (
    <>
         <div className='grid grid-cols-2'>
                <h1 className='text-[18px] sm:text-[20px] text-cloud-burst-500 font-bold'>Data Pengguna</h1>
                <div className='flex sm:justify-end sm:px-4 px-5 relative'>
                    <input type="text" placeholder="Cari Pengguna" className="rounded-lg w-[150px]  sm:w-[360px]" />
                    <button className=" sm:-ml-10 -ml-7 ">
                        <img src={IconSearchUser} alt="search" className='sm:w-[23px] sm:h-[23px] w-[18px] h-[18px]' />
                     </button>
                </div>
            </div>
    </>
  )
}

export default TopManageUser