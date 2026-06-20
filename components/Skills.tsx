import { skills } from "@/data/skills";
import SkillCard from "./widget/SkillCard";

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
                    <p className="text-gray-400">A comprehensive toolkit developed through professional experience.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map(skill => (
                        <SkillCard
                            key={skill.id}
                            section={skill.section}
                            icon={skill.icon}
                            color={skill.color}
                            items={skill.items}
                            extra={skill.extra}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}