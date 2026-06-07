import Image from "next/image";
import cert from "../app/data/OSCPplus.json";

const linkedInPostUrl =
    "https://www.linkedin.com/feed/update/urn:li:activity:7455669588647800833/";
const linkedInPreviewImage =
    "/defcon-creator-badge.jpg";



export default function AchievementsSection() {
    const achievement = cert.credentialSubject?.achievement;
    return (
        <div id="ACHIEVEMENTS" className="scroll-mt-30 min-h-[40vh] flex flex-col justify-center gap-10 pb-10">
            <h2 className="font-sans text-4xl md:text-4xl font-semibold tracking-tight text-slate-100 text-left">
                Recent Achievements
            </h2>
            <section id="DEFCON-SG" className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 text-sm text-slate-100">
                <div className="relative">
                    <a
                        href={linkedInPostUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Open LinkedIn post"
                        className="group block"
                    >
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                            <Image
                                src={linkedInPreviewImage}
                                alt="LinkedIn post preview"
                                fill
                                className="object-cover transition duration-300 group-hover:scale-[1.02]"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                                View LinkedIn post
                            </span>
                        </div>
                    </a>
                </div>

                <div className="p-6">
                    <h2 className="text-base font-semibold">
                        DEFCON SG 1 - Creator
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-slate-200">
                        Participated with ret2sutd at DEFCON SG and showcased an Active Directory Adverserial Emulation Activity, featuring techniques like kerberoasting, utilman.exe hijacking as well as intentionally misconfigured services like FTP and SMB.
                    </p>
                </div>
            </section>

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