'use client';
import React from 'react';

const Header = () => {
    return (
        <header className="text-foreground">
            <section className="px-4 sm:px-6 mx-auto max-w-7xl border-muted border-t-2" style={{ background: 'radial-gradient(30.03% 74.25% at 50% 0%, rgb(115, 115, 115) 0%, hsl(222.2 84% 4.9%) 100%);' }}>
                <div>
                    <div className="flex flex-col relative">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-card rounded-b-2xl -z-10 shadow-md"></div>
                        <div className="flex flex-col items-center mt-16 sm:mt-24 md:mt-[154px] px-4 sm:px-6">
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold w-full md:w-[750px] mt-2 tracking-tighter text-center font-mono">
                                The biggest <span className="text-accent">hackython</span><br className="hidden sm:inline" />
                                of the year.
                            </h1>
                            <p className="text-muted-foreground mt-4 sm:mt-6 w-full sm:w-[340px] text-center text-lg sm:text-xl font-normal">
                                Build your dream project, <br className="hidden sm:inline" />
                                learn new skills, <br className="hidden sm:inline" />
                                and win amazing prizes.
                            </p>
                            <a href="https://ceewai.com" rel="noreferrer noopener" target="_blank" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto focus:shadow-outline font-medium px-6 py-3 mt-6 justify-center items-center shadow-inner shadow-black rounded-2xl duration-300 transition focus:outline-none select-none text-lg bg-accent hover:bg-accent/90 hover:border-2 text-accent-foreground border-card hover:scale-105 hover:bg-muted">
                                    Sign up now!
                                </button>
                            </a>
                        </div>
                        <div className="hidden md:block -mt-8 -mb-8 -mx-10 pointer-events-none mx-auto">
                            <img src="./scratch.png" alt="photos" className="w-full" />
                        </div>
                        <div className="md:hidden pointer-events-none mx-auto mt-8">
                            <img src="/scratch.png" alt="photos" className="w-full" />
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;