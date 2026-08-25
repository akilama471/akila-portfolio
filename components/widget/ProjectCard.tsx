import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
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
            className="group relative rounded-xl overflow-hidden bg-dark-800 border border-gray-700/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col justify-between animate-project-fade"
        >
            <div>
                {/* Compact Image & Overlay */}
                <div className="h-32 md:h-36 overflow-hidden relative border-b border-gray-700/50 bg-dark-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-900/40 to-transparent opacity-80 z-10"></div>
                    <Image
                        src={project.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={project.title}
                        width={360}
                        height={180}
                        loading="lazy"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between gap-1.5 flex-wrap">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono backdrop-blur-md ${badgeStyle}`}>
                            {project.categoryLabel}
                        </span>
                        {project.confidential ? (
                            <span className="text-[10px] px-2 py-0.5 rounded-full border bg-amber-500/20 text-amber-300 border-amber-500/40 backdrop-blur-md flex items-center gap-1 font-mono">
                                <FontAwesomeIcon icon={icons.lock} className="text-[9px]" /> Confidential
                            </span>
                        ) : project.status === "In Progress" ? (
                            <span className="text-[10px] px-2 py-0.5 rounded-full border bg-blue-500/20 text-blue-300 border-blue-500/40 backdrop-blur-md font-mono">
                                In Progress
                            </span>
                        ) : null}
                    </div>
                </div>

                {/* Compact Content */}
                <div className="p-3.5 md:p-4">
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1 mb-2">
                        {project.tech.slice(0, 3).map((tech, index) => (
                            <span
                                key={index}
                                className="text-[10px] px-1.5 py-0.5 rounded bg-dark-900 border border-gray-700/70 text-gray-300 font-mono"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-dark-900/80 text-gray-400 font-mono">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>

                    <h3
                        onClick={() => onOpenDetails(project)}
                        className="text-sm md:text-base font-bold text-white mb-1.5 group-hover:text-primary transition-colors line-clamp-1 cursor-pointer"
                        title={project.title}
                    >
                        {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-2 line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Compact Footer */}
            <div className="px-3.5 md:px-4 pb-3 pt-2 border-t border-gray-700/40 flex items-center justify-between text-xs">
                <button
                    onClick={() => onOpenDetails(project)}
                    className="font-medium text-primary hover:text-white flex items-center gap-1 transition-colors group/btn text-xs"
                >
                    Details
                    <FontAwesomeIcon
                        icon={icons.chevronRight}
                        className="text-[10px] group-hover/btn:translate-x-0.5 transition-transform"
                    />
                </button>

                <div className="flex items-center gap-2">
                    {project.linkType === "github" && project.linkUrl ? (
                        <Link
                            href={project.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
                            title="GitHub Repository"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FontAwesomeIcon icon={icons.github} className="text-xs" /> Code
                        </Link>
                    ) : project.linkType === "live" && project.linkUrl ? (
                        <Link
                            href={project.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
                            title="Live Production Link"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FontAwesomeIcon icon={icons.externalLink} className="text-[10px]" /> Live
                        </Link>
                    ) : (
                        <span
                            className="text-gray-400 flex items-center gap-1 font-mono text-[11px]"
                            title={project.confidential ? "Protected under NDA" : "Private Repository"}
                        >
                            <FontAwesomeIcon
                                icon={project.confidential ? icons.lock : icons.shield}
                                className={`text-[10px] ${project.confidential ? "text-amber-400" : "text-emerald-400"}`}
                            />
                            {project.confidential ? "NDA" : "Private"}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}