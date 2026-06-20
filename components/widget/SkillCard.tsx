import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SkillItem {
    name: string;
    level: string;
    value: number;
}

interface SkillCardProps {
    icon: IconProp;
    section: string;
    color: string;
    items: SkillItem[];
    extra: string[];
}

const colorMap: Record<string, { bg: string; text: string }> = {
    primary: { bg: "bg-primary", text: "text-primary" },
    secondary: { bg: "bg-secondary", text: "text-secondary" },
    "green-400": { bg: "bg-green-400", text: "text-green-400" },
};

export default function SkillCard(props: SkillCardProps) {

    const colors = colorMap[props.color] || colorMap.primary;

    return (<div className="p-6 rounded-2xl bg-dark-800 border border-gray-700 hover:border-primary/30 transition-all" data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <FontAwesomeIcon icon={props.icon} className={colors.text} aria-hidden="true" /> {props.section}
        </h3>
        <div className="space-y-4">
            {props.items.map((item) => (
                <div key={item.name}>
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-300">{item.name}</span>
                        <span className={`text-xs ${colors.text}`}>{item.level}</span>
                    </div>
                    <div className="w-full bg-dark-900 rounded-full h-2">
                        <div
                            role="progressbar"
                            aria-label={item.name}
                            aria-valuenow={item.value}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            className={`${colors.bg} h-2 rounded-full`}
                            style={{ width: `${item.value}%` }}>
                        </div>
                    </div>
                </div>
            ))}
            {props.extra.length > 0 && (
                <div className="pt-4 border-t border-gray-700 mt-4">
                    <p className="text-sm text-gray-400 mb-2">Additional Tools</p>
                    <div className="flex flex-wrap gap-2">
                        {props.extra.map((tool: string) => (
                            <span key={tool} className="bg-dark-900 px-3 py-1 rounded text-xs text-gray-400 border border-gray-700">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>);
}