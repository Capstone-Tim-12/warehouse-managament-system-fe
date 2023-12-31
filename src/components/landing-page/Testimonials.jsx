import avatar1 from "../../assets/avatar-1.svg"
import avatar2 from "../../assets/avatar-2.svg"
import avatar3 from "../../assets/avatar-3.svg"

import Carousel from "../global-component/Carousel"

const Testimonials = () => {
  const testimonialList = [
    {
      name: 'Rio Dewanto',
      avatar: avatar1,
      location: 'Jakarta, Indonesia',
      message: 'Fitur perpesanan dalam aplikasi memastikan komunikasi lancar dan transparan. Ini adalah solusi terpadu yang menghemat waktu, menawarkan kenyamanan, dan menyediakan akses ke berbagai pilihan gudang.'
    },
    {
      name: 'Nicholas Saputra',
      avatar: avatar2,
      location: 'Jakarta, Indonesia',
      message: 'Aplikasi ini telah menyederhanakan proses sewa gudang saya dan mengurangi biaya operasional saya. Aplikasi ini menghemat banyak waktu saya dibandingkan dengan cara tradisional dalam mencari ruang gudang.'
    },
    {
      name: 'Refal Hady',
      avatar: avatar3,
      location: 'Jakarta, Indonesia',
      message: 'Sebagai pemilik bisnis, menemukan ruang gudang yang tepat selalu menjadi tugas yang menakutkan, namun aplikasi ini telah mengubah cara saya mengelola kebutuhan gudang saya'
    }
  ]

  return (
    <div className="bg-cloud-burst-50 p-16">
      <div className="max-w-screen-xl m-auto w-full">
        <h1 className="text-center text-cloud-burst-500 text-[28px] md:text-[38px] lg:text-[48px] font-bold w-full pb-12">
          Testimoni
        </h1>
        <div className="max-w-4xl m-auto p-8">
          <Carousel slides={testimonialList.length}>
            {testimonialList.map((testimoni, index) => (
              <div key={index} className="!flex flex-col bg-white rounded-lg m-auto items-center justify-center p-12 gap-5">
                <p className="text-xs md:text-xl md:text-center">{testimoni.message}</p>
                <img src={testimoni.avatar} alt={testimoni.name} />
                <div className="flex flex-col items-center justify-center">
                  <p className="text-xs md:text-md font-bold text-center">{testimoni.name}</p>
                  <p className="text-xs md:text-lg text-crusta-500 text-center">{testimoni.location}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonials