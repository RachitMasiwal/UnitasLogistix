import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MorphingCard } from "@/components/ui/morphing-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ScrollReveal, StaggeredReveal, RevealItem } from "@/components/ui/scroll-reveal";
import { Plane, Ship, Truck, Warehouse, FileText, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services for time-sensitive shipments worldwide with real-time tracking and customs clearance support.",
    features: ["Express delivery", "Real-time tracking", "Customs support"]
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective sea freight solutions for bulk cargo with FCL and LCL options, port-to-port and door-to-door delivery services.",
    features: ["FCL & LCL options", "Port-to-port", "Door-to-door"]
  },
  {
    icon: Truck,
    title: "Ground Transport",
    description: "Comprehensive land transportation services including LTL, FTL, and specialized cargo handling with nationwide coverage.",
    features: ["LTL & FTL", "Specialized cargo", "Nationwide coverage"]
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Modern warehouse facilities with inventory management, order fulfillment, and distribution services in strategic locations.",
    features: ["Inventory management", "Order fulfillment", "Strategic locations"]
  },
  {
    icon: FileText,
    title: "Customs Clearance",
    description: "Expert customs brokerage services ensuring smooth clearance processes and compliance with international trade regulations.",
    features: ["Expert brokerage", "Compliance", "Smooth clearance"]
  },
  {
    icon: TrendingUp,
    title: "Supply Chain",
    description: "End-to-end supply chain optimization with analytics, consulting, and technology integration for maximum efficiency.",
    features: ["Analytics", "Consulting", "Technology integration"]
  }
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive logistics solutions designed to streamline your supply chain 
            and enhance operational efficiency across global markets.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="h-full"
            >
              <Card className="service-card h-full relative overflow-hidden group">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white shadow-lg animate-morphing"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, 360],
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                    }}
                    transition={{ 
                      scale: { duration: 0.3 },
                      rotate: { duration: 1, ease: "easeInOut" }
                    }}
                  >
                    <service.icon className="w-10 h-10" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <motion.ul 
                    className="space-y-2 mb-6"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="text-sm text-blue-600 flex items-center justify-center"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <Button 
                    variant="outline" 
                    className="btn-logistics-outline"
                    style={{ color: '#2563eb' }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <Button 
              size="lg"
              className="btn-logistics-primary"
            >
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
