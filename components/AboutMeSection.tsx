import Image from "next/image";

export default function AboutMeSection() {
    return (
        <div id="ABOUTME" className="scroll-mt-30 min-h-[40vh] flex flex-col items-center justify-center gap-10 pb-50">
                  <Image
                    src="/josiahra.jpg" // maps to public/josiahra.jpg
                    alt="josiah"
                    width={256}
                    height={256}
                    className="rounded-full object-cover"
                  />
                  <p className="font-sans text-4xl md:text-5xl font-semibold tracking-tight text-slate-100">
                    Josiah Rachmat
                  </p>
                  <p className="font-sans text-lg md:text-2xl font-semibold tracking-tight text-slate-100 mx-6 md:mx-28">
                    Hi! I'm currently a first year student under the Singapore University of Technology and Design (SUTD). 
                    In my free time, I like to pursue knowledge in the web development and cybersecurity realms, 
                    as well as bouldering on the side.
                  </p>
                </div>
    );
}