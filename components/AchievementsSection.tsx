import Image from "next/image";
import cert from "../app/data/OSCPplus.json";



export default function AchievementsSection() {
    const achievement = cert.credentialSubject?.achievement;
    return (
        <div id="ACHIEVEMENTS" className="scroll-mt-30 min-h-[40vh] flex flex-col justify-center gap-10 pb-10">
            <h2 className="font-sans text-4xl md:text-4xl font-semibold tracking-tight text-slate-100 text-left">
                Recent Achievements
            </h2>
            <section id="OSCP+" className="mt-12 rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-sm text-slate-100">
                <h2 className="text-base font-semibold">
                {cert.name}
                </h2>
                <div className="mt-4 flex items-start gap-4 py-4">
                <div className="h-60 w-60 flex-shrink-0">
                    <Image
                    src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/169827477"
                    alt="OSCP+ Badge"
                    width={256}
                    height={256}
                    className=""
                    />
                </div>
                <div className="h-60 w-auto flex-shrink">
                    <Image
                    src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/169827477"
                    alt="OSCP+ Cert"
                    width={300}
                    height={80}
                    className=""
                    />
                </div>
                </div>

                <p className="mt-1 text-xs text-slate-400">
                Issued by{" "}
                <a
                    href={cert.issuer.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                >
                    {cert.issuer.name}
                </a>{" "}
                · Valid {new Date(cert.validFrom).getFullYear()}–{new Date(cert.validUntil).getFullYear()}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-200">
                {achievement?.description}
                </p>

                <a
                href={cert.id}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-xs text-sky-400 underline"
                >
                View verified credential
                </a>
            </section>
            </div>
    );
}