"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pen48mv",
        "template_dr4t3ml",
        formRef.current,
        "yJIxR_DrKuzBlWKpR"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-28 bg-gradient-to-br from-[#0B1020] via-[#141A33] to-[#0B1020]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
              Let’s Connect
            </h2>

            <p className="mt-4 text-gray-400 text-lg max-w-md">
              I’m open to internship opportunities, collaborations, and
              interesting engineering problems. Feel free to reach out.
            </p>

            <div className="mt-8 flex flex-col gap-4 text-gray-300">
              <a
                href="mailto:rathodkartik293@gmail.com"
                className="hover:text-indigo-400 transition"
              >
                📧 rathodkartik293@gmail.com
              </a>

              <a
                href="https://github.com/kartikrathod23"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                💻 GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/kartik-rathod-3513172a8/"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                🔗 LinkedIn
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              bg-white/5
              border border-white/10
              rounded-2xl
              p-6
              flex flex-col gap-4
            "
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="bg-transparent border border-white/10 rounded-lg px-4 py-3 text-gray-200 outline-none focus:border-indigo-400"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="bg-transparent border border-white/10 rounded-lg px-4 py-3 text-gray-200 outline-none focus:border-indigo-400"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="bg-transparent border border-white/10 rounded-lg px-4 py-3 text-gray-200 outline-none focus:border-indigo-400"
            />

            <button
              type="submit"
              className="mt-2 bg-indigo-500 hover:bg-indigo-600 transition rounded-lg px-6 py-3 font-medium"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
