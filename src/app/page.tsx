import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorksSection from "@/components/WorksSection";
import AwardsSection from "@/components/AwardsSection";
import DeliveredProjects from "@/components/DeliveredProjects";
import UpcomingProjects from "@/components/UpcomingProjects";
import MomentsSection from "@/components/MomentsSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <AwardsSection />
      <DeliveredProjects />
      <UpcomingProjects />
      <MomentsSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
