
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { PenTool, Palette, MessageCircle, Globe, ArrowRight, Check } from "lucide-react";

const serviceDetails = [
  {
    icon: PenTool,
    title: "Brand Strategy",
    description: "We define your brand's voice, positioning, and personality to create a compelling identity that stands out.",
    features: [
      "Market Research",
      "Identity Development",
      "Positioning Strategy",
      "Brand Guidelines"
    ]
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description: "Transforming your brand's vision into stunning visual narratives that capture attention and engagement.",
    features: [
      "Moodboards",
      "Campaign Concepts",
      "Brand Visual Identity",
      "Art Direction"
    ]
  },
  {
    icon: MessageCircle,
    title: "Content & Storytelling",
    description: "Crafting compelling content that resonates with your audience and strengthens your brand presence.",
    features: [
      "Copywriting",
      "Video Production",
      "Social Media Content",
      "Brand Storytelling"
    ]
  },
  {
    icon: Globe,
    title: "Digital Experiences",
    description: "We build immersive digital spaces that enhance user engagement and brand visibility.",
    features: [
      "Website Design",
      "UI/UX Design",
      "Digital Campaigns",
      "Interactive Experiences"
    ]
  }
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Services That Drive Growth
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We blend strategy, creativity, and technology to help brands tell their stories and create meaningful connections.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {serviceDetails.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="service-card group"
                >
                  <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="p-3 rounded-lg bg-accent/10 w-fit mb-6">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-accent" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-20"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
                Ready to Transform Your Brand?
              </h3>
              <Link to="/contact">
                <button className="group bg-accent text-white px-8 py-3 rounded-full font-medium hover-lift inline-flex items-center gap-2">
                  Let's Work Together
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
