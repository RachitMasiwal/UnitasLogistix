import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, Ship, Truck, Warehouse, FileText, TrendingUp,
  Clock, Shield, Globe, Award, CheckCircle, ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import { pageTransition, fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services for time-sensitive shipments worldwide.",
    features: [
      "Express delivery options",
      "Real-time tracking",
      "Customs clearance support",
      "Temperature-controlled cargo",
      "Dangerous goods handling",
      "Door-to-door service"
    ],
    benefits: [
      "Fastest transit times",
      "High security standards",
      "Global network coverage",
      "24/7 customer support"
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective sea freight solutions for bulk cargo with comprehensive port services.",
    features: [
      "FCL & LCL options",
      "Port-to-port delivery",
      "Container tracking",
      "Cargo insurance",
      "Documentation handling",
      "Multi-modal connections"
    ],
    benefits: [
      "Most economical for bulk cargo",
      "Environmentally friendly",
      "High capacity handling",
      "Global port network"
    ],
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: Truck,
    title: "Ground Transport",
    description: "Comprehensive land transportation services with nationwide coverage.",
    features: [
      "LTL & FTL services",
      "Specialized equipment",
      "Last-mile delivery",
      "Cross-docking facilities",
      "Route optimization",
      "Fleet management"
    ],
    benefits: [
      "Flexible scheduling",
      "Cost-effective for regional transport",
      "Direct delivery options",
      "Real-time visibility"
    ],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description: "Modern warehouse facilities with advanced inventory management systems.",
    features: [
      "Inventory management",
      "Order fulfillment",
      "Pick & pack services",
      "Quality control",
      "Returns processing",
      "Value-added services"
    ],
    benefits: [
      "Reduced operational costs",
      "Improved order accuracy",
      "Scalable solutions",
      "Strategic locations"
    ],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: FileText,
    title: "Customs Clearance",
    description: "Expert customs brokerage services ensuring smooth clearance processes.",
    features: [
      "Customs documentation",
      "Duty & tax calculation",
      "Trade compliance",
      "ATA Carnet processing",
      "Temporary imports",
      "Free trade agreements"
    ],
    benefits: [
      "Faster clearance times",
      "Compliance assurance",
      "Cost optimization",
      "Risk mitigation"
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: TrendingUp,
    title: "Supply Chain Consulting",
    description: "End-to-end supply chain optimization with advanced analytics and consulting.",
    features: [
      "Supply chain analysis",
      "Process optimization",
      "Technology integration",
      "Performance metrics",
      "Risk assessment",
      "Strategic planning"
    ],
    benefits: [
      "Improved efficiency",
      "Cost reduction",
      "Enhanced visibility",
      "Competitive advantage"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

const whyChooseUs = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Extensive worldwide coverage across 150+ countries"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service and tracking"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "99.9% delivery success rate with full insurance coverage"
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "25+ years of experience in international logistics"
  }
];

export default function Services() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Logistics <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              From air freight to supply chain consulting, we provide end-to-end logistics solutions 
              tailored to your business needs across global markets.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of logistics services designed to meet your specific requirements
            </p>
          </motion.div>

          <motion.div
            className="space-y-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <service.icon className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                      <Badge className="bg-blue-100 text-blue-800">Professional Service</Badge>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Service Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="btn-logistics-primary">
                      Request Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <motion.div
                  className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">Unitas LogistiX</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our proven track record and commitment to excellence
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <Card className="text-center h-full bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your logistics requirements and receive a customized solution proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/tracking">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-full"
                >
                  Track Shipment
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
