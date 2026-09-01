import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Services from "./components/Services";
import About from "./components/About";
import WhyLuxeFrame from "./components/WhyLuxeFrame";
import Testimonials from "./components/Testimonials";
import Packages from "./components/Packages";
import BookingForm from "./components/BookingForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <About />
        <WhyLuxeFrame />
        <Testimonials />
        <Packages />
        <BookingForm />
        <FinalCTA />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
