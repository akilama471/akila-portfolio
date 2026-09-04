"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import { Certificate } from "@/data/certificates";
import { defaultBlurDataURL } from "@/data/imageBlur";

interface CertificateModalProps {
    certificate: Certificate | null;
    onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
    const [isZoomed, setIsZoomed] = useState(false);

    useEffect(() => {
        if (!certificate) return;
        setIsZoomed(false);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [certificate, onClose]);

    if (!certificate) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
        >
            <div
                className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-dark-800 border border-gray-700 shadow-2xl p-5 sm:p-7"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-dark-900/90 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 flex items-center justify-center transition-colors"
                    aria-label="Close modal"
                >
                    <FontAwesomeIcon icon={icons.xmark} className="text-base" />
                </button>

                {/* Certificate Image View with Zoom Toggle */}
                <div className="relative mb-6 rounded-xl overflow-hidden bg-dark-900 border border-gray-700/80 group">
                    <div
                        className={`relative w-full transition-all duration-300 flex items-center justify-center ${
                            isZoomed ? "min-h-[600px] cursor-zoom-out" : "h-64 sm:h-96 md:h-[420px] cursor-zoom-in"
                        }`}
                        onClick={() => setIsZoomed(!isZoomed)}
                        title={isZoomed ? "Click to shrink" : "Click to zoom in"}
                    >
                        <Image
                            src={certificate.image}
                            alt={certificate.title}
                            fill={!isZoomed}
                            width={isZoomed ? 1200 : undefined}
                            height={isZoomed ? 850 : undefined}
                            className={`${isZoomed ? "w-full h-auto object-contain" : "object-contain"} p-2`}
                            priority
                            placeholder="blur"
                            blurDataURL={defaultBlurDataURL}
                            sizes="(max-width: 1024px) 100vw, 896px"
                        />
                    </div>

                    {/* Zoom Toggle Floating Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsZoomed(!isZoomed);
                        }}
                        className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-dark-900/90 border border-gray-700 text-xs font-mono text-gray-300 hover:text-white hover:border-primary flex items-center gap-1.5 backdrop-blur-md shadow-lg transition-colors z-20"
                    >
                        <FontAwesomeIcon icon={icons.zoomIn} className="text-primary" />
                        <span>{isZoomed ? "Fit to Window" : "Zoom High-Res"}</span>
                    </button>
                </div>

                {/* Info Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                        <span className="text-xs px-2.5 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono uppercase tracking-wider">
                            {certificate.issuer}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-700 bg-dark-900 text-gray-400 font-mono capitalize">
                            {certificate.type}
                        </span>
                    </div>

                    {certificate.credentialId && (
                        <span className="text-xs font-mono text-gray-400">
                            ID: <strong className="text-gray-300">{certificate.credentialId}</strong>
                        </span>
                    )}
                </div>

                <h3 id="cert-modal-title" className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {certificate.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-5">
                    {certificate.description}
                </p>

                {/* Skills Verified */}
                {certificate.skills && certificate.skills.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                            Skills & Competencies Verified
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {certificate.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs px-2.5 py-1 rounded-md bg-dark-900 border border-gray-700 text-cyan-400 font-mono"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/60 flex-wrap gap-3">
                    <div className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                        <FontAwesomeIcon icon={icons.checkCircle} />
                        <span>Verified Professional Credential</span>
                    </div>

                    <div className="flex items-center gap-2">
                        {certificate.credentialUrl && (
                            <a
                                href={certificate.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-xs rounded-xl bg-primary text-dark-900 font-bold hover:bg-cyan-400 flex items-center gap-1.5 transition-colors shadow-md shadow-primary/20"
                            >
                                <span>Verify on Issuer Website</span>
                                <FontAwesomeIcon icon={icons.externalLink} className="text-[11px]" />
                            </a>
                        )}

                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-xs rounded-xl bg-dark-900 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
