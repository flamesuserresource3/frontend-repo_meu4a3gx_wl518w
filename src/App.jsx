import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import { Mail, Github, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <Skills />
      <Services />
      <Projects />

      {/* Contact / Footer */}
      <section id="contact" className="relative w-full border-t border-slate-900 bg-slate-950 py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-lime-500/10 blur-3xl" />
          <div className="absolute -top-10 right-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Let’s build reliable, secure systems.</h3>
              <p className="mt-2 max-w-xl text-slate-300">
                Open to IT support roles, network engineering projects, and AI‑driven automation.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:youremail@example.com"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-lime-500 to-sky-500 px-4 py-2 font-medium text-slate-950 shadow-lg shadow-lime-500/20 transition hover:from-lime-400 hover:to-sky-400"
              >
                <Mail size={18} /> Email Me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 hover:border-slate-700 hover:bg-slate-900"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ajipamungkas999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 hover:border-slate-700 hover:bg-slate-900"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-slate-900 pt-6 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Aji Pamungkas. All rights reserved.</p>
            <nav className="flex gap-5">
              <a href="#home" className="hover:text-slate-200">Home</a>
              <a href="#skills" className="hover:text-slate-200">Skills</a>
              <a href="#services" className="hover:text-slate-200">Services</a>
              <a href="#projects" className="hover:text-slate-200">Projects</a>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
