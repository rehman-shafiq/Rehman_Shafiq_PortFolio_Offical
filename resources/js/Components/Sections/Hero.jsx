import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    // Animation variants for staggering children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
        },
    };

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden px-6">
            {/* Background Animated Gradient Blobs */}
            <div className="absolute inset-0 z-0">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full"
                />
                <motion.div 
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full"
                />
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-7xl mx-auto"
            >
                {/* Intro Line */}
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                    <div className="h-[1px] w-12 bg-cyan-500" />
                    <span className="text-cyan-500 font-mono tracking-[0.3em] uppercase text-xs">
                        Muhammad Rehman Shafique
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                    variants={itemVariants}
                    className="text-[11vw] md:text-[8.5vw] font-black leading-[0.85] tracking-tighter text-white uppercase"
                >
                    Transforming <br />
                    <span className="text-transparent border-t-0 bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                        Ideas Into <br />
                    </span>
                    <span className="relative">
                        Digital Reality
                        <motion.span 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                            className="absolute -bottom-2 left-0 h-[4px] bg-cyan-500"
                        />
                    </span>
                </motion.h1>

                {/* Subtext and Buttons */}
                <div className="mt-16 flex flex-col md:flex-row items-end justify-between gap-10">
                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-400 text-lg md:text-xl max-w-md font-light leading-relaxed"
                    >
                        Expert in building <span className="text-white underline decoration-cyan-500/50 underline-offset-4">Modern Monoliths</span> with Laravel & React. I create high-end animations and seamless user experiences.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex gap-6">
                        <button className="group relative px-12 py-5 bg-cyan-500 rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]">
                            <span className="relative z-10 text-black font-bold uppercase tracking-widest text-sm">
                                Explore Projects
                            </span>
                            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                        </button>
                        
                        <button className="group px-12 py-5 border border-white/20 rounded-full hover:border-white transition-colors duration-300">
                            <span className="text-white font-bold uppercase tracking-widest text-sm">
                                My Story
                            </span>
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Side Branding (Vertical) */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block overflow-hidden">
                <motion.div 
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="rotate-90 origin-right text-[10px] tracking-[0.8em] text-gray-700 uppercase"
                >
                    Full-Stack • UI/UX Architect • 2026
                </motion.div>
            </div>
           
        </section>
        
    );
}