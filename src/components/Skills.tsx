interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const categories = {
    Cloud: ['AWS', 'Docker', 'Jenkins', 'DevOps'],
    Frontend: ['React', 'JavaScript', 'Tailwind CSS', 'TypeScript'],
    Backend: ['Node.js', 'Express', 'MongoDB', 'SQL'],
    Competitive: ['C++', 'DSA', 'Python', 'Problem Solving'],
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-display">
          <span className={isDark ? 'text-gradient' : 'text-gradient-light'}>Technical Arsenal</span>
        </h2>
        <p className={`text-center mb-12 max-w-2xl mx-auto transition-theme ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Technologies and tools I work with daily
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(categories).map(([category, skills]) => (
            <div
              key={category}
              className={`rounded-xl p-6 hover-lift transition-all duration-300 ${
                isDark
                  ? 'glass-dark border-teal-400/20 hover:border-teal-400/40'
                  : 'glass-light border-blue-400/20 hover:border-blue-400/40'
              }`}
            >
              <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-teal-400' : 'text-blue-600'}`}>{category}</h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className={`text-sm flex items-center gap-2 transition-theme ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-teal-400' : 'bg-blue-600'}`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
