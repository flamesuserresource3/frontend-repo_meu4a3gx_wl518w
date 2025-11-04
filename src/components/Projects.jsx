import React from 'react';
import { Shield, Cpu, Server } from 'lucide-react';

const projects = [
  {
    title: 'Store IT Support Toolkit',
    icon: HeadlessIcon, // custom local icon below
    desc: 'Scripts and SOPs to speed up device setup, imaging, and common troubleshooting in retail environments.',
    tags: ['Python', 'PowerShell', 'SOPs']
  },
  {
    title: 'Branch Network Revamp',
    icon: Server,
    desc: 'Redesigned small office network with segmented VLANs, VPN access, and centralized logging.',
    tags: ['VLAN', 'VPN', 'Monitoring']
  },
  {
    title: 'AI Helpdesk Assistant',
    icon: Cpu,
    desc: 'Chat-based assistant that answers FAQs, pulls knowledge base entries, and automates ticket categorization.',
    tags: ['LLM', 'Automation', 'APIs']
  },
  {
    title: 'Security Baseline Hardening',
    icon: Shield,
    desc: 'Baseline policies for endpoints and servers with patch cadence, MFA, backups, and quick audit templates.',
    tags: ['Hardening', 'MFA', 'Backups']
  }
];

function HeadlessIcon({ size = 20, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
    >
      <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const Tag = ({ children }) => (
  <span className="rounded-full border border-slate-800 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-300">{children}</span>
);

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Highlighted Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">A few examples that reflect my approach: practical, secure, and automation-friendly.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map(({ title, icon: Icon, desc, tags }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-lime-500/10 to-sky-500/10 blur-3xl" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-lime-500/20 to-sky-500/20 text-lime-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="relative mt-3 text-slate-300">{desc}</p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
