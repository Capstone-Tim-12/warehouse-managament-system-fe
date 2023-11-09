import Navbar from '../../components/global-component/Navbar'
import HeroSection from '../../components/landing-page/HeroSection'
import OurPartner from '../../components/landing-page/OurPartner'
import WhyUs from "../../components/landing-page/WhyUs"

const index = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <HeroSection/>
      <WhyUs/>
      <OurPartner/>
    </div>
  )
}

export default index
