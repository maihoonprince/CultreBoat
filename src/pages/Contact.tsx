
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Let's Create Something Meaningful Together
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear about it. Get in touch with us and let's create something amazing together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent text-white px-8 py-3 rounded-full font-medium hover-lift"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="font-display text-2xl font-bold mb-4">Connect With Us</h3>
                  <div className="space-y-4">
                    <a href="mailto:hello@cultreboat.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                      <Mail className="w-5 h-5" />
                      hello@cultreboat.com
                    </a>
                    <a href="tel:+911234567890" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                      <Phone className="w-5 h-5" />
                      +91 123 456 7890
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/cultreboat/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/cultre-boat/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
