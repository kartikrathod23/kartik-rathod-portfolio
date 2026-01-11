"use client";

import { motion } from "framer-motion";

export default function CodingProfiles() {
  return (
    <section id="coding" className="scroll-mt-24 py-28 bg-gradient-to-br from-[#0B1020] via-[#141A33] to-[#0B1020]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-200 text-center mb-16"
        >
          Coding Profiles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* GITHUB */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-gray-200 mb-3">GitHub</h3>

            <p className="text-gray-400 mb-4">@kartikrathod23</p>

            <div className="flex flex-col gap-3 mb-6">
              <img
                src="https://github-readme-stats-sigma-five.vercel.app/api?username=kartikrathod23&show_icons=true&theme=tokyonight&hide_border=true"
                alt="GitHub Stats"
                className="rounded-md"
              />

              <img
                src="https://github-readme-streak-stats.herokuapp.com?user=kartikrathod23&theme=tokyonight&hide_border=true"
                alt="GitHub Streak"
                className="rounded-md"
              />
            </div>

            <a
              href="https://github.com/kartikrathod23"
              target="_blank"
              className="block text-center bg-indigo-500 hover:bg-indigo-600 rounded-lg py-2 text-gray-200 font-medium transition"
            >
              View GitHub Profile
            </a>
          </div>

          {/* LEETCODE */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-gray-200 mb-3">LeetCode</h3>

            <p className="text-gray-400 mb-4">@rathodkartik293</p>

            <img
              src="https://leetcard.jacoblin.cool/rathodkartik293?theme=dark&font=baloo&radius=10&border=0&ext=heatmap"
              alt="LeetCode Stats"
              className="rounded-md mb-6"
            />

            <a
              href="https://leetcode.com/rathodkartik293/"
              target="_blank"
              className="block text-center bg-indigo-500 hover:bg-indigo-600 rounded-lg py-2 text-gray-200 font-medium transition"
            >
              View LeetCode Profile
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
