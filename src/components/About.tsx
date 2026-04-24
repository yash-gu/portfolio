export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-display">
          <span className="text-gradient">About Me</span>
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          My journey in computer science and technology
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-300">
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

          <div className="glass rounded-2xl p-8 border border-teal-400/10">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-600">
                <span className="text-slate-400">Current CGPA</span>
                <span className="text-2xl font-bold text-teal-400">9.2/10</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-600">
                <span className="text-slate-400">LeetCode Problems</span>
                <span className="text-2xl font-bold text-teal-400">200+</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-600">
                <span className="text-slate-400">CodeChef Rating</span>
                <span className="text-2xl font-bold text-teal-400">1281</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Full-Stack Projects</span>
                <span className="text-2xl font-bold text-teal-400">4+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
