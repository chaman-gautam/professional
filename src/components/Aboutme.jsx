import { motion } from "framer-motion";
import { Download, Mail, MapPin, FileUser } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Aboutme() {
  return (
    <section
      id="Aboutme"
      className="py-20 max-w-[1200px] mx-auto px-6 text-gray-300"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-6 shadow-lg border  flex flex-col  justify-center border-gray-800"
        >
          <img
            src="https://placehold.co/200x200"
            alt="Profile"
            className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-blue-600"
          />
          <h3 className="text-xl font-semibold text-center text-white">
            Chaman Gautam
          </h3>
          <p className="text-sm text-center text-gray-400">
            Full Stack Developer
          </p>
          <div className="flex justify-center gap-4 mt-4 text-gray-400">
            <a href="#" className="hover:text-blue-500">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm text-center mt-4 text-gray-400 flex justify-center items-center gap-2">
            <MapPin size={16} /> India
          </p>
        </motion.div>

        {/* Bio / Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 md:col-span-2"
        >
          {" "}
          <h2 className="text-4xl font-bold text-center mb-2  text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-10"></div>
          <p className="text-gray-400 leading-relaxed">
            I’m a passionate Full Stack Developer with experience in building
            modern web applications using React, TailwindCSS, Django, and PHP. I
            love creating clean, responsive, and high-performance interfaces
            that merge creativity with functionality.
          </p>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Currently pursuing my BCA, I’ve worked on projects involving
            authentication systems, dashboards, and college-focused platforms.
            My focus is on delivering impactful solutions while constantly
            learning and exploring new technologies.
          </p>
          <div className="flex items-center justify-start gap-8 mt-8 ">
            <Link
              to="/resume"
              className=" flex items-center justify-start gap-2 px-6 py-3 rounded-full border border-amber-400 hover:bg-amber-400/20 text-amber-300 font-bold shadow-lg transition-all duration-300"
            >
              <FileUser /> View Resume
            </Link>
            <a className="  flex items-center justify-start gap-2 px-6 py-3 rounded-full border border-amber-400 hover:bg-amber-400/20 text-amber-300 font-bold shadow-lg transition-all duration-300">
              <Download /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
