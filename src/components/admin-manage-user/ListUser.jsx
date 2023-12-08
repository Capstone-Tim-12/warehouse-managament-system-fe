import React, { useEffect, useState } from 'react'
import AvatarUser from '../../assets/avatar-user.png'
import IconDeleteUser from '../../assets/icon-delete.svg'
import IconLihatUser from '../../assets/icon-lihat-user.svg'
import arrowBack from "../../assets/arrow-back-left-Icons.svg";
import arrowNext from "../../assets/arrow-next-right-Icons.svg";
import IconSearchUser from "../../assets/icon-search-user.svg"
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import axios from 'axios';

const ListUser = () => {
    

    const navigate = useNavigate()


    const [dataUser, setDataUser] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const handleDataUser = (page) => {
      const token = Cookies.get("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      
      axios
        .get(
          `http://ec2-18-139-162-85.ap-southeast-1.compute.amazonaws.com:8086/dasboard/user/list?limit=10&page=${page}&search=${searchQuery}`,
          { headers }
        )
        .then((response) => {
          console.log('API Response:', response)
          setDataUser(response?.data?.data)
          setTotalPages(response?.data?.pagination?.totalPage)
          console.log('Total Pages:', response?.data?.pagination?.totalPage)
          console.log('Current Page:', page)
        })
        .catch((error) => {
          console.log(error);
        });
    };
    

  
  useEffect(()=> {
    handleDataUser()
  },[])


  const handlePageChange = (newPage) => {
    console.log('New Page:', newPage)
    setCurrentPage(newPage);
    handleDataUser(newPage);
  };


  const handleSearch = () => {
    handleDataUser();
  };

  useEffect(() => {
    if (searchQuery === "") {
      handleDataUser();
    }
  }, [searchQuery]);


  
  
  return (
    <>
         <div className='grid grid-cols-2'>
                <h1 className='text-[18px] sm:text-[20px] text-cloud-burst-500 font-bold'>Data Pengguna</h1>
                <div className='flex sm:justify-end sm:px-4 px-6 justify-center items-center'>
                    <input type="text" 
                    placeholder="Cari Pengguna"
                    className="sm:rounded-lg w-[150px]  sm:w-[360px] sm:h-auto h-[29px] rounded-md"
                    value={searchQuery}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearch(e.target.value);
                      }
                    }}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                    <button className=" sm:-ml-10 -ml-6 " onClick={() => handleDataUser(currentPage)}>
                        <img src={IconSearchUser} alt="search" className='sm:w-[23px] sm:h-[23px] w-[18px] h-[18px]' />
                     </button>
                </div>
            </div>


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
                        {dataUser && dataUser.map((item, index)=>{
                          const userNumber = (currentPage - 1) * 10 + index + 1;
                            return(
                                
                            <tr className="" key={index}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {userNumber}
                                </th>
                                <td className="px-6 py-4 flex items-center justify-center">
                                    <img src={item.photo || AvatarUser} alt="avataruser" className='max-w-[41px] max-h-[40px] ' />
                                </td>
                                <td className="px-6 py-4">
                                    {item.username}
                                </td>
                                <td className="px-6 py-4">
                                {item.email}
                                </td>
                                <td className="px-6 py-4">
                                <input type="checkbox" name="status-user" id="status-user"  className='text-crusta-500 border-crusta-500' />
                                </td>
                                <td className="px-6 py-4 flex gap-4 items-center justify-center">
                                <button className='w-24 bg-crusta-500 rounded-lg p-2 gap-2 text-white flex items-center'>
                                <img src={IconDeleteUser} alt="" className='w-6 h-6' />Hapus</button>

                                <button className='w-24 bg-crusta-500 rounded-lg p-2 gap-2 text-white flex items-center' onClick={()=> navigate(`/admin/detail-user/${item.userId}`, {state: {id:item.userId}})}>
                                <img src={IconLihatUser} alt="" className='w-6 h-6 ' />Lihat</button>
                                </td>
                            </tr>
                            
                                )
                                })}
                        </tbody>
                        
                    </table>

                </div>

                
                {/* component pagination */}
                <div className="flex justify-center sm:justify-end md:justify-end items-center gap-x-3 my-8 mr-6">
                <img src={arrowBack} alt="" onClick={() => handlePageChange(currentPage - 1)} className={currentPage === 1 ? 'hidden' : 'inline-block'} />
                <p className="text-[#17345F] font-semibold">Halaman {currentPage}</p>
                <img src={arrowNext} alt="" onClick={() => handlePageChange(currentPage  + 1)} className={currentPage === totalPages  ? 'hidden' : 'inline-block'} />
                </div>
                {/* end component pagination */}
    </>
  )
}

export default ListUser