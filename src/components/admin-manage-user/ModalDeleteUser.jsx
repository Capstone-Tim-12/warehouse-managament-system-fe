import React, { useState } from 'react';
import IconX from '../../assets/icon-x-modal-user.svg';
import FailedModalUser from './FailedModalUser';

const ModalDeleteUser = ({ showModal, handleModalClose, handleDeleteConfirm }) => {

    const [showFailedModal, setShowFailedModal] = useState(false);

  const handleFailedDeleteClick = () => {
    setShowFailedModal(true);
  };

  const handleFailedModalClose = () => {
    setShowFailedModal(false);
  };

  
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-5 rounded-md w-96 relative">
            <h2 className="text-xl text-cloud-burst-500 font-bold mb-1 relative">
              Informasi
              <img
                src={IconX}
                alt="iconx"
                className="absolute top-2 right-2 cursor-pointer"
                onClick={handleModalClose}
              />
            </h2>
            <hr className='border-1'/>
            <p className='text-cloud-burst-500'>Hapus akun shelalalalala1822 dari sistem</p>
            <div className="mt-5 flex justify-end">
              <button
                onClick={handleFailedDeleteClick}
                className="bg-gray-300 px-4 py-2 mr-2 rounded-md"
              >
                ModGagal
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-crusta-500 px-4 py-2 text-white rounded-md"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      <FailedModalUser
      showFailedModal={showFailedModal}
      handleFailedModalClose={handleFailedModalClose}
      />
    </>
  );
};

export default ModalDeleteUser;
