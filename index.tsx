import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Immich Gallery",
      description: "Self-hosted high-performance photo and video management solution. Built with Docker and optimized for Linux performance.",
      link: "https://gallery.hrustia.web.id",
      tech: ["Docker", "Linux", "PostgreSQL", "Redis"],
      icon: "🖼️",
      color: "border-orange-500/50"
    },
    {
      title: "Nextcloud Instance",
      description: "Enterprise-grade productivity platform. File hosting, collaborative editing, and secure communication via personal cloud.",
      link: "https://nc.hsdlsy.my.id",
      tech: ["PHP", "Nextcloud", "Nginx", "Docker"],
      icon: "☁️",
      color: "border-blue-500/50"
    },
    {
      title: "CasaOS Dashboard",
      description: "A simple, easy-to-use, elegant open-source personal cloud system based on the Docker ecosystem.",
      link: "#",
      tech: ["CasaOS", "Docker", "Self-Hosting", "NAS"],
      icon: "🏠",
      color: "border-green-500/50"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-green-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 font-mono text-sm font-bold tracking-tighter text-green-400">root@portfolio:~#</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-mono uppercase tracking-widest text-slate-400">
            <a href="#home" className="hover:text-green-400 transition-colors">Home</a>
            <a href="#stack" className="hover:text-green-400 transition-colors">Stack</a>
            <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="reveal">
          <p className="font-mono text-green-400 mb-4 tracking-widest uppercase">Hi, my name is</p>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 text-slate-100 leading-tight">
            Linux Enthusiast <br />
            <span className="text-slate-500">& Self-Hosting Guru.</span>
          </h1>
          <p className="text-slate-400 max-w-xl text-lg mb-10 leading-relaxed">
            I specialize in architecting home labs using <span className="text-blue-400 font-mono">Docker</span>, 
            <span className="text-green-400 font-mono"> CasaOS</span>, and <span className="text-slate-200 font-mono">Linux</span>. 
            I'm passionate about digital sovereignty and building privacy-focused infrastructure.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-green-500/10 border border-green-500/50 text-green-400 font-mono rounded-lg hover:bg-green-500 hover:text-slate-950 transition-all">
              ./view_projects.sh
            </a>
            <a href="#contact" className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-slate-300 font-mono rounded-lg hover:border-slate-500 transition-all">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100">Tech Stack</h2>
          <div className="h-px bg-slate-700 flex-grow"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {[
            { name: "Debian/Ubuntu", icon: "🐧" },
            { name: "Docker", icon: "🐳" },
            { name: "CasaOS", icon: "🏠" },
            { name: "Nextcloud", icon: "☁️" },
            { name: "Immich", icon: "🖼️" },
            { name: "Nginx Proxy", icon: "🌐" },
            { name: "Bash", icon: "🐚" },
            { name: "Portainer", icon: "📦" }
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3">
              <span className="text-4xl">{item.icon}</span>
              <span className="font-mono text-sm text-slate-300">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100">Live Services</h2>
          <div className="h-px bg-slate-700 flex-grow"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.link} 
              target={project.link !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`reveal glass-card p-8 rounded-3xl group border-l-4 ${project.color}`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl">{project.icon}</span>
                <span className="text-slate-500 font-mono text-xs group-hover:text-green-400 transition-colors">
                  {project.link !== "#" ? "VIEW LIVE →" : "OFFLINE LAB"}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-8 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-1 bg-slate-800 text-slate-400 rounded-md border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Lab Details / CasaOS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="reveal glass-card p-10 rounded-3xl border border-green-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="text-9xl">🐳</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
            <span className="text-green-400">01.</span> Home Lab Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                My setup revolves around a dedicated Linux server running <span className="text-green-400">CasaOS</span> for orchestration. 
                Everything is containerized via <span className="text-blue-400">Docker</span>, ensuring portability and clean management.
              </p>
              <ul className="space-y-3 font-mono text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▹</span> Automated Backups
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▹</span> Reverse Proxy via Nginx
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▹</span> Private Cloud with Nextcloud
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-400">
              <div className="mb-2 text-slate-500"># docker-compose.yml example</div>
              <div className="text-green-400">services:</div>
              <div className="pl-4">
                <div className="text-blue-400">immich:</div>
                <div className="pl-4">container_name: immich_app</div>
                <div className="pl-4">image: ghcr.io/immich-app/immich-server:release</div>
                <div className="pl-4">restart: always</div>
                <div className="pl-4">ports: [ '8080:3001' ]</div>
              </div>
              <div className="mt-4 animate-pulse-slow">_</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 max-w-2xl mx-auto text-center">
        <div className="reveal">
          <h2 className="text-4xl font-bold text-slate-100 mb-6">Get In Touch</h2>
          <p className="text-slate-400 mb-12">
            I'm currently looking for new opportunities in DevOps, System Administration, or Backend Development. 
            My inbox is always open for Linux-related discussions!
          </p>
          <a 
            href="mailto:your-email@example.com" 
            className="inline-block px-10 py-5 bg-transparent border-2 border-green-500 text-green-400 font-mono rounded-lg hover:bg-green-500/10 transition-all glow-text"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-center">
        <p className="font-mono text-xs text-slate-500">
          Built with ❤️ on Linux | Deployed via Docker
        </p>
        <p className="font-mono text-[10px] text-slate-600 mt-2 uppercase tracking-tighter">
          &copy; 2024 - All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<Portfolio />);