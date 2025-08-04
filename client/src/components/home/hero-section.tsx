import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedText } from "@/components/ui/animated-text";
import { WaveAnimation } from "@/components/ui/wave-animation";
import { ArrowRight, Search, Rocket } from "lucide-react";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden logistics-gradient-bg">
      <FloatingParticles count={50} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <AnimatedText
                text="Global Logistics"
                variant="typewriter"
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
              />
              <motion.span
                className="block text-yellow-300 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Solutions
              </motion.span>
            </motion.div>
            
            <motion.p
              className="text-xl text-blue-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 80
              }}
            >
              Professional freight forwarding, customs clearance, and supply chain management 
              services connecting businesses worldwide with reliable, efficient logistics solutions.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/services">
                <MagneticButton
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full shadow-lg btn-liquid"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </MagneticButton>
              </Link>
              
              <Link href="/tracking">
                <MagneticButton
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-full glass-morphism"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Track Shipment
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="floating"
              animate={{
                y: [-20, 20, -20],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern logistics and shipping containers at port"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
            
            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </motion.div>
            
            <motion.div
              className="absolute -top-6 -right-6 bg-yellow-400 rounded-2xl p-4 shadow-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="text-2xl font-bold text-gray-900">99%</div>
              <div className="text-sm text-gray-700">On Time</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Wave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveAnimation 
          height={60} 
          color="rgba(255, 255, 255, 0.1)" 
          speed={4}
        />
      </div>
    </section>
  );
}
