"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-16 flex items-center bg-gradient-to-br from-[#0B1020] via-[#1A1F3C] to-[#0B1020]">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* SMALL INTRO + TYPING (SUBTLE) */}
            <p className="text-2xl text-gray-400 mb-3">
              Hi, I’m <span className="text-gray-200 font-medium">Kartik Rathod,</span>{""}
              <span className="ml-2 text-indigo-400 text-2xl">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "DSA Enthusiast",
                    "Problem Solver",

                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={35}
                  delaySpeed={1500}
                />
              </span>
            </p>

            {/* MAIN HEADLINE (UNCHANGED, STRONG) */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="block text-gray-400">
                I build scalable
              </span>
              <span className="text-indigo-400">
                full-stack web applications
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              Product-focused Full Stack Engineer specializing in MERN stack,
              with internship experience building scalable web applications
              and production-ready features used by real users.
            </p>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <a
                href="#projects"
                className="px-5 py-3 text-gray-100 text-lg rounded-lg bg-indigo-500 hover:bg-indigo-600 transition font-medium"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="px-5 py-3 rounded-lg border text-lg border-white/40 hover:border-white/20 transition text-gray-300"
              >
                Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT: IMAGE (KEEP AS EARLIER) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.6, ease: "easeOut", delay: 0.1 },
              scale: { duration: 0.6, ease: "easeOut", delay: 0.1 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/images/profile2.png"
              alt="Kartik Rathod"
              className="
                w-72 h-72
                md:w-80 md:h-80
                lg:w-[26rem] lg:h-[26rem]
                rounded-full
                object-cover
                border border-white/10
              "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
