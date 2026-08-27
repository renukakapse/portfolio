
import React from "react";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      image: "/ecommerce.png",
      description:
        "Full Stack Fashion E-Commerce website with authentication, product management, shopping cart, checkout, order management, admin panel and responsive UI.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Razorpay",
      ],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://fashion-6.onrender.com",
    },

    {
      title: "Blog Website",
      image: "/blog.png",
      description:
        "Full Stack Blog website with user authentication, blog creation, image upload and responsive user interface.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
      ],
      github: "https://github.com/yourusername/blog",
      live: "https://blog-2zzv.onrender.com",
    },

    {
      title: "Beauty Products Website",
      image: "/beauty.png",
      description:
        "Responsive beauty products e-commerce website with product browsing, categories, shopping cart and modern user interface.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/yourusername/beauty-products",
      live: "https://beauty-products-sp29.onrender.com",
    },

    {
      title: "Portfolio Website",
      image: "/portfolio.png",
      description:
        "Modern personal portfolio website showcasing my skills, projects, experience and contact information.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://portfolio-mvmg.onrender.com",
    },

    {
      title: "Todo Manager",
      image: "/todo.png",
      description:
        "Task management application with add, delete, search and complete task functionality.",
      tech: ["React", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/todo",
      live: "https://todo-resg.onrender.com",
    },

    {
      title: "Pomodoro App",
      image: "/pomodoro.png",
      description:
        "Productivity timer application based on the Pomodoro technique with work and break sessions.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/yourusername/pomodoro",
      live: "https://pomodoro-djsk.onrender.com",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
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

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">

                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                  PROJECT
                </span>

                <h3 className="text-2xl font-bold mt-4 text-slate-800">
                  {project.title}
                </h3>

                <p className="text-slate-600 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 px-3 py-1 rounded-lg text-sm text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-slate-300 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
                  >
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
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

