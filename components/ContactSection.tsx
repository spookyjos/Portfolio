export default function ContactSection () {
    return (
        <div id="CONTACT" className="scroll-mt-24 min-h-[40vh] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-8">
              Contact
            </h2>

            <p className="text-slate-400 mb-8">
              Open to internship opportunities!
            </p>

            <div className="flex justify-center gap-8 text-sm">
              <a href="mailto:josiahrachmat2@gmail.com" className="hover:text-sky-400 transition">
                Email
              </a>
              <a href="https://github.com/spookyjos" className="hover:text-sky-400 transition">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/josiah-rachmat-86725b241/" className="hover:text-sky-400 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
    );
}