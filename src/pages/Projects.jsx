import React from "react";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      image: "/ecommerce.png",
      description:
        "Full Stack E-Commerce website with authentication, product management, shopping cart and responsive UI.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce.vercel.app",
    },

    {
      title: "Tourism Website",
      image: "/tourism.png",
      description:
        "Responsive tourism website showcasing destinations, festivals and travel information.",
      tech: ["React", "Tailwind CSS", "JSON Server"],
      github: "https://github.com/yourusername/tourism",
      live: "https://your-tourism.vercel.app",
    },

    {
      title: "Portfolio Website",
      image: "/portfolio.png",
      description:
        "Modern portfolio website with dark theme, routing and responsive design.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.vercel.app",
    },

    {
      title: "Todo Manager",
      image: "/todo.png",
      description:
        "Task management application with add, delete and complete task functionality.",
      tech: ["React", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/todo",
      live: "https://your-todo.vercel.app",
    },

    {
      title: "Pomodoro App",
      image: "/pomodoro.png",
      description:
        "Productivity timer application based on Pomodoro technique with work and break sessions.",
      tech: ["React", "Node.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/pomodoro",
      live: "https://your-pomodoro.vercel.app",
    },

    {
      title: "Weather App",
      image: "/weather.png",
      description:
        "Real-time weather application using API integration and responsive UI.",
      tech: ["React", "API", "Tailwind CSS"],
      github: "https://github.com/yourusername/weather",
      live: "https://your-weather.vercel.app",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full">
            MY WORK
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            Featured <span className="text-orange-500">Projects</span>
          </h2>

          <p className="text-slate-300 mt-4">
            Explore some of my recent development projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                  FULL STACK PROJECT
                </span>

                <h3 className="text-3xl font-bold mt-4 text-slate-800">
                  {project.title}
                </h3>

                <p className="text-slate-600 mt-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-slate-300 py-3 rounded-xl font-semibold hover:bg-slate-100"
                  >
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600"
                  >
                    View Project
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;