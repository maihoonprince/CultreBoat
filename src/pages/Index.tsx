
import Hero from "../components/Hero";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-16">
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  );
}
