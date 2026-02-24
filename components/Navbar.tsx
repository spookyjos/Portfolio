export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-20">

          {/* LEFT NAV */}
          <div className="flex gap-8 text-sm font-medium">
            <a href="#ABOUTME" className="hover:text-sky-400 transition">
              About
            </a>
            <a href="#PROJECTS" className="hover:text-sky-400 transition">
              Projects
            </a>
            <a href="#ACHIEVEMENTS" className="hover:text-sky-400 transition">
              Achievements
            </a>
          </div>

          {/* CENTER LOGO */}
          <a
            href="/"
            className="scroll-mt-24 absolute left-1/2 -translate-x-1/2 text-2xl font-semibold tracking-tight"
          >
            josiahra
          </a>

          {/* RIGHT NAV */}
          <div className="flex gap-8 text-sm font-medium">
            <a href="#SKILLS" className="hover:text-sky-400 transition">
              Skills
            </a>
            <a href="#EXPERIENCE" className="hover:text-sky-400 transition">
              Experience
            </a>
            <a href="#CONTACT" className="hover:text-sky-400 transition">
              Contact
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}