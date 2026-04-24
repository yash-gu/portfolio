import { useEffect, useState } from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    'Architecting Scalable Cloud Solutions',
    'Building Full-Stack Experiences',
    'Solving Complex Problems with DSA',
    'Crafting DevOps Excellence',
  ];

  useEffect(() => {
    let currentIndex = 0;
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (charIndex < texts[currentIndex].length) {
        setDisplayText(texts[currentIndex].substring(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(type, 50);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          charIndex = 0;
          currentIndex = (currentIndex + 1) % texts.length;
          setTimeout(type, 300);
        }, 3000);
      }
    };

    timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isDark ? (
          <>
            <div className="absolute top-20 right-20 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-sky-400/5 rounded-full blur-3xl animate-float animate-delay-300" />
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-400/3 rounded-full blur-3xl animate-float-rotate" />
          </>
        ) : (
          <>
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-float animate-delay-300" />
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-float-rotate" />
          </>
        )}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in-up">
        {/* Profile Image */}
        <div className="mb-8 inline-block group">
          <div className={`w-24 h-24 rounded-full ${isDark ? 'glass-dark border-teal-400/30' : 'glass-light border-blue-400/30'} border-2 p-1 hover:border-opacity-60 transition-all duration-300 hover:scale-110 hover-lift`}>
            <img
              src="photo.jpg"
              alt="Yash Gupta"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display leading-tight">
          <span className={isDark ? 'text-gradient' : 'text-gradient-light'}>Yash Gupta</span>
        </h1>

        {/* Typing Tagline */}
        <div className="h-12 mb-8">
          <p className={`text-xl md:text-2xl font-medium inline-flex items-center gap-2 transition-theme ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {displayText}
            {isTyping && (
              <span className={`cursor-blink font-bold ${isDark ? 'text-teal-400' : 'text-blue-600'}`}>|</span>
            )}
          </p>
        </div>

        <p className={`text-lg mb-12 max-w-2xl mx-auto transition-theme ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Aspiring software developer with expertise in DSA, full-stack development, and cloud technologies.
          <br className="hidden sm:block" />
          <span className="font-semibold">AWS Certified Solutions Architect</span> | CodeChef 1281 | 200+ LeetCode Problems
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="Yash_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group ${
              isDark
                ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-navy-900 hover:shadow-teal-500/50'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-blue-600/50'
            }`}
          >
            <span>View Resume</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'border-teal-400/50 text-teal-400 hover:bg-teal-400/10'
                : 'border-blue-600/50 text-blue-600 hover:bg-blue-600/10'
            }`}
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 animate-bounce">
          <a href="#about" className="inline-flex">
            <ArrowDown size={24} className={isDark ? 'text-teal-400' : 'text-blue-600'} />
          </a>
        </div>
      </div>
    </section>
  );
}
