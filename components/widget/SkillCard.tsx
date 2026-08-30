import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillItem } from "@/data/skills";

interface SkillCardProps {
    icon: IconProp;
    section: string;
    color: string;
    items: SkillItem[];
    extra: string[];
}

const colorMap: Record<string, { text: string; badge: string; border: string }> = {
    primary: {
        text: "text-primary",
        badge: "bg-primary/10 text-primary border-primary/20",
        border: "hover:border-primary/50",
    },
    secondary: {
        text: "text-secondary",
        badge: "bg-secondary/10 text-secondary border-secondary/20",
        border: "hover:border-secondary/50",
    },
    "green-400": {
        text: "text-green-400",
        badge: "bg-green-400/10 text-green-400 border-green-400/20",
        border: "hover:border-green-400/50",
    },
};

export default function SkillCard(props: SkillCardProps) {
    const colors = colorMap[props.color] || colorMap.primary;

    return (
        <div
            className={`p-6 rounded-2xl bg-dark-800 border border-gray-700 ${colors.border} transition-all duration-300 flex flex-col justify-between`}
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <FontAwesomeIcon icon={props.icon} className={colors.text} aria-hidden="true" /> {props.section}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                    {props.items.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-900 border border-gray-700/80 hover:border-gray-600 transition-colors"
                        >
                            <span className="text-sm font-medium text-gray-200">{item.name}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded border font-mono uppercase tracking-wider ${colors.badge}`}>
                                {item.level}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {props.extra.length > 0 && (
                <div className="pt-6 border-t border-gray-700/60 mt-6">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">Additional Tools & Workflow</p>
                    <div className="flex flex-wrap gap-2">
                        {props.extra.map((tool: string) => (
                            <span
                                key={tool}
                                className="bg-dark-900/80 px-2.5 py-1 rounded-md text-xs text-gray-400 border border-gray-800 hover:text-gray-200 transition-colors"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}