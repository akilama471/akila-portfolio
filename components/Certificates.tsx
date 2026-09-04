"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import { certificates, Certificate } from "@/data/certificates";
import SectionTitle from "./widget/SectionTitle";
import CertificateCard from "./widget/CertificateCard";
import CertificateModal from "./widget/CertificateModal";

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    // 4 Featured Certificates for the Homepage
    const featuredCertificates = certificates.filter(c => c.isFeatured).slice(0, 4);

    return (
        <section id="certificates" className="py-20 bg-dark-900/60 relative">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10" data-aos="fade-up">
                    <div>
                        <SectionTitle title="Certifications & Badges" />
                        <p className="text-gray-400 mt-2 max-w-2xl text-sm md:text-base">
                            Validated technical proficiencies, computer science qualifications, and industry credentials from reputable organizations.
                        </p>
                    </div>
                    <Link
                        href="/certificates"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-dark-900 transition-all font-medium text-sm mt-4 md:mt-0 group"
                    >
                        <span>View All Certificates Archive</span>
                        <FontAwesomeIcon icon={icons.arrowRight} className="text-xs group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredCertificates.map(cert => (
                        <CertificateCard
                            key={cert.id}
                            certificate={cert}
                            onOpenModal={setSelectedCert}
                        />
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-12 text-center" data-aos="fade-up">
                    <div className="p-6 md:p-8 rounded-2xl bg-dark-800/60 border border-gray-800 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-left">
                            <h4 className="text-base md:text-lg font-bold text-white mb-1">
                                Looking for the complete certification record?
                            </h4>
                            <p className="text-xs md:text-sm text-gray-400">
                                Explore all 100+ verified certificates, programming licenses, and digital badges with instant verification links and zoom inspect.
                            </p>
                        </div>
                        <Link
                            href="/certificates"
                            className="px-5 py-2.5 rounded-xl bg-primary text-dark-900 font-semibold text-sm hover:bg-cyan-400 transition-all whitespace-nowrap flex items-center gap-2 shadow-lg shadow-primary/20"
                        >
                            <span>Explore Credentials</span>
                            <FontAwesomeIcon icon={icons.arrowRight} className="text-xs" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Zoom / Lightbox Modal */}
            <CertificateModal
                certificate={selectedCert}
                onClose={() => setSelectedCert(null)}
            />
        </section>
    );
}
