"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { FaReact, FaVuejs, FaNodeJs, FaGitAlt, FaGlobe, FaMicrochip } from "react-icons/fa"
import {
    SiTypescript,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiTailwindcss,
    SiMongodb,
    SiAmazonwebservices,
    SiFigma,
    SiJquery,
} from "react-icons/si"
import { MdDesignServices, MdApi } from "react-icons/md"
import { IoStatsChart } from "react-icons/io5"

type Skill = {
    name: string
    icon: React.ReactNode
    description: string
    category: "frontend" | "backend" | "design" | "tools"
    level: "beginner" | "intermediate" | "advanced" | "expert"
}

export default function SkillsShowcase() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    // Simple animation on mount
    useEffect(() => {
        setIsVisible(true)
    }, [])

    const categories = [
        { id: "frontend", name: "Frontend" },
        { id: "backend", name: "Backend" },
        { id: "design", name: "Design" },
        { id: "tools", name: "Tools" },
    ]

    const skills: Skill[] = [
        {
            name: "React",
            icon: <FaReact className="h-8 w-8 text-[#61DAFB]" />,
            description: "Building interactive UIs with React and Next.js",
            category: "frontend",
            level: "expert",
        },
        {
            name: "Vue",
            icon: <FaVuejs className="h-8 w-8 text-[#4FC08D]" />,
            description: "Creating reactive applications with Vue.js",
            category: "frontend",
            level: "advanced",
        },
        {
            name: "jQuery",
            icon: <SiJquery className="h-8 w-8 text-[#0769AD]" />,
            description: "DOM manipulation and event handling",
            category: "frontend",
            level: "advanced",
        },
        {
            name: "TypeScript",
            icon: <SiTypescript className="h-8 w-8 text-[#3178C6]" />,
            description: "Type-safe JavaScript development",
            category: "frontend",
            level: "advanced",
        },
        {
            name: "JavaScript",
            icon: <SiJavascript className="h-8 w-8 text-[#F7DF1E]" />,
            description: "Core language for web development",
            category: "frontend",
            level: "expert",
        },
        {
            name: "HTML",
            icon: <SiHtml5 className="h-8 w-8 text-[#E34F26]" />,
            description: "Semantic markup and accessibility",
            category: "frontend",
            level: "expert",
        },
        {
            name: "CSS",
            icon: <SiCss3 className="h-8 w-8 text-[#1572B6]" />,
            description: "Creating responsive and beautiful interfaces",
            category: "frontend",
            level: "expert",
        },
        {
            name: "Node.js",
            icon: <FaNodeJs className="h-8 w-8 text-[#339933]" />,
            description: "Server-side JavaScript development",
            category: "backend",
            level: "intermediate",
        },
        {
            name: "API Design",
            icon: <MdApi className="h-8 w-8 text-[#FF6B6B]" />,
            // description: "RESTful and GraphQL API implementation",
            description: "RESTful API implementation",
            category: "backend",
            level: "advanced",
        },
        {
            name: "UI/UX",
            icon: <MdDesignServices className="h-8 w-8 text-[#FF7EB6]" />,
            description: "Creating intuitive user experiences",
            category: "design",
            level: "advanced",
        },
        {
            name: "Figma",
            icon: <SiFigma className="h-8 w-8 text-[#F24E1E]" />,
            description: "Collaborative design and prototyping",
            category: "design",
            level: "intermediate",
        },
        {
            name: "Git",
            icon: <FaGitAlt className="h-8 w-8 text-[#F05032]" />,
            description: "Version control and collaboration",
            category: "tools",
            level: "advanced",
        },
        {
            name: "Performance",
            icon: <IoStatsChart className="h-8 w-8 text-[#FFD700]" />,
            description: "Web performance optimization",
            category: "tools",
            level: "advanced",
        },
        {
            name: "Responsive Design",
            icon: <FaGlobe className="h-8 w-8 text-[#38B2AC]" />,
            description: "Creating layouts that work on all devices",
            category: "frontend",
            level: "expert",
        },
        {
            name: "IoT",
            icon: <FaMicrochip className="h-8 w-8 text-[#0A84FF]" />,
            description: "Internet of Things integration",
            category: "backend",
            level: "intermediate",
        },
        {
            name: "AWS",
            icon: <SiAmazonwebservices className="h-8 w-8 text-[#FF9900]" />,
            description: "Cloud infrastructure and serverless architecture",
            category: "backend",
            level: "advanced",
        },
        {
            name: "MongoDB",
            icon: <SiMongodb className="h-8 w-8 text-[#47A248]" />,
            description: "NoSQL database design and optimization",
            category: "backend",
            level: "advanced",
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="h-8 w-8 text-[#06B6D4]" />,
            description: "Utility-first CSS framework for rapid UI development",
            category: "frontend",
            level: "expert",
        },
    ]

    const filteredSkills = activeCategory ? skills.filter((skill) => skill.category === activeCategory) : skills

    const getLevelColor = (level: string) => {
        switch (level) {
            case "beginner":
                return "bg-yellow-500"
            case "intermediate":
                return "bg-green-500"
            case "advanced":
                return "bg-blue-500"
            case "expert":
                return "bg-purple-500"
            default:
                return "bg-gray-500"
        }
    }

    return (
        <section className="py-16 bg-[#111827] text-white  border-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h2>

                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === null ? "bg-white text-[#111827]" : "bg-gray-800 hover:bg-gray-700"}`}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? "bg-white text-[#111827]" : "bg-gray-800 hover:bg-gray-700"}`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center mb-4">
                                {skill.icon}
                                <h3 className="text-xl font-semibold ml-3">{skill.name}</h3>
                            </div>
                            <p className="text-gray-300 mb-4">{skill.description}</p>
                            <div className="flex items-center">
                                <span className={`inline-block h-2 w-2 rounded-full mr-2 ${getLevelColor(skill.level)}`}></span>
                                <span className="text-sm capitalize">{skill.level}</span>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tr from-transparent to-gray-700 rounded-tl-full opacity-30 group-hover:opacity-60 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
