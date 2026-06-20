import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12" data-aos="fade-up">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Projects</h2>
                        <p className="text-gray-400">A selection of enterprise-grade solutions.</p>
                    </div>                    
                        <Link href="https://github.com/akilama471" target="_blank" className="hidden md:inline-flex items-center text-primary hover:text-white transition-colors mt-4 md:mt-0">
                            View all on GitHub <FontAwesomeIcon icon={icons.github} className="ml-2"/>
                        </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="group relative rounded-xl overflow-hidden bg-dark-800 border border-gray-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300" data-aos="fade-up">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60 z-10"></div>
                            <Image
                                src="https://cdn.jsdelivr.net/gh/akilama471/akilama471.github.io@main/assets/img/projects/laravel.webp"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                alt="POS System"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="p-6 relative z-20">
                            <div className="flex gap-2 mb-3">
                                <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">Laravel</span>
                                <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400">Flutter</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Enterprise POS Solution</h3>
                            <p className="text-sm text-gray-400 mb-4 line-clamp-3">Comprehensive ecosystem with inventory management, sales analytics, and CRM tools. Increased efficiency by 35%.</p>
                            
                        <Link href="project-details.html" className="text-sm font-semibold text-white flex items-center gap-1 group/link">
                            View Details <FontAwesomeIcon icon={icons.chevronRight} className="text-xs group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                        </div>
                    </div>

                    <div className="group relative rounded-xl overflow-hidden bg-dark-800 border border-gray-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60 z-10"></div>
                            <Image
                                src="https://cdn.jsdelivr.net/gh/akilama471/akilama471.github.io@main/assets/img/projects/flutter.webp"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                alt="Telecom App"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="p-6 relative z-20">
                            <div className="flex gap-2 mb-3">
                                <span className="text-xs px-2 py-1 rounded bg-green-400/10 text-green-400">Flutter</span>
                                <span className="text-xs px-2 py-1 rounded bg-yellow-500/10 text-yellow-400">Firebase</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Telecom Field Service</h3>
                            <p className="text-sm text-gray-400 mb-4 line-clamp-3">Cross-platform mobile solution optimizing technician dispatching and reducing resolution time by 42%.</p>                            
                            <Link href="project-details.html" className="text-sm font-semibold text-white flex items-center gap-1 group/link">
                            View Details <FontAwesomeIcon icon={icons.chevronRight} className="text-xs group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                        </div>
                    </div>

                    <div className="group relative rounded-xl overflow-hidden bg-dark-800 border border-gray-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60 z-10"></div>
                            <Image
                                src="https://cdn.jsdelivr.net/gh/akilama471/akilama471.github.io@main/assets/img/projects/laravel.webp"
                                alt="CRM System"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="p-6 relative z-20">
                            <div className="flex gap-2 mb-3">
                                <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">Laravel</span>
                                <span className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-400">Vue.js</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Integrated CRM</h3>
                            <p className="text-sm text-gray-400 mb-4 line-clamp-3">Automated lead nurturing and pipeline visualization system that increased sales conversion by 28%.</p>
                            <Link href="project-details.html" className="text-sm font-semibold text-white flex items-center gap-1 group/link">
                            View Details <FontAwesomeIcon icon={icons.chevronRight} className="text-xs group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                        </div>
                    </div>

                    <div className="group relative rounded-xl overflow-hidden bg-dark-800 border border-gray-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300" data-aos="fade-up">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60 z-10"></div>                            
                            <Image
                                src="https://cdn.jsdelivr.net/gh/akilama471/akilama471.github.io@main/assets/img/projects/csharp.webp"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                alt="Retail Management"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="p-6 relative z-20">
                            <div className="flex gap-2 mb-3">
                                <span className="text-xs px-2 py-1 rounded bg-indigo-500/10 text-indigo-400">C# .NET</span>
                                <span className="text-xs px-2 py-1 rounded bg-gray-500/10 text-gray-300">SQL</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Retail Operations Suite</h3>
                            <p className="text-sm text-gray-400 mb-4 line-clamp-3">High-performance desktop app for real-time inventory and supply chain monitoring.</p>
                            <Link href="project-details.html" className="text-sm font-semibold text-white flex items-center gap-1 group/link">
                            View Details <FontAwesomeIcon icon={icons.chevronRight} className="text-xs group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                        </div>
                    </div>

                    <div className="group relative rounded-xl overflow-hidden bg-dark-800 border border-gray-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300" data-aos="fade-up">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60 z-10"></div>                            
                            <Image
                                src="https://cdn.jsdelivr.net/gh/akilama471/akilama471.github.io@main/assets/img/projects/flutter.webp"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                alt="Restaurant App"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="p-6 relative z-20">
                            <div className="flex gap-2 mb-3">
                                <span className="text-xs px-2 py-1 rounded bg-green-400/10 text-green-400">Flutter</span>
                                <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-300">Stripe</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Restaurant Management</h3>
                            <p className="text-sm text-gray-400 mb-4 line-clamp-3">Food service platform with real-time order processing and delivery logistics.</p>
                            <Link href="project-details.html" className="text-sm font-semibold text-white flex items-center gap-1 group/link">
                            View Details <FontAwesomeIcon icon={icons.chevronRight} className="text-xs group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                        </div>
                    </div>

                </div>

                <div className="text-center mt-12 md:hidden">
                    <Link href="https://github.com/akilama471" className="inline-flex items-center text-primary hover:text-white transition-colors">
                            View all on GitHub <FontAwesomeIcon icon={icons.github} className="ml-2" />
                        </Link>
                </div>
            </div>
        </section>
    );
}