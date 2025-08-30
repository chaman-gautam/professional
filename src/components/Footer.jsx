import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import professionalRoles from "../data/professionalroles.js";

const Footer = ({ scrollToSection }) => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <footer className=" text-white bg-gradient-to-t via-smoky_black from-rosewood to-smoky_black pt-12 pb-6  border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-y-12">
          {/* Profile / Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.img
              src="https://placehold.co/200x200"
              alt="Profile"
              className="rounded-full w-28 h-28 sm:w-32 sm:h-32 mb-4 border-4 border-selective_yellow shadow-lg"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h3 className="text-xl font-semibold">Chaman Gautam</h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xs">
              Strategic leadership across multiple business domains
            </p>
          </motion.div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row w-full lg:w-[65%] justify-around items-center lg:items-start gap-y-10 sm:gap-x-16">
            {/* Navigation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              custom={1}
              variants={fadeUp}
              className="text-center sm:text-left"
            >
              <h4 className="font-bold mb-3 uppercase text-sm tracking-wider text-selective_yellow">
                Navigation
              </h4>
              <ul className="space-y-2">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Portfolio",
                  "Testimonials",
                  "Contact",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5, color: "#facc15" }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-gray-400 hover:text-white transition text-sm sm:text-base"
                    >
                      {item}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              custom={2}
              variants={fadeUp}
              className="text-center sm:text-left"
            >
              <h4 className="font-bold mb-3 uppercase text-sm tracking-wider text-selective_yellow">
                Services
              </h4>
              <ul className="space-y-2">
                {professionalRoles.slice(0, 5).map((role, i) => (
                  <motion.li
                    key={role.title}
                    whileHover={{ x: 5, color: "#facc15" }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition text-sm sm:text-base"
                    >
                      {role.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              custom={3}
              variants={fadeUp}
              className="text-center sm:text-left"
            >
              <h4 className="font-bold mb-3 uppercase text-sm tracking-wider text-selective_yellow">
                Legal
              </h4>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (policy, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5, color: "#facc15" }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition text-sm sm:text-base"
                      >
                        {policy}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={4}
          variants={fadeUp}
          className="border-t border-white mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left"
        >
          <p className="text-gray-400 text-sm sm:text-base mb-4 md:mb-0">
            © {new Date().getFullYear()} Professional Portfolio. All rights
            reserved.
          </p>

          <div className="flex justify-center space-x-5">
            {[FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, color: "#facc15" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-gray-400 hover:text-white transition"
                >
                  <Icon size={24} />
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
