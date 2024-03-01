import { Hero } from "@/components/shared/hero-section";
import { Navigation } from "@/components/shared/navbar";
import { Footer } from "@/components/ui/footer";

const Home = () => {
  return (
    <div className="space-y-14">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
