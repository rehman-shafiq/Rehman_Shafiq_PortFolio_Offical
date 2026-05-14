import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "PropSel Engine",
    description: "A high-end real estate ecosystem built with Laravel & React, featuring real-time analytics and agent dashboards.",
    tech: ["Laravel", "React", "Inertia.js", "MySQL"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    size: "md:col-span-2"
  },
  {
    id: 2,
    title: "PDF Merger Pro",
    description: "Advanced document processing tool to merge multiple PDFs with zero quality loss.",
    tech: ["Laravel", "FPDI", "Tailwind"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    size: "md:col-span-1"
  },
  {
    id: 3,
    title: "Banking Portal",
    description: "Secure financial dashboard featuring real-time transaction tracking and account security.",
    tech: ["Node.js", "Context API", "Auth"],
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1000&auto=format&fit=crop",
    size: "md:col-span-1"
  },
  {
    id: 4,
    title: "EcoWeather",
    description: "Dynamic weather forecasting application with ultra-responsive UI and API integration.",
    tech: ["React", "Weather API", "Vite"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop",
    size: "md:col-span-1"
  },
  {
    id: 5,
    title: "Task Orchestrator",
    description: "Minimalist task manager focused on productivity and seamless CRUD operations.",
    tech: ["Bootstrap", "Local Storage", "React"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
    size: "md:col-span-1"
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  const xSpring = useSpring(mousePos.x * 0.05, { stiffness: 150, damping: 15 });
  const ySpring = useSpring(mousePos.y * 0.05, { stiffness: 150, damping: 15 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`${project.size || "md:col-span-1"} group relative bg-slate-900/20 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-cyan-500/40`}
    >
      {/* Spotlight Effect - Exact Hero Match */}
      <div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x + 200}px ${mousePos.y + 200}px, rgba(6, 182, 212, 0.15), rgba(168, 85, 247, 0.05), transparent 40%)`
        }}
      />

      {/* Image Section with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2 opacity-50 group-hover:opacity-70 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-10 relative z-10">
        <h3 className="text-3xl font-black text-white mb-4 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md group-hover:text-slate-200 transition-colors">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((t) => (
            <span key={t} className="text-[9px] px-3 py-1 bg-slate-950/50 border border-cyan-500/20 rounded-lg text-cyan-100/60 uppercase tracking-widest group-hover:border-cyan-500/40">
              {t}
            </span>
          ))}
        </div>

        <motion.a 
          href="#" 
          whileHover={{ x: 5 }}
          className="inline-flex items-center text-cyan-400 font-bold text-[10px] uppercase tracking-[0.3em] gap-3"
        >
          Explore Case Study <span className="text-xl">→</span>
        </motion.a>
      </div>

      {/* Background Number */}
      <span className="absolute -bottom-8 -right-4 text-[120px] font-black text-white/[0.02] group-hover:text-cyan-500/[0.07] transition-all duration-1000 italic pointer-events-none select-none">
        0{index + 1}
      </span>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-40 bg-slate-950 relative overflow-hidden" id="projects">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-cyan-500" />
              <span className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-xs">Showcase</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase">
              Proven <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Impact</span>
            </h2>
          </motion.div>
          <p className="text-slate-400 text-lg max-w-xs md:text-right font-medium leading-relaxed">
            A collection of digital solutions built with <span className="text-cyan-400">clean code</span> and <span className="text-purple-400">user-centric</span> design.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;