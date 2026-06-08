import React from 'react';

const Resume = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1IJskZ7664My1-DmcoqZSv3d99v8Lz9pi/view?usp=drivesdk';

  return (
    <section id="resume" className="bg-[#070707] py-24 px-6 md:px-12 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-red-400 mb-4">Resume</p>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
          View my professional resume
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Open the latest resume to see experience, skills, certifications, and academic details. This link opens in a new tab for easy viewing and sharing.
        </p>
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-semibold shadow-lg hover:bg-gray-900 transition-all duration-300"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
          >
            Contact for work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
