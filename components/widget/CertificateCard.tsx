import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import { Certificate } from "@/data/certificates";

interface CertificateCardProps {
    certificate: Certificate;
    onOpenModal: (certificate: Certificate) => void;
}

export default function CertificateCard({ certificate, onOpenModal }: CertificateCardProps) {
    return (
        <div className="group relative rounded-xl overflow-hidden bg-dark-800 border border-gray-700/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col justify-between animate-project-fade">
            <div>
                {/* Certificate Preview Thumbnail */}
                <div
                    className="relative h-40 sm:h-44 bg-dark-900 overflow-hidden border-b border-gray-700/60 cursor-pointer"
                    onClick={() => onOpenModal(certificate)}
                >
                    <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                    />

                    {/* Gradient Overlay & Zoom Icon */}
                    <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                        <span className="px-3 py-1.5 rounded-lg bg-dark-900/90 border border-primary text-xs font-mono text-white flex items-center gap-1.5 shadow-lg">
                            <FontAwesomeIcon icon={icons.zoomIn} className="text-primary text-xs" />
                            <span>Zoom & View</span>
                        </span>
                    </div>

                    {/* Top Issuer Badge */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-primary/30 bg-dark-900/90 text-primary font-mono backdrop-blur-md">
                            {certificate.issuer}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-gray-700 bg-dark-900/90 text-gray-300 font-mono capitalize backdrop-blur-md">
                            {certificate.type}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mb-2">
                        {certificate.skills.slice(0, 3).map((skill, idx) => (
                            <span
                                key={idx}
                                className="text-[10px] px-1.5 py-0.5 rounded bg-dark-900 border border-gray-700/80 text-gray-300 font-mono"
                            >
                                {skill}
                            </span>
                        ))}
                        {certificate.skills.length > 3 && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-dark-900/70 text-gray-400 font-mono">
                                +{certificate.skills.length - 3}
                            </span>
                        )}
                    </div>

                    <h3
                        onClick={() => onOpenModal(certificate)}
                        className="text-sm font-bold text-white mb-1.5 group-hover:text-primary transition-colors line-clamp-1 cursor-pointer"
                        title={certificate.title}
                    >
                        {certificate.title}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {certificate.description}
                    </p>
                </div>
            </div>

            {/* Card Footer */}
            <div className="px-4 pb-3 pt-2 border-t border-gray-700/40 flex items-center justify-between text-xs">
                <button
                    onClick={() => onOpenModal(certificate)}
                    className="font-medium text-primary hover:text-white flex items-center gap-1 transition-colors text-xs"
                >
                    <FontAwesomeIcon icon={icons.zoomIn} className="text-[11px]" />
                    <span>View / Zoom</span>
                </button>

                {certificate.credentialUrl ? (
                    <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
                        title="Live Credential Verification Link"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span>Verify</span>
                        <FontAwesomeIcon icon={icons.externalLink} className="text-[10px]" />
                    </a>
                ) : (
                    <span className="text-gray-400 flex items-center gap-1 font-mono text-[11px]">
                        <FontAwesomeIcon icon={icons.checkCircle} className="text-emerald-400 text-[10px]" /> Verified
                    </span>
                )}
            </div>
        </div>
    );
}
