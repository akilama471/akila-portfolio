import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillItem } from "@/data/skills";

interface SkillCardProps {
    title: string;
    level: "Core" | "Strong" | "Familiar";
    subtitle: string;
    description: string;
    icon: IconProp;
    color: "primary" | "secondary" | "green-400";
    items: SkillItem[];
    highlight?: boolean;
}

const colorMap = {
    primary: {
        text: "text-primary",
        badge: "bg-primary/10 text-primary border-primary/30",
        border: "border-primary/40 hover:border-primary/80",
        glow: "shadow-[0_0_25px_rgba(6,182,212,0.12)]",
        levelBadge: "bg-primary text-dark-900 font-bold",
        iconBg: "bg-primary/10 text-primary border border-primary/20",
    },
    secondary: {
        text: "text-secondary",
        badge: "bg-secondary/10 text-secondary border-secondary/30",
        border: "border-gray-700 hover:border-secondary/60",
        glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]",
        levelBadge: "bg-secondary/20 text-secondary border border-secondary/40 font-semibold",
        iconBg: "bg-secondary/10 text-secondary border border-secondary/20",
    },
    "green-400": {
        text: "text-green-400",
        badge: "bg-green-400/10 text-green-400 border-green-400/30",
        border: "border-gray-700 hover:border-green-400/60",
        glow: "hover:shadow-[0_0_20px_rgba(74,222,128,0.1)]",
        levelBadge: "bg-green-400/20 text-green-400 border border-green-400/40 font-semibold",
        iconBg: "bg-green-400/10 text-green-400 border border-green-400/20",
    },
};

export default function SkillCard({
    title,
    level,
    subtitle,
    description,
    icon,
    color,
    items,
    highlight,
}: SkillCardProps) {
    const theme = colorMap[color] || colorMap.primary;

    return (
        <div
            className={`relative p-6 sm:p-7 rounded-2xl bg-dark-800/90 backdrop-blur-sm border transition-all duration-300 flex flex-col justify-between ${
                theme.border
            } ${highlight ? theme.glow : theme.glow}`}
            data-aos="fade-up"
            data-aos-delay="100"
        >
            {highlight && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-primary to-cyan-400 text-dark-900 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full shadow-md">
                    Deepest Mastery
                </div>
            )}

            <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${theme.iconBg}`}>
                            <FontAwesomeIcon icon={icon} className="text-base" aria-hidden="true" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
                            <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
                        </div>
                    </div>
                    <span className={`text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md ${theme.levelBadge}`}>
                        {level}
                    </span>
                </div>

                {/* Subtitle Description */}
                <p className="text-xs text-gray-400/90 leading-relaxed mb-6">
                    {description}
                </p>

                {/* Skills List */}
                <div className="flex flex-col gap-2">
                    {items.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-dark-900/90 border border-gray-700/60 hover:border-gray-600 transition-colors group"
                        >
                            <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                                {item.name}
                            </span>
                            {item.tag && (
                                <span className="text-[11px] font-mono text-gray-400 bg-dark-800/80 px-2 py-0.5 rounded border border-gray-700/50">
                                    {item.tag}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}