export default function ExperienceSection () {
    return (
        <div id="EXPERIENCE" className="scroll-mt-24 min-h-[60vh] py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight mb-12">
              Experience
            </h2>

            <div className="space-y-10 border-l border-neutral-800 pl-8">

              <div>
                <h3 className="text-xl font-semibold">
                  Cyber Security Agency of Singapore
                </h3>
                <p className="text-sm text-slate-500">Feb 2023 – Apr 2025</p>
                <p className="text-sm text-sky-400 mt-1">Intelligence Analyst</p>
                <p className="mt-3 text-slate-400 text-sm">
                  Worked under the National Cyber Threat Monitoring Centre for a period of 2 years. Aided in filtering and disseminating relevant information and actionanble items to stakeholders in the Singapore Critical Information Infrastructure with urgency. 
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Digital Intelligence Service
                </h3>
                <p className="text-sm text-slate-500">Jun 2022 - Feb 2023</p>
                <p className="text-sm text-sky-400 mt-1">Cyber Specialist Trainee</p>
                <p className="mt-3 text-slate-400 text-sm">
                  Went through a 9 month long training course to learn the foundations of cybersecurity and how to approach resolving cyber incidents. Trained to join DIS as a Cyber Specialist.
                </p>
              </div>

            </div>
          </div>
        </div>
    );
}