import paragon from '../../assets/paragon.svg'
import indomaret from '../../assets/indomaret.svg'
import cafeIsla from '../../assets/cafe-isla.svg'

const OurPartner = () => {
  const partnerList = [
    {
      name: "Paragon",
      imgSrc: paragon,
      type: "Manufaktur Industri",
      total: "5 Gudang Disewa"
    },
    {
      name: "Indomaret",
      imgSrc: indomaret,
      type: "Retail",
      total: "3 Gudang Disewa"
    },
    {
      name: "Cafe Isla",
      imgSrc: cafeIsla,
      type: "Bisnis Kecil",
      total: "2 Gudang Disewa"
    },
  ]

  return (
    <div className="bg-white flex flex-col p-8">
      <h1 className="text-center text-cloud-burst-500 text-[28px] md:text-[38px] lg:text-[48px] font-bold w-full pb-12">
        Mitra Kami
      </h1>
      <div className="grid grid-cols-3 gap-x-5 my-5">
        {partnerList.map((item, index) => (
          <div key={index} className="bg-cloud-burst-500 rounded-2xl flex flex-col items-center gap-5 p-4 text-white">
            <img src={item.imgSrc} alt="" />
            <div className="flex flex-col gap-2 items-center">
              <p className="font-bold text-2xl">{item.name}</p>
              <p className="font-normal text-lg">{item.type}</p>
            </div>
            <p className="font-bold text-xl">{item.total}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurPartner