import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Hero() {
  return <motion.section initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} className="min-h-[90vh] flex flex-col justify-center items-center text-center px-[12px]">
    <motion.span initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.2
    }} className="text-accent mb-4 text-3xl font-semibold">Cultre Boat</motion.span>
    <motion.h1 initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.3
    }} className="font-display text-5xl font-bold mb-6 max-w-4xl text-balance md:text-7xl">Everybody loves a good story.
      We love building them.</motion.h1>
    <motion.p initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4
    }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 text-balance">
      We help brands connect, engage, and grow through strategic storytelling and digital craftsmanship.
    </motion.p>

    <div className="flex gap-4 flex-wrap justify-center">


      <Link to="/Contact">

        <motion.button initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }} className="bg-accent text-white px-8 py-3 rounded-full font-medium hover-lift">
          Let's Collaborate
        </motion.button>
      </Link>

      <Link to="/portfolio">

        <motion.button initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-full font-medium hover-lift">
          Explore Our Work
        </motion.button>

      </Link>
    </div>
  </motion.section>;
}