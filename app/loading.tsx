export default function Loading() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 relative bg-dark-900">
            {/* Ambient Background Glow */}
            <div className="absolute w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Brand Monogram with Spinning Glow Ring */}
                <div className="relative flex items-center justify-center w-20 h-20 mb-6">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/20 border-t-primary animate-spin"></div>
                    <span className="text-xl font-bold font-mono text-white tracking-tighter">
                        AM<span className="text-primary animate-pulse">.</span>
                    </span>
                </div>

                {/* Loading Status Text */}
                <p className="text-xs font-mono tracking-widest uppercase text-gray-400 animate-pulse">
                    Loading Portfolio<span className="text-primary">...</span>
                </p>
            </div>
        </div>
    );
}
