import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function About() {
  return <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Cultre Boat Rooted in Storytelling</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Cultre Boat is a creative studio passionate about building brand narratives that leave a lasting impact. 
                We blend design, strategy, and technology to craft immersive digital experiences that resonate.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-bold">Our Philosophy</h2>
                <p className="text-muted-foreground">
                  We believe in the power of storytelling and strategic creativity to drive brand success. 
                  Every brand has a unique story waiting to be told, and we're here to help tell it in the most 
                  impactful way possible.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-bold">Who We Are</h2>
                <p className="text-muted-foreground">
                  A team of passionate creatives dedicated to designing experiences that matter. We combine our 
                  expertise in design, strategy, and digital innovation to help brands create meaningful connections 
                  with their audience.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-center">
              <h3 className="text-2xl font-bold mb-8">Ready to Work With Us?</h3>
              <Link to="/contact">
                <button className="bg-accent text-white px-8 py-3 rounded-full font-medium hover-lift">
                  Let's Create Together
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
}