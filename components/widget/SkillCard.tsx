// src/components/SkillCard.tsx

type SkillCardProps = {
    title: string;
};

export default function SkillCard({
    title
}: SkillCardProps) {
    return (
        <div className="border p-4 rounded">
            {title}
        </div>
    );
}