import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";
import BlogSection from "../components/home/BlogSection";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-18 mt-6">
      <div className="flex flex-col gap-18 mx-auto w-full px-5 lg:w-[1640px]">
        <HeroSection />
        <FeatureSection />
      </div>
      <div className="bg-neutral-100 w-full">
        <BlogSection/>
      </div>
    </div>
  );
};

export default HomePage;
