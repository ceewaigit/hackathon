'use client';
import React from 'react';

const Menu = () => {
    return (
        <nav className="flex justify-between items-center p-6 relative">
            <div className="md:block hidden flex-1">
                <div className="flex">
                    <a href="#about"><span className="font-medium hover:text-accent">Details</span></a>
                    <a href="#prizes" className="ml-10"><span className="font-medium hover:text-accent">Prizes</span></a>
                    <a href="#sponsors" className="ml-10"><span className="font-medium hover:text-accent">Sponsors</span></a>
                </div>
            </div>
            <div className="flex justify-center flex-1">
                <img src="/ceewai_chi.svg" alt="logo icon" className="w-[40px] bg-primary rounded-lg" />
            </div>
            <div className="md:block hidden flex-1 text-right">
                <a className="" target="_blank" rel="noopener noreferrer" href="https://ceewai.com">
                    <div className="inline-flex items-center font-medium text-xs rounded-full border-secondary transition hover:border-accent hover:scale-105 bg-secondary text-secondary-foreground border px-4 py-2">
                        <span>Brought to you by</span><img src="/ceewai.svg" className="inline-block ml-2 w-[25px] bg-primary rounded-full" />
                    </div>
                </a>
            </div>
        </nav>
    );
};

export default Menu;