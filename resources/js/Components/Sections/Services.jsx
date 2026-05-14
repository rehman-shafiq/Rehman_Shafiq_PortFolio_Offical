import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group relative bg-slate-950 p-12 border-r border-b border-white/5 overflow-hidden cursor-default"
        >
            {/* Animated Spotlight Background */}
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at center, rgba(6, 182, 212, 0.08) 0%, transparent 70%)`
                }}
            />

            {/* Top Tracing Line Animation */}
            <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent origin-left transition-transform duration-700"
            />

            <div className="relative z-10">
                {/* Icon/Number with Floating Effect */}
                <motion.div 
                    animate={{ y: isHovered ? -10 : 0 }}
                    className="flex items-center justify-between mb-12"
                >
                    <span className="text-6xl font-black text-white/[0.03] group-hover:text-cyan-500/10 transition-colors duration-700 font-mono tracking-tighter">
                        {service.icon}
                    </span>
                    <div className={`w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5 transition-all duration-500`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:shadow-[0_0_12px_#06b6d4]" />
                    </div>
                </motion.div>
                
                {/* Title with Character Reveal */}
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-10 max-w-sm group-hover:text-slate-200 transition-colors duration-500">
                    {service.description}
                </p>

                {/* Tech Tags with staggered hover */}
                <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                        <span 
                            key={tag} 
                            className="text-[9px] px-4 py-1.5 bg-white/[0.02] border border-white/5 rounded-md text-slate-500 uppercase tracking-[0.2em] group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300"
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
    );
};

export default function Services() {
    const services = [
        {
            title: "Full-Stack Development",
            description: "Building modern monoliths using Laravel and React (Inertia.js). Focused on scalable, high-performance web applications.",
            icon: "01",
            tags: ["Laravel", "React", "Inertia"]
        },
        {
            title: "High-End UI/UX",
            description: "Creating visually stunning and highly interactive user interfaces. Specializing in Framer Motion animations.",
            icon: "02",
            tags: ["Framer Motion", "Tailwind"]
        },
        {
            title: "DevOps & Docker",
            description: "Streamlining workflows using Docker and containerization. Setting up stable environments on Linux.",
            icon: "03",
            tags: ["Docker", "WSL", "Git"]
        },
        {
            title: "API Solutions",
            description: "Designing robust RESTful APIs to connect front-end interfaces with powerful back-end logic.",
            icon: "04",
            tags: ["REST", "JSON", "Security"]
        }
    ];

    return (
        <section id="services" className="py-40 px-6 bg-slate-950 relative overflow-hidden">
            {/* Ambient Background Glows - Hero Match */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Enhanced Section Header */}
                <div className="mb-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-cyan-500" />
                        <span className="text-cyan-400 font-mono text-xs tracking-[0.5em] uppercase">Capabilities</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-7xl md:text-9xl font-black tracking-[ -0.05em] uppercase text-white leading-[0.85]"
                    >
                        Pure <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Innovation</span>
                    </motion.h2>
                </div>

                {/* Services Grid with Border Wrap */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/5 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}