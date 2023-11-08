import React from 'react'
import Navbar from '../../components/global-component/Navbar'
import HeroSection from '../../components/landing-page/HeroSection'
import WhyUs from "../../components/landing-page/WhyUs"

const index = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <HeroSection/>
      <WhyUs/>
    </div>
  )
}

export default index
