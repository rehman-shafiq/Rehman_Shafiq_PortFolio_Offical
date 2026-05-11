import React from 'react';
import { motion } from 'framer-motion';

export default function Work() {
    // Aapki CV se liye gaye projects 
    const projects = [
        {
            title: "Propsel - Real Estate Platform",
            category: "Full Stack Development",
            description: "Built responsive UI components and improved UX with basic backend integration.",
            tech: ["React", "Laravel", "Bootstrap", "REST API"],
            link: "#",
            size: "md:col-span-2" // Bento grid mein bari card
        },
        {
            title: "NASTP Intern Project",
            category: "Frontend Development",
            description: "Developed and optimized user-focused web applications during a 3-month internship.",
            tech: ["React.js", "JavaScript", "Responsive Design"],
            link: "#",
            size: "md:col-span-1"
        },
        {
            title: "Modern UI Components",
            category: "UI/UX Architecture",
            description: "High-performance interfaces focused on scalability and user-centric solutions.",
            tech: ["Framer Motion", "Tailwind", "CSS3"],
            link: "#",
            size: "md:col-span-1"
        },
        {
            title: "Scalable Solutions",
            category: "System Design",
            description: "Contributing to scalable solutions that improve overall efficiency.",
            tech: ["Docker", "Git", "WSL Linux"],
            link: "#",
            size: "md:col-span-2"
        }
    ];

    return (
        <section id="work" className="py-32 px-6 bg-[#080808] relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase block mb-4">
                            Selected Projects
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                            My <br /> Work
                        </h2>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-500 max-w-xs text-right text-sm uppercase tracking-widest leading-loose"
                    >
                        Focusing on scalable, user-centric solutions and high-performance teams[cite: 7].
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`${project.size} group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500`}
                        >
                            <div className="p-10 h-full flex flex-col justify-between">
                                <div>
                                    <span className="text-[10px] text-cyan-500 font-bold uppercase tracking-[0.3em] mb-4 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-500 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[9px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 uppercase tracking-widest">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Background Decorative Number */}
                                <span className="absolute bottom-[-20px] right-[-10px] text-[120px] font-black text-white/[0.02] pointer-events-none group-hover:text-cyan-500/[0.05] transition-all duration-700">
                                    0{index + 1}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}