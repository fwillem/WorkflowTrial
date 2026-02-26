import FloatingBookingButton from "@/components/FloatingBookingButton";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Amenities from "@/components/Amenities";
import Accommodations from "@/components/Accommodations";
import Seasons from "@/components/Seasons";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FloatingBookingButton />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Amenities />
        <Accommodations />
        <Seasons />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
