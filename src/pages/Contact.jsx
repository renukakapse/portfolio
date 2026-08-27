import React from "react";

function Contact() {
  return (
    <section
      id="contact"
<<<<<<< HEAD
      className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full font-medium">
            ● CONNECT
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-6">
            Get In <span className="text-orange-500">Touch</span>
          </h2>

          <p className="text-slate-300 mt-5 text-lg max-w-xl mx-auto">
            Have a project idea or want to collaborate?
            Let's build something amazing together.
=======
      className="py-20 px-4 bg-gradient-to-br from-gray-100 via-white to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 min-h-screen transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/20 text-orange-500 px-5 py-2 rounded-full font-medium">
            ● CONNECT
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-6">
            Get In <span className="text-orange-500">Touch</span>
          </h2>

          <p className="text-gray-600 dark:text-slate-300 mt-5 text-lg max-w-xl mx-auto">
            Have a project idea or want to collaborate? Let's build something
            amazing together.
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
          </p>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-10">
<<<<<<< HEAD

          {/* Left Side */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:shadow-2xl transition duration-300">

=======
          {/* Left Side */}
          <div className="bg-white dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-white/20 rounded-3xl p-8 hover:shadow-2xl transition duration-300">
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
            <img
              src="/myprofile.png"
              alt="Renuka Kapse"
              className="w-36 h-36 rounded-full mx-auto border-4 border-orange-500 object-cover"
            />

<<<<<<< HEAD
            <h3 className="text-center text-3xl font-bold text-white mt-5">
              Renuka Kapse
            </h3>

            <p className="text-center text-slate-300 mt-2">
=======
            <h3 className="text-center text-3xl font-bold text-gray-900 dark:text-white mt-5">
              Renuka Kapse
            </h3>

            <p className="text-center text-gray-600 dark:text-slate-300 mt-2">
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
              Full Stack Developer
            </p>

            <div className="space-y-5 mt-10">
<<<<<<< HEAD

              {/* Phone */}
              <a
                href="tel:+918888152671"
                className="block bg-slate-800 p-4 rounded-xl text-white hover:bg-slate-700 transition"
=======
              {/* Phone */}
              <a
                href="tel:+918888152671"
                className="block bg-gray-100 dark:bg-slate-800 p-4 rounded-xl text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 transition"
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
              >
                📞 +91 8888152671
              </a>

              {/* Email */}
              <a
                href="mailto:kapserenuka32@gmail.com"
<<<<<<< HEAD
                className="block bg-slate-800 p-4 rounded-xl text-white hover:bg-slate-700 transition break-all"
=======
                className="block bg-gray-100 dark:bg-slate-800 p-4 rounded-xl text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 transition break-all"
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
              >
                ✉️ kapserenuka32@gmail.com
              </a>

              {/* Location */}
              <a
                href="https://maps.google.com/?q=Chhatrapati+Sambhajinagar+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="block bg-slate-800 p-4 rounded-xl text-white hover:bg-slate-700 transition"
              >
                📍 Chhatrapati Sambhajinagar, Maharashtra
              </a>

=======
                className="block bg-gray-100 dark:bg-slate-800 p-4 rounded-xl text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 transition"
              >
                📍 Chhatrapati Sambhajinagar, Maharashtra
              </a>
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
            </div>
          </div>

          {/* Right Side Form */}
<<<<<<< HEAD
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:shadow-2xl transition duration-300">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
=======
          <div className="bg-white dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-white/20 rounded-3xl p-8 hover:shadow-2xl transition duration-300">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 border border-gray-300 dark:border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
              />

              <input
                type="email"
                placeholder="Your Email"
<<<<<<< HEAD
                className="w-full p-4 rounded-xl bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
=======
                className="w-full p-4 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 border border-gray-300 dark:border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
              />

              <input
                type="text"
                placeholder="Subject"
<<<<<<< HEAD
                className="w-full p-4 rounded-xl bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
=======
                className="w-full p-4 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 border border-gray-300 dark:border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
              />

              <textarea
                rows="6"
                placeholder="Your Message"
<<<<<<< HEAD
                className="w-full p-4 rounded-xl bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
=======
                className="w-full p-4 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 border border-gray-300 dark:border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg transition duration-300 hover:scale-105"
              >
                Send Message
              </button>
<<<<<<< HEAD

            </form>

          </div>

=======
            </form>
          </div>
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
        </div>
      </div>
    </section>
  );
}

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
