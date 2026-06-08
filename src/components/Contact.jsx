import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const [sending, setSending] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    const firstName = (fd.get('firstName') || '').toString().trim();
    const lastName = (fd.get('lastName') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const message = (fd.get('message') || '').toString().trim();
    const permission = form.querySelector('#permission')?.checked;

    if (!permission) {
      alert('Please allow permission to contact you.');
      return;
    }
    if (!email || !message) {
      alert('Please provide your email and a message.');
      return;
    }

    setSending(true);
    const to = 'deepanshuyadav9780@gmail.com';
    const subject = `Portfolio contact from ${firstName} ${lastName}`.trim();
    const bodyRaw = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Open user's mail client with prefilled email. This avoids needing a backend.
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyRaw)}`;

    // Reset sending state after a short delay; mail client will handle sending.
    setTimeout(() => {
      setSending(false);
      form.reset();
    }, 800);
  };
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-4 uppercase opacity-90">
            Let’s connect
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-2xl mb-10">
            Ready to turn your idea into a product?
          </h2>
          <p className="text-white/80 max-w-2xl mb-12">
            Available for freelance, contract, and full-time roles. Reach out for project consultations, collaboration, or technical review.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    placeholder="First Name" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Email" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="Type your message here" 
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              {/* Left text */}
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission"
                  name="permission"
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> apply.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    For information on how to unsubscribe, please review our <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
                  </p>
                  
                  <button 
                    type="submit" 
                    className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto"
                  >
                    Send
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="mt-8 text-sm text-white/90">
            <p className="font-bold">Contact</p>
            <p>Phone: +91-8360282926</p>
            <p>Email: <a href="mailto:deepanshuyadav9780@gmail.com" className="underline">deepanshuyadav9780@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/deepanshu-yadav" className="underline">deepanshu-yadav</a></p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
