
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    title: "Brand Revival Campaign",
    client: "Fashion Retailer",
    description: "Complete brand refresh including visual identity, social media strategy, and digital campaign execution.",
    image: "/placeholder.svg", // Replace with actual project image
    category: "Branding",
  },
  {
    title: "Digital Transformation",
    client: "Tech Startup",
    description: "End-to-end digital presence development including website, content strategy, and social media.",
    image: "/placeholder.svg", // Replace with actual project image
    category: "Digital",
  },
  {
    title: "Social Media Campaign",
    client: "Food & Beverage",
    description: "Engaging social media campaign that increased brand engagement by 200%.",
    image: "/placeholder.svg", // Replace with actual project image
    category: "Content",
  },
  {
    title: "Website Redesign",
    client: "E-commerce Brand",
    description: "Complete website overhaul focusing on user experience and conversion optimization.",
    image: "/placeholder.svg", // Replace with actual project image
    category: "Digital",
  }
];

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover how we've helped brands tell their stories and create meaningful connections with their audience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{project.client}</span>
                      <button className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                        View Case Study <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
