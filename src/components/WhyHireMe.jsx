import React from "react";

function WhyHireMe() {
  return (
    <section
      id="hireme"
      className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="inline-block px-5 py-2 rounded-full bg-orange-500/20 text-orange-400 font-medium">
            WHY CHOOSE ME
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-5">
            Why <span className="text-orange-500">Hire Me?</span>
          </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">

          <p className="text-slate-300 text-lg leading-8 text-center">
           I am a passionate Full Stack Developer with practical experience gained through a 6-month internship at Tech Surya IT Solutions. During my internship, I worked on real-world web development projects using React.js, Node.js, MongoDB, Express.js, and Tailwind CSS, enhancing my skills in both frontend and backend development.

I have successfully designed and developed 7+ web projects, including responsive websites, portfolio applications, and dynamic web solutions, which have strengthened my problem-solving abilities and technical expertise. I enjoy creating modern, user-friendly, and scalable applications that provide excellent user experiences.

As a quick learner and dedicated developer, I am committed to writing clean, efficient, and maintainable code while continuously expanding my knowledge of emerging technologies. My goal is to contribute to innovative projects, deliver high-quality software solutions, and create meaningful digital experiences that add value to users and organizations.

          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-slate-800 p-6 rounded-2xl text-center">
              <h3 className="text-orange-500 text-3xl font-bold">1+</h3>
              <p className="text-white mt-2">Years Learning & Development</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl text-center">
              <h3 className="text-orange-500 text-3xl font-bold">10+</h3>
              <p className="text-white mt-2">Projects Completed</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl text-center">
              <h3 className="text-orange-500 text-3xl font-bold">100%</h3>
              <p className="text-white mt-2">Dedication & Commitment</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyHireMe;