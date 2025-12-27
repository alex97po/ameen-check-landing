import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Demo from "@/components/landing/Demo";
import Pricing from "@/components/Pricing";
import Footer from "@/components/landing/Footer";
import TrustedBy from "@/components/landing/TrustedBy";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Demo />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Index;
