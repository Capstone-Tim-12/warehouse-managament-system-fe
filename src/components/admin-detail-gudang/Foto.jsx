import React from 'react'

const Foto = ({FotoDetail}) => {
  return (
    <>
     <div className='h-[150px] w-[190px] sm:h-[205px] rounded-[28px] bg-slate-400 mt-4 overflow-hidden  '>
        <img src={FotoDetail} alt="foto1" className='w-full h-full' />
    </div>
    </>
  )
}

export default Foto