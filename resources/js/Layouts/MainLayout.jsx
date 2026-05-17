import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from '@/Components/UI/Navbar';

export default function MainLayout({ children }) {
    const [mounted, setMounted] = useState(false);

    // 1. Custom Cursor Logic (Spring Physics for Premium feel)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    const springConfig = { damping: 25, stiffness: 150 };
    const mainCursorX = useSpring(cursorX, springConfig);
    const mainCursorY = useSpring(cursorY, springConfig);

    useEffect(() => {
        setMounted(true);

        // 2. Smooth Scroll (Lenis) Initialization
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1.1,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // 3. Mouse Move Event
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
        <div className="relative min-h-screen bg-[#080808] text-white selection:bg-cyan-500 selection:text-black overflow-hidden">
            
            {/* A. PREMIUM GRAIN OVERLAY (Noise Effect) */}
            <div className="pointer-events-none fixed inset-0 z-[999] opacity-[0.03] contrast-150 brightness-150 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* B. CUSTOM CURSOR */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[1000] hidden md:block"
                style={{ x: mainCursorX, y: mainCursorY }}
            >
                {/* Main Ring */}
                <div className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <div className="h-8 w-8 rounded-full border border-cyan-500/50 bg-cyan-500/5"></div>
                    {/* Inner Dot */}
                    <div className="absolute h-1 w-1 rounded-full bg-cyan-500"></div>
                </div>
            </motion.div>

            {/* C. GLOBAL NAVIGATION */}
            <Navbar />

            {/* D. PAGE TRANSITION WRAPPER */}
            <AnimatePresence mode="wait">
                <motion.main
                    key={window.location.pathname}
                    initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="relative z-10"
                >
                    {children}
                </motion.main>
            </AnimatePresence>

            {/* E. SUBTLE BACKGROUND ELEMENTS */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute -left-[10%] -top-[10%] h-[400px] w-[400px] rounded-full bg-cyan-900/10 blur-[120px]"></div>
                <div className="absolute -right-[10%] -bottom-[10%] h-[400px] w-[400px] rounded-full bg-purple-900/5 blur-[120px]"></div>
            </div>

        </div>
    );
}