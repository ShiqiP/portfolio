'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaMoon, FaSun, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SlArrowDown } from "react-icons/sl";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ProjectType, ArticleType } from '@/type/index.type';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const go2Section = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' })
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


  const [articles, setArticles] = useState<ArticleType[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch('./articles.json');
      const data = await res.json();
      setArticles(data.splice(0, 2));
    }
    fetchArticles();
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <section id="home" className="min-h-lvh pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/avatar.jpg`}
                alt="Profile"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m Shiqi Pang</h1>
              <p className="text-2xl mb-2">Frontend Developer</p>
              <p className="text-lg mb-6">Passionate frontend developer specializing in React, Vue and modern web technologies. Like to write and share my insights of technologies.</p>
              <div className="flex space-x-4">
                <button className="btn-primary flex items-center gap-2">
                </button>
                <div className="flex space-x-3">
                  <a href="https://github.com/ShiqiP" className="social-icon"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/shiqi-pang/" className="social-icon"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 text-4xl font-bold bounce" onClick={() => go2Section('projects')}><SlArrowDown /></div>
      </section>

      <section id="projects" className="min-h-lvh py-20 px-6 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-gray-50 text-3xl font-bold mb-12 text-center" data-aos="fade-up">Featured Projects</h2>
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
        </div>
      </section>

      <section id="articles" className="min-h-lvh py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">Latest Articles</h2>
          <div className="space-y-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="article-card"
                data-aos="fade-up"
              >
                <div className="md:flex gap-6 items-center">
                  <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <Image
                      priority={true}
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}${article.image}`}
                      alt={article.title}
                      width={192}
                      height={500}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .nav-link {
          @apply hover:text-blue-600 dark:hover:text-blue-400 transition-colors;
        }
        .btn-primary {
          @apply bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors;
        }
        .social-icon {
          @apply text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors;
        }
        .bounce {
          animation: bounce 2s ease infinite;
          cursor:pointer;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-30px);}
          60% {transform: translateY(-15px);}
        }
      `}</style>
    </div>
  );
};

export default App;
