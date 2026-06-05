import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 min-h-screen transition-colors duration-300">
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          About Me
        </h2>

        <p className="text-gray-600 dark:text-slate-400 mb-8">
          Get to know more about my journey, skills, and passion for web
          development.
        </p>

        <div className="space-y-6 text-gray-700 dark:text-slate-300 leading-8 text-lg">
          <p>
            Hello! I'm{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Renuka Kapse
            </span>
            , a passionate Full Stack Developer with expertise in HTML, CSS,
            JavaScript, React.js, Node.js, MongoDB, Express.js and Tailwind CSS.
          </p>

          <p>
            I enjoy transforming ideas into real-world web applications,
            creating modern user interfaces, and building scalable solutions
            that deliver great user experiences.
          </p>

          <p>
            My goal is to become a professional software developer and
            contribute to innovative projects that make a meaningful impact
            through technology.
          </p>
        </div>

        <img
          src="/myprofile.png"
          alt="Renuka Kapse"
          className="w-64 h-64 rounded-2xl mx-auto mt-10 shadow-2xl object-cover border-4 border-gray-300 dark:border-slate-700 transition-all duration-300"
        />
      </section>
    </div>
  );
}

export default About;
