"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative flex items-center justify-between h-20">

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(true)}
            >
              ☰
            </button>

            {/* Desktop Left Nav */}
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#ABOUTME" className="hover:text-sky-400 transition">About</a>
              <a href="#PROJECTS" className="hover:text-sky-400 transition">Projects</a>
              <a href="#ACHIEVEMENTS" className="hover:text-sky-400 transition">Achievements</a>
            </div>

            {/* Logo */}
            <a
              href="/"
              className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold tracking-tight"
            >
              josiahra
            </a>

            {/* Desktop Right Nav */}
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#SKILLS" className="hover:text-sky-400 transition">Skills</a>
              <a href="#EXPERIENCE" className="hover:text-sky-400 transition">Experience</a>
              <a href="#CONTACT" className="hover:text-sky-400 transition">Contact</a>
            </div>

          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-950 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold">

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <a href="#ABOUTME" onClick={() => setIsOpen(false)} className="hover:text-sky-400 transition">
            About
          </a>
          <a href="#PROJECTS" onClick={() => setIsOpen(false)} className="hover:text-sky-400 transition">
            Projects
          </a>
          <a href="#ACHIEVEMENTS" onClick={() => setIsOpen(false)} className="hover:text-sky-400 transition">
            Achievements
          </a>
          <a href="#SKILLS" onClick={() => setIsOpen(false)} className="hover:text-sky-400 transition">
            Skills
          </a>
          <a href="#EXPERIENCE" onClick={() => setIsOpen(false)} className="hover:text-sky-400 transition">
            Experience
          </a>
          <a href="#CONTACT" onClick={() => setIsOpen(false)} className="hover:text-sky-400 transition">
            Contact
          </a>
        </div>
      )}
    </>
  );
}