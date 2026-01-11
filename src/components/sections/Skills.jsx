"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "C", icon: "devicon-c-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },

  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },

  { name: "React", icon: "devicon-react-original" },
  { name: "Next.js", icon: "devicon-nextjs-original-wordmark" },

  { name: "Node.js", icon: "devicon-nodejs-original" },
  { name: "Express", icon: "devicon-express-original" },

  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "MySQL", icon: "devicon-mysql-original-wordmark" },

  { name: "Socket.IO", icon: "devicon-socketio-original" },
  { name: "REST APIs", icon: "devicon-postman-plain" },

  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
  { name: "HTML5", icon: "devicon-html5-plain" },
  { name: "CSS3", icon: "devicon-css3-plain" },

  { name: "Git", icon: "devicon-git-plain" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "AWS", icon: "devicon-amazonwebservices-original-wordmark" },

];


export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-[#0B1020] via-[#141A33] to-[#0B1020]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-200 mb-16 text-center"
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="
                flex flex-col items-center justify-center
                gap-3
                text-gray-400
                hover:text-indigo-400
                transition
              "
            >
              <i className={`${skill.icon} text-4xl`}></i>
              <span className="text-sm font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
