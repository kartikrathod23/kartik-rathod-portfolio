"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "SkillSync",
    subtitle: "Skill Exchange & Learning Platform",
    description:
      "A full-stack web platform enabling users to connect, communicate, and collaborate for peer-to-peer skill learning.",
    points: [
      "Designed and implemented RESTful APIs using Node.js and Express.js for user management and session handling.",
      "Built real-time chat and video communication features using WebRTC/Jitsi integration.",
      "Implemented JWT-based authentication and role-based access control with MongoDB-backed user profiles.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "WebRTC"],
    github: "https://github.com/kartikrathod23/SkillSync",
  },
  {
    title: "TradeTrace",
    subtitle: "AI-Based Trading Analytics Dashboard",
    description:
      "A data-driven analytics platform for evaluating trading performance and identifying behavioral patterns.",
    points: [
      "Developed AI-assisted models to analyze historical trade data and detect recurring performance trends.",
      "Built backend services to process and aggregate trading metrics using Node.js.",
      "Visualized insights through interactive dashboards using Chart.js with a responsive UI.",
    ],
    tech: ["MERN", "AI/ML", "Chart.js", "Node.js", "JWT"],
    github: "https://github.com/kartikrathod23/tradetrace",
  },
  {
    title: "Clubs@IIITV",
    subtitle: "College Club Management System",
    description:
      "A centralized platform for managing college clubs, events, and internal communications.",
    points: [
      "Implemented club-specific dashboards for event creation, announcements, and content management.",
      "Integrated Appwrite services for authentication, real-time data sync, and role-based access.",
      "Designed a responsive frontend with modular components and clean routing using React.js.",
    ],
    tech: ["React.js", "Appwrite", "Tailwind CSS"],
    github: "https://github.com/kartikrathod23/Clubs-IIITV",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-gradient-to-br from-[#0B1020] via-[#141A33] to-[#0B1020]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-gray-200 mb-16 text-center"
        >
          Projects
        </motion.h2>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                p-8
                hover:-translate-y-1
                transition-transform
              "
            >
              {/* Header */}
              <h3 className="text-2xl font-semibold text-gray-200">
                {project.title}
              </h3>
              <p className="mt-1 text-indigo-400 text-sm">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="mt-4 text-gray-400 text-base leading-relaxed">
                {project.description}
              </p>

              {/* Bullet points */}
              <ul className="mt-4 space-y-2 text-gray-300 text-base list-disc list-inside">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Tech */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-300 hover:text-white transition text-base"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
