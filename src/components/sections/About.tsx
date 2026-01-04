"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

const highlights = [
  {
    icon: "🎓",
    title: "Education",
    description: "Pursuing a degree in Computer Science, constantly learning and growing in the field of technology.",
  },
  {
    icon: "🌱",
    title: "Growth Mindset",
    description: "Embracing challenges as opportunities to learn, always seeking to expand my knowledge and skills.",
  },
  {
    icon: "💡",
    title: "Problem Solver",
    description: "Passionate about breaking down complex problems into elegant, efficient solutions.",
  },
];

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Technologies Mastered" },
  { value: "100%", label: "Commitment" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          label="About"
          title="A passionate developer on a mission"
          description="I believe in the power of technology to transform ideas into reality and create meaningful impact in people's lives."
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Faheem working on code"
                fill
                className="object-cover"
              />
              {/* Fallback gradient if no image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 -z-10" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 md:right-8 bg-white rounded-2xl p-6 shadow-card max-w-xs"
            >
              <p className="text-gray-600 italic leading-relaxed">
                "Code is poetry. Every line should be intentional, elegant, and meaningful."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                  F
                </div>
                <div>
                  <p className="font-medium text-gray-950 text-sm">Faheem</p>
                  <p className="text-gray-400 text-xs">Developer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Story */}
            <div className="prose prose-lg max-w-none">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed mb-6"
              >
                My journey into software development started with a simple curiosity—
                <span className="text-gray-950 font-medium">
                  how do the technologies we use every day actually work?
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-500 leading-relaxed mb-6"
              >
                That curiosity led me down a path of continuous learning and experimentation.
                From building my first "Hello World" program to developing full-stack applications,
                each project has been a stepping stone in my growth as a developer.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-500 leading-relaxed"
              >
                Today, I'm focused on mastering modern web technologies and building
                applications that are not only functional but also beautifully designed
                and accessible to everyone.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-semibold text-gray-950 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-card transition-all duration-500"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-medium text-gray-950 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
