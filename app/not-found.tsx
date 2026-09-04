import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";

export default function NotFound() {
    return (
        <div className="min-h-[85vh] flex items-center justify-center px-6 py-20 text-center relative overflow-hidden bg-dark-900">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-lg mx-auto">
                {/* 404 Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-6">
                    <span>404 Error</span>
                    <span>•</span>
                    <span>Page Not Found</span>
                </div>

                {/* Big 404 Heading */}
                <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary tracking-tighter mb-4 font-mono">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Lost in Cyberspace?
                </h2>

                <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-dark-900 font-semibold text-sm hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                    >
                        <span>Return to Home</span>
                        <FontAwesomeIcon icon={icons.arrowRight} className="text-xs" />
                    </Link>

                    <Link
                        href="/projects"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-dark-800 border border-gray-700 text-gray-300 font-medium text-sm hover:border-gray-500 hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                        <span>Explore Project Archive</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
