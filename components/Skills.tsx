import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
                    <p className="text-gray-400">A comprehensive toolkit developed through professional experience.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl bg-dark-800 border border-gray-700 hover:border-primary/30 transition-all" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <FontAwesomeIcon icon={icons.code} className="text-primary"/> Frontend & Web
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-300">HTML/CSS/Bootstrap</span>
                                    <span className="text-xs text-primary">Expert</span>
                                </div>
                                <div className="w-full bg-dark-900 rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{width: "95%"}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-300">JavaScript/jQuery</span>
                                    <span className="text-xs text-primary">Advanced</span>
                                </div>
                                <div className="w-full bg-dark-900 rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{width: "85%"}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-300">React & Vue.js</span>
                                    <span className="text-xs text-primary">Intermediate</span>
                                </div>
                                <div className="w-full bg-dark-900 rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{width: "60%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-dark-800 border border-gray-700 hover:border-primary/30 transition-all" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <FontAwesomeIcon icon={icons.server} className="text-secondary"/> Backend
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-300">Laravel (PHP)</span>
                                    <span className="text-xs text-secondary">Expert</span>
                                </div>
                                <div className="w-full bg-dark-900 rounded-full h-2">
                                    <div className="bg-secondary h-2 rounded-full" style={{width: "95%"}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-300">Django (Python)</span>
                                    <span className="text-xs text-secondary">Proficient</span>
                                </div>
                                <div className="w-full bg-dark-900 rounded-full h-2">
                                    <div className="bg-secondary h-2 rounded-full" style={{width: "80%"}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-300">C# / .NET</span>
                                    <span className="text-xs text-secondary">Proficient</span>
                                </div>
                                <div className="w-full bg-dark-900 rounded-full h-2">
                                    <div className="bg-secondary h-2 rounded-full" style={{width: "75%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-dark-800 border border-gray-700 hover:border-primary/30 transition-all" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <FontAwesomeIcon icon={icons.mobilealt} className="text-green-400"/> Mobile & Others
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-300">Flutter</span>
                                    <span className="text-xs text-green-400">Proficient</span>
                                </div>
                                <div className="w-full bg-dark-900 rounded-full h-2">
                                    <div className="bg-green-400 h-2 rounded-full" style={{width: "85%"}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-300">Git & GitHub</span>
                                    <span className="text-xs text-green-400">Advanced</span>
                                </div>
                                <div className="w-full bg-dark-900 rounded-full h-2">
                                    <div className="bg-green-400 h-2 rounded-full" style={{width: "90%"}}></div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-dark-900 px-3 py-1 rounded text-xs text-gray-400 border border-gray-700">Firebase</span>
                                <span className="bg-dark-900 px-3 py-1 rounded text-xs text-gray-400 border border-gray-700">MySQL</span>
                                <span className="bg-dark-900 px-3 py-1 rounded text-xs text-gray-400 border border-gray-700">PostgreSQL</span>
                                <span className="bg-dark-900 px-3 py-1 rounded text-xs text-gray-400 border border-gray-700">Windows Server</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}