import React from 'react'
import IconPlus from '../../assets/plus-Icons.svg';

const TopEdit = () => {
  return (
    <>
        <div className='flex w-full h-full justify-between items-center '>
            <h1 className='text-[20px] font-bold text-cloud-burst-500'>Create Warehouse</h1>
            <button className='bg-orange-500 h-[54px] px-2 sm:px-4 sm:py-3 rounded-lg flex  items-center '>
                <img src={IconPlus} alt="IconPlus" className='w-8 h-8' />
                <span className='text-white ml-2 '>Import CSV</span>
            </button>
        </div>
    </>
  )
}

export default TopEdit