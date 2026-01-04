"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    github: "https://github.com/faheem/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.",
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/faheem/taskapp",
    demo: "https://taskapp-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps creators produce high-quality articles, social media posts, and marketing copy.",
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["Python", "FastAPI", "OpenAI", "React"],
    github: "https://github.com/faheem/ai-content",
    demo: null,
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Template",
    description:
      "A minimalist, customizable portfolio template for developers and designers, built with performance and accessibility in mind.",
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/faheem/portfolio",
    demo: "https://portfolio-demo.vercel.app",
    featured: false,
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500">
        {/* Image */}
        <div
          className={`relative overflow-hidden bg-gray-100 ${
            project.featured ? "aspect-[2/1]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/0 to-gray-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Hover Actions */}
          <div className="absolute inset-0 flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center gap-3">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-full hover:bg-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Code</span>
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Live Demo</span>
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-medium text-gray-950 mb-2 group-hover:text-gray-700 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="A collection of projects that showcase my skills and passion for building exceptional digital experiences."
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/faheem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-950 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Projects on GitHub</span>
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
