"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-[#0B1020] via-[#141A33] to-[#0B1020]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-200 mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Line */}
          <div className="
            absolute left-6 md:left-1/2 top-0 h-full w-px bg-indigo-500/30
            md:-translate-x-1/2
          " />

          {/* EXPERIENCE 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-16 flex md:justify-start justify-end"
          >
            <div className="w-full md:w-1/2 md:pr-16 md:text-right text-left pl-12">
              <h3 className="text-xl font-semibold text-gray-200">
                Software Development Engineer Intern
              </h3>
              <p className="mt-1 text-indigo-400">
                IIIT Vadodara — Research Project (IKS)
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Sep 2025 – Present
              </p>
              <ul className="mt-3 space-y-1 text-[15px] text-gray-400 leading-relaxed">
                <li>Built web modules for institute-sponsored research projects.</li>
                <li>Developed React / Next.js interfaces for data workflows.</li>
                <li>Worked with backend services and databases for processing.</li>
                <li>Collaborated with faculty on research-driven requirements.</li>
              </ul>
            </div>
            <span className="absolute left-6 md:left-1/2 w-3.5 h-3.5 bg-indigo-500 rounded-full top-2 md:-translate-x-1/2" />
          </motion.div>

          {/* EXPERIENCE 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative mb-16 flex md:justify-end justify-end"
          >
            <div className="w-full md:w-1/2 md:pl-16 md:text-left text-left pl-12">
              <h3 className="text-xl font-semibold text-gray-200">
                Full Stack Developer Intern
              </h3>
              <p className="mt-1 text-indigo-400">
                SiteGuru Pvt. Ltd. (Remote)
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Jul 2025 – Sep 2025
              </p>
              <ul className="mt-3 space-y-1 text-[15px] text-gray-400 leading-relaxed">
                <li>Built full-stack features using React and Node.js.</li>
                <li>Integrated REST APIs and optimized database queries.</li>
                <li>Delivered production-ready modules with team collaboration.</li>
              </ul>
            </div>
            <span className="absolute left-6 md:left-1/2 w-3.5 h-3.5 bg-indigo-500/80 rounded-full top-2 md:-translate-x-1/2" />
          </motion.div>

          {/* EXPERIENCE 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-16 flex md:justify-start justify-end"
          >
            <div className="w-full md:w-1/2 md:pr-16 md:text-right text-left pl-12">
              <h3 className="text-xl font-semibold text-gray-200">
                Software Engineer Trainee
              </h3>
              <p className="mt-1 text-indigo-400">
                Ywork (Onsite – Gandhinagar)
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Jul 2025 – Aug 2025
              </p>
              <ul className="mt-3 space-y-1 text-[15px] text-gray-400 leading-relaxed">
                <li>Developed frontend features using Next.js and React.</li>
                <li>Worked with backend APIs for data fetching and submission.</li>
                <li>Implemented reusable components and routing workflows.</li>
              </ul>
            </div>
            <span className="absolute left-6 md:left-1/2 w-3.5 h-3.5 bg-indigo-500/60 rounded-full top-2 md:-translate-x-1/2" />
          </motion.div>

          {/* EXPERIENCE 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative flex md:justify-end justify-end"
          >
            <div className="w-full md:w-1/2 md:pl-16 md:text-left text-left pl-12">
              <h3 className="text-xl font-semibold text-gray-200">
                Full Stack Developer Intern
              </h3>
              <p className="mt-1 text-indigo-400">
                Faucek (Remote)
              </p>
              <p className="mt-2 text-sm text-gray-400">
                May 2025 – Jun 2025
              </p>
              <ul className="mt-3 space-y-1 text-[15px] text-gray-400 leading-relaxed">
                <li>Designed backend APIs using Node.js and Express.</li>
                <li>Modeled MongoDB schemas and optimized queries.</li>
                <li>Implemented JWT-based authentication.</li>
              </ul>
            </div>
            <span className="absolute left-6 md:left-1/2 w-3.5 h-3.5 bg-indigo-500/50 rounded-full top-2 md:-translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
