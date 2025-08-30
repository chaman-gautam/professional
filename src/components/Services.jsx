import React from "react";
import { motion } from "framer-motion";
import professionalRoles from "../data/professionalroles.js";
import {
  Lightbulb,
  Briefcase,
  Handshake,
  LineChart,
  BarChart,
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  lightbulb: Lightbulb,
  briefcase: Briefcase,
  handshake: Handshake,
  chartline: LineChart,
  projectmanager: BarChart,
};

// Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = ({ scrollToSection }) => (
  <section
    id="ProfessionalRoles"
    className="pb-20 max-w-[1200px] m-auto bg-smoky_black"
  >
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 dark:text-white">
          Professional Roles
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        <p className="max-w-2xl mx-auto mt-6 text-gray-700 dark:text-gray-300">
          My multifaceted expertise spans across these key professional domains,
          each contributing to comprehensive business success.
        </p>
      </motion.div>

      {/* Animated grid container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {professionalRoles.map((role, index) => {
          let Icon = iconMap[role.icon];
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-gray-700 p-8  rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-6">
                <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                {role.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {role.description}
              </p>
              <div>
                <h4 className="font-semibold mb-2 dark:text-white">
                  Key Projects:
                </h4>
                <ul className="space-y-2">
                  {role.projects.map((project, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-600 dark:text-gray-300">
                        {project}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}

        {/* Custom Engagement card */}
        <motion.div
          variants={cardVariants}
          className="bg-blue-600 dark:bg-blue-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition"
        >
          <div className="text-white text-4xl mb-6">
            <i className="fas fa-plus"></i>
          </div>
          <h3 className="text-xl font-bold mb-4 text-white">
            Custom Engagement
          </h3>
          <p className="text-white/90 mb-6">
            Need a combination of these roles or a tailored approach? Let's
            discuss how I can meet your specific business needs.
          </p>
          <Link
            to="/contact"
            onClick={() => scrollToSection("contact")}
            className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg font-medium transition"
          >
            Get Custom Proposal
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Services;
