import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const contactInfo = [
        {
            label: "Email",
            value: "rshafiq5872077@gmail.com",
            link: "mailto:rshafiq5872077@gmail.com"
        },
        {
            label: "Phone",
            value: "+92 310 5510996",
            link: "tel:+923105510996"
        },
        {
            label: "Location",
            value: "Ibrahim Villas, Morgah, Rawalpindi",
            link: "https://maps.google.com"
        }
    ];

    return (
        <section id="contact" className="py-32 px-6 bg-[#080808] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    
                    {/* Left Side: Text & Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-cyan-500 font-mono text-sm tracking-[0.4em] uppercase block mb-6">
                            Get In Touch
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-white mb-10 leading-none">
                            Let's Build <br /> Something <br /> <span className="text-cyan-500">Great.</span>
                        </h2>
                        
                        <div className="mt-16 space-y-10">
                            {contactInfo.map((info, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{info.label}</span>
                                    <a 
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-2xl md:text-3xl font-bold text-white mt-2 group-hover:text-cyan-500 transition-colors duration-300"
                                    >
                                        {info.value}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5 relative"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Your Message</label>
                                <textarea 
                                    rows="5"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button className="w-full py-5 bg-cyan-500 rounded-xl text-black font-black uppercase tracking-widest text-sm hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500">
                                Send Message
                            </button>
                        </form>

                        {/* Subtle Branding Background */}
                        <div className="absolute -bottom-10 -right-10 text-[150px] font-black text-white/[0.01] pointer-events-none select-none">
                            HIRE
                        </div>
                    </motion.div>

                </div>

                {/* Footer Bottom */}
                <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-xs font-mono tracking-widest uppercase">
                        © 2026 Muhammad Rehman Shafique. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="https://github.com/rehman-shafiq" target="_blank" className="text-xs font-mono text-gray-500 hover:text-cyan-500 transition-colors uppercase tracking-widest">GitHub</a>
                        <a href="#" className="text-xs font-mono text-gray-500 hover:text-cyan-500 transition-colors uppercase tracking-widest">LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    );
}