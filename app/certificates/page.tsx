"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import { certificates, certificateCategories, Certificate, CredentialCategory } from "@/data/certificates";
import CertificateCard from "@/components/widget/CertificateCard";
import CertificateModal from "@/components/widget/CertificateModal";

export default function CertificatesArchivePage() {
    const [selectedCategory, setSelectedCategory] = useState<CredentialCategory>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "table">("table");
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    // Dynamic category count
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { all: certificates.length };
        for (const c of certificates) {
            counts[c.category] = (counts[c.category] || 0) + 1;
        }
        return counts;
    }, []);

    // Filtered certificates
    const filteredCertificates = useMemo(() => {
        return certificates.filter(c => {
            const matchesCategory = selectedCategory === "all" || c.category === selectedCategory;
            const query = searchQuery.trim().toLowerCase();
            if (!query) return matchesCategory;

            const matchesQuery =
                c.title.toLowerCase().includes(query) ||
                c.issuer.toLowerCase().includes(query) ||
                c.categoryLabel.toLowerCase().includes(query) ||
                c.skills.some(s => s.toLowerCase().includes(query));

            return matchesCategory && matchesQuery;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <>
            <main className="min-h-screen bg-dark-900 text-gray-300 pt-28 pb-16 md:pt-32 md:pb-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    {/* Top Navigation */}
                    <div className="mb-8">
                        <Link
                            href="/"
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
                            Certifications & Badges Archive<span className="text-primary">.</span>
                        </h1>
                        <p className="text-gray-400 max-w-3xl text-sm md:text-base leading-relaxed">
                            A comprehensive, verified catalog of professional accreditations, computer science credentials,
                            and digital achievement badges. Click on any certificate to inspect its high-resolution copy or verify via the official issuer.
                        </p>
                    </div>

                    {/* Controls Bar: Search & View Switcher */}
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-6">
                        {/* Search Input */}
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by certificate title, issuer, or skill..."
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
                                Showing <strong className="text-white">{filteredCertificates.length}</strong> of {certificates.length}
                            </span>

                            <div className="flex items-center rounded-xl bg-dark-800 border border-gray-700 p-1">
                                <button
                                    onClick={() => setViewMode("table")}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${viewMode === "table"
                                        ? "bg-primary text-dark-900 font-bold"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    Table List
                                </button><button
                                    onClick={() => setViewMode("grid")}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${viewMode === "grid"
                                        ? "bg-primary text-dark-900 font-bold"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    Card Grid
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
                        {certificateCategories.map(cat => {
                            const count = categoryCounts[cat.id] || 0;
                            const isActive = selectedCategory === cat.id;

                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id as CredentialCategory)}
                                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 border ${isActive
                                        ? "bg-primary text-dark-900 border-primary shadow-md shadow-primary/20 font-semibold"
                                        : "bg-dark-800/80 text-gray-300 border-gray-700/80 hover:border-gray-600 hover:text-white"
                                        }`}
                                >
                                    <span>{cat.label}</span>
                                    <span
                                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? "bg-dark-900/30 text-dark-900" : "bg-dark-900 text-gray-400"
                                            }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* View Modes */}
                    {viewMode === "grid" ? (
                        /* Card Grid View with Zoom Modal */
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredCertificates.map(cert => (
                                <CertificateCard
                                    key={cert.id}
                                    certificate={cert}
                                    onOpenModal={setSelectedCert}
                                />
                            ))}
                        </div>
                    ) : (
                        /* Table Archive View */
                        <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-dark-800/50 shadow-xl">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-800 text-xs uppercase font-mono tracking-wider text-gray-400 bg-dark-800/80">
                                        <th className="py-3.5 px-4 font-semibold">Issuer</th>
                                        <th className="py-3.5 px-4 font-semibold">Credential Title</th>
                                        <th className="py-3.5 px-4 font-semibold hidden md:table-cell">Type</th>
                                        <th className="py-3.5 px-4 font-semibold hidden lg:table-cell">Verified Skills</th>
                                        <th className="py-3.5 px-4 font-semibold text-right">Verification / Zoom</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800/60 text-sm">
                                    {filteredCertificates.map(cert => (
                                        <tr
                                            key={cert.id}
                                            onClick={() => setSelectedCert(cert)}
                                            className="hover:bg-dark-800/90 transition-colors group cursor-pointer"
                                        >
                                            {/* Issuer */}
                                            <td className="py-3.5 px-4 text-xs font-mono text-cyan-400 whitespace-nowrap">
                                                {cert.issuer}
                                            </td>

                                            {/* Title */}
                                            <td className="py-3.5 px-4">
                                                <div className="font-bold text-white group-hover:text-primary transition-colors">
                                                    {cert.title}
                                                </div>
                                                <div className="text-xs text-gray-400 md:hidden mt-0.5">
                                                    {cert.categoryLabel} • {cert.type}
                                                </div>
                                            </td>

                                            {/* Type */}
                                            <td className="py-3.5 px-4 hidden md:table-cell whitespace-nowrap">
                                                <span className="text-[11px] px-2.5 py-0.5 rounded-full border border-gray-700 bg-dark-900 text-gray-300 font-mono capitalize">
                                                    {cert.type}
                                                </span>
                                            </td>

                                            {/* Skills */}
                                            <td className="py-3.5 px-4 hidden lg:table-cell">
                                                <div className="flex flex-wrap gap-1 max-w-sm">
                                                    {cert.skills.slice(0, 3).map((skill, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-[10px] px-2 py-0.5 rounded bg-dark-900 border border-gray-700/80 text-gray-300 font-mono"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                    {cert.skills.length > 3 && (
                                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-dark-900/60 text-gray-400 font-mono">
                                                            +{cert.skills.length - 3}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>

                                            {/* Actions */}
                                            <td className="py-3.5 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                                <div className="inline-flex items-center gap-2">
                                                    <button
                                                        onClick={() => setSelectedCert(cert)}
                                                        className="px-2.5 py-1 rounded-lg bg-dark-900 border border-gray-700 text-xs font-mono text-gray-300 hover:text-white hover:border-primary transition-colors flex items-center gap-1"
                                                        title="Zoom and inspect certificate image"
                                                    >
                                                        <FontAwesomeIcon icon={icons.zoomIn} className="text-primary text-[10px]" />
                                                        <span>Zoom</span>
                                                    </button>

                                                    {cert.credentialUrl && (
                                                        <a
                                                            href={cert.credentialUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/30 text-xs font-mono text-primary hover:bg-primary hover:text-dark-900 transition-colors flex items-center gap-1"
                                                            title="Live verification link on issuer site"
                                                        >
                                                            <span>Verify</span>
                                                            <FontAwesomeIcon icon={icons.externalLink} className="text-[9px]" />
                                                        </a>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredCertificates.length === 0 && (
                        <div className="text-center py-20 bg-dark-800/40 rounded-2xl border border-gray-800">
                            <p className="text-gray-400 text-base mb-2">No certificates found matching your filters.</p>
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

                {/* Lightbox / Zoom Modal */}
                <CertificateModal
                    certificate={selectedCert}
                    onClose={() => setSelectedCert(null)}
                />
            </main>
        </>
    );
}
