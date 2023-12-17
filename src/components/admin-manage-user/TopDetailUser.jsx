import React, { useState } from 'react';
import AvatarUser from "../../assets/avatar-user.png";
import IconDeleteUser from '../../assets/icon-delete.svg';
import ModalDeleteUser from './ModalDeleteUser';

const TopDetailUser = ({username, photo, handleOpenModalDeleteUser}) => {
 

  const imgDefault =
    'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg';

  return (
    <>
      <div className='flex flex-wrap items-center py-2'>
        <img src={photo || imgDefault} alt="avataruser" className='max-w-[40px] max-h-[41px]'/>
        <h1 className='ml-14 justify-center sm:text-[24px] text-[18px] font-bold text-cloud-burst-500'>{username}</h1>

        <button
          id='button-delete-user'
          className='w-24 bg-crusta-500 rounded-lg p-2 gap-2 text-white flex items-center ml-auto'
          onClick={handleOpenModalDeleteUser}
        >
          <img src={IconDeleteUser} alt="" className='w-6 h-6' />Hapus
        </button>
      </div>
    </>
  );
};

export default TopDetailUser;
