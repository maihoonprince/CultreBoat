
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">Cultre Boat</h3>
            <p className="text-muted-foreground">
              Everybody loves a good story.<br />
              We love building them.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
              <Link to="/about" className="hover:text-accent transition-colors">About</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Services</h4>
            <div className="flex flex-col space-y-2">
              <span>Social Media Marketing</span>
              <span>Graphic Designing</span>
              <span>Photography/Styling</span>
              <span>Content Development</span>
              <span>PR Strategy</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                hello@cultreboat.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +91 123 456 7890
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Mumbai, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Cultre Boat. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
