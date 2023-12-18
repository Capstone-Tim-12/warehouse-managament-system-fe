import React from 'react'

const NamaDeskripsi = ({nama, deskripsi}) => {
  return (
    <div>
        <h2 className='mt-3 text-2xl text-cloud-burst-500'>{nama}</h2>
        <p className='text-justify mt-3 sm:mt-2 text-cloud-burst-500 text-[16px] '>{deskripsi}</p>
    </div>
  )
}

export default NamaDeskripsi