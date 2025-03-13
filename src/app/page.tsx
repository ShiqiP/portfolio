'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaMoon, FaSun, FaGithub, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
}

interface Article {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
}

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with React and Node.js",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      demoLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management solution with real-time updates",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      technologies: ["React", "Firebase", "Material-UI"],
      demoLink: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather tracking with detailed analytics",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      demoLink: "#"
    }
  ];

  const articles: Article[] = [
    {
      id: 1,
      title: "Mastering React Hooks",
      excerpt: "Deep dive into React Hooks and their practical applications",
      readTime: "5 min",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
    },
    {
      id: 2,
      title: "Modern CSS Techniques",
      excerpt: "Exploring advanced CSS features and best practices",
      readTime: "4 min",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2"
    }
  ];
  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-green-50 text-2xl font-bold">Shiqi</div>
          <div className="flex items-center space-x-6">
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors "
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
            </button> */}
            <a href="#home" className="nav-link text-white">Home</a>
            <a href="#projects" className="nav-link text-white">Projects</a>
            <a href="#articles" className="nav-link text-white">Articles</a>
          </div>
        </nav>
      </header>

      <section id="home" className="min-h-lvh pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="Profile"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m Shiqi Pang</h1>
              <p className="text-2xl mb-2">Frontend Developer</p>
              <p className="text-lg mb-6">Passionate frontend developer specializing in React and modern web technologies.</p>
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
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={192}
                    height={192}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                  />
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
                      src={article.image}
                      alt={article.title}
                      width={192}
                      height={192}
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
      `}</style>
    </div>
  );
};

export default App;
