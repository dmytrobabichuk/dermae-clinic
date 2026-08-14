import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import DoctorProfile from "@/components/DoctorProfile";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <section id="about" className="sr-only" aria-label="About anchor" />
        <Services />
        <DoctorProfile />
        <BeforeAfter />
        <Testimonials />
        <AppointmentCTA />
      </main>
      <Footer />
    </>
  );
}
