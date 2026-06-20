import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="group relative rounded-xl overflow-hidden bg-dark-800 border border-gray-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300" data-aos="fade-up">
            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60 z-10"></div>
                <Image
                    src={props.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={props.title}
                    width={400}
                    height={400}
                />
            </div>
            <div className="p-6 relative z-20">
                <div className="flex gap-2 mb-3">
                    {props.tech.map((tech, index) => (
                        <span key={index} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                            {tech}
                        </span>
                    ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{props.title}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">{props.description}</p>

                <Link href={props.link} className="text-sm font-semibold text-white flex items-center gap-1 group/link">
                    View Details <FontAwesomeIcon icon={icons.chevronRight} className="text-xs group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}