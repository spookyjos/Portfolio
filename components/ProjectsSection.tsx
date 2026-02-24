"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  paragraph: string;
  media: {
    type: "image" | "video";
    src: string;
  }[];
};

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const currentMedia = activeProject ? activeProject.media[currentImage] : null;
  const projects: Project[] = [
    {
      title: "APT Attribution Model",
      description:
        "A neural network predicting APT groups based on MITRE ATT&CK techniques. Built using SecureBERT and datasets available from the MITRE ATT&CK webpage.",
      paragraph:
        "As Advanced Persistent Threats (APTs) grow increasingly more diverse and complex, there is an increasing need for tools to simplify and organise Cyber Threat Intelligence(CTI). My friends and I hence decided to introduce a threat analysis tool that visualises the cyber threats landscape utilising machine learning, attributing various attack techniques to APT Groups based on machine learning, probability analysis, and APTs association with various Tactics, Techniques and Procedures (TTPs). We believe that this tool will provide value to security analytics and the cyber security industry as it can better prepare security teams for potential cyber attacks with insights of emerging APT groups and known techniques. \n Done as a school project.",
      media: [
        { type: "image", src: "/apt-1.jpeg" },
        { type: "image", src: "/apt-2.jpeg" },
        { type: "image", src: "/apt-3.jpeg" },
      ],
    },
    {
      title: "Clothing eCommerce Website",
      description:
        "An ecommerce page for a hypothetical clothing brand. Built with the LAMP stack, as well as Bootstrap for styling.",
      paragraph:
        "My friends and I made this webpage for a school project which tasked us to create a responsive web page with the LAMP stack. We chose a minimalistic design mimicking the design aesthetics widely used by companies in recent years to give our page a sleek and clean look. We also utilised various Bootstrap classes and elements such as banners, carousels, jumbotrons, grids, cards and containers in our page, displaying content in the way we desired to without having to deal with too much CSS code. \n Done as a school project.",
      media: [
        { type: "image", src: "/shop-1.jpg" },
        { type: "image", src: "/shop-2.jpg" },
        { type: "image", src: "/shop-3.jpg" },
      ],
    },
  ];

  const openProject = (project: Project) => {
    setActiveProject(project);
    setCurrentImage(0);
  };

  const closeModal = () => {
    setActiveProject(null);
    setCurrentImage(0);
  };

  const nextImage = () => {
    if (!activeProject) return;
    setCurrentImage((prev) =>
      prev === activeProject.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!activeProject) return;
    setCurrentImage((prev) =>
      prev === 0 ? activeProject.media.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (activeProject) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    }, [activeProject]);

  useEffect(() => {
    setCurrentImage(0);
    }, [activeProject]);

  return (
    <section id="PROJECTS" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight mb-12">
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
                key={project.title}
                onClick={() => openProject(project)}
                className="cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:border-sky-500 transition flex flex-col justify-between"
                >
                <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>

                    {/* Short Description */}
                    <p className="mt-3 text-sm text-slate-400 line-clamp-3">
                    {project.description}
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-6 text-xs text-sky-400 font-medium">
                    Click to view details →
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={closeModal}
        >
            <div
                className="relative w-full max-w-3xl max-h-[85vh] rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}
                <div className="p-8 border-b border-neutral-800">
                    <button
                    className="absolute top-4 right-4 text-slate-400 hover:text-white"
                    onClick={closeModal}
                    >
                    ✕
                    </button>

                    <h3 className="text-2xl font-semibold">
                    {activeProject.title}
                    </h3>
                </div>

                {/* Scrollable Body */}
                <div className="p-8 overflow-y-auto">
                    {/* Carousel */}
                    <div className="relative mb-6">
                        {currentMedia && (
                            <div className="w-full h-80 flex items-center justify-center bg-black rounded-lg overflow-hidden">
                            {currentMedia.type === "image" ? (
                                <img
                                src={currentMedia.src}
                                alt="Project media"
                                className="max-h-full max-w-full object-contain"
                                />
                            ) : (
                                <video
                                src={currentMedia.src}
                                controls
                                className="max-h-full max-w-full object-contain"
                                />
                            )}
                            </div>
                    )}

                    {/* Left Arrow */}
                    <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white"
                    >
                        ←
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white"
                    >
                        →
                    </button>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mb-6">
                    {activeProject.media.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-2 w-2 rounded-full transition ${
                            currentImage === index
                            ? "bg-sky-400"
                            : "bg-neutral-600"
                        }`}
                        />
                    ))}
                    </div>

                    {/* Detailed Description */}
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                    {activeProject.paragraph}
                    </p>
                </div>
            </div>
        </div>
      )}
    </section>
  );
}