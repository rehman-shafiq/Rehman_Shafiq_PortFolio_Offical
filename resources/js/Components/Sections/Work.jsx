import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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

    const xSpring = useSpring(mousePos.x * 0.1, { stiffness: 150, damping: 15 });
    const ySpring = useSpring(mousePos.y * 0.1, { stiffness: 150, damping: 15 });

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: xSpring, y: ySpring, transformStyle: "preserve-3d" }}
            className={`${project.size} group relative min-h-[400px] rounded-[2.5rem] bg-slate-900/20 border border-cyan-500/10 overflow-hidden backdrop-blur-md transition-colors duration-500 hover:border-cyan-500/40`}
        >
            {/* Hero-style Spotlight: Cyan & Indigo Glow */}
            <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x + 250}px ${mousePos.y + 200}px, rgba(6, 182, 212, 0.15), rgba(99, 102, 241, 0.05), transparent 40%)`
                }}
            />

            <div className="p-10 h-full flex flex-col justify-between relative z-10">
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-[1px] w-8 bg-cyan-500" />
                        <span className="text-[10px] font-bold text-cyan-400 tracking-[0.3em] uppercase">
                            {project.category}
                        </span>
                    </div>

                    {/* Gradient Text like Hero Heading */}
                    <h3 className="text-4xl font-black text-white mb-6 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500">
                        {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-base leading-relaxed opacity-80">
                        {project.description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-8">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="text-[9px] px-3 py-1 bg-slate-950/50 border border-cyan-500/20 rounded-lg text-cyan-100/60 uppercase tracking-widest group-hover:border-cyan-500/40 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>
                    
                    {/* Hero Style Button Circle */}
                    <motion.div 
                        animate={{ x: mousePos.x * 0.1, y: mousePos.y * 0.1 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </motion.div>
                </div>
            </div>

            {/* Faded Background Number with Hero Glow */}
            <span className="absolute -bottom-8 -right-4 text-[150px] font-black text-cyan-500/[0.02] group-hover:text-cyan-500/[0.08] transition-all duration-1000 italic pointer-events-none">
                0{index + 1}
            </span>
        </motion.div>
    );
};

export default function Work() {
    const containerRef = useRef(null);

    const projects = [
        { title: "PropSel Platform", category: "Full-Stack Dev", description: "Real estate ecosystem with advanced property management and agent dashboards.", tech: ["React", "Laravel", "Tailwind"], size: "md:col-span-2" },
        { title: "NASTP Solutions", category: "Web Architecture", description: "Optimized user-focused applications developed during NASTP internship.", tech: ["React.js", "JavaScript"], size: "md:col-span-1" },
        { title: "PDF Merger App", category: "Utility Utility", description: "Seamless document merging utility built with Laravel and FPDI integration.", tech: ["PHP", "React", "Docker"], size: "md:col-span-1" },
        { title: "Modern Portfolio", category: "UI/UX Design", description: "A high-performance portfolio featuring smooth Framer Motion animations.", tech: ["Framer Motion", "Vite"], size: "md:col-span-2" }
    ];

    return (
        <section ref={containerRef} id="work" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
            {/* Hero-matched Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-12 bg-cyan-500" />
                            <span className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-xs">My Expertise</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase">
                            Featured <br /> 
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-lg max-w-xs md:text-right font-medium leading-relaxed">
                        Transforming complex code into <span className="text-cyan-400">elegant user experiences</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}