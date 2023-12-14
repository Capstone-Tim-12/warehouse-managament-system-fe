import React, { useState, useRef } from 'react';
import Cookies from 'js-cookie';
import { notification } from 'antd';
import IconPlus from '../../assets/plus-Icons.svg';
import { useNavigate } from 'react-router-dom';

const TopEdit = () => {
  const [csvData, setCsvData] = useState([]);
  const navigate = useNavigate()
  const csvInputRef = useRef(null);

  const token = Cookies.get("token");

  const handleImportCSV = async (file) => {
    const formData = new FormData();
    formData.append('file', file, 'filename.csv');

    console.log(formData);

    try {
      const response = await fetch('https://digiwarehouse-app.onrender.com/warehouse/import-data', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        console.log('Data imported successfully', response);
        notification.success({
          message: "Success",
          description: "Import Data berhasil!",
          placement: "top",
        });
        navigate("/admin/manage-gudang")
      } else {
        console.error('Error importing data', response.status, response.statusText);
        notification.error({
          message: "Error",
          description: "Terjadi kesalahan saat import data.",
          placement: "top",
        });
      }
    } catch (error) {
      console.error('Error importing data', error);
      notification.error({
        message: "Error",
        description: "Terjadi kesalahan saat import data.",
        placement: "top",
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setCsvData([]);
      handleImportCSV(file);
    }
  };

  return (
    <>
      <div className='flex w-full h-full justify-between items-center '>
        <h1 className='text-[20px] font-bold text-cloud-burst-500'>Create Warehouse</h1>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          ref={csvInputRef}
        />
        <button
          className='bg-crusta-500 hover:bg-crusta-600 h-[54px] px-2 sm:px-4 sm:py-3 rounded-lg flex items-center'
          onClick={() => csvInputRef.current.click()}
        >
          <img src={IconPlus} alt="IconPlus" className='w-8 h-8' />
          <span className='text-white ml-2'>Import CSV</span>
        </button>
      </div>
    </>
  );
};

export default TopEdit;
