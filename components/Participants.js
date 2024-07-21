'use client';

import React, { useState, useEffect } from 'react';
import ThreeModel from './ThreeModel.js';

const models = [
    { url: './mac.glb', zoomLength: 1, position: [20, 30, 70], modelPosition: [0, 0, 0] },
];

const participants = [
    "Company",
    "SME",
    "MNC",
    "Educational Institution",
    "Entrepreneur",
];

const Participants = () => {
    const [currentParticipant, setCurrentParticipant] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentParticipant((prev) => (prev + 1) % participants.length);
        }, 2000); // Change participant every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex my-12 items-center justify-center px-4 sm:px-6 lg:px-8" style={{
            background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.15) 0%, rgba(var(--accent-rgb), 0) 40%)'
        }}>
            <div className="w-full max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 h-[50vh] sm:h-[60vh] lg:h-[70vh]">
                        <ThreeModel
                            modelUrl={models[0].url}
                            zoomLength={models[0].zoomLength}
                            position={models[0].position}
                            modelPosition={models[0].modelPosition}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-primary">Are you a</h2>
                        <div className="relative h-10 sm:h-12 lg:h-14">
                            {participants.map((participant, index) => (
                                <div
                                    key={index}
                                    className="absolute w-full transition-all duration-500 ease-in-out text-accent"
                                    style={{
                                        transform: `translateY(${(index - currentParticipant) * 100}%)`,
                                        opacity: index === currentParticipant ? 1 : 0,
                                    }}
                                >
                                    <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent font-mono">{participant}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg sm:text-xl lg:text-2xl text-primary">interested in supporting the hacker culture?</p>

                        <p className=' text-lg sm:text-xl lg:text-2xl text-primary font-mono pt-10'> You can reach out to us 
                            <br />
                            <a href="mailto:yes@yes.com" className="underline text-accent transition duration-200 hover:scale-105 font-bold">here</a>!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Participants;