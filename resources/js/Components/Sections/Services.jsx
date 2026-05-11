import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
    const services = [
        {
            title: "Full-Stack Development",
            description: "Building modern monoliths using Laravel and React (Inertia.js). Focused on scalable, high-performance web applications with clean code architecture.",
            icon: "01",
            tags: ["Laravel", "React", "MySQL", "Inertia"]
        },
        {
            title: "High-End UI/UX Design",
            description: "Creating visually stunning and highly interactive user interfaces. Specializing in Framer Motion animations and responsive layouts that convert.",
            icon: "02",
            tags: ["Framer Motion", "Tailwind CSS", "Bootstrap 5"]
        },
        {
            title: "DevOps & Deployment",
            description: "Streamlining development workflows using Docker and containerization. Setting up stable environments on Linux (WSL) for seamless delivery.",
            icon: "03",
            tags: ["Docker", "Git", "WSL", "NPM"]
        },
        {
            title: "API Development",
            description: "Designing and integrating robust RESTful APIs to connect front-end interfaces with powerful back-end logic and external services.",
            icon: "04",
            tags: ["RESTful API", "JSON", "CRUD", "Security"]
        }
    ];

    return (
        <section id="services" className="py-32 px-6 bg-[#080808] relative overflow-hidden">
            {/* Background Subtle Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-cyan-500 font-mono text-sm tracking-[0.4em] uppercase block mb-4"
                    >
                        How I Can Help
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-white"
                    >
                        My <br /> Services
                    </motion.h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#0b0b0b] p-12 group hover:bg-[#111] transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Hover Glow */}
                            <div className="absolute -inset-1 bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

                            <div className="relative z-10">
                                <span className="text-5xl font-black text-white/5 group-hover:text-cyan-500/20 transition-colors duration-500 font-mono">
                                    {service.icon}
                                </span>
                                
                                <h3 className="text-3xl font-bold text-white mt-6 mb-4 group-hover:text-cyan-500 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                
                                <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-500 uppercase tracking-widest group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-all">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}