import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'CampusX',
    description: 'Full-stack marketplace application for Bennett University students to buy, sell, and chat with secure authentication and real-time features.',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['React', 'Node.js', 'MongoDB', 'bcrypt'],
    impact: 'Reduced marketplace response time by 45%',
    github: 'https://github.com/yash-gu/CampusX-2.0',
    live: 'https://campusx.guptayas.online',
  },
  {
    title: 'Audible Eyes',
    description: 'Accessibility tool that converts PDF documents to speech for visually impaired users with multi-language support and simplified UI.',
    image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['Python', 'TTS', 'PDF Processing'],
    impact: 'Enabled accessibility for 100+ users',
    github: 'https://github.com/yash-gu/AUDIBLE-EYES',
    live: null,
  },
  {
    title: 'Calorie Tracker',
    description: 'Desktop fitness application with BMI calculator, water intake reminders, and comprehensive data logging using multi-threading.',
    image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['Java', 'Swing', 'Multi-threading', 'Collections'],
    impact: 'Processed 10,000+ daily fitness records',
    github: 'https://github.com/yash-gu/calorie-count-chronicles',
    live: null,
  },
  {
    title: 'Campus Desk',
    description: 'Library management and seat-booking system with real-time seat tracking, multi-library management, and anti-hoarding logic for university study spaces.',
    image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['Socket.io', 'Glassmorphism UI', 'Tailwind CSS', 'Real-time Tracking'],
    impact: 'Optimized library utilization by 60%',
    github: 'https://github.com/yash-gu/campus-desk',
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-display">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Case studies showcasing my expertise in full-stack development and cloud architecture
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass rounded-xl overflow-hidden border border-teal-400/10 hover:border-teal-400/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/10"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gradient mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                {/* Impact */}
                <div className="mb-4 p-3 rounded-lg bg-slate-400/5 border border-teal-400/20">
                  <p className="text-sm text-teal-300">
                    <span className="font-semibold">Key Impact:</span> {project.impact}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-teal-400/10 text-teal-300 border border-teal-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg glass border border-teal-400/30 text-teal-300 text-sm font-medium hover:bg-teal-400/10 transition-all flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400/20 to-sky-400/20 text-teal-300 text-sm font-medium hover:from-teal-400/40 hover:to-sky-400/40 transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
