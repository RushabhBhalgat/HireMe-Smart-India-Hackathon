// pages/Home.js
import ImageSlider from "../components/ImageSlider";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import FooterSection from "../components/FooterSection";
import LandingNavbar from "../components/LandingNavbar";
const Home = () => {
  return (
    <div>
      <LandingNavbar />
      <ImageSlider />
      <HeroSection />
      <Features />
      <FooterSection />
    </div>
  );
};

export default Home;
