'use client';
import React from 'react';
import Menu from './Menu';

const Header = () => {
    return (
        <header className="text-foreground">
            <section className="px-6 mx-20 border-muted border-t-2" style={{ background: 'radial-gradient(30.03% 74.25% at 50% 0%, rgb(115, 115, 115) 0%, hsl(222.2 84% 4.9%) 100%);' }}>
                <div>
                    <div className="flex flex-col relative">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-card rounded-b-2xl -z-10 shadow-md"></div>
                        <div className="flex flex-col items-center mt-[154px] px-6">
                            <a className="md:hidden transition hover:scale-105" target="_blank" rel="noopener noreferrer" href="https://ceewai.com">
                                <div className="flex items-center font-medium text-xs rounded-full border-secondary hover:border-accent bg-secondary text-secondary-foreground border px-4 py-2">
                                    <span>Brought to you by</span><img src="/img/yes.png" className="inline-block ml-2" />
                                </div>
                            </a>
                            <h1 className="text-7xl font-semibold md:w-[750px] mt-2 tracking-tighter text-center font-mono">
                                The biggest <span className="text-accent">hackython</span><br />
                                of the year.
                            </h1>
                            <p className="text-muted-foreground mt-6 w-[340px] text-center text-xl font-normal">
                                Build your dream project, <br />
                                learn new skills, <br />
                                and win amazing prizes.
                            </p>
                            <a href="https://ceewai.com" rel="noreferrer noopener" target="_blank">
                                <button className="focus:shadow-outline font-medium px-6 py-3 mt-6 justify-center items-center shadow-inner shadow-black rounded-2xl duration-300 transition focus:outline-none select-none text-lg py-3 px-8 bg-accent hover:bg-accent/90 hover:border-2 text-accent-foreground border-card hover:scale-105 hover:bg-muted">
                                    Sign up now!
                                </button>
                            </a>
                        </div>
                        <div className="hidden md:block -mt-8 -mb-8 -mx-10 pointer-events-none mx-auto"><img src="./scratch.png" alt="photos" /></div>
                        <div className="md:hidden pointer-events-none mx-auto"><img src="/scratch.png" alt="photos" /></div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;