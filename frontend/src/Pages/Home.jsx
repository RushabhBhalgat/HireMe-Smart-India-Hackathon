// pages/Home.js
import ImageSlider from "../components/ImageSlider";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import FooterSection from "../components/FooterSection";
const Home = () => {
  return (
    <div>
      <ImageSlider />
      <HeroSection />
      <Features />
      <FooterSection />
    </div>
  );
};

export default Home;
