import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Cpu, Server, Headphones, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* subtle gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-lime-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Left: Intro content */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-3 py-1 text-xs font-medium text-lime-300">
            <Shield size={14} /> Cybersecurity-forward Portfolio
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-lime-300 to-sky-300 bg-clip-text text-transparent">an IT Support & Network Engineer</span>
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            I keep systems running, networks fast, and data secure. Passionate about AI and automation, future-focused on cybersecurity, and fluent in modern programming.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <div className="flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2">
              <Headphones size={16} className="text-lime-300" /> IT Store Support
            </div>
            <div className="flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2">
              <Server size={16} className="text-sky-300" /> Network Engineering
            </div>
            <div className="flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2">
              <Cpu size={16} className="text-lime-300" /> AI & Automation
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-lime-500 to-sky-500 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-lime-500/20 transition hover:from-lime-400 hover:to-sky-400"
            >
              View Projects <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-5 py-3 font-medium text-white hover:border-slate-700 hover:bg-slate-900"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: 3D Spline scene */}
        <div className="relative z-0 h-[420px] w-full sm:h-[520px] md:h-[580px] lg:h-[700px]">
          <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
