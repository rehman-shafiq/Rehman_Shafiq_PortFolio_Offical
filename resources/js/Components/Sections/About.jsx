import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function About() {
    const skills = [
        "React.js", "Laravel", "Inertia.js", "Tailwind CSS", 
        "Docker", "REST APIs", "TypeScript", "Git/GitHub"
    ];

    return (
        <section id="about" className="py-40 px-6 bg-slate-950 relative overflow-hidden">
            {/* Background Ambient Glows (Matching Projects/Hero) */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header - Matching Projects Section Style */}
                <header className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-12 bg-cyan-500" />
                            <span className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-xs">The Profile</span>
                        </div>
                        <h2 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase">
                            Engineering <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                With Purpose
                            </span>
                        </h2>
                    </motion.div>
                    <p className="text-slate-400 text-lg max-w-xs md:text-right font-medium leading-relaxed">
                        Bridging the gap between <span className="text-cyan-400">complex logic</span> and <span className="text-purple-400">seamless UI</span>.
                    </p>
                </header>

                {/* Bento Grid with Magnetic & Spotlight Effects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Big Bio Card */}
                    <AboutCard className="md:col-span-2">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h3 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-cyan-400 transition-colors">
                                    Full-Stack Developer
                                </h3>
                                <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mb-8">
                                    I specialize in building <span className="text-white font-bold underline decoration-cyan-500/30">modern monoliths</span> using Laravel and React. With experience at <span className="text-cyan-400">NASTP Cyber Koza</span>, I focus on creating high-performance solutions that solve real-world problems.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span key={skill} className="text-[10px] px-4 py-1.5 bg-slate-950/50 border border-cyan-500/20 rounded-xl text-cyan-100/60 uppercase tracking-widest group-hover:border-cyan-500/40">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AboutCard>

                    {/* Education Timeline Card */}
                    <AboutCard>
                        <h3 className="text-xs font-bold text-cyan-500 uppercase tracking-[0.3em] mb-10">Education</h3>
                        <div className="space-y-12">
                            <div className="relative pl-6 border-l border-white/5">
                                <div className="absolute left-[-4.5px] top-0 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter italic">2025 - Present</span>
                                <h4 className="text-white font-bold text-lg mt-1">BSCS</h4>
                                <p className="text-slate-500 text-xs">Virtual University</p>
                            </div>
                            <div className="relative pl-6 border-l border-white/5">
                                <div className="absolute left-[-4.5px] top-0 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-cyan-500/50 transition-colors" />
                                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter italic">2021 - 2023</span>
                                <h4 className="text-white font-bold text-lg mt-1">ICS (Physics)</h4>
                                <p className="text-slate-500 text-xs text-balance">The Quest College</p>
                            </div>
                        </div>
                    </AboutCard>

                    {/* Stat Card 1 */}
                    <AboutCard className="text-center flex flex-col items-center justify-center py-12">
                        <div className="text-6xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500">
                            03+
                        </div>
                        <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] mt-4 font-bold">Months Internship</p>
                    </AboutCard>

                    {/* Stat Card 2 */}
                    <AboutCard className="text-center flex flex-col items-center justify-center py-12">
                        <div className="text-6xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500">
                            05+
                        </div>
                        <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] mt-4 font-bold">Live Projects</p>
                    </AboutCard>

                    {/* Magnetic Badge Card */}
                    <AboutCard className="flex items-center justify-center overflow-hidden">
                         <div className="flex items-center gap-4">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                            </span>
                            <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Available for Hire</span>
                        </div>
                    </AboutCard>

                </div>
            </div>
        </section>
    );
}

// Internal Component for Reusable Magnetic Glass Card
const AboutCard = ({ children, className = "" }) => {
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

    const xSpring = useSpring(mousePos.x * 0.04, { stiffness: 150, damping: 20 });
    const ySpring = useSpring(mousePos.y * 0.04, { stiffness: 150, damping: 20 });

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: xSpring, y: ySpring, transformStyle: "preserve-3d" }}
            className={`group relative bg-slate-900/20 border border-white/5 rounded-[2.5rem] p-10 overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-cyan-500/40 ${className}`}
        >
            {/* Spotlight Effect (Matches Project Cards) */}
            <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(350px circle at ${mousePos.x + 200}px ${mousePos.y + 200}px, rgba(6, 182, 212, 0.12), rgba(168, 85, 247, 0.04), transparent 40%)`
                }}
            />
            <div className="relative z-10 h-full">{children}</div>
        </motion.div>
    );
};