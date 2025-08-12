'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaMoon, FaSun, FaGithub, FaLinkedinIn, FaCodepen } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dynamic from "next/dynamic";
import '@/style/app.css';

const App: React.FC = () => {

  const SkillWidget = dynamic(() => import('./components/skill-widget'), { ssr: false });

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={`min-h-screen bg-main`}>
        <section id="home" className="min-h-screen pt-30 md:pt-20 pb-20 px-6 flex flex-col gap-10 md:gap-30">
          <div className="container mx-auto max-w-4xl" data-aos="fade-down">
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
                <div className="space-x-4 flex md:hidden">
                  <div className="flex space-x-3">
                    <a href="https://github.com/ShiqiP" className="social-icon"><FaGithub size={30} /></a>
                    <a href="https://www.linkedin.com/in/shiqi-pang/" className="social-icon"><FaLinkedinIn size={30} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full min-h-90 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 container mx-auto' >
            <div className="h-full card border border-[#fff]/[0.1] rounded-2xl bg-[#fff]/[0.03]" >
              <SkillWidget />
            </div>
            <div className='flex min-h-90 flex-col gap-6'>
              <div className="card border flex-1 border-[#fff]/[0.1] rounded-2xl bg-[#fff]/[0.03] flex justify-around items-center" >
                <a href="https://github.com/ShiqiP" className="z-10 rounded-2xl border-3 border-[#fff]/[0.05]">
                  <div className='rounded-2xl p-2 bg-black'>
                    <FaGithub size={40} />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/shiqi-pang/" className="z-10 rounded-2xl border-3 border-[#fff]/[0.05]">
                  <div className="rounded-2xl p-2 bg-[#0a66c2]">
                    <FaLinkedinIn size={40} />
                  </div>
                </a>
                <a href="https://codepen.io/shiqi-the-typescripter" className="z-10 rounded-2xl border-3 border-[#fff]/[0.05]">
                  <div className="rounded-2xl p-2 bg-black">
                    <FaCodepen size={40} />
                  </div>
                </a>
              </div>
              <div className="card border flex-1 border-[#fff]/[0.1] rounded-2xl  flex justify-center items-center text-[#fff]/[0.5]" >
                To be continued...
              </div>
            </div>
            {/* <div className="h-full min-h-80 card border border-[#fff]/[0.1] rounded-2xl bg-[#fff]/[0.03]" >
            </div> */}
          </div>
        </section>

      </div>
    </>
  );
};

export default App;
