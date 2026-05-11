import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "PropSel - Real Estate Solution",
    description: "A high-end real estate platform built with a Laravel backend and React frontend, featuring property management and agent dashboards.",
    tech: ["Laravel", "React", "Inertia.js", "MySQL"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    size: "md:col-span-2" // Isay bara card rakha hai balance ke liye
  },
  {
    id: 2,
    title: "PDF Merger Utility",
    description: "A professional tool to merge multiple PDF documents into a single file with a clean and responsive UI.",
    tech: ["Laravel", "React", "FPDI", "Tailwind"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    size: "md:col-span-1"
  },
  {
    id: 3,
    title: "Banking Application",
    description: "A secure banking dashboard featuring transaction history, account management, and real-time data handling.",
    tech: ["React", "Node.js", "API Integration", "Context API"],
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1000&auto=format&fit=crop",
    size: "md:col-span-1"
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "Real-time weather application providing accurate forecasts using external weather APIs with a dynamic UI.",
    tech: ["JavaScript", "React", "Weather API", "CSS3"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop",
    size: "md:col-span-1"
  },
  {
    id: 5,
    title: "Todo Task Manager",
    description: "A functional task management app to organize daily schedules with CRUD operations and local storage.",
    tech: ["React", "Bootstrap", "Local Storage"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
    size: "md:col-span-1"
  }
];

const Projects = () => {
  return (
    <section className="py-32 bg-[#080808] relative" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Matching Work Section Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase block mb-4">
            Featured Projects
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">
            Built <br /> With Precision
          </h2>
        </motion.div>

        {/* Bento Grid Layout - Same Colors & Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${project.size || "md:col-span-1"} group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500`}
            >
              {/* Image Section - Darker Overlay */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
              </div>

              {/* Content - Cyan Accents */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags - Neutral with Cyan Hover */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-[10px] font-bold uppercase rounded-full tracking-wider group-hover:border-cyan-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href="#" 
                  className="inline-flex items-center text-cyan-500 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors gap-2"
                >
                  View Case Study <span>&rarr;</span>
                </a>
              </div>

              {/* Decorative Numbering */}
              <span className="absolute bottom-[-20px] right-[-10px] text-[100px] font-black text-white/[0.02] pointer-events-none group-hover:text-cyan-500/[0.05] transition-all duration-700">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;