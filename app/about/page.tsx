import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import myProfileImg from "@/assets/images/my-profile-img.webp";

export const metadata = {
    title: "About Akila Madhushanka | Full-Stack Developer & Solutions Architect",
    description: "Learn more about Akila Madhushanka, Founder of NextGenWare, Full-Stack Developer specializing in Laravel, Flutter, Next.js, and enterprise software architecture."
};

export default function AboutPage() {
    return (
        <>
            <main className="min-h-screen bg-dark-900 text-gray-300 pt-28 pb-20 md:pt-32">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors group"
                        >
                            <FontAwesomeIcon
                                icon={icons.arrowRight}
                                className="rotate-180 text-xs group-hover:-translate-x-1 transition-transform"
                            />
                            <span>Back to Portfolio</span>
                        </Link>
                    </div>

                    {/* Hero Section */}
                    <div className="grid md:grid-cols-12 gap-10 items-center mb-16">
                        {/* Profile Image & Badges */}
                        <div className="md:col-span-5 flex justify-center">
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-gray-700 shadow-2xl bg-dark-800">
                                    <Image
                                        src={myProfileImg}
                                        alt="Akila Madhushanka"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 256px, 320px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
                                </div>

                                {/* Floating status badge */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-dark-800/90 border border-primary/40 backdrop-blur-md shadow-xl flex items-center gap-2 whitespace-nowrap z-20">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                    <span className="text-xs font-mono text-gray-200">Available for Projects</span>
                                </div>
                            </div>
                        </div>

                        {/* Bio / Heading */}
                        <div className="md:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                                <span>Software Architect</span>
                                <span>•</span>
                                <span>NextGenWare Founder</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                                Crafting High-Impact Digital Solutions with{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    Precision & Innovation
                                </span>
                            </h1>

                            <p className="text-base text-gray-300 leading-relaxed">
                                I&apos;m <strong className="text-white">Akila Madhushanka</strong>, a Full-Stack Solutions Architect and Senior Software Engineer based in Sri Lanka. With 5+ years of hands-on technical leadership, I engineer high-performance web platforms, cross-platform mobile apps, and robust enterprise backend systems.
                            </p>

                            <p className="text-sm text-gray-400 leading-relaxed">
                                As the founder of <strong className="text-primary font-semibold">NextGenWare Software Solutions</strong>, I have spearheaded the end-to-end design, implementation, and deployment of mission-critical systems — including ERPs, POS platforms, Grameen microfinance software, and confidential enterprise suites.
                            </p>

                            {/* Contact Links */}
                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <Link
                                    href="https://github.com/akilama471"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-xl bg-dark-800 border border-gray-700 text-white hover:border-primary transition-colors flex items-center gap-2 text-xs font-medium"
                                >
                                    <FontAwesomeIcon icon={icons.github} /> GitHub
                                </Link>
                                <Link
                                    href="https://lk.linkedin.com/in/akilamadhushanka471"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-xl bg-dark-800 border border-gray-700 text-white hover:border-primary transition-colors flex items-center gap-2 text-xs font-medium"
                                >
                                    <FontAwesomeIcon icon={icons.linkedin} /> LinkedIn
                                </Link>
                                <Link
                                    href="https://wa.me/94767221025"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-xl bg-dark-800 border border-gray-700 text-emerald-400 hover:border-emerald-400 transition-colors flex items-center gap-2 text-xs font-medium"
                                >
                                    <FontAwesomeIcon icon={icons.whatsapp} /> WhatsApp
                                </Link>
                                <Link
                                    href="mailto:developer.akila5@gmail.com"
                                    className="px-4 py-2 rounded-xl bg-primary text-dark-900 font-semibold hover:bg-cyan-400 transition-colors flex items-center gap-2 text-xs"
                                >
                                    <FontAwesomeIcon icon={icons.envelope} /> Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        <div className="p-5 rounded-2xl bg-dark-800/80 border border-gray-800 text-center">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-primary font-mono mb-1">5+</h3>
                            <p className="text-xs uppercase font-semibold tracking-wider text-gray-400">Years Experience</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-dark-800/80 border border-gray-800 text-center">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-secondary font-mono mb-1">57+</h3>
                            <p className="text-xs uppercase font-semibold tracking-wider text-gray-400">Total Projects</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-dark-800/80 border border-gray-800 text-center">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-400 font-mono mb-1">10+</h3>
                            <p className="text-xs uppercase font-semibold tracking-wider text-gray-400">Enterprise Solutions</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-dark-800/80 border border-gray-800 text-center">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-400 font-mono mb-1">100%</h3>
                            <p className="text-xs uppercase font-semibold tracking-wider text-gray-400">Client Commitment</p>
                        </div>
                    </div>

                    {/* Journey & Philosophy Section */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="p-6 md:p-8 rounded-2xl bg-dark-800/60 border border-gray-800 space-y-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                                <FontAwesomeIcon icon={icons.laptopcode} />
                            </div>
                            <h2 className="text-xl font-bold text-white">Engineering Philosophy</h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Software engineering is not merely about writing lines of code; it is about solving human and organizational bottlenecks through elegant, reliable, and scalable technology.
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Whether architecting offline-first mobile applications with Flutter for distribution networks or designing serverless microservices with Python and AWS Zappa, my focus remains strictly on security, responsiveness, clean architecture, and tangible business ROI.
                            </p>
                        </div>

                        <div className="p-6 md:p-8 rounded-2xl bg-dark-800/60 border border-gray-800 space-y-4">
                            <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                                <FontAwesomeIcon icon={icons.shield} />
                            </div>
                            <h2 className="text-xl font-bold text-white">NextGenWare Software Solutions</h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Founded with the mission to equip growing enterprises with modern software infrastructure, NextGenWare delivers tailored software ecosystems ranging from cloud-native POS and eCommerce platforms to custom WooCommerce plugins and desktop retail solutions.
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                We pride ourselves on strict confidentiality standards, adhering to rigorous Non-Disclosure Agreements (NDAs) to safeguard proprietary client algorithms and operational workflows.
                            </p>
                        </div>
                    </div>

                    {/* Comprehensive Technical Capabilities */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <FontAwesomeIcon icon={icons.code} className="text-primary text-xl" />
                            Technical Capabilities & Stack
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {/* Frontend */}
                            <div className="p-5 rounded-xl bg-dark-800 border border-gray-800">
                                <h3 className="text-sm font-bold text-cyan-400 font-mono uppercase tracking-wider mb-3">
                                    Frontend & Web
                                </h3>
                                <ul className="space-y-1.5 text-xs text-gray-300">
                                    <li>• Next.js 16 & React 19</li>
                                    <li>• TypeScript & Modern JavaScript</li>
                                    <li>• Vue.js 3 & Nuxt 3</li>
                                    <li>• Tailwind CSS v4 & Bootstrap</li>
                                    <li>• Shadcn UI, Radix & Inertia.js</li>
                                </ul>
                            </div>

                            {/* Backend */}
                            <div className="p-5 rounded-xl bg-dark-800 border border-gray-800">
                                <h3 className="text-sm font-bold text-blue-400 font-mono uppercase tracking-wider mb-3">
                                    Backend & Systems
                                </h3>
                                <ul className="space-y-1.5 text-xs text-gray-300">
                                    <li>• Laravel (PHP) & Livewire</li>
                                    <li>• Python Flask & Django</li>
                                    <li>• C# .NET WPF Desktop</li>
                                    <li>• MySQL, PostgreSQL & SQLite</li>
                                    <li>• RESTful & Serverless APIs</li>
                                </ul>
                            </div>

                            {/* Mobile */}
                            <div className="p-5 rounded-xl bg-dark-800 border border-gray-800">
                                <h3 className="text-sm font-bold text-teal-400 font-mono uppercase tracking-wider mb-3">
                                    Mobile & Cross-Platform
                                </h3>
                                <ul className="space-y-1.5 text-xs text-gray-300">
                                    <li>• Flutter & Dart (Cross-Platform)</li>
                                    <li>• Ionic Capacitor (Android Native)</li>
                                    <li>• Offline-First SQLite & Sync</li>
                                    <li>• Bluetooth Thermal Printing (ESC/POS)</li>
                                    <li>• Progressive Web Apps (PWA)</li>
                                </ul>
                            </div>

                            {/* Cloud & Tools */}
                            <div className="p-5 rounded-xl bg-dark-800 border border-gray-800">
                                <h3 className="text-sm font-bold text-purple-400 font-mono uppercase tracking-wider mb-3">
                                    Cloud, Security & Tools
                                </h3>
                                <ul className="space-y-1.5 text-xs text-gray-300">
                                    <li>• AWS Serverless (Zappa & Lambda)</li>
                                    <li>• Git, GitHub & CI/CD Pipelines</li>
                                    <li>• Role-Based Access Control (RBAC)</li>
                                    <li>• Content Security Policy (CSP)</li>
                                    <li>• Agile / Scrum Methodology</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Education & Credentials */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <FontAwesomeIcon icon={icons.graduationCap} className="text-primary text-xl" />
                            Education & Professional Certifications
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="p-6 rounded-2xl bg-dark-800 border border-gray-800 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <FontAwesomeIcon icon={icons.graduationCap} className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white">University of Moratuwa</h3>
                                    <p className="text-xs text-primary font-mono mt-0.5">Python Programming & Algorithms</p>
                                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                                        Advanced computing algorithms, data structures, computational logic, and procedural automation.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-dark-800 border border-gray-800 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
                                    <FontAwesomeIcon icon={icons.award} className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white">Microsoft Certified</h3>
                                    <p className="text-xs text-secondary font-mono mt-0.5">Foundational C# & .NET Engineering</p>
                                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                                        Object-oriented application development, type safety, memory management, and desktop system architectures.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-dark-800 border border-gray-800 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                                    <FontAwesomeIcon icon={icons.code} className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white">FreeCodeCamp Certification</h3>
                                    <p className="text-xs text-teal-400 font-mono mt-0.5">Responsive Web Design & Modern Frontend</p>
                                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                                        Semantic HTML5, accessibility (a11y), responsive CSS layouts, and modern web application UI/UX practices.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-dark-800 border border-gray-800 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                                    <FontAwesomeIcon icon={icons.gamepad} className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white">Indie Game Engineering</h3>
                                    <p className="text-xs text-purple-400 font-mono mt-0.5">Godot & Defold Game Engines</p>
                                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                                        Exploration of 2D game loops, procedural tile generation, collision detection, and performance optimization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Call to Action */}
                    <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-r from-dark-800 to-dark-800/80 border border-gray-700/80 text-center relative overflow-hidden">
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Let&apos;s Build Something Remarkable Together
                        </h2>
                        <p className="text-sm text-gray-400 max-w-xl mx-auto mb-6">
                            Have an enterprise project, a startup product idea, or need architectural modernization? Let&apos;s talk.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="/#contact"
                                className="px-6 py-3 rounded-xl bg-primary text-dark-900 font-semibold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-primary/20"
                            >
                                Contact Me Directly
                            </Link>
                            <Link
                                href="/projects"
                                className="px-6 py-3 rounded-xl bg-dark-900 border border-gray-700 text-gray-300 font-medium text-sm hover:border-gray-500 hover:text-white transition-colors"
                            >
                                Explore Project Archive (57+)
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
