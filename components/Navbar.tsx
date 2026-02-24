"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative flex items-center justify-between h-20">

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-slate-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* LEFT NAV (hidden on mobile) */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#ABOUTME" className="hover:text-sky-400 transition">About</a>
            <a href="#PROJECTS" className="hover:text-sky-400 transition">Projects</a>
            <a href="#ACHIEVEMENTS" className="hover:text-sky-400 transition">Achievements</a>
          </div>

          {/* CENTER LOGO */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold tracking-tight"
          >
            josiahra
          </a>

          {/* RIGHT NAV (hidden on mobile) */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#SKILLS" className="hover:text-sky-400 transition">Skills</a>
            <a href="#EXPERIENCE" className="hover:text-sky-400 transition">Experience</a>
            <a href="#CONTACT" className="hover:text-sky-400 transition">Contact</a>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800 px-6 pb-6 space-y-4 text-sm font-medium">
          <a href="#ABOUTME" onClick={() => setIsOpen(false)} className="block hover:text-sky-400">About</a>
          <a href="#PROJECTS" onClick={() => setIsOpen(false)} className="block hover:text-sky-400">Projects</a>
          <a href="#ACHIEVEMENTS" onClick={() => setIsOpen(false)} className="block hover:text-sky-400">Achievements</a>
          <a href="#SKILLS" onClick={() => setIsOpen(false)} className="block hover:text-sky-400">Skills</a>
          <a href="#EXPERIENCE" onClick={() => setIsOpen(false)} className="block hover:text-sky-400">Experience</a>
          <a href="#CONTACT" onClick={() => setIsOpen(false)} className="block hover:text-sky-400">Contact</a>
        </div>
      )}
    </nav>
  );
}