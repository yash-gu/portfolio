import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'glass-dark border-b border-teal-400/20'
            : 'glass-light border-b border-blue-400/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-gradient">
            YG
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.href.slice(1)
                    ? isDark ? 'text-teal-400' : 'text-blue-600'
                    : isDark ? 'text-slate-400 hover:text-teal-300' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? isDark ? 'bg-gradient-to-r from-teal-400 to-cyan-300' : 'bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'w-0'
                }`} />
              </a>
            ))}
          </div>

          {/* Theme Toggle & Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'glass-dark hover:bg-teal-400/20'
                  : 'glass-light hover:bg-blue-400/20'
              }`}
            >
              {isDark ? (
                <Sun size={20} className="text-teal-400 transition-transform duration-300 hover:rotate-180" />
              ) : (
                <Moon size={20} className="text-blue-600 transition-transform duration-300 hover:rotate-180" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'glass-dark hover:bg-teal-400/20'
                  : 'glass-light hover:bg-blue-400/20'
              }`}
            >
              {isOpen ? (
                <X size={20} className={isDark ? 'text-teal-400' : 'text-blue-600'} />
              ) : (
                <Menu size={20} className={isDark ? 'text-slate-300' : 'text-slate-600'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden ${isDark ? 'glass-dark border-t border-teal-400/20' : 'glass-light border-t border-blue-400/20'} animate-fade-in`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md font-medium transition-all text-sm ${
                    activeSection === item.href.slice(1)
                      ? isDark
                        ? 'bg-teal-400/20 text-teal-300'
                        : 'bg-blue-400/20 text-blue-600'
                      : isDark
                        ? 'text-slate-300 hover:text-teal-400 hover:bg-slate-400/5'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-blue-400/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
