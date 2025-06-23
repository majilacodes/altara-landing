"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, MessageCircle, Send, User, Mail, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

const EngagementSection = () => {
  const [activeCard, setActiveCard] = useState<'call' | 'contact'>('call');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: 100, rotateY: -15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { duration: 0.6 }
    },
    exit: { 
      opacity: 0, 
      x: -100, 
      rotateY: 15,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="rounded-full p-2 flex border border-white/20 bg-white/10 backdrop-blur-md">
            <motion.button
              className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 focus:outline-none ${
                activeCard === 'call'
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white hover:bg-white/20 hover:backdrop-blur-md'
              }`}
              onClick={() => setActiveCard('call')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CalendarIcon size={20} />
              Book a Call
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 focus:outline-none ${
                activeCard === 'contact'
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white hover:bg-white/20 hover:backdrop-blur-md'
              }`}
              onClick={() => setActiveCard('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
              Contact Us
            </motion.button>
          </div>
        </div>

        {/* Split Layout Container */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
          {/* Left Side - Heading */}
          <AnimatePresence mode="wait">
            {activeCard === 'call' && (
              <motion.div
                key="call-heading"
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-400 text-xl leading-relaxed">
                  Book a personalized demo with our AI experts and discover how we can accelerate your growth.
                </p>
              </motion.div>
            )}

            {activeCard === 'contact' && (
              <motion.div
                key="contact-heading"
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
                  Let's Start the Conversation
                </h2>
                <p className="text-gray-400 text-xl leading-relaxed">
                  Send us a message and we'll get back to you within 24 hours to discuss your project.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right Side - Form */}
          <div className="relative flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              {activeCard === 'call' && (
                <motion.div
                  key="call"
                  className="backdrop-blur-md bg-white/10 border border-white/10 shadow-lg rounded-2xl p-8 w-full max-w-lg"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="text-center mb-8">
                    <motion.div
                      className="mx-auto w-16 h-16 bg-black bg-opacity-40 rounded-full flex items-center justify-center mb-4 border border-white"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <CalendarIcon size={32} className="text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Schedule a Call</h3>
                    <p className="text-gray-400">Book your personalized demo</p>
                  </div>

                  <form className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label className="block text-white mb-2 font-medium">Full Name</label>
                      <div className="relative">
                        <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
                          placeholder="John Doe"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label className="block text-white mb-2 font-medium">Email</label>
                      <div className="relative">
                        <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          className="w-full pl-10 pr-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label className="block text-white mb-2 font-medium">Select Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal glass-effect border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-10",
                              !selectedDate && "text-gray-400"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <label className="block text-white mb-2 font-medium">Select Time</label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="w-full glass-effect border-white border-opacity-20 text-white">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-gray-400" />
                            <SelectValue placeholder="Choose a time slot" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)" }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      Schedule Now
                    </motion.button>
                  </form>
                </motion.div>
              )}

              {activeCard === 'contact' && (
                <motion.div
                  key="contact"
                  className="backdrop-blur-md bg-white/10 border border-white/10 shadow-lg rounded-2xl p-8 w-full max-w-lg"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="text-center mb-8">
                    <motion.div
                      className="mx-auto w-16 h-16 bg-black bg-opacity-40 rounded-full flex items-center justify-center mb-4 border border-white"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <MessageCircle size={32} className="text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
                    <p className="text-gray-400">Send us a message</p>
                  </div>

                  <form className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label className="block text-white mb-2 font-medium">Name</label>
                      <div className="relative">
                        <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
                          placeholder="Your Name"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label className="block text-white mb-2 font-medium">Email</label>
                      <div className="relative">
                        <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          className="w-full pl-10 pr-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label className="block text-white mb-2 font-medium">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)" }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <Send size={20} />
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection; 