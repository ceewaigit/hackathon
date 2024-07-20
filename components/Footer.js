'use client';
import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Footer = () => {
    return (
        <footer className="p-8" style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="shadow-lg rounded-2xl p-8 mt-20" style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }}>
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-7 mb-8 md:mb-0">
                                <a href="https://ceewai.com" target="_blank" rel="noreferrer" className='hover:scale-105 transition-transform duration-400 ease-in-out transform hover:animate-bounce'>
                                    <img src="/ceewai_chi.svg" alt="Logo" className="w-16 h-auto bg-primary rounded-lg" />
                                </a>
                                <div className="text-center md:text-left">
                                    <p className="text-xs font-bold font-mono" style={{ color: 'hsl(var(--muted-foreground))' }}>
                                        Developed with love by <br />
                                        <span className='text-accent font-bold font-mono'>
                                            <a href="https://ceewai.com" target="_blank" rel="noreferrer" className='hover:scale-105 transition-all'>
                                                ceewai
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
                            <div className="flex flex-col gap-3">
                                <Link href="/rules" className="text-base" style={{ color: 'hsl(var(--foreground))', '--hover-color': 'hsl(var(--primary))' }}><span className="hover:text-[color:var(--hover-color)]">Rules</span></Link>
                                <a href="#prizes" className="text-base" style={{ color: 'hsl(var(--foreground))', '--hover-color': 'hsl(var(--primary))' }}><span className="hover:text-[color:var(--hover-color)]">Prizes</span></a>
                                <a href="#sponsors" className="text-base" style={{ color: 'hsl(var(--foreground))', '--hover-color': 'hsl(var(--primary))' }}><span className="hover:text-[color:var(--hover-color)]">Sponsors</span></a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Link href="/privacy" className="text-base" style={{ color: 'hsl(var(--foreground))', '--hover-color': 'hsl(var(--primary))' }}><span className="hover:text-[color:var(--hover-color)]">Privacy policy</span></Link>
                                <a href="mailto:yes@yes.com" className="text-base" style={{ color: 'hsl(var(--foreground))', '--hover-color': 'hsl(var(--primary))' }}><span className="hover:text-[color:var(--hover-color)]">Contact us</span></a>
                                <a href="#faq" className="text-base" style={{ color: 'hsl(var(--foreground))', '--hover-color': 'hsl(var(--primary))' }}><span className="hover:text-[color:var(--hover-color)]">FAQs</span></a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-8" style={{ borderColor: 'hsl(var(--border))' }} />
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-base mb-4 md:mb-0" style={{ color: 'hsl(var(--muted-foreground))' }}><a href='https://ceewai.com'>© SMU 2025</a></p>
                        <img alt="Logo" src="/ceewai.svg" width="31" height="36" decoding="async" data-nimg="1" loading="lazy" className="w-8 h-auto bg-primary rounded-lg" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
