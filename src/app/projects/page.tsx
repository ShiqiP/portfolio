'use client';

import Image from 'next/image'
import { ProjectType } from '@/type/index.type';
import { useState, useEffect } from 'react';

const Projects: React.FC = () => {
    const go2Project = (project: ProjectType) => {
        window.location.href = project.demoLink;
    }
    const [projects, setProjects] = useState<ProjectType[]>([]);
    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch('./projects.json');
            const data = await res.json();
            setProjects(data);
        }
        fetchProjects();
    }, [])

    return (
        <section id="projects" className="min-h-lvh py-20 px-6 bg-gray-800">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">Projects</h2>
                <div className="space-y-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card cursor-pointer"
                            data-aos="fade-up"
                            onClick={() => go2Project(project)}
                        >
                            <div className="md:flex gap-6 items-center">
                                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                    <Image
                                        priority={true}
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}${project.image}`}
                                        alt={project.title}
                                        width={192}
                                        height={500}
                                        className="w-full h-48 object-cover rounded-xl"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="text-gray-50 tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;