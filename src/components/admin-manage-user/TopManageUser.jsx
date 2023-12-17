import React from 'react'
import IconSearchUser from "../../assets/icon-search-user.svg"

const TopManageUser = () => {
  return (
    <>
         <div className='grid grid-cols-2'>
                <h1 className='text-[18px] sm:text-[20px] text-cloud-burst-500 font-bold'>Data Pengguna</h1>
                <div className='flex sm:justify-end sm:px-4 px-6 justify-center items-center'>
                    <input type="text" placeholder="Cari Pengguna" className="sm:rounded-lg w-[150px]  sm:w-[360px] sm:h-auto h-[29px] rounded-md" />
                    <button id='button-search' className=" sm:-ml-10 -ml-6 ">
                        <img src={IconSearchUser} alt="search" className='sm:w-[23px] sm:h-[23px] w-[18px] h-[18px]' />
                     </button>
                </div>
            </div>
    </>
  )
}

export default TopManageUser