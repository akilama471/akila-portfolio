import { skills, engineeringPractices } from "@/data/skills";
import SkillCard from "./widget/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Technical Depth & Focus
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        A realistic hierarchy of production depth—distinguishing daily architectural mastery from active production delivery and working ecosystem breadth.
                    </p>
                </div>

                {/* 3-Tier Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {skills.map((tier) => (
                        <SkillCard
                            key={tier.id}
                            title={tier.title}
                            level={tier.level}
                            subtitle={tier.subtitle}
                            description={tier.description}
                            icon={tier.icon}
                            color={tier.color}
                            items={tier.items}
                            highlight={tier.highlight}
                        />
                    ))}
                </div>

                {/* Engineering Disciplines & Standards */}
                <div
                    className="p-6 sm:p-8 rounded-2xl bg-dark-800/60 border border-gray-700/60 backdrop-blur-sm"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-4 border-b border-gray-700/60">
                        <div>
                            <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                                <FontAwesomeIcon icon={icons.shield} className="text-primary text-sm" aria-hidden="true" />
                                Engineering Disciplines & Architectural Standards
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">
                                Non-negotiable foundational practices applied across all client and production systems.
                            </p>
                        </div>
                        <span className="self-start md:self-auto text-[11px] font-mono uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                            Production Quality
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                        {engineeringPractices.map((practice) => (
                            <div
                                key={practice}
                                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-dark-900/80 border border-gray-700/70 hover:border-gray-600 transition-colors text-xs text-gray-300"
                            >
                                <FontAwesomeIcon icon={icons.checkCircle} className="text-primary text-[10px]" aria-hidden="true" />
                                <span>{practice}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}