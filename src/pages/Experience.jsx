import React from "react";

function Experience() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Python",
    "SQL",
    "Git",
    "GitHub",
    "Vite",
    "Postman",
    "REST API",
    "Responsive Design",
    "UI/UX Design",
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience & Education
          </h2>

          <p className="text-slate-400 mt-4">
            My professional journey, education, and technical skills.
          </p>
        </div>

        {/* Experience + Education */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Experience */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">

            <h3 className="text-3xl font-bold text-orange-500 mb-6">
              Experience
            </h3>

            <h4 className="text-xl font-semibold text-white">
              Full Stack Developer Intern
            </h4>

            <p className="text-slate-400 mb-6">
              Tech Surya IT Solutions | 2025 - Present
            </p>

            <ul className="space-y-3 text-slate-300">
              <li>✅ Working on real-world web development projects.</li>
              <li>✅ Building responsive websites using React.js.</li>
              <li>✅ Developing frontend UI with Tailwind CSS.</li>
              <li>✅ Working with Node.js, Express.js and MongoDB.</li>
              <li>✅ Creating reusable components and APIs.</li>
              <li>✅ Learning MERN Stack development.</li>
            </ul>

          </div>

          {/* Education */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">

            <h3 className="text-3xl font-bold text-orange-500 mb-6">
              Education
            </h3>

            {/* MSc */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white">
                Master of Science (M.Sc Computer Science)
              </h4>

              <p className="text-slate-400 mb-4">
                Computer Science
              </p>

              <ul className="space-y-2 text-slate-300">
                <li>✅ Advanced Software Development.</li>
                <li>✅ Data Structures & Algorithms.</li>
                <li>✅ Database Management Systems.</li>
                <li>✅ Research & Project Development.</li>
              </ul>
            </div>

            {/* BCS */}
            <div>
              <h4 className="text-xl font-semibold text-white">
                Bachelor of Computer Science (BCS)
              </h4>

              <p className="text-slate-400 mb-4">
                Computer Science
              </p>

              <ul className="space-y-2 text-slate-300">
                <li>✅ Programming Fundamentals.</li>
                <li>✅ Web Development Technologies.</li>
                <li>✅ Database & Software Engineering.</li>
                <li>✅ Problem Solving Skills.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Skills */}
        <div className="mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl">

          <h3 className="text-3xl font-bold text-center text-orange-500 mb-10">
            Technical Skills
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800 text-white text-center py-3 px-4 rounded-xl hover:bg-orange-500 transition duration-300 cursor-pointer"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;