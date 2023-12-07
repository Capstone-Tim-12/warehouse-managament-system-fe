import React, { useState, useEffect } from 'react';
import TopBar from "../../../components/global-component/TopBar";
import SidebarAdmin from '../../../components/global-component/SidebarAdmin';
import TopDetailUser from '../../../components/admin-manage-user/TopDetailUser';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const DetailUser = () => {
  const [item, setItem] = useState(null)

  const handleDataUserId = () =>{
    const token = Cookies.get('token')
    const headers = {
      Authorization:`Bearer ${token}`,
    };
    axios.get(`http://ec2-18-139-162-85.ap-southeast-1.compute.amazonaws.com:8086/dasboard/user/${id}`, {headers})
    .then((response)=> {
      setItem(response?.data?.data)
      console.log(response?.data?.data)
    })
    .catch((error)=> {
      console.log(error)
    })
  }

  const location = useLocation()
  const {id} = location.state

  useEffect(() => {
    handleDataUserId()
  }, [id])
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_5fr]">
      <SidebarAdmin />
      <div>
        <TopBar title={"Pengaturan Pengguna"} />
        <div className='container sm:p-5 py-5 px-1 '>
          {item? (
          <TopDetailUser
          username={item.username}
          photo={item.photo} />
        
          ) : (<p>Loading...</p>)}
          
          
          
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
