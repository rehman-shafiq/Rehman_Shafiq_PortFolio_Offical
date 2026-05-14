import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from '@/Components/UI/Navbar';

// Slow, Elegant & Graceful Transition Variants
const pageVariants = {
    initial: { 
        y: 40,           // Thoda zyada distance taake slow motion feel ho
        opacity: 0,
        filter: "blur(12px)" 
    },
    animate: { 
        y: 0, 
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1.2, // Kafi slow aur tasalli baksh
            ease: [0.22, 1, 0.36, 1], // Apple-style smooth quint easing
        }
    },
    exit: { 
        y: -20,          // Halke se upar slide hote huye gayab hoga
        opacity: 0,
        filter: "blur(8px)",
        transition: {
            duration: 0.8, // Exit thora sa fast rakha hai taake naya page jaldi aaye
            ease: [0.32, 0, 0.67, 0] 
        }
    }
};

export default function MainLayout({ children }) {
    const [mounted, setMounted] = useState(false);

    // Custom Cursor (Slow & Smooth Follow)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    // Damping barha di hai taake cursor thoda "pichhe" reh kar smoothly follow kare
    const springConfig = { damping: 40, stiffness: 200 }; 
    const mainCursorX = useSpring(cursorX, springConfig);
    const mainCursorY = useSpring(cursorY, springConfig);

    useEffect(() => {
        setMounted(true);

        const lenis = new Lenis({
            duration: 1.8, // Scroll ko bhi mazeed slow aur liquid kiya hai
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        window.addEventListener('mousemove', moveCursor);

        return () => {
            lenis.destroy();
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative min-h-screen bg-[#050505] text-white selection:bg-cyan-500 selection:text-black overflow-hidden">
            
            {/* NOISE OVERLAY */}
            <div className="pointer-events-none fixed inset-0 z-[999] opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* CURSOR */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[1000] hidden md:block"
                style={{ x: mainCursorX, y: mainCursorY }}
            >
                <div className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <div className="h-10 w-10 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-[2px]"></div>
                    <div className="absolute h-1 w-1 rounded-full bg-cyan-500/40"></div>
                </div>
            </motion.div>

            <Navbar />

            {/* SLOW TRANSITION WRAPPER */}
            <AnimatePresence mode="wait">
                <motion.main
                    key={window.location.pathname}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative z-10 w-full"
                >
                    {children}
                </motion.main>
            </AnimatePresence>

            {/* BACKGROUND GLOWS (More Subtle) */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute top-[-15%] left-[-5%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]"></div>
                <div className="absolute bottom-[-15%] right-[-5%] h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[150px]"></div>
            </div>
        </div>
    );
}