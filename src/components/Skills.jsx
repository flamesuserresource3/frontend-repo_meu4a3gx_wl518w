import React from 'react';
import { Shield, Cpu, Server, Code2, Wrench } from 'lucide-react';

const skills = [
  {
    title: 'IT Store Support',
    icon: Wrench,
    items: ['Hardware diagnostics', 'OS imaging & rollout', 'Endpoint management', 'Ticketing & SLA']
  },
  {
    title: 'Networking',
    icon: Server,
    items: ['Routing & switching', 'Wi‑Fi planning & QoS', 'Firewalls & VPN', 'Monitoring & logging']
  },
  {
    title: 'AI & Automation',
    icon: Cpu,
    items: ['Scripting with Python', 'LLM workflows', 'RPA & ChatOps', 'Data pipelines']
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    items: ['Hardening & baselines', 'Identity & access', 'Vuln scanning', 'Incident response']
  },
  {
    title: 'Programming',
    icon: Code2,
    items: ['Python • JavaScript', 'APIs & REST', 'Git & CI/CD', 'Containers basics']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Core Skills
        </h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          A blend of support operations, network foundations, AI automation, and security best practices.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, icon: Icon, items }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-slate-700">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-lime-500/10 to-sky-500/10 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-lime-500/20 to-sky-500/20">
                  <Icon className="text-lime-300" size={20} />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-lime-400 to-sky-400" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
