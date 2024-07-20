'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative p-4 sm:p-6">
            <div className="flex justify-between items-center">
                <div className="flex justify-center flex-1 sm:flex-none">
                    <img src="/ceewai_chi.svg" alt="logo icon" className="w-[30px] sm:w-[40px] bg-primary rounded-lg" />
                </div>

                {/* Mobile menu button */}
                <button onClick={toggleMenu} className="sm:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Desktop menu */}
                <div className="hidden sm:flex sm:flex-1 sm:justify-center">
                    <a href="#about"><span className="font-medium transition hover:text-accent">Details</span></a>
                    <a href="#prizes" className="ml-6 md:ml-10"><span className="font-medium transition hover:text-accent">Prizes</span></a>
                    <a href="#sponsors" className="ml-6 md:ml-10"><span className="font-medium transition hover:text-accent">Sponsors</span></a>
                    <a href="#timeline" className="ml-6 md:ml-10"><span className="font-medium transition hover:text-accent">Timeline</span></a>
                    <Link href="/rules" className="text-base ml-6 md:ml-10"><span className="font-medium transition hover:text-accent">Rules</span></Link>
                    <Link href="/privacy" className="text-base ml-6 md:ml-10"><span className="font-medium transition hover:text-accent">Privacy policy</span></Link>
                </div>

                <div className="hidden sm:block sm:flex-1 sm:text-right">
                    <a className="" target="_blank" rel="noopener noreferrer" href="https://ceewai.com">
                        <div className="inline-flex items-center font-medium text-xs rounded-full border-secondary transition hover:border-accent hover:scale-105 bg-secondary text-secondary-foreground border px-4 py-2">
                            <span>Brought to you by</span><img src="/ceewai.svg" className="inline-block ml-2 w-[25px] bg-primary rounded-full" alt="ceewai logo" />
                        </div>
                    </a>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden absolute top-full left-0 right-0 bg-background z-50 border-t border-muted">
                    <div className="flex flex-col items-center py-4">
                        <a href="#about" className="py-2"><span className="font-medium transition hover:text-accent">Details</span></a>
                        <a href="#prizes" className="py-2"><span className="font-medium transition hover:text-accent">Prizes</span></a>
                        <a href="#sponsors" className="py-2"><span className="font-medium transition hover:text-accent">Sponsors</span></a>
                        <a href="#timeline" className="py-2"><span className="font-medium transition hover:text-accent">Timeline</span></a>
                        <Link href="/rules" className="text-base py-2"><span className="font-medium transition hover:text-accent">Rules</span></Link>
                        <Link href="/privacy" className="text-base py-2"><span className="font-medium transition hover:text-accent">Privacy policy</span></Link>
                        <a className="mt-4" target="_blank" rel="noopener noreferrer" href="https://ceewai.com">
                            <div className="inline-flex items-center font-medium text-xs rounded-full border-secondary transition hover:border-accent hover:scale-105 bg-secondary text-secondary-foreground border px-4 py-2">
                                <span>Brought to you by</span><img src="/ceewai.svg" className="inline-block ml-2 w-[25px] bg-primary rounded-full" alt="ceewai logo" />
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Menu;