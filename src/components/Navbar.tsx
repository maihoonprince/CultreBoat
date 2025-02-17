
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-display text-2xl font-bold">
            <span className="text-accent">Cultre</span>
            <span>BOAT</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
              <Link to="/about" className="hover:text-accent transition-colors">About</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
