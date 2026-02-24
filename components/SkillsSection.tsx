export default function SkillsSection () {
    return (
    <div id="SKILLS" className="scroll-mt-24 min-h-[50vh] py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight mb-12">
              Skills
            </h2>

            <div className="grid gap-12 md:grid-cols-2">

              <div>
                <h3 className="text-lg font-semibold mb-4">Programming</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>Python</li>
                  <li>TypeScript</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Cybersecurity</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>Penetration Testing</li>
                  <li>Active Directory Exploitation</li>
                  <li>Network Enumeration</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Web</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Next.js</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Tools</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>Netexec</li>
                  <li>Nmap</li>
                  <li>Ligolo</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
    );
}