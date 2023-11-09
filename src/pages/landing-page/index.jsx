import Navbar from '../../components/global-component/Navbar'
import AboutUs from '../../components/landing-page/AboutUs'
import HeroSection from '../../components/landing-page/HeroSection'
import OurPartner from '../../components/landing-page/OurPartner'
import Testimonials from '../../components/landing-page/Testimonials'
import WhyUs from "../../components/landing-page/WhyUs"

const index = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <HeroSection />
      <WhyUs />
      <OurPartner />
      <div style={{ background: 'linear-gradient(180deg, #FFF 0%, #E8EBEF 100%)' }}>
        <Testimonials />
      </div>
      <AboutUs />
    </div>
  )
}

export default index