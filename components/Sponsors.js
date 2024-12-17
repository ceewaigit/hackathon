"use client";
import React, { useState } from "react";
import "./Sponsors.css";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([
    {
      tier: "Platinum sponsor",
      companies: [
        {
          name: "Ministry Of Home Affairs",
          logo: "/MHALOGO.png",
          link: "https://www.mha.gov.sg/",
        },
      ],
    },
    // {
    //   tier: "Gold sponsors",
    //   companies: [
    //     {
    //       name: "Sponsor 2",
    //       logo: "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg",
    //       link: "https://careers.mastercard.com/us/en/students",
    //     },
    //     {
    //       name: "Sponsor 3",
    //       logo: "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg",
    //       link: "https://www.stengg.com/en/careers/",
    //     },
    //     {
    //       name: "Sponsor 4",
    //       logo: "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg",
    //       link: "https://start.singtel.com/opportunities#students-graduates",
    //     },
    //     {
    //       name: "Sponsor 5",
    //       logo: "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg",
    //       link: "https://careers.tiktok.com/campus",
    //     },
    //   ],
    // },
    // {
    //   tier: "Silver sponsors",
    //   companies: [
    //     {
    //       name: "Sponsor 6",
    //       logo: "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg",
    //       link: "https://www.citadel.com/careers/open-opportunities/",
    //     },
    //     {
    //       name: "Sponsor 7",
    //       logo: "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg",
    //       link: "https://www.tech.gov.sg/careers/students-and-graduates/",
    //     },
    //     {
    //       name: "Sponsor 8",
    //       logo: "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg",
    //       link: "https://careers.dso.org.sg/career-openings/index.html",
    //     },
    //     {
    //       name: "Sponsor 9",
    //       logo: "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg",
    //       link: "https://www.janestreet.com/join-jane-street/overview/",
    //     },
    //     {
    //       name: "Sponsor 10",
    //       logo: "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg",
    //       link: "https://careers.foodpanda.com",
    //     },
    //   ],
    // },
    // {
    //     tier: 'Bronze sponsors',
    //     companies: [
    //         {
    //             name: 'Sponsor 11',
    //             logo: 'https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg',
    //             link: 'https://stripe.com/en-sg/jobs/university',
    //         },
    //         {
    //             name: 'Sponsor 12',
    //             logo: 'https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg',
    //             link: 'https://www.palantir.com/careers/students-and-early-talent/',
    //         },
    //     ],
    // },
  ]);

  const tierTextStyles = {
    "Platinum sponsor": "text-4xl font-extrabold",
    "Gold sponsors": "text-3xl font-bold",
    "Silver sponsors": "text-2xl font-semibold",
    "Bronze sponsors": "text-xl font-medium",
  };

  const tierStyles = {
    "Platinum sponsor": {
      width: "calc(30% - 2rem)",
      minWidth: "300px",
      maxWidth: "400px",
      backgroundColor: "rgba(229, 228, 226, 0.9)",
      boxShadow: "0 0 20px rgba(229, 228, 226, 0.5)",
    },
    "Gold sponsors": {
      width: "calc(22.5%)",
      minWidth: "200px",
      maxWidth: "300px",
      backgroundColor: "rgba(255, 215, 0, 0.1)",
      boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)",
    },
    "Silver sponsors": {
      width: "calc(17.5%)",
      minWidth: "150px",
      maxWidth: "250px",
      backgroundColor: "rgba(192, 192, 192, 0.1)",
      boxShadow: "0 0 10px rgba(192, 192, 192, 0.3)",
    },
    "Bronze sponsors": {
      width: "calc(12.5%)",
      minWidth: "100px",
      maxWidth: "200px",
      backgroundColor: "rgba(205, 127, 50, 0.1)",
      boxShadow: "0 0 5px rgba(205, 127, 50, 0.3)",
    },
  };

//   return (
//     <section id="sponsors" className="py-28 bg-background text-foreground">
//       <div className="container mx-auto px-4">
//         <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary text-center mb-4">
//           Our Sponsors
//         </h2>
//         <p className="text-muted-foreground text-center text-xl max-w-2xl mx-auto mb-16">
//           Huge shoutout to our sponsors for making this event possible! 🎉
//         </p>

//         {sponsors.map((sponsorTier, tierIndex) => (
//           <div key={tierIndex} className="mb-16">
//             <h3 className="text-2xl font-bold text-center mb-8">
//               <span className="bg-accent bg-opacity-20 text-primary px-6 py-2 rounded-full">
//                 {sponsorTier.tier}
//               </span>
//             </h3>
//             <div className="flex flex-wrap justify-center gap-8">
//               {sponsorTier.companies.map((company, companyIndex) => (
//                 <div
//                   key={companyIndex}
//                   className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 sponsor-container"
//                   style={{
//                     ...tierStyles[sponsorTier.tier],
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   <a
//                     href={company.link}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="block w-full h-full"
//                   >
//                     <div className="aspect-square flex items-center justify-center p-4">
//                       <img
//                         src={company.logo}
//                         alt={company.name}
//                         className="rounded-full object-contain max-w-1/2 max-h-1/2"
//                       />
//                     </div>
//                     <div className="company-name rounded-lg absolute inset-x-0 bottom-0 bg-primary bg-opacity-90 py-2 border-background border">
//                       <p className="text-primary-foreground inline text-sm font-semibold text-center px-2 truncate ">
//                         {company.name}
//                       </p>
//                     </div>
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
    return (
        <section id="sponsors" className="py-28 bg-background text-foreground">
        <div className="container mx-auto px-4">
            <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary text-center mb-4">
            Our Sponsors
            </h2>
            <p className="text-muted-foreground text-center text-xl max-w-2xl mx-auto mb-16">
            Sponsors to be announced soon! 🎉
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
                    className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 sponsor-container"
                    style={{
                        ...tierStyles[sponsorTier.tier],
                        transition: "all 0.3s ease",
                    }}
                    >
                    <div className="relative">
                        {/* Blur overlay */}
                        <div className="absolute inset-0 backdrop-blur-md bg-background/30 z-10 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary/60">TBC</span>
                        </div>

                        <div className="aspect-square flex items-center justify-center p-4">
                        <div className="w-1/2 h-1/2 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="company-name rounded-lg absolute inset-x-0 bottom-0 bg-primary bg-opacity-90 py-2 border-background border">
                        <p className="text-primary-foreground inline text-sm font-semibold text-center px-2 truncate">
                            To Be Confirmed
                        </p>
                        </div>
                    </div>
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
