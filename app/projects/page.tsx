"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import { projects, projectCategories, Project, ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/widget/ProjectCard";
import ProjectModal from "@/components/widget/ProjectModal";

export default function ProjectsArchivePage() {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<"table" | "grid">("table");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Dynamic category project counts
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { all: projects.length };
        for (const p of projects) {
            counts[p.category] = (counts[p.category] || 0) + 1;
        }
        return counts;
    }, []);

    // Filter projects by category and search query
    const filteredProjects = useMemo(() => {
        return projects.filter(p => {
            const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
            const query = searchQuery.trim().toLowerCase();
            if (!query) return matchesCategory;

            const matchesQuery =
                p.title.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.tech.some(t => t.toLowerCase().includes(query)) ||
                p.categoryLabel.toLowerCase().includes(query);

            return matchesCategory && matchesQuery;
        });
    }, [selectedCategory, searchQuery]);

    const badgeColorMap: Record<string, string> = {
        primary: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
        secondary: "bg-blue-500/10 text-blue-400 border-blue-500/30",
        warning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
        cyan: "bg-teal-500/10 text-teal-400 border-teal-500/30",
        emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    };

    return (
        <main className="min-h-screen bg-dark-900 text-gray-300 py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                {/* Top Navigation */}
                <div className="mb-8">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors group"
                    >
                        <FontAwesomeIcon
                            icon={icons.arrowRight}
                            className="rotate-180 text-xs group-hover:-translate-x-1 transition-transform"
                        />
                        <span>Back to Main Portfolio</span>
                    </Link>
                </div>

                {/* Page Header */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
                        Project Archive<span className="text-primary">.</span>
                    </h1>
                    <p className="text-gray-400 max-w-3xl text-sm md:text-base leading-relaxed">
                        A complete chronological index of all {projects.length}+ software platforms, client solutions,
                        proprietary SaaS products, WordPress plugins, developer templates, and open-source tools.
                    </p>
                </div>

                {/* Controls Bar: Search & View Switcher */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-6">
                    {/* Search Bar */}
                    <div className="relative flex-1 max-w-md">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by title, technology, or keywords..."
                            className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-primary placeholder-gray-500 transition-colors"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-2.5 text-gray-500 hover:text-white text-xs"
                                aria-label="Clear search"
                            >
                                <FontAwesomeIcon icon={icons.xmark} />
                            </button>
                        )}
                    </div>

                    {/* View Switcher & Counter */}
                    <div className="flex items-center justify-between md:justify-end gap-3">
                        <span className="text-xs font-mono text-gray-400">
                            Showing <strong className="text-white">{filteredProjects.length}</strong> of {projects.length}
                        </span>

                        <div className="flex items-center rounded-xl bg-dark-800 border border-gray-700 p-1">
                            <button
                                onClick={() => setViewMode("table")}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                    viewMode === "table"
                                        ? "bg-primary text-dark-900 font-bold"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                Table Archive
                            </button>
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                    viewMode === "grid"
                                        ? "bg-primary text-dark-900 font-bold"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                Card Grid
                            </button>
                        </div>
                    </div>
                </div>

                {/* Category Pills Filter */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
                    {projectCategories.map(cat => {
                        const count = categoryCounts[cat.id] || 0;
                        const isActive = selectedCategory === cat.id;

                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 border ${
                                    isActive
                                        ? "bg-primary text-dark-900 border-primary shadow-md shadow-primary/20 font-semibold"
                                        : "bg-dark-800/80 text-gray-300 border-gray-700/80 hover:border-gray-600 hover:text-white"
                                }`}
                            >
                                <span>{cat.label}</span>
                                <span
                                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                                        isActive ? "bg-dark-900/30 text-dark-900" : "bg-dark-900 text-gray-400"
                                    }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Content: Table View or Grid View */}
                {viewMode === "table" ? (
                    <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-dark-800/50 shadow-xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-800 text-xs uppercase font-mono tracking-wider text-gray-400 bg-dark-800/80">
                                    <th className="py-3.5 px-4 font-semibold">Year</th>
                                    <th className="py-3.5 px-4 font-semibold">Project</th>
                                    <th className="py-3.5 px-4 font-semibold hidden md:table-cell">Category</th>
                                    <th className="py-3.5 px-4 font-semibold hidden lg:table-cell">Client / Ownership</th>
                                    <th className="py-3.5 px-4 font-semibold hidden sm:table-cell">Built With</th>
                                    <th className="py-3.5 px-4 font-semibold text-right">Access</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800/60 text-sm">
                                {filteredProjects.map((project) => {
                                    const badgeStyle = badgeColorMap[project.badgeVariant] || badgeColorMap.primary;

                                    return (
                                        <tr
                                            key={project.id}
                                            onClick={() => setSelectedProject(project)}
                                            className="hover:bg-dark-800/90 transition-colors group cursor-pointer"
                                        >
                                            {/* Year */}
                                            <td className="py-3.5 px-4 text-xs font-mono text-gray-400 whitespace-nowrap">
                                                {project.year || "2023 - 2024"}
                                            </td>

                                            {/* Title & Mobile Category */}
                                            <td className="py-3.5 px-4">
                                                <div className="font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                                                    <span>{project.title}</span>
                                                    {project.confidential && (
                                                        <span className="text-[10px] px-1.5 py-0.5 rounded border bg-amber-500/10 text-amber-300 border-amber-500/30 font-mono">
                                                            <FontAwesomeIcon icon={icons.lock} className="text-[9px]" /> NDA
                                                        </span>
                                                    )}
                                                    {project.status === "In Progress" && (
                                                        <span className="text-[10px] px-1.5 py-0.5 rounded border bg-blue-500/10 text-blue-300 border-blue-500/30 font-mono">
                                                            WIP
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-xs text-gray-400 line-clamp-1 mt-0.5 md:hidden">
                                                    {project.categoryLabel}
                                                </div>
                                            </td>

                                            {/* Category */}
                                            <td className="py-3.5 px-4 hidden md:table-cell whitespace-nowrap">
                                                <span className={`text-[11px] px-2.5 py-0.5 rounded-full border font-mono ${badgeStyle}`}>
                                                    {project.categoryLabel}
                                                </span>
                                            </td>

                                            {/* Client / Ownership */}
                                            <td className="py-3.5 px-4 hidden lg:table-cell text-xs text-gray-400 max-w-xs truncate">
                                                {project.roleNote}
                                            </td>

                                            {/* Tech Badges */}
                                            <td className="py-3.5 px-4 hidden sm:table-cell">
                                                <div className="flex flex-wrap gap-1 max-w-sm">
                                                    {project.tech.slice(0, 3).map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-[10px] px-2 py-0.5 rounded bg-dark-900 border border-gray-700/80 text-gray-300 font-mono"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.tech.length > 3 && (
                                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-dark-900/60 text-gray-400 font-mono">
                                                            +{project.tech.length - 3}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>

                                            {/* Access Link */}
                                            <td className="py-3.5 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                                {project.linkType === "github" && project.linkUrl ? (
                                                    <a
                                                        href={project.linkUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-mono transition-colors"
                                                        title="View Source on GitHub"
                                                    >
                                                        <FontAwesomeIcon icon={icons.github} className="text-sm" />
                                                        <span className="hidden md:inline">GitHub</span>
                                                    </a>
                                                ) : project.linkType === "live" && project.linkUrl ? (
                                                    <a
                                                        href={project.linkUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-cyan-300 font-mono transition-colors font-semibold"
                                                        title="Open Live Web Application"
                                                    >
                                                        <FontAwesomeIcon icon={icons.externalLink} className="text-xs" />
                                                        <span className="hidden md:inline">Live</span>
                                                    </a>
                                                ) : (
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-mono"
                                                        title={project.confidential ? "Protected under NDA" : "Private Repository"}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={project.confidential ? icons.lock : icons.shield}
                                                            className={`text-xs ${project.confidential ? "text-amber-400" : "text-emerald-400"}`}
                                                        />
                                                        <span className="hidden md:inline">{project.confidential ? "NDA" : "Private"}</span>
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    /* Grid View (Small Design Cards) */
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onOpenDetails={setSelectedProject}
                            />
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 bg-dark-800/40 rounded-2xl border border-gray-800">
                        <p className="text-gray-400 text-base mb-2">No projects found matching your filters.</p>
                        <button
                            onClick={() => {
                                setSelectedCategory("all");
                                setSearchQuery("");
                            }}
                            className="text-xs text-primary underline hover:text-white"
                        >
                            Reset all filters
                        </button>
                    </div>
                )}
            </div>

            {/* Project Case Study Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </main>
    );
}
