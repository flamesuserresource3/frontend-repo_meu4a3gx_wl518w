import React from 'react';
import { Headphones, Server, Cpu, Shield } from 'lucide-react';

const services = [
  {
    title: 'IT Store Support',
    icon: Headphones,
    bullet: [
      'Device setup, upgrades, and repair',
      'Windows/macOS rollout & imaging',
      'Asset, license, and inventory tracking',
      'Customer-first troubleshooting and training'
    ],
    accent: 'from-lime-500 to-lime-400'
  },
  {
    title: 'Network Engineering',
    icon: Server,
    bullet: [
      'Switching, VLANs, DHCP/DNS, and NAT',
      'Firewall rules, site-to-site & remote VPN',
      'Wireless planning, coverage, and QoS',
      'Uptime monitoring and alerting'
    ],
    accent: 'from-sky-500 to-sky-400'
  },
  {
    title: 'AI & Automation',
    icon: Cpu,
    bullet: [
      'Python scripting for repetitive tasks',
      'ChatOps assistants for quick answers',
      'RPA to reduce manual steps',
      'Data extraction and reporting'
    ],
    accent: 'from-lime-500 to-sky-500'
  },
  {
    title: 'Security Mindset',
    icon: Shield,
    bullet: [
      'Baseline hardening & patch management',
      'Identity, MFA, and least privilege',
      'Backups, DR planning, and audits',
      'Basic incident response workflows'
    ],
    accent: 'from-sky-500 to-lime-500'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What I Do</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Practical services focused on reliability, speed, and security.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map(({ title, icon: Icon, bullet, accent }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700">
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl`} />
              <div className="relative flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 ring-1 ring-slate-800">
                  <Icon size={20} className="text-lime-300" />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <ul className="relative mt-4 space-y-2 text-sm text-slate-300">
                {bullet.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-lime-400 to-sky-400" />
                    <span>{b}</span>
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

export default Services;
