import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";

export default function About() {
    return (
        <section id="about" className="py-20 bg-dark-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h3 className="text-2xl font-bold text-white mb-4">Full-Stack Developer & Solutions Architect</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I'm Akila Madhushanka, a self-driven developer from Sri Lanka with over 5 years of experience. My technical journey is built on curiosity and a passion for solving complex problems through elegant code.
                        </p>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I specialize in building robust digital solutions, from responsive web applications to scalable backend systems and cross-platform mobile apps. Founder of <span className="text-primary font-semibold">NextGenWare</span>, I help businesses bridge the gap between technology and success.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-dark-900 rounded-lg border border-gray-700">
                                <h4 className="text-primary font-bold text-xl">5+</h4>
                                <p className="text-sm text-gray-400">Years Experience</p>
                            </div>
                            <div className="p-4 bg-dark-900 rounded-lg border border-gray-700">
                                <h4 className="text-primary font-bold text-xl">20+</h4>
                                <p className="text-sm text-gray-400">Projects Completed</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left">
                        <div className="p-6 bg-dark-900 rounded-xl border border-gray-700 hover:border-primary/50 transition-colors">
                            <FontAwesomeIcon icon={icons.graduationCap} className="text-primary text-3xl mb-4"/>
                            <h4 className="text-white font-bold mb-2">Education</h4>
                            <p className="text-sm text-gray-400">University of Moratuwa (Python)</p>
                            <p className="text-sm text-gray-400 mt-1">FreeCodeCamp (Web)</p>
                        </div>
                        <div className="p-6 bg-dark-900 rounded-xl border border-gray-700 hover:border-primary/50 transition-colors">                            
                            <FontAwesomeIcon icon={icons.award} className="text-primary text-3xl mb-4"/>
                            <h4 className="text-white font-bold mb-2">Certifications</h4>
                            <p className="text-sm text-gray-400">Microsoft C# Foundation</p>
                            <p className="text-sm text-gray-400 mt-1">Responsive Web Design</p>
                        </div>
                        <div className="p-6 bg-dark-900 rounded-xl border border-gray-700 hover:border-primary/50 transition-colors sm:col-span-2">                            
                            <FontAwesomeIcon icon={icons.laptopcode} className="text-primary text-3xl mb-4"/>
                            <h4 className="text-white font-bold mb-2">Current Focus</h4>
                            <p className="text-sm text-gray-400">Building scalable enterprise solutions with Laravel & Flutter at NextGenWare.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}