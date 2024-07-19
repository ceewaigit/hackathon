
'use client';
import React, { useState, useEffect } from 'react';

const Header = () => {
    return (
        <header className="text-foreground">
            <section className="px-6 bg-secondary mt-6 mx-20 rounded-2xl shadow-inner shadow-black">
                <div>
                    <div className="flex flex-col relative">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-card rounded-b-2xl -z-10 border-border border-b border-r border-l shadow-md"></div>
                        <nav className="flex justify-between items-center p-6 relative">
                            <div className="md:block hidden">
                                <div className="flex">
                                    <a href="#about"><span className="font-medium hover:text-accent">About</span></a>
                                    <a href="#prizes" className="ml-10"><span className="font-medium hover:text-accent">Prizes</span></a>
                                    <a href="#sponsors" className="ml-10"><span className="font-medium hover:text-accent">Sponsors</span></a>
                                </div>
                            </div>
                            <img src="/img/logo/hero-logo.svg" alt="logo icon" className="absolute left-1/2 top-6 transform -translate-x-1/2" />
                            <a className="md:block hidden" target="_blank" rel="noopener noreferrer" href="https://ceewai.com">
                                <div className="flex items-center font-medium text-xs rounded-full border-secondary transition hover:border-accent hover:scale-105 bg-secondary text-secondary-foreground border px-4 py-2">
                                    <span>Brought to you by</span><img src="/img/yes.png" className="inline-block ml-2" />
                                </div>
                            </a>
                        </nav>
                        <div className="flex flex-col items-center mt-[154px] px-6">
                            <a className="md:hidden transition hover:scale-105" target="_blank" rel="noopener noreferrer" href="https://ceewai.com">
                                <div className="flex items-center font-medium text-xs rounded-full border-secondary hover:border-accent bg-secondary text-secondary-foreground border px-4 py-2">
                                    <span>Brought to you by</span><img src="/img/yes.png" className="inline-block ml-2" />
                                </div>
                            </a>
                            <h1 className="text-7xl font-semibold md:w-[600px] mt-2 tracking-tighter text-center">
                                24 hours to build<br />
                                what <span className="text-accent">you</span> want.
                            </h1>
                            <p className="text-muted-foreground mt-6 w-[340px] text-center text-xl font-normal">
                                No problem statements, no theme.<br />
                                What will you build?
                            </p>
                            <p className="my-3 text-2xl font-semibold">See you next year!</p>
                            <a href="https://hacknroll2024.devpost.com/submissions" rel="noreferrer noopener" target="_blank">
                                <button className="focus:shadow-outline font-medium px-6 py-3 mt-4 justify-center items-center shadow-inner shadow-black rounded-2xl duration-300 transition focus:outline-none select-none text-lg py-3 px-8 bg-accent hover:bg-accent/90 hover:border-2 text-accent-foreground border-card hover:scale-105 hover:bg-muted">
                                    Sign up now!
                                </button>
                            </a>
                        </div>
                        <div className="hidden md:block -mt-8 -mb-8 -mx-10 pointer-events-none mx-auto"><img src="https://hacknroll.nushackers.org/img/assets/hero.png" alt="photos" /></div>
                        <div className="md:hidden pointer-events-none mx-auto"><img src="https://hacknroll.nushackers.org/img/assets/hero.png" alt="photos" /></div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;