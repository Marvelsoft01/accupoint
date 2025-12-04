import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Safety from "@/components/Safety";
import Drivers from "@/components/Drivers";
import Fleet from "@/components/Fleet";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Safety />
      <Fleet />
      <Drivers />
      <Stats />
      <About />
      <Reviews />
      <Footer />
    </main>
  );
};

export default Index;
