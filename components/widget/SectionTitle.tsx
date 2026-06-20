interface SectionTitleProps { title: string; }

export default function SectionTitle(props: SectionTitleProps) {
    return (
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{props.title}</h2>
    );
}