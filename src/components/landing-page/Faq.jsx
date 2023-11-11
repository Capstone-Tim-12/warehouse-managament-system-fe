import React from 'react';
import hero3 from "../../assets/hero3-image.svg";

const Faq = () => {
  const faqData = [
    { question: 'Apa itu penyewaan gudang?', answer: 'Penyewaan gudang adalah proses dimana seseorang atau perusahaan menyewa ruang penyimpanan untuk menyimpan barang atau inventaris mereka.' },
    { question: 'Berapa biaya penyewaan gudang?', answer: 'Biaya penyewaan gudang dapat bervariasi tergantung pada lokasi, ukuran, fasilitas, dan permintaan di pasar. Harga dapat berupa biaya bulanan atau tahunan.' },
    { question: 'Bagaimana cara menemukan gudang yang sesuai untuk disewa?', answer: 'Anda dapat mencari gudang yang sesuai untuk disewa melalui agen real estat, situs web penyewaan komersial, atau menghubungi pemilik gudang secara langsung.' },
    { question: 'Bagaimana memastikan keamanan barang saya di gudang yang disewa?', answer: 'Pastikan gudang memiliki fasilitas keamanan seperti kamera pengawas, akses terbatas, dan sistem alarm. Selain itu, pertimbangkan untuk memiliki asuransi penyimpanan untuk barang Anda.' },
    { question: 'Apa yang perlu dipertimbangkan sebelum menyewa gudang?', answer: 'Faktor yang perlu dipertimbangkan termasuk lokasi, ukuran gudang, biaya sewa, fasilitas keamanan, durasi sewa, dan persyaratan kontrak.' },
    { question: 'Apa yang dimaksud penyewaan gudang komersial?', answer: 'Penyewaan gudang komersial biasanya digunakan untuk bisnis dan mungkin memiliki fasilitas tambahan seperti kantor.' },
  ];

  return (
    <div className="bg-cloud-burst-50">
      <img src={hero3} alt="Hero3" className="mx-auto " />
      <div className="text-3xl font-bold mb-4 text-center bg-cloud-burst-500 text-white p-6 rounded-[20px] w-[770px] h-[85px] mx-auto ">Pertanyaan yang Sering Diajukan</div>
      <div className="grid gap-4 grid-cols-2 mr-[20px] ml-[40px] py-10">
        {faqData.map((item, index) => (
          
          <div key={index} className="bg-white p-4 rounded-[14px] relative border-l-[14px] border-cloud-burst-500 w-[612px] h-[190px] ">
          <h3 className="text-xl font-bold mb-2">{item.question}</h3>
          <div className="absolute top-4 right-4 w-4 h-4 bg-cloud-burst-500"></div>
          <p>{item.answer}</p>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Faq;
