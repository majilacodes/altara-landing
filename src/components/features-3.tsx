"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Share2, RefreshCw, TrendingUp } from 'lucide-react';

const steps = [
  {
    step: "Step 1",
    icon: UserPlus,
    title: "Subscribe",
    description: "Join our AI-driven growth platform with a simple subscription. Access your project board, and we'll reach out the same day for a introductory discussion."
  },
  {
    step: "Step 2", 
    icon: Share2,
    title: "Share your vision",
    description: "Tell us about your brand, audience and goals. Business requirements and constraints, break the project into bite-sized tasks, and start implementing."
  },
  {
    step: "Step 3",
    icon: RefreshCw,
    title: "Continuous results",
    description: "Receive regular updates on our intelligent platforms implemented AI as a strategic asset, ensuring it becomes an integral part of your company's workflow."
  },
  {
    step: "Step 4",
    icon: TrendingUp,
    title: "Enjoy the growth",
    description: "Our results drive your business growth, which enables you to scale and make detailed instructions, training, and tech support as long as you need to maximize our work's value."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            How it works?
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-6 h-96 flex flex-col backdrop-blur-md bg-white/10 border border-white/10 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: [0.25, 1, 0.5, 1] 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  rotateX: 5, 
                  rotateY: 5, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-400 bg-white bg-opacity-10 px-3 py-1 rounded-full">
                    {step.step}
                  </span>
                  <motion.div
                    className="text-white"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Icon size={32} />
                  </motion.div>
                </div>
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 leading-relaxed flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
