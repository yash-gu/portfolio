export default function Achievements() {
  const achievements = [
    {
      icon: '🏆',
      title: 'Competitive Programming',
      description: 'CodeChef Rating: 1281',
      detail: '200+ LeetCode Problems Solved',
    },
    {
      icon: '🎓',
      title: 'AWS Certified',
      description: 'Solutions Architect - Associate',
      detail: 'Valid: April 2026 - April 2029',
      image: 'aws-certified-solutions-architect-associate.png',
    },
    {
      icon: '⭐',
      title: 'Academic Excellence',
      description: 'Current CGPA: 9.2/10',
      detail: 'Consistent Top Performer',
    },
    {
      icon: '💻',
      title: 'Technical Expertise',
      description: 'Full-Stack Developer',
      detail: 'Cloud & DevOps Specialist',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-display">
          <span className="text-gradient">Achievements & Credentials</span>
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Certifications, recognitions, and professional milestones
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="glass rounded-xl p-6 border border-teal-400/10 hover:border-teal-400/30 transition-all duration-300 hover:scale-105 text-center"
            >
              {item.image ? (
                <div className="mb-4 inline-block">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-contain hover:scale-110 transition-transform"
                  />
                </div>
              ) : (
                <div className="text-4xl mb-4">{item.icon}</div>
              )}
              <h3 className="text-lg font-bold text-gradient mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300 mb-1">{item.description}</p>
              <p className="text-xs text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
