'use client';
import React, { useState } from 'react';

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([
        {
            tier: 'Platinum sponsor',
            companies: [
                {
                    name: 'Optiver',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://optiver.com/working-at-optiver/early-careers/',
                },
            ],
        },
        {
            tier: 'Gold sponsors',
            companies: [
                {
                    name: 'Mastercard',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://careers.mastercard.com/us/en/students',
                },
                {
                    name: 'ST Engineering',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://www.stengg.com/en/careers/',
                },
                {
                    name: 'Singtel',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://start.singtel.com/opportunities#students-graduates',
                },
                {
                    name: 'TikTok',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://careers.tiktok.com/campus',
                },
                {
                    name: 'Ahrefs',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://ahrefs.com/jobs',
                },
            ],
        },
        {
            tier: 'Silver sponsors',
            companies: [
                {
                    name: 'Marshall Wace',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://www.mwam.com/join-us/',
                },
                {
                    name: 'Citadel',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://www.citadel.com/careers/open-opportunities/',
                },
                {
                    name: 'Govtech',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://www.tech.gov.sg/careers/students-and-graduates/',
                },
                {
                    name: 'DSO',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://careers.dso.org.sg/career-openings/index.html',
                },
                {
                    name: 'Jane Street',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://www.janestreet.com/join-jane-street/overview/',
                },
                {
                    name: 'foodpanda',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://careers.foodpanda.com',
                },
            ],
        },
        {
            tier: 'Bronze sponsors',
            companies: [
                {
                    name: 'Stripe',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://stripe.com/en-sg/jobs/university',
                },
                {
                    name: 'Palantir',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Citadel_Securities_logo.jpg',
                    link: 'https://www.palantir.com/careers/students-and-early-talent/',
                },
            ],
        },
    ]);

    return (
        <section id="sponsors" className="container mx-auto max-w-screen-xl px-4 flex flex-col items-center">
            <h2 className="font-heading font-bold text-primary mt-6 mb-3 text-center text-4xl ">Sponsors.</h2>
            <p className="text-hnr-black-70 text-center text-xl font-normal md:w-[528px] mb-12">Major Shoutout to our sponsors for making this event possible!</p>
            {sponsors.map((sponsorTier, index) => (
                <div key={index} className="bg-neutral-50 rounded-2xl justify-center shadow-card border border-neutral-200 flex flex-col items-center mt-4 md:px-16 px-8 pb-10 gap-10 w-full">
                    <div className="-mt-4 px-3 py-1 bg-white rounded-full border border-hnr-black-20 flex flex-col justify-center items-center w-max text-primary-foreground"><p>{sponsorTier.tier}</p></div>
                    <div className="w-full flex justify-center  flex-row gap-10 items-stretch">
                        {sponsorTier.companies.map((company, companyIndex) => (
                            <div key={companyIndex} className="flex flex-row gap-10 justify-evenly">
                                <a target="_blank" href={company.link} rel="noreferrer">
                                    <div className="flex-1 flex flex-row justify-center items-center">
                                        <img className='rounded-[100%]' src={company.logo} alt={company.name} width={company.width || 100} height={company.height || 100} />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Sponsors;
