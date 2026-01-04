"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const experiences = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "Tech Company",
    period: "2024 - Present",
    description:
      "Contributing to full-stack development projects, collaborating with senior developers, and learning industry best practices in a fast-paced environment.",
    highlights: [
      "Developed and maintained React components",
      "Participated in code reviews and agile ceremonies",
      "Improved application performance by 20%",
    ],
    type: "work",
  },
  {
    id: 2,
    role: "Computer Science Student",
    company: "University",
    period: "2022 - Present",
    description:
      "Pursuing a degree in Computer Science with a focus on software engineering, data structures, and algorithms.",
    highlights: [
      "Dean's List recognition",
      "Active member of coding clubs",
      "Completed advanced coursework in web development",
    ],
    type: "education",
  },
  {
    id: 3,
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    description:
      "Building custom web solutions for small businesses and startups, from initial concept to deployment.",
    highlights: [
      "Delivered 5+ client projects",
      "Built responsive, accessible websites",
      "Managed client relationships and project timelines",
    ],
    type: "work",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gray-50">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          label="Experience"
          title="My journey so far"
          description="A timeline of my professional and educational experiences that have shaped me as a developer."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-gray-950 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow duration-500"
                  >
                    {/* Period Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full mb-4">
                      {exp.period}
                    </span>

                    {/* Role & Company */}
                    <h3 className="text-xl font-medium text-gray-950 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-gray-500 font-medium mb-4">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className={`text-sm text-gray-600 flex items-center gap-2 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty column for alternating layout */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* End Dot */}
          <div className="absolute left-0 md:left-1/2 bottom-0 w-3 h-3 bg-gray-300 rounded-full transform -translate-x-1/2 md:-translate-x-1/2" />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-6">
            Interested in my full experience?
          </p>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-950 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Download Resume</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
