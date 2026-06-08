import React from 'react';

const ProjectCard = ({ title, period, description, highlights }) => {
  return (
    <div className="bg-[#111111] border border-white/10 rounded-[2rem] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:shadow-[0_25px_80px_rgba(255,42,42,0.16)] transition-all duration-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-extrabold text-white tracking-tight">{title}</h3>
        <span className="text-sm uppercase text-red-300 tracking-[0.24em]">{period}</span>
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <ul className="grid gap-3 text-sm text-gray-200">
        {highlights.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-1 text-red-300">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#090909] py-24 px-6 md:px-12 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-red-400 mb-4">Selected Projects</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Recent full-stack work with real product impact</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <ProjectCard
            title="FitForge"
            period="Dec 2025 – Jan 2026"
            description="A scalable real-time communication platform built with modern full-stack technologies to support secure messaging and low-latency interactions."
            highlights={[
              'Developed React.js frontend with Socket.IO real-time messaging.',
              'Implemented Node.js + Express.js backend with MongoDB data persistence.',
              'Secured user sessions via JWT authentication and optimized response times.'
            ]}
          />

          <ProjectCard
            title="Wings2Future.com"
            period="Aug 2025 – Oct 2025"
            description="A student career guidance platform focused on personalized journeys, dynamic content management, and scalable backend workflows."
            highlights={[
              'Built full-stack platform using React.js, Next.js, Node.js, and Express.js.',
              'Created JWT-based authentication and responsive UI for multi-device access.',
              'Enhanced performance and accessibility for seamless user experience.'
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
