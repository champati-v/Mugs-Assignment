import Hero1 from "@/components/Hero1";
import Navbar from "@/components/Navbar";
import Hero2 from "@/components/Hero2";
import Services from "@/components/Services";
import Project from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero1/>
    <Hero2/>
    <Services/>
    <Project/>
    <Testimonials/>
    <Footer/>
    </>
  );
}
