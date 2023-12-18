import Navbar from "../../components/global-component/Navbar";
import AboutUs from "../../components/landing-page/AboutUs";
import HeroSection from "../../components/landing-page/HeroSection";
import OurPartner from "../../components/landing-page/OurPartner";
import Testimonials from "../../components/landing-page/Testimonials";
import WhyUs from "../../components/landing-page/WhyUs";
import Faq from "../../components/landing-page/Faq";
import Footer from "../../components/global-component/Footer";
import Chatbot from "../../components/landing-page/Chatbot";

const index = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <WhyUs />
      <OurPartner />
      <div
        style={{ background: "linear-gradient(180deg, #FFF 0%, #E8EBEF 100%)" }}
      >
        <Testimonials />
      </div>
      <AboutUs />
      <Faq />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default index;
