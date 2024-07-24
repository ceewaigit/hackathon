import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StartupMottoTyper from './StartupMottoTyper';

const HoverVideoGuide = ({ steps }) => {
    const [activeStep, setActiveStep] = useState(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const listRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e) => {
            if (listRef.current) {
                const { left, top } = listRef.current.getBoundingClientRect();
                setCursorPosition({
                    x: e.clientX - left,
                    y: e.clientY - top
                });
            }
        };

        listRef.current?.addEventListener('mousemove', handleMouseMove);
        return () => {
            listRef.current?.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const handleMouseEnter = (step) => {
        if (!isMobile) {
            setActiveStep(step);
            setInitialPosition({ ...cursorPosition });
        }
    };

    // Calculate dampened movement
    const dampenedMovement = {
        x: (cursorPosition.x - initialPosition.x) * 0.1,
        y: (cursorPosition.y - initialPosition.y) * 0.1
    };

    const calculateVideoPosition = () => {
        if (!videoRef.current || !listRef.current) return { left: 0, top: 0 };

        const listRect = listRef.current.getBoundingClientRect();
        const videoRect = videoRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let left = initialPosition.x + dampenedMovement.x + 350;
        let top = initialPosition.y + dampenedMovement.y - 100;

        // Adjust horizontal position
        if (left + videoRect.width > viewportWidth) {
            left = viewportWidth - videoRect.width - 20; // 20px padding from right edge
        }

        // Adjust vertical position
        if (top + videoRect.height > viewportHeight) {
            top = viewportHeight - videoRect.height - 20;
        }
        if (top < 20) {
            top = 20;
        }

        return { left, top };
    };

    return (
        <motion.div
            className="container mx-auto py-28 text-primary text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Guide
            </motion.h2>
            <motion.hr className="border-muted w-24 mx-auto mb-20" />
            <div className="relative flex flex-col md:flex-row gap-24 justify-center">
                <div className="w-full md:w-1/3 relative">
                    <ul ref={listRef} className="space-y-4">
                        {steps.map((step, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <motion.div
                                    className="p-4 rounded-xl transition-all duration-100 mt-4 cursor-default"
                                    whileHover={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        scale: 1.05,
                                        boxShadow: 'hsl(var(--muted)) 0px 0px 0px 1px, hsl(0deg 0% 100% / 20%) 0px 4px 6px -1px'
                                    }}
                                    onMouseEnter={() => handleMouseEnter(step)}
                                    onMouseLeave={() => setActiveStep(null)}
                                >
                                    <h3 className="text-xl font-semibold font-mono text-left">{index + 1}. {step.title}</h3>
                                    <p className="text-sm text-foreground text-left">{step.description}</p>
                                    {step.date && <p className="text-xs text-foreground text-left pt-4">by {step.date}</p>}
                                </motion.div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className='w-full md:w-1/2 flex flex-col justify-center'>
                    <h2 className="text-4xl font-bold mb-2 text-center">
                        Fostering <span className='text-smu'>innovation</span>
                    </h2>
                    <p className="text-sm text-center font-mono">
                        Avoid finding a Solution in search of a Problem. <br /> Instead, find a Problem in search of a Solution.
                    </p>
                    <div className="mt-8">
                        <StartupMottoTyper />
                    </div>
                </div>
                <AnimatePresence>
                    {activeStep && !isMobile && (
                        <motion.div
                            ref={videoRef}
                            className="absolute w-full rounded-2xl overflow-hidden shadow-lg shadow-slate-800 hidden md:block"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                ...calculateVideoPosition(),
                                transform: `translateY(-50%)`,
                                maxWidth: '30vw',
                                maxHeight: '70vh',
                            }}
                        >
                            <video
                                src={activeStep.videoUrl}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default HoverVideoGuide;