import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiMail, FiPhone, FiCalendar } from 'react-icons/fi';

const About = () => {
  const personalInfo = [
    { icon: FiUser, label: 'Name', value: 'Your Name' },
    { icon: FiMapPin, label: 'Location', value: 'Your City, Country' },
    { icon: FiMail, label: 'Email', value: 'your.email@example.com' },
    { icon: FiPhone, label: 'Phone', value: '+1 234 567 890' },
    { icon: FiCalendar, label: 'Birthday', value: 'January 1, 1990' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Get to know me better
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Profile image */}
              <img
                src="/my_image.jpg"
                alt="Profile"
                className="w-80 h-80 mx-auto object-cover rounded-full shadow-lg border-4 border-white dark:border-gray-800"
              />
              
              {/* Floating elements around the image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-80"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Personal Info */}
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <info.icon className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              >
                I'm Vinayak Bhoj, a passionate full-stack developer from Ashti, Maharashtra. Currently in the final year of B.E in Computer Engineering from SPPU with a GPA of 8.4.
I specialize in creating scalable full-stack applications using MERN stack, and I'm exploring Web3, Blockchain, and AI tools like Cursor AI.
I enjoy collaborating on real-world projects, solving problems, and learning new technologies.
              </motion.p>
              
              
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              {[
                { number: '1+', label: 'Years Experience' },
                { number: '10+', label: 'Projects Completed' },
                
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-3xl font-bold text-gradient mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 