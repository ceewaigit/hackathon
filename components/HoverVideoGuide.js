import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HoverVideoGuide = ({ steps }) => {
    const [activeStep, setActiveStep] = useState(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
    const listRef = useRef(null);

    useEffect(() => {
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
        return () => listRef.current?.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleMouseEnter = (step) => {
        setActiveStep(step);
        setInitialPosition({ ...cursorPosition });
    };

    // Calculate dampened movement
    const dampenedMovement = {
        x: (cursorPosition.x - initialPosition.x) * 0.1,
        y: (cursorPosition.y - initialPosition.y) * 0.1
    };

    return (
        <motion.div 
            className="container mx-auto py-28 text-primary"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2 
                className="text-4xl font-bold mb-28 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Recommended Checkpoints
            </motion.h2>
            <div className="flex flex-col mx-8 md:flex-row items-start justify-between gap-8 relative">
                <ul ref={listRef} className="space-y-4 w-full md:w-1/4">
                    {steps.map((step, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <motion.div
                                className="p-4 rounded-xl transition-all duration-100 pt-4 cursor-default"
                                whileHover={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    scale: 1.05,
                                    boxShadow: 'hsl(var(--muted)) 0px 0px 0px 1px, hsl(0deg 0% 100% / 20%) 0px 4px 6px -1px'
                                }}
                                onMouseEnter={() => handleMouseEnter(step)}
                                onMouseLeave={() => setActiveStep(null)}
                            >
                                <h3 className="text-xl font-semibold font-mono text-center">{index + 1}. {step.title}</h3>
                                <p className="text-sm text-foreground text-center">{step.description}</p>
                                {step.date && <p className="text-xs text-foreground text-center pt-4">by {step.date}</p>}
                            </motion.div>
                            <motion.div
                                className="h-0.5 bg-muted rounded-full mt-4"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: activeStep === step ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.li>
                    ))}
                </ul>
                <AnimatePresence>
                    {activeStep && (
                        <motion.div
                            className="absolute md:w-full aspect-video rounded-2xl overflow-hidden shadow-lg shadow-slate-800"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                left: initialPosition.x + dampenedMovement.x + 350,
                                top: initialPosition.y + dampenedMovement.y - 100,
                                transform: `translateY(-50%)`,
                                maxWidth: 'calc(100vw - 100%)',
                                maxHeight: '60vh',
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