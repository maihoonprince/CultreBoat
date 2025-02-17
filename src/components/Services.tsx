import { motion } from "framer-motion";
import { Palette, PenTool, MessageCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: PenTool,
    title: "Brand Strategy",
    description: "Shaping your brand's identity with clarity and purpose through market research, identity development, and positioning strategy."
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description: "Translating ideas into compelling visual narratives through moodboards, campaign concepts, and brand visual identity."
  },
  {
    icon: MessageCircle,
    title: "Content & Storytelling",
    description: "Bringing your brand's story to life through impactful content including copywriting, video production, and social media content."
  },
  {
    icon: Globe,
    title: "Digital Experiences",
    description: "Designing and developing intuitive, immersive digital solutions that enhance user engagement and brand visibility."
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We blend design, strategy, and technology to craft immersive digital experiences that resonate.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-card hover-lift group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/contact">
            <button className="bg-accent text-white px-8 py-3 rounded-full font-medium hover-lift">
              Get in Touch to Elevate Your Brand
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
