import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Route,
  Sprout,
  LineChart,
  Users,
  Target,
  Crown,
} from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 2.8 } },
};

const listVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const strategies = [
  {
    icon: LineChart,
    title: "Corporate Governance",
    desc: "Ensuring financial oversight, compliance, and long-term stability.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Crown,
    title: "Visionary Leadership",
    desc: "Crafting a clear vision and guiding the company toward bold goals.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Empowered Teams",
    desc: "Building high-performance teams and fostering a winning culture.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "Strategic Growth",
    desc: "Scaling with purpose and aligning execution to vision.",
    gradient: "from-orange-500 to-red-500",
  },
];

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="pt-24 pb-20 relative overflow-hidden md:px-8 sm:p-8 p-4"
    >
      <div className="relative container mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Leadership Insights
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-700 dark:text-gray-300">
            A journey from founder’s vision to CEO’s strategy — blending passion
            with execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2  items-start gap-16 max-w-[1200px] mx-auto">
          {/* Founder’s Journey */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 h-min  p-8 rounded-2xl shadow-lg relative overflow-hidden group w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-pink-500/10 group-hover:opacity-100 opacity-40 transition duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-orange-500 dark:text-orange-400">
                Founder’s Journey
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                A personal story of resilience, innovation, and growth — from
                starting with an idea to building sustainable ventures.
              </p>
              <ul className="space-y-3">
                {[
                  "Startup incubation and nurturing ideas",
                  "Overcoming challenges and building resilience",
                  "Growing from a vision into a reality",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={listVariants}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                <img
                  src="https://placehold.co/500x300?text=Founder+Journey"
                  alt="Founder Journey Illustration"
                  className="rounded-lg shadow-md w-full"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* CEO Strategies */}
          <div className="w-full">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-10">
              CEO Strategies
            </h3>
            <div className="grid gap-8">
              {strategies.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-start gap-4 p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 shadow-lg hover:shadow-xl w-full transition"
                  >
                    <div
                      className={`min-w-12 min-h-12 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
