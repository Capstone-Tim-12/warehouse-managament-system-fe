import Carousel from "../global-component/Carousel"


const Testimonials = () => {
  return (
    <div className="bg-cloud-burst-50">
      <h1 className="text-center text-cloud-burst-500 text-[28px] md:text-[38px] lg:text-[48px] font-bold w-full pb-12">
        Testimoni
      </h1>
      <div className="flex flex-col items-center pb-16">
        <Carousel/>
      </div>
    </div>
  )
}

export default Testimonials