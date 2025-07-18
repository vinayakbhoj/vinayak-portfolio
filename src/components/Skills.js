import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiServer,
  FiLayers 
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FiCode,
      skills: [
        { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-800' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 88, color: 'from-cyan-500 to-blue-500' },
        { name: 'Next.js', level: 75, color: 'from-gray-800 to-black' },
      ]
    },
    {
      title: 'Backend Development',
      icon: FiServer,
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-800' },
        { name: 'Python', level: 75, color: 'from-blue-500 to-yellow-500' },
        { name: 'REST APIs', level: 90, color: 'from-purple-500 to-pink-500' },
        { name: 'GraphQL', level: 65, color: 'from-pink-500 to-purple-500' },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: FiDatabase,
      skills: [
        { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-500 to-blue-700' },
        { name: 'AWS', level: 70, color: 'from-orange-500 to-yellow-500' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: FiLayers,
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'from-gray-800 to-black' },
      ]
    }
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
    <section id="skills" className="section-padding">
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
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Technologies and tools I work with
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-effect p-6 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Other Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Redux', 'Bootstrap', 'Material-UI', , 'Cloudinary',
              'JWT', 'OAuth', 'Socket.io', 'Multer', 'Mongo Atlas',
              'Responsive Design', 'Performance', 'Accessibility', 'Testing', 'Debugging', 'Code Review'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.02 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-center text-sm font-medium hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 