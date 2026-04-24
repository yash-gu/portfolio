import { useEffect, useState } from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';

export default function Hero() {
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
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-sky-400/5 rounded-full blur-3xl animate-float animate-delay-300" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in-up">
        {/* Profile Image */}
        <div className="mb-8 inline-block">
          <div className="w-24 h-24 rounded-full glass border-2 border-teal-400/30 p-1 hover:border-teal-400/60 transition-all duration-300 hover:scale-105">
            <img
              src="photo.jpg"
              alt="Yash Gupta"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">
          <span className="text-gradient">Yash Gupta</span>
        </h1>

        {/* Typing Tagline */}
        <div className="h-12 mb-6">
          <p className="text-xl md:text-2xl text-slate-300 font-medium inline-flex items-center gap-2">
            {displayText}
            {isTyping && <span className="cursor-blink text-teal-400">|</span>}
          </p>
        </div>

        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Aspiring software developer with expertise in DSA, full-stack development, and cloud technologies.
          AWS Certified Solutions Architect | CodeChef 1281 Rating | 200+ LeetCode Problems
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="Yash_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-sky-400 text-navy-900 font-semibold hover:shadow-lg hover:shadow-teal-400/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 glass-light hover:glass"
          >
            <span>View Resume</span>
            <ExternalLink size={18} />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg glass border border-teal-400/30 text-teal-400 font-semibold hover:bg-teal-400/10 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 animate-bounce">
          <a href="#about" className="inline-flex">
            <ArrowDown size={24} className="text-teal-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
