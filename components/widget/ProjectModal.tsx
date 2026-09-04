"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import { Project } from "@/data/projects";
import { defaultBlurDataURL } from "@/data/imageBlur";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        if (!project) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    if (!project) return null;

    const badgeColorMap: Record<string, string> = {
        primary: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
        secondary: "bg-blue-500/10 text-blue-400 border-blue-500/30",
        warning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
        cyan: "bg-teal-500/10 text-teal-400 border-teal-500/30",
        emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    };

    const badgeStyle = badgeColorMap[project.badgeVariant] || badgeColorMap.primary;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
        >
            <div
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-dark-800 border border-gray-700/80 shadow-2xl p-6 md:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-dark-900/80 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 flex items-center justify-center transition-colors"
                    aria-label="Close modal"
                >
                    <FontAwesomeIcon icon={icons.xmark} className="text-base" />
                </button>

                {/* Hero / Cover Image */}
                <div className="relative h-56 md:h-64 rounded-xl overflow-hidden mb-6 border border-gray-700/60">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={defaultBlurDataURL}
                        sizes="(max-width: 768px) 100vw, 672px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/40 to-transparent"></div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 flex-wrap">
                        <span className={`text-xs px-3 py-1 rounded-full border font-mono tracking-wide ${badgeStyle}`}>
                            {project.categoryLabel}
                        </span>
                        {project.confidential && (
                            <span className="text-xs px-3 py-1 rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/30 flex items-center gap-1.5 font-mono">
                                <FontAwesomeIcon icon={icons.lock} className="text-[10px]" /> Confidential / NDA
                            </span>
                        )}
                    </div>
                </div>

                {/* Header */}
                <h3 id="project-modal-title" className="text-2xl font-bold text-white mb-2">
                    {project.title}
                </h3>

                {/* Role / Ownership Notice */}
                <div className="mb-4 text-xs font-mono px-3 py-2 rounded-lg bg-dark-900 border border-gray-700/60 text-gray-300 flex items-center gap-2">
                    <FontAwesomeIcon
                        icon={project.confidential ? icons.shield : icons.laptopcode}
                        className={project.confidential ? "text-amber-400" : "text-primary"}
                    />
                    <span>{project.roleNote}</span>
                </div>

                {/* Description */}
                <div className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 space-y-3">
                    <p>{project.longDescription || project.description}</p>
                </div>

                {/* Key Technical Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                            Key Architectural Highlights
                        </h4>
                        <div className="space-y-2">
                            {project.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-2.5 text-sm text-gray-300">
                                    <FontAwesomeIcon icon={icons.checkCircle} className="text-primary text-xs mt-1 shrink-0" />
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                        Technologies & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="text-xs px-2.5 py-1 rounded-md bg-dark-900 border border-gray-700 text-cyan-400 font-mono"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/60 flex-wrap gap-3">
                    {project.confidential ? (
                        <div className="flex items-center gap-2 text-xs text-amber-400/90 font-mono">
                            <FontAwesomeIcon icon={icons.lock} />
                            <span>Source code & client identity protected under NDA</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                            <FontAwesomeIcon icon={icons.shield} className="text-emerald-400" />
                            <span>Client authorized portfolio showcase</span>
                        </div>
                    )}

                    <div className="flex items-center gap-2">
                        {project.linkType === "github" && project.linkUrl && (
                            <a
                                href={project.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-xs rounded-lg bg-dark-900 border border-gray-700 text-white hover:border-primary flex items-center gap-1.5 transition-colors font-mono"
                            >
                                <FontAwesomeIcon icon={icons.github} /> GitHub Repo
                            </a>
                        )}
                        {project.linkType === "live" && project.linkUrl && (
                            <a
                                href={project.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-xs rounded-lg bg-primary text-dark-900 font-semibold hover:bg-cyan-400 flex items-center gap-1.5 transition-colors font-mono"
                            >
                                <FontAwesomeIcon icon={icons.externalLink} /> Live Demo
                            </a>
                        )}
                        <button
                            onClick={onClose}
                            className="px-4 py-1.5 text-xs rounded-lg bg-dark-900 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
