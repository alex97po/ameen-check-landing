import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import PilotProgram from "@/components/landing/PilotProgram";
import WhoItsFor from "@/components/landing/WhoItsFor";
import FAQ from "@/components/landing/FAQ";
import WaitlistForm from "@/components/landing/WaitlistForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <PilotProgram />
      <WhoItsFor />
      <FAQ />
      <WaitlistForm />
      <Footer />
    </main>
  );
};

export default Index;
