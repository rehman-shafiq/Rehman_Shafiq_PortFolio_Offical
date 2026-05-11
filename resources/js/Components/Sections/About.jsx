import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    const skills = [
        "React.js", "Laravel", "Inertia.js", "Tailwind CSS", 
        "Docker", "REST APIs", "JavaScript (ES6+)", "Git/GitHub"
    ];

    return (
        <section id="about" className="py-32 px-6 bg-[#080808] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    
                    {/* Left Side: Personal Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-cyan-500 font-mono text-sm tracking-[0.4em] uppercase block mb-6">
                            The Profile
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white mb-10">
                            Engineering <br /> with Purpose
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            I am a <span className="text-white font-medium">Full-Stack Developer</span> driven by the challenge of solving complex problems. With practical experience from <span className="text-cyan-500">NASTP</span>, I specialize in building responsive interfaces and enhancing usability through modern web workflows.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12">
                            Currently pursuing my <span className="text-white font-medium">Bachelor of Computer Science</span> at Virtual University, I focus on creating scalable, user-centric solutions that bridge the gap between high-end design and robust backend logic.
                        </p>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, i) => (
                                <span key={i} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-cyan-500/80 uppercase tracking-widest">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Education & Experience Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        {/* Education Item */}
                        <div className="relative pl-8 border-l border-white/10 group">
                            <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-cyan-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">2025 — Present</span>
                            <h3 className="text-2xl font-bold text-white mt-2">BS Computer Science</h3>
                            <p className="text-cyan-500 text-sm font-medium mb-4">Virtual University</p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Building a strong foundation in programming, software development, and analytical problem-solving.
                            </p>
                        </div>

                        {/* Experience Item */}
                        <div className="relative pl-8 border-l border-white/10 group">
                            <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-white/20 rounded-full group-hover:bg-cyan-500 group-hover:scale-150 transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">2021 — 2023</span>
                            <h3 className="text-2xl font-bold text-white mt-2">ICS (Physics)</h3>
                            <p className="text-cyan-500 text-sm font-medium mb-4">The Quest College</p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Developed analytical thinking and fundamentals in mathematics, computing, and Physics.
                            </p>
                        </div>

                        {/* Interactive Stats */}
                        <div className="grid grid-cols-2 gap-6 pt-10">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-cyan-500/30 transition-colors">
                                <h4 className="text-4xl font-black text-white group-hover:text-cyan-500 transition-colors">03+</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">Months Internship</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-cyan-500/30 transition-colors">
                                <h4 className="text-4xl font-black text-white group-hover:text-cyan-500 transition-colors">05+</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">Projects Delivered</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}