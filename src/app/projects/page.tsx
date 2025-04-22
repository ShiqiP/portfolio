'use client';

import Image from 'next/image'
import { ProjectType } from '@/type/index.type';
import { useState, useEffect } from 'react';

const Projects: React.FC = () => {

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
        <section className="min-h-lvh py-20 px-6 bg-gray-800">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-gray-50 text-3xl font-bold mb-12 text-center" data-aos="fade-up">Featured Projects</h2>
                {
                    projects.length === 0 ?
                        <div className="text-3xl flex justify-center" data-aos="fade-up">
                            <div>Still working on it
                                <span role="img" aria-label={'lol'}>
                                    {String.fromCodePoint(0x1F600)}
                                </span>
                            </div>
                        </div>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="project-card group"
                                    data-aos="fade-up"
                                >
                                    <div className="relative overflow-hidden rounded-t-xl">
                                        <div
                                            className="w-full h-48  transition-transform group-hover:scale-110"
                                        >
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}${project.image}`}
                                                alt="Profile"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                    </div>
                                    <div className="p-6 bg-white dark:bg-gray-700 rounded-b-xl">
                                        <h3 className="text-gray-50 text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="text-gray-50 tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                        <a
                                            href={project.demoLink}
                                            className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            View Demo →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                }
            </div>
        </section>

    )
}

export default Projects;