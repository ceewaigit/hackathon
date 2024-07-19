'use client';
import React, { useState, useEffect } from 'react';

const Footer = () => {
    return (
        <footer className="p-8">
            <div className="px-4">
                <div className="bg-muted shadow-card rounded-2xl flex flex-col gap-5 p-5 pt-0 mt-20">
                    <div className="flex md:flex-row flex-col justify-between">
                        <div>
                            <div className="flex sm:flex-row flex-col items-center justify-evenly gap-7">
                                <img src="/img/logo/footer-logo.svg" alt="Logo" className="sm:-ml-8 md:-m-4 md:-mt-16 -m-8 -ml-16 -mt-16" />
                                <div className="flex flex-col md:py-12 py-6 gap-5 items-center sm:items-start">
                                    <p className="text-xl text-neutral-500 text-center sm:text-left">
                                        Yes <br />
                                        Imagine Dragons hackathon.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-evenly md:justify-start gap-8 p-12">
                            <div className="flex flex-col gap-3 text-center md:text-left">
                                <a href="#how-we-roll"><span className="font-medium text-base text-neutral-300">About</span></a><a href="#past-projects"><span className="font-medium text-base text-neutral-300">2023 Projects</span></a>
                                <a href="#prizes"><span className="font-medium text-base text-neutral-300">Prizes</span></a><a href="#sponsors"><span className="font-medium text-base text-neutral-300">Sponsors</span></a>
                            </div>
                            <div className="flex flex-col gap-3 text-center md:text-left">
                                <a href="/privacy"><span className="font-medium text-base text-neutral-300">Privacy policy</span></a><a href="mailto:active@nushackers.org"><span className="font-medium text-base text-neutral-300">Contact us</span></a>
                                <a href="#faqs"><span className="font-medium text-base text-neutral-300">FAQs</span></a>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-4 border" />
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-neutral-400 font-medium text-base">© Chong Yong</p>
                        <img alt="Logo" src="/img/yes.svg" width="31" height="36" decoding="async" data-nimg="1" loading="lazy" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;