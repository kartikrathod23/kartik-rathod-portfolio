"use client";

import { Mail, Phone, FileText } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0B1020]/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo / Name */}
        <a href="#hero" className="font-semibold text-gray-200 tracking-wide text-xl cursor-pointer">
          Kartik<span className="text-indigo-400">.</span><span className="text-indigo-400">Rathod</span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-md text-gray-300">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Phone (icon only) */}
          <a
            href="tel:+91XXXXXXXXXX"
            title="Call me"
            className="hidden sm:flex items-center justify-center w-11 h-10 rounded-lg border border-white/10 hover:border-white/20 transition text-gray-300"
          >
            <Phone size={20} />
          </a>

          {/* Email */}
          <a
            href="mailto:rathodkartik293@gmail.com"
            title="Email me"
            className="flex items-center justify-center w-11 h-10 rounded-lg border border-white/10 hover:border-white/20 transition text-gray-300"
          >
            <Mail size={20} />
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1bm2dZOi3wAGjX8T9WOovODqX3c0xnCH-/view?usp=sharing"
            target="_blank"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 transition text-gray-300 text-md"
          >
            <FileText size={16} />
            Resume
          </a>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="px-4 py-2 text-gray-200 font-bold rounded-lg bg-indigo-500 hover:bg-indigo-600 transition text-md"
          >
            Contact
          </a>
        </div>

      </div>
    </header>
  );
}
