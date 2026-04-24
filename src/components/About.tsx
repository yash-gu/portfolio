interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-display">
          <span className={isDark ? 'text-gradient' : 'text-gradient-light'}>About Me</span>
        </h2>
        <p className={`text-center mb-12 max-w-2xl mx-auto transition-theme ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          My journey in computer science and technology
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-theme ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <p>
              I am a 19-year-old Computer Science student at Bennett University, specializing in solving complex problems through innovative coding solutions. My technical journey is fueled by expertise in Data Structures & Algorithms (DSA), competitive programming, and full-stack development.
            </p>
            <p>
              With a CodeChef rating of 1281 and over 200 LeetCode problems solved, I excel in algorithmic thinking and optimization. I have developed full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and gained hands-on experience with cloud technologies including AWS, Jenkins CI/CD pipelines, and Docker containerization.
            </p>
            <p>
              Originally from Greater Noida, India, I am committed to building a distinguished career in IT and pursuing postgraduate studies abroad at leading global institutions.
            </p>
          </div>

          <div className={`rounded-2xl p-8 ${isDark ? 'glass-dark border-teal-400/20' : 'glass-light border-blue-400/20'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-gradient' : 'text-gradient-light'}`}>Quick Stats</h3>
            <div className="space-y-4">
              {[
                { label: 'Current CGPA', value: '9.2/10' },
                { label: 'LeetCode Problems', value: '200+' },
                { label: 'CodeChef Rating', value: '1281' },
                { label: 'Full-Stack Projects', value: '4+' },
              ].map((stat) => (
                <div key={stat.label} className={`flex justify-between items-center pb-4 border-b ${isDark ? 'border-slate-600' : 'border-slate-300'}`}>
                  <span className={`transition-theme ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{stat.label}</span>
                  <span className={`text-2xl font-bold transition-theme ${isDark ? 'text-teal-400' : 'text-blue-600'}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
