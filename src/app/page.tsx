'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaMoon, FaSun, FaGithub, FaLinkedin } from 'react-icons/fa';
import SkillsShowcase from './components/skill-showcase';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ProjectType, ArticleType } from '@/type/index.type';
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/avatar.jpg`}
                alt="Profile"
                width={192}
                height={192}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m Shiqi Pang</h1>
              <p className="text-2xl mb-2">Software Engineer</p>
              <p className="text-lg mb-2">🪄 Programming feels like magic — it’s the art of turning imagination into interactive experiences. I’m a magician🧙 always learning new spells and refining my craft to build things that impress and inspire!
              </p>
              <div className="flex space-x-4">
                <div className="flex space-x-3">
                  <a href="https://github.com/ShiqiP" className="social-icon"><FaGithub size={30} /></a>
                  <a href="https://www.linkedin.com/in/shiqi-pang/" className="social-icon"><FaLinkedin size={30} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-8 right-1/2 translate-x-1/2 text-xl md:text-5xl font-bold bounce" onClick={() => go2Section('projects')}><SlArrowDown /></div> */}
      </section>
      <SkillsShowcase />
      <style jsx>{`
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
