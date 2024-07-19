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
            ],
        },
        {
            tier: 'Silver sponsors',
            companies: [
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

    const tierStyles = {
        'Platinum sponsor': {
            width: 'calc(30% - 2rem)',
            minWidth: '300px',
            maxWidth: '400px',
        },
        'Gold sponsors': {
            width: 'calc(25% - 2rem)',
            minWidth: '200px',
            maxWidth: '300px',
        },
        'Silver sponsors': {
            width: 'calc(20% - 2rem)',
            minWidth: '150px',
            maxWidth: '250px',
        },
        'Bronze sponsors': {
            width: 'calc(15%)',
            minWidth: '100px',
            maxWidth: '200px',
        },
    };

    return (
<section id="sponsors" className="py-20 bg-background text-foreground">
    <div className="container mx-auto px-4">
        <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary text-center mb-4">
            Our Sponsors
        </h2>
        <p className="text-muted-foreground text-center text-xl max-w-2xl mx-auto mb-16">
            We're honored to partner with these industry leaders.
        </p>

        {sponsors.map((sponsorTier, tierIndex) => (
            <div key={tierIndex} className="mb-16">
                <h3 className="text-2xl font-bold text-center mb-8">
                    <span className="bg-accent bg-opacity-20 text-primary px-6 py-2 rounded-full">
                        {sponsorTier.tier}
                    </span>
                </h3>
                <div className="flex flex-wrap justify-center gap-8">
                    {sponsorTier.companies.map((company, companyIndex) => (
                        <div 
                            key={companyIndex} 
                            className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                            style={tierStyles[sponsorTier.tier]}
                        >
                            <a 
                                href={company.link}
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full h-full"
                            >
                                <div className="aspect-square flex items-center justify-center">
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="rounded-xl object-contain"
                                    />
                                </div>
                                <div className="absolute inset-y-0 right-0 bg-accent bg-opacity-90 font-mono font-bold rounded-lg w-1/2 transform translate-x-full transition-transform duration-300 flex items-center justify-center">
                                    <p className="text-accent-foreground font-semibold text-center px-2 whitespace-normal break-words">
                                        {company.name}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
</section>
    );
};

export default Sponsors;
