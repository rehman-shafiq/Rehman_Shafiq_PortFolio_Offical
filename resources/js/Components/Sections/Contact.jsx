import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

// 🤖 ROBOT 1: CYBER SIGNALS TRANSMITTER (FOOTER SOCIALS NODE)
const SocialSignalsRobot = () => {
    return (
        <div className="relative w-12 h-12 flex items-center justify-center select-none pointer-events-none group/social-bot">
            {/* Infinite Network Frequency Wave */}
            <motion.div 
                className="absolute w-16 h-16 border border-cyan-500/20 rounded-full"
                animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Micro Floating Transmitter Node */}
            <motion.div
                className="w-8 h-8 relative z-10"
                style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.4))' }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="botChassis" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#334155" />
                            <stop offset="100%" stopColor="#0f172a" />
                        </linearGradient>
                        <filter id="eyeGlow">
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <path d="M 20,45 C 20,20 80,20 80,45 L 75,70 L 25,70 Z" fill="url(#botChassis)" stroke="#06b6d4" strokeWidth="2.5" />
                    <rect x="32" y="42" width="36" height="8" rx="4" fill="#020617" stroke="#334155" />
                    <motion.circle 
                        cy="46" r="2.5" fill="#22d3ee" filter="url(#eyeGlow)"
                        animate={{ cx: [38, 62, 38] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <line x1="50" y1="22" x2="50" y2="10" stroke="#a855f7" strokeWidth="2" />
                    <circle cx="50" cy="10" r="2" fill="#a855f7" filter="url(#eyeGlow)" />
                </svg>
            </motion.div>
        </div>
    );
};

// 🤖 ROBOT 2: PACKET ROUTER DRONE (FORM DEPLOYMENT ENGINE)
const MessageRouterRobot = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center select-none pointer-events-none my-2 group/router">
            <motion.div
                className="w-10 h-10 relative"
                style={{ filter: 'drop-shadow(0 0 12px rgba(168, 85, 247, 0.4))' }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                    <circle cx="50" cy="50" r="18" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
                    <polygon points="42,42 58,50 42,58" fill="#22d3ee" />
                    <motion.circle 
                        cx="50" cy="50" r="24" stroke="#06b6d4" strokeWidth="1" strokeDasharray="6 4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </motion.div>
            {/* Real-time Dynamic Laser Sync Wire */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-1 opacity-40 group-hover/router:opacity-100 transition-opacity" />
        </div>
    );
};

export default function Contact() {
    const contactInfo = [
        { label: "Direct Mail", value: "rshafiq5872077@gmail.com", link: "mailto:rshafiq5872077@gmail.com" },
        { label: "WhatsApp / Call", value: "+92 310 5510996", link: "tel:+923105510996" },
        { label: "Based In", value: "Rawalpindi, Pakistan", link: "https://maps.google.com" }
    ];

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/rehman-shafiq" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-rehman-shafiq-241336322/" },
        { name: "Instagram", url: "https://www.instagram.com/rehman_shafiq00/" }
    ];

    return (
        <section id="contact" className="py-40 px-6 bg-slate-950 relative overflow-hidden">
            {/* Dynamic Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    
                    {/* Left Side: Cinematic Branding */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-[1px] w-12 bg-cyan-500" />
                            <span className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-xs">Connection</span>
                        </div>
                        
                        <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase text-white mb-12 leading-[0.85]">
                            Ready to <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                Elevate?
                            </span>
                        </h2>

                        <div className="space-y-12">
                            {contactInfo.map((info, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group cursor-pointer"
                                >
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] group-hover:text-cyan-500 transition-colors">
                                        {info.label}
                                    </span>
                                    <a 
                                        href={info.link}
                                        target={info.label === "Based In" ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="block text-2xl md:text-4xl font-bold text-white mt-2 group-hover:translate-x-3 transition-transform duration-500 flex items-center gap-4"
                                    >
                                        {info.value}
                                        <span className="opacity-0 group-hover:opacity-100 text-cyan-500 transition-opacity text-2xl">→</span>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Magnetic Glass Form */}
                    <ContactCard>
                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-6">
                                <div className="group">
                                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-black mb-2 block ml-1 group-focus-within:text-cyan-400 transition-colors">Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-slate-700"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="group">
                                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-black mb-2 block ml-1 group-focus-within:text-cyan-400 transition-colors">Email</label>
                                    <input 
                                        type="type" 
                                        className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-slate-700"
                                        placeholder="name@email.com"
                                    />
                                </div>
                                <div className="group">
                                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-black mb-2 block ml-1 group-focus-within:text-cyan-400 transition-colors">Message</label>
                                    <textarea 
                                        rows="4"
                                        className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-slate-700 resize-none"
                                        placeholder="Project Brief..."
                                    ></textarea>
                                </div>
                            </div>

                            {/* Integrated Drone Right Before Deployment Action */}
                            <MessageRouterRobot />

                            <button className="w-full py-6 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl text-slate-950 font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/40 cursor-pointer">
                                Deploy Message
                            </button>
                        </form>
                        
                        {/* Background Branding */}
                        <div className="absolute -bottom-10 -right-5 text-[140px] font-black text-white/[0.02] pointer-events-none select-none italic group-hover:text-cyan-500/[0.05] transition-colors duration-1000">
                            SEND
                        </div>
                    </ContactCard>

                </div>

                {/* Footer Section */}
                <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase">
                            © 2026 Muhammad Rehman Shafique
                        </p>
                        <span className="text-[9px] text-slate-700 uppercase tracking-widest italic">Built with Laravel & React</span>
                    </div>
                    
                    {/* Synchronized Social Area */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
                        <SocialSignalsRobot />
                        <div className="flex gap-12">
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] font-black text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] relative group"
                                >
                                    {social.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ContactCard = ({ children }) => {
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

    const xSpring = useSpring(mousePos.x * 0.03, { stiffness: 100, damping: 20 });
    const ySpring = useSpring(mousePos.y * 0.03, { stiffness: 100, damping: 20 });

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: xSpring, y: ySpring, transformStyle: "preserve-3d" }}
            className="group relative bg-slate-900/30 border border-white/5 rounded-[3rem] p-10 md:p-16 overflow-hidden backdrop-blur-xl transition-all duration-700 hover:border-cyan-500/30"
        >
            <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: `radial-gradient(500px circle at ${mousePos.x + 250}px ${mousePos.y + 250}px, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.03), transparent 50%)`
                }}
            />
            {children}
        </motion.div>
    );
};