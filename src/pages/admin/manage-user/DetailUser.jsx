import React from 'react';
import TopBar from "../../../components/global-component/TopBar";
import SidedarAdmin from "../../../components/global-component/SidedarAdmin";
import TopDetailUser from '../../../components/admin-manage-user/TopDetailUser';

const DetailUser = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
      <SidedarAdmin />
      <div>
        <TopBar title={"Pengaturan Pengguna"} />
        <div className='container sm:p-5 py-5 px-1 '>
          <TopDetailUser />
          <div className='mt-3'>
            {/* tentang User */}
            <div>
              <h1 className='text-[20px] font-bold text-cloud-burst-500'>Tentang</h1>
              <hr className='border-1' />
              <div className='grid sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-y-2 mt-2'>
                <label htmlFor="username">
                  Username:
                  <br />
                  <input type="text" className='rounded-lg h-[32px] sm:w-auto md:w-full lg:w-auto w-full border border-gray-200' name='username' defaultValue='shelalalalala1822' readOnly />
                </label>

                <label htmlFor="email">
                  Email:
                  <br />
                  <input type="text" className='rounded-lg h-[32px] sm:w-auto md:w-full lg:w-auto w-full border border-gray-200' name='email' defaultValue='shela@gmail.com' readOnly />
                </label>

                <label htmlFor="lokasi">
                  Lokasi
                  <br />
                  <input type="text" className='rounded-lg h-[32px] sm:w-auto md:w-full lg:w-auto w-full border border-gray-200' name='lokasi' defaultValue='Depok' readOnly />
                </label>
              </div>
            </div>
            {/*end tentang User */}

            {/* riwayat penyewaan gudang */}
            <div className='mt-3'>
              <h1 className='text-[20px] font-bold text-cloud-burst-500'>Riwayat Penyewaan Gudang</h1>
              <hr className='border-1' />

              {/* id pemesanan */}
              <div>
                <h2 className='text-[16px] font-semibold text-cloud-burst-500 mt-4 mb-2'>ID Pemesanan</h2>
                <select name="id-pemesanan" id="id-pemesanan" className='rounded-lg w-[388px] h-auto text-[16px] border border-gray-200'>
                  <option defaultValue="azw123333">azw123333</option>
                  <option defaultValue="nby124447">nby124447</option>
                  <option defaultValue="adf778933">adf778933</option>
                </select>
              </div>
              {/* end id pemesanan */}

              {/* penyewaan */}
              <div className='text-cloud-burst-500 mt-4'>
                <h2 className='text-[16px] font-semibold mb-3'>a. Penyewaan</h2>
                <span >Durasi Sewa : 3 Minggu</span> <br />
                <div className='grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-[96px] gap-y-2 sm:gap-y-0 mt-4'>
                  <label htmlFor="tanggal-masuk">
                    Tanggal Masuk :
                    <br />
                    <input type="text" name="tanggal-masuk" id="tanggal-masuk" defaultValue='1 Agustus 2023' className='rounded-lg w-full mt-2 border border-gray-200' readOnly />
                  </label>

                  <label htmlFor="tanggal-Keluar">
                    Tanggal Keluar :
                    <br />
                    <input type="text" name="tanggal-Keluar" id="tanggal-Keluar" defaultValue='21 Agustus 2023' className='rounded-lg w-full mt-2 border border-gray-200' readOnly />
                  </label>
                </div>
              </div>

              {/* end penyewaan */}

              {/* gudang */}
              <div className='text-cloud-burst-500 mt-4'>
                <h2 className='text-[16px] font-semibold mb-3'>b. Gudang</h2>

                <div className='grid sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-x-[96px] gap-y-3'>
                  <label htmlFor="nama-warehouse">
                    Nama Warehouse :
                    <br />
                    <input type="text" name="nama-warehouse" id="nama-warehouse" defaultValue='Warehouse Kita' className='rounded-lg w-full mt-2 border border-gray-200' readOnly />
                  </label>

                  <label htmlFor="lokasi">
                    Lokasi :
                    <br />
                    <input type="text" name="lokasi" id="lokasi" defaultValue='Jakarta Barat' className='rounded-lg w-full mt-2 border border-gray-200' readOnly />
                  </label>

                  <label htmlFor="harga">
                    Harga:/bln
                    <br />
                    <input type="text" name="harga" id="harga" defaultValue='20.000.000' className='rounded-lg w-full mt-2 border border-gray-200' readOnly />
                  </label>

                  <label htmlFor="pemilik">
                    Pemilik :
                    <br />
                    <input type="text" name="pemilik" id="pemilik" defaultValue='Budiawan' className='rounded-lg w-full mt-2 border border-gray-200' readOnly />
                  </label>

                  <label htmlFor="contact-pemilik">
                    Contact Pemilik :
                    <br />
                    <input type="text" name="contact-pemilik" id="contact-pemilik" defaultValue='089977886656' className='rounded-lg w-full mt-2 border border-gray-200' readOnly />
                  </label>

                  <label htmlFor="email-pemilik">
                    Email :
                    <br />
                    <input type="text" name="email-pemilik" id="email-pemilik" defaultValue='budipekerti@gmail.com' className='rounded-lg w-full mt-2 border border-gray-200' readOnly />
                  </label>
                </div>
              </div>

              {/* end gudang */}

              {/* detail pembayaran */}
              <div className='text-cloud-burst-500 mt-4'>
                <h2 className='text-[16px] font-semibold mb-3'>c. Detail Pembayaran</h2>

                <div className='grid sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-x-[96px]'>
                  <label htmlFor="metode-pembayaran">
                    Metode Pembayaran :
                    <br />
                    <input type="text" name="metode-pembayaran" id="metode-pembayaran" defaultValue='Transfer Bank Bca' className='rounded-lg w-full mt-2 border border-gray-200' readOnly />
                  </label>

                  <label htmlFor="total-pembayaran">
                    Total Pembayaran :/bln
                    <br />
                    <input type="text" name="total-pembayaran" id="total-pembayaran" defaultValue='20.000.000' className='rounded-lg w-full mt-2 border border-gray-200' readOnly />
                  </label>

                  <label htmlFor="pembayaran">
                    Pembayaran:
                    <br />
                    <input type="text" name="pembayaran" id="pembayaran" defaultValue='Mingguan' className='rounded-lg w-full mt-2 border border-gray-200' readOnly />
                  </label>
                </div>
              </div>

              {/* end detail pembayaran */}

              {/* catatan */}
              <div className='text-cloud-burst-500 mt-4'>
                <h2 className='text-[16px] font-semibold mb-3'>Catatan</h2>
                <input type="text" name="catatan" id="catatan" className='rounded-lg w-full border border-gray-200' placeholder='Masukan Catatan' />
              </div>

              {/* end catatan */}
            </div>

            {/* end riwayat penyewaan gudang */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
