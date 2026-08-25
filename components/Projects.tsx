"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import { projects, Project } from "@/data/projects";
import SectionTitle from "./widget/SectionTitle";
import ProjectCard from "./widget/ProjectCard";
import ProjectModal from "./widget/ProjectModal";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Show only the 6 most valuable featured projects
    const featuredProjects = projects.filter(p => p.isFeatured).slice(0, 6);

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10" data-aos="fade-up">
                    <div>
                        <SectionTitle title="Featured Projects" />
                        <p className="text-gray-400 mt-2 max-w-2xl text-sm md:text-base">
                            Handpicked selection of flagship enterprise platforms, fintech solutions, cross-platform mobile apps, and SaaS architectures.
                        </p>
                    </div>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-dark-900 transition-all font-medium text-sm mt-4 md:mt-0 group"
                    >
                        <span>View Project Archive ({projects.length})</span>
                        <FontAwesomeIcon icon={icons.arrowRight} className="text-xs group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Projects Grid (6 Most Valuable Projects) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onOpenDetails={setSelectedProject}
                        />
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-12 text-center" data-aos="fade-up">
                    <div className="p-6 md:p-8 rounded-2xl bg-dark-800/60 border border-gray-800 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-left">
                            <h4 className="text-base md:text-lg font-bold text-white mb-1">
                                Looking for the complete portfolio?
                            </h4>
                            <p className="text-xs md:text-sm text-gray-400">
                                Explore all {projects.length}+ client systems, open-source repositories, WordPress plugins, and templates.
                            </p>
                        </div>
                        <Link
                            href="/projects"
                            className="px-5 py-2.5 rounded-xl bg-primary text-dark-900 font-semibold text-sm hover:bg-cyan-400 transition-all whitespace-nowrap flex items-center gap-2 shadow-lg shadow-primary/20"
                        >
                            <span>Explore Archive</span>
                            <FontAwesomeIcon icon={icons.arrowRight} className="text-xs" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Project Details Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}