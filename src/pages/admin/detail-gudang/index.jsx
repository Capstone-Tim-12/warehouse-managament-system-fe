import React from "react";
import TopBar from "../../../components/global-component/TopBar";
import SidebarAdmin from "../../../components/global-component/SidebarAdmin";
import Foto1 from "../../../assets/foto-1.jpg";
import Foto2 from "../../../assets/foto-2.jpg";
import Foto3 from "../../../assets/foto-3.jpg";
import Foto4 from "../../../assets/foto-4.jpg";
import IconX from '../../../assets/icon-x-modal-user.svg';
import TopDetail from "../../../components/admin-detail-gudang/TopDetail";
import Foto from "../../../components/admin-detail-gudang/Foto";
import NamaDeskripsi from "../../../components/admin-detail-gudang/NamaDeskripsi";
import Detail from "../../../components/admin-detail-gudang/Detail";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
import Popup from "../../../components/global-component/Popup";

const DetailGudang = () => {
  const [item, setItem] = useState(null);

  const token = useSelector((state) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleDataWarehouseId = () => {
    axios
      .get(`https://digiwarehouse-app.onrender.com/warehouse/detail/${id}`, {
        headers,
      })
      .then((response) => {
        setItem(response?.data?.data);
        console.log(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const location = useLocation();
  const { id } = location.state;

  const navigate = useNavigate();

  const [transactionHistoryWarehouse, setTransactionHistoryWarehouse] =useState([]);
  const [loadingTrxHistoryWarehouse, setLoadingTrxHistoryWarehouse] = useState(false)

  const handleTransactionHistoryWarehouse = (id) => {
    setLoadingTrxHistoryWarehouse(true)
    axios
      .get(
        `https://digiwarehouse-app.onrender.com/dasboard/transaction/warehouse/${id}?page=1&limit=10`,
        { headers }
      )
      .then((response) => {
        setTransactionHistoryWarehouse(response?.data?.data);
        console.log(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=>{
        setLoadingTrxHistoryWarehouse(false)
      })
  };

  useEffect(() => {
    handleDataWarehouseId();
    handleTransactionHistoryWarehouse(id);
  }, [id]);

  
  const [showModalTrxGudang, setShowModalTrxGudang] = useState(false)

  const handleModalTrxGudang = () => {
    setShowModalTrxGudang(true)
  }

  const [showModalStopKontrak, setShowModalStopKontrak] = useState(false)

  const handelModalStopKontrak = () => {
    setShowModalTrxGudang(false)
    setShowModalStopKontrak(true)
  }

  const [reason, setReason] = useState()

  const handleReason = ()=> {
    
    

    axios
    .get("https://digiwarehouse-app.onrender.com/dasboard/payment/reasone", {headers})
    .then((response)=> {
      setReason(response?.data?.data)
      console.log(response?.data?.data)
    })
    .catch((error) => {
      console.log(error);
    })

  }
  
  useEffect(() => {
    handleReason()
  }, []);

  const [showModalUpdateTempo, setShowModalUpdateTempo] = useState(false)

  const handleModalUpdateTempo = ()=> {
    setShowModalTrxGudang(false)
    setShowModalUpdateTempo(true)
  }

  const [installment, setInstallment] = useState()
  const [loadingInstallment, setLoadingInstallment] = useState(false)

  const handleInstallment = (id)=> {
    setLoadingInstallment(true)
    
    axios.get(`https://digiwarehouse-app.onrender.com/payment/instalment/${id}?page=1&limit=10`, {headers})
    .then((response)=> {
      setInstallment(response?.data?.data)
      setLoadingInstallment(false)
      console.log(response?.data?.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      setLoadingInstallment(false)
      setShowModalTrxGudang(true)
    })


  }

 
  

  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_5fr]">
      <SidebarAdmin />
      <div>
        <TopBar title={"Manage Gudang"} />

        {item ? (
          <div>
            <div className="container mx-auto px-2 lg:px-9 sm:px-9 md:px-3 py-12 ]  ">
              {/* componen top */}
              <TopDetail navigate={navigate} item={item} />
              {/* end component top */}

              {/* main content 1 nama & deskripsi */}
              <div className="mt-12 ">
                <h2 className="text-[20px] font-semibold text-cloud-burst-500 mb-2.5">
                  Nama Dan Deskripsi
                </h2>
                <hr className="border-solid" />
                <NamaDeskripsi nama={item.name} deskripsi={item.description} />
              </div>
              {/* end main content 1 nama & deskripsi */}

              {/* component foto */}
              <div className="">
                <h2 className="mt-8 text-[20px] text-cloud-burst-500 font-semibold mb-2.5">
                  Foto
                </h2>
                <hr className="border-solid" />
                <div className="flex lg:flex gap-2 sm:ml-5 md:grid md:grid-rows-2 md:grid-flow-col ">
                  <Foto FotoDetail={item.image && item.image[0]} />
                  <Foto FotoDetail={item.image && item.image[1]} />
                  <Foto FotoDetail={item.image && item.image[2]} />
                </div>
              </div>
              {/* end component foto */}

              {/* component detail */}
              <div className="text-cloud-burst-500 ">
                <h2 className="mt-8 text-[20px] text-cloud-burst-500 font-semibold mb-2.5">
                  Detail
                </h2>
                <hr className="border-solid" />

                <div className="grid  sm:flex sm:gap-10 gap-3 mt-4 lg:text-[16px] md:text-[14px]">
                  <Detail
                    luasTanah={item.surfaceArea}
                    luasBangunan={item.buildingArea}
                    status={item.status}
                    namaPemilik={item.owner}
                    noTelpon={item.phoneNumber}
                    longitude={item.longitude}
                    latitude={item.latitude}
                    harga={item?.annualPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  />
                </div>
              </div>

              {/* end component detail */}

              {/* Riwayat Penyewaan gudang manage gudang */}
              <div className="mt-[48px]">
                <h1 className="text-[20px] font-semibold text-cloud-burst-500">
                  Riwayat Penyewaan Gudang
                </h1>
                <hr className="border-solid" />

                <table className="w-full text-sm text-left rtl:text-right mt-3 text-cloud-burst-500">
                  <thead className="text-[16px] text-cloud-burst-500 border-b">
                    <tr>
                      <th scope="col" className=" py-3">
                        No.
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Nama Penyewa
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Lokasi
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Nominal
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  {loadingTrxHistoryWarehouse ? (
                    <tbody>
                    <tr>
                      <th
                        colSpan="4"
                        className="text-slate-500 font-semibold text-center text-xl py-3"
                      >
                        <Skeleton active/>
                      </th>
                    </tr>
                  </tbody>
                  ) : (
                    <>
                    {transactionHistoryWarehouse && transactionHistoryWarehouse.length > 0 ? (
                  <tbody>
                    {transactionHistoryWarehouse &&
                      transactionHistoryWarehouse.map((trx, index) => (
                        <tr key={index} onClick={()=>{handleInstallment(trx.transactionId)}}
                          className="cursor cursor-pointer">
                          <th className=" py-3 font-medium text-cloud-burst-500 whitespace-nowrap">{index + 1 }</th>
                          <td className="px-6 py-3">{trx.username}</td>
                          <td className="px-6 py-3">
                            {trx.userRegencyName || "Dki Jakarta"}
                          </td>
                          <td className="px-6 py-3">{trx.nominal.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}</td>
                          <td className="px-6 py-3"> <button className={`${
                      trx.status === 'Aktif' ? 
                      "bg-[#06C270]" : "bg-[#FF3B3B]"} rounded-md px-4 py-1 text-white `
                      }>{trx.status}</button> </td>
                        </tr>
                      ))}
                 
                  </tbody>
                  ) : (<tbody>
                    <tr>
                      <th
                        colSpan="5"
                        className="text-slate-500 font-semibold text-center text-xl py-3"
                      >
                        Tidak ada Transaksi
                      </th>
                    </tr>
                  </tbody>
                  
                  )}
                  </>
                  )}
                </table>
              </div>

              {/* Modal Detail Tagihan */}
              {loadingInstallment && (
                <div className="text-cloud-burst-500 font-semibold">
                <Popup open={loadingInstallment}/>
              </div>
              )}
              {showModalTrxGudang && installment && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center" >
        <div className="bg-white p-5 rounded-md w-auto relative overflow-auto max-h-screen">
          <h2 className="text-xl text-cloud-burst-500 font-bold mb-1 relative">
            Detail Tagihan
            <img
              src={IconX}
              alt="iconx"
              className="absolute top-1 right-1 cursor-pointer"
              onClick={()=>setShowModalTrxGudang(false)}
              id="closeModalTrxGudang"
            />
          </h2>
         
          {/* component instalment */}
          {installment.map((instalmentItem, index) => ( 
          <div  className='text-cloud-burst-500' key={index}>
          <div className='grid grid-cols-2 '>
          <h1 className='mt-2 mb-2 text-[20px] text-cloud-burst-500 font-semibold'>{new Intl.DateTimeFormat("id-ID", { month: "long" }).format(new Date(instalmentItem.dueDate))}</h1>
          <p className='text-center ml-[150px] mt-1 text-cloud-burst-500 font-bold'>{instalmentItem.nominal.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}</p>
          <div className="flex">
          <p className="">Jatuh tempo: {new Intl.DateTimeFormat("id-ID", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }).format(new Date(instalmentItem.dueDate))}</p>
          <img src="" alt="" />
          </div>
          <button className={`${instalmentItem.status === 'belum dibayar' ? 'bg-red-500' : 'bg-green-500'} py-2 px-2   rounded-md text-white ml-[150px] -mt-2`}>{instalmentItem.status}</button>
          </div>
          <hr className='mb-[24px] mt-2'/>
          </div>
           ))}
           {/* end component instalment */}


          <div className="flex gap-2 justify-end">
            <button className="rounded-md bg-cloud-burst-200 py-2 px-5 text-white" onClick={handelModalStopKontrak } id="showModalStopKontrak">Berhenti Kontrak</button>
            <button className="rounded-md bg-cloud-burst-500 py-2 px-5 text-white" onClick={handleModalUpdateTempo} id="showModalUpdateTempo">Perpanjang Tempo</button>
          </div>
        
          {/* end instalment */}
         
        </div>
      </div>
        )}      
              
              {/* end Modal Detail Tagihan */}


              {/* modal pemberhentian Kontrak */}
                {showModalStopKontrak && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="bg-white p-5 rounded-md w-[880px] relative overflow-auto max-h-screen">
                  <h1 className="text-xl text-cloud-burst-500 font-bold mb-1 relative">Pemberhentian Kontrak
                  <img
                    src={IconX}
                    alt="iconx"
                    className="absolute top-1 right-1 cursor-pointer"
                    onClick={()=>setShowModalStopKontrak(false)}
                    />
                  </h1>

                  <p className="text-cloud-burst-500 text-xl mt-6">Kontrak Sewa diberhentikan dengan Alasan</p>
                  {reason && reason.map((reason, index)=>(
                  <div key={index} className="mt-4">
                  <label className="">
                  <input type="radio" name="" id="" className="" value={reason.name}/>
                  <span className="ml-4 text-cloud-burst-500">{reason.name}</span>
                  </label>
                  </div>
                  ))}

                  <div className="flex justify-end mt-8 gap-2 ">
                    <button className="rounded-md bg-crusta-200 text-white px-6 py-3" id="cancelStopKontrak">Batal</button>
                    <button className="rounded-md bg-crusta-500 text-white px-6 py-3" id="stopKontrak">Hentikan Kontrak</button>
                  </div>

                </div>
              </div>
              )}

              {/* end modal pemberhentian Kontrak */}

              {/* modal perpanjang tempo */}
                {showModalUpdateTempo && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white p-5 rounded-md w-[525px] relative overflow-auto max-h-screen">
                    <h1 className="text-xl text-cloud-burst-500 font-bold mb-1 relative">Perpanjang Tempo Tagihan
                    <img
                    src={IconX}
                    alt="iconx"
                    className="absolute top-1 right-1 cursor-pointer"
                    onClick={()=>setShowModalUpdateTempo(false)}
                    id="closeModalUpdateTempo"
                    />
                    </h1>

                    <div className="flex flex-col justify-center">
                      <h2 className="text-center text-xl text-cloud-burst-500">Tempo tagihan diperpanjang hingga:</h2>
                      <input type="datetime-local" name="" id="updateTempoInput" className="mt-3"/>
                    </div>
                    <div className="flex justify-end gap-3 mt-3">
                    <button className="border-2 border-cloud-burst-500 bg-white rounded-lg py-3 px-6  font-semibold text-cloud-burst-500" onClick={()=>setShowModalUpdateTempo(false)} id="cancelUpdateTempo">Batalkan</button>
                    <button className="border-2 border-cloud-burst-500 bg-cloud-burst-500 rounded-lg py-3 px-6 text-white font-semibold" id="submitUpdateTempo">Submit</button>
                    </div>
                    </div>
                </div>
                )}

              {/* end modal perpanjang tempo */}
              
              {/* end Riwayat Penyewaan gudang manage gudang */}


            </div>
              

          </div>
        ) : (
          <p>Loading ....</p>
        )}
      </div>
    </div>
  );
};

export default DetailGudang;
