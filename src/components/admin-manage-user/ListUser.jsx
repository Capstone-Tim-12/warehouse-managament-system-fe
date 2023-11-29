import React from 'react'
import AvatarUser from '../../assets/avatar-user.png'
import IconDeleteUser from '../../assets/icon-delete.svg'
import IconLihatUser from '../../assets/icon-lihat-user.svg'
import arrowBack from "../../assets/arrow-back-left-Icons.svg";
import arrowNext from "../../assets/arrow-next-right-Icons.svg";
import { useNavigate } from 'react-router';

const ListUser = () => {
    

    const navigate = useNavigate()
  return (
    <>
         <div className="relative overflow-x-auto mt-5">
                    <table className="w-full text-center rtl:text-right">
                        <thead className="text-cloud-burst-500 border-b">
                            <tr>
                                <th scope="col" className="px-6 py-3 ">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Profil
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Username
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Tindakan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    01.
                                </th>
                                <td className="px-6 py-4">
                                    <img src={AvatarUser} alt="avataruser" />
                                </td>
                                <td className="px-6 py-4">
                                    shelalalalala1822
                                </td>
                                <td className="px-6 py-4">
                                shela@gmail.com
                                </td>
                                <td className="px-6 py-4">
                                <input type="checkbox" name="status-user" id="status-user"  className='text-crusta-500 border-crusta-500' />
                                </td>
                                <td className="px-6 py-4 flex gap-4 items-center justify-center">
                                <button className='w-24 bg-crusta-500 rounded-lg p-2 gap-2 text-white flex items-center'>
                                <img src={IconDeleteUser} alt="" className='w-6 h-6' />Hapus</button>

                                <button className='w-24 bg-crusta-500 rounded-lg p-2 gap-2 text-white flex items-center' onClick={()=> navigate('/admin/detail-user')}>
                                <img src={IconLihatUser} alt="" className='w-6 h-6 ' />Lihat</button>
                                </td>
                            </tr>
                          
                        </tbody>
                        
                    </table>

                </div>

                <div className="flex justify-center sm:justify-end md:justify-end items-center gap-x-3 my-8 mr-6">
                <img src={arrowBack} alt="" />
                <p className="text-[#17345F] font-semibold">Halaman 1</p>
                <img src={arrowNext} alt="" />
      </div>
    </>
  )
}

export default ListUser