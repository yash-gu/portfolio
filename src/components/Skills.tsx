export default function Skills() {
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
          <span className="text-gradient">Technical Arsenal</span>
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with daily
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(categories).map(([category, skills]) => (
            <div key={category} className="glass rounded-xl p-6 border border-teal-400/10 hover:border-teal-400/30 transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-bold text-teal-400 mb-4">{category}</h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-slate-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
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
