import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";

export default function Services() {
    return (
        <section id="services" className="py-20 bg-dark-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Do</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-dark-900 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all group" data-aos="fade-up" data-aos-delay="0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                            <FontAwesomeIcon icon={icons.globe} aria-hidden="true" className="text-primary text-xl" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Web Solutions</h3>
                        <p className="text-sm text-gray-400">Custom business web apps tailored for efficiency and scalability using Laravel & Vue.</p>
                    </div>

                    <div className="bg-dark-900 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all group" data-aos="fade-up" data-aos-delay="100">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                            <FontAwesomeIcon icon={icons.mobileScreen} aria-hidden="true" className="text-primary text-xl" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Mobile Apps</h3>
                        <p className="text-sm text-gray-400">Cross-platform mobile applications with Flutter for iOS and Android.</p>
                    </div>

                    <div className="bg-dark-900 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all group" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                            <FontAwesomeIcon icon={icons.desktop} aria-hidden="true" className="text-primary text-xl" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Desktop Apps</h3>
                        <p className="text-sm text-gray-400">High-performance desktop software for internal workflow optimization.</p>
                    </div>

                    <div className="bg-dark-900 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all group" data-aos="fade-up" data-aos-delay="300">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                            <FontAwesomeIcon icon={icons.chartLine} aria-hidden="true" className="text-primary text-xl" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Data & SEO</h3>
                        <p className="text-sm text-gray-400">Analytics dashboards and SEO strategies to improve visibility and decisions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}