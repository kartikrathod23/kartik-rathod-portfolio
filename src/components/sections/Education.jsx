"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 bg-gradient-to-br from-[#0B1020] via-[#141A33] to-[#0B1020]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-200 mb-20 text-center"
        >
          Education
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line */}
          <div className="
            absolute
            left-6                       
            md:left-1/2                  
            top-0 h-full w-px
            bg-indigo-500/30
            md:-translate-x-1/2
          " />

          {/* ITEM 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-20 flex md:justify-start justify-end"
          >
            <div className="w-full md:w-1/2 md:pr-16 md:text-right text-left pl-12">
              <h3 className="text-xl font-semibold text-gray-200">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="mt-1 text-gray-400">
                Indian Institute of Information Technology, Vadodara
              </p>
              <p className="mt-3 text-gray-300">2023 – 2027</p>
              <p className="mt-2 text-lg font-medium text-indigo-400">
                CGPA: 8.76 / 10
              </p>
            </div>

            <span className="absolute left-6 md:left-1/2 top-2 w-4 h-4 bg-indigo-500 rounded-full md:-translate-x-1/2" />
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-20 flex md:justify-end justify-end"
          >
            <div className="w-full md:w-1/2 md:pl-16 md:text-left text-left pl-12">
              <h3 className="text-xl font-semibold text-gray-200">
                Class XII (Senior Secondary)
              </h3>
              <p className="mt-1 text-gray-400">
                Lokmanya Tilak Jr College, Maharashtra State Board
              </p>
              <p className="mt-3 text-gray-300">Completed in 2023</p>
              <p className="mt-2 text-lg font-medium text-indigo-400">
                Percentage: 85%
              </p>
            </div>

            <span className="absolute left-6 md:left-1/2 top-2 w-4 h-4 bg-indigo-500/80 rounded-full md:-translate-x-1/2" />
          </motion.div>

          {/* ITEM 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex md:justify-start justify-end"
          >
            <div className="w-full md:w-1/2 md:pr-16 md:text-right text-left pl-12">
              <h3 className="text-xl font-semibold text-gray-200">
                Class X (Secondary)
              </h3>
              <p className="mt-1 text-gray-400">
                Vivekananda English School, Partur (CBSE)
              </p>
              <p className="mt-3 text-gray-300">Completed in 2021</p>
              <p className="mt-2 text-lg font-medium text-indigo-400">
                Percentage: 95%
              </p>
            </div>

            <span className="absolute left-6 md:left-1/2 top-2 w-4 h-4 bg-indigo-500/60 rounded-full md:-translate-x-1/2" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
