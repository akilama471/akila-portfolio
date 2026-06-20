import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/data/icons";
import { projects } from "@/data/projects";
import SectionTitle from "./widget/SectionTitle";
import ProjectCard from "./widget/ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12" data-aos="fade-up">
                    <div>
                        <SectionTitle title="Projects" />
                        <p className="text-gray-400">A selection of enterprise-grade solutions.</p>
                    </div>
                    <Link href="https://github.com/akilama471" target="_blank" rel="noopener noreferrer" aria-label="View all projects on GitHub" className="hidden md:inline-flex items-center text-primary hover:text-white transition-colors mt-4 md:mt-0">
                        View all on GitHub <FontAwesomeIcon icon={icons.github} className="ml-2" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}