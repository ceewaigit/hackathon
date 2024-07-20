"use client";

import React from 'react';

const Prizes = () => {
  return (
    <section id="prizes" className="container mx-auto max-w-screen-xl pt-4 my-16">
      <h2 className="font-heading font-bold text-primary mt-6 mb-3 text-center text-3xl md:text-4xl">Prizes.</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <PrizeCard place="1st place" amount="$5000" image="https://cdn-icons-png.flaticon.com/512/4737/4737496.png" isFirst={true} />
        <PrizeCard place="2nd place" amount="$3000" image="https://cdn-icons-png.flaticon.com/512/5005/5005572.png" />
        <PrizeCard place="3rd place" amount="$1500" image="https://cdn-icons-png.flaticon.com/512/5005/5005579.png" />
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <PrizeCard place="Best Design" amount="$500" image="https://cdn-icons-png.flaticon.com/512/3176/3176367.png" />
        <PrizeCard place="People's Choice" amount="$500" image="https://cdn-icons-png.flaticon.com/512/3800/3800918.png" />
      </div>
      <div>
        <hr className="w-full m-10" />
        <p className="my-3 text-primary font-mono mt-0 z-10 text-center text-sm md:text-base">
          More than <span className='text-accent'>$10,000</span> worth of cash to be won! <br />
          More prizes to be announced soon!
        </p>
      </div>
    </section>
  );
}

const PrizeCard = ({ place, amount, image, isFirst = false }) => (
  <div className="bg-primary rounded-2xl shadow-inner shadow-black flex flex-col items-center mt-4 px-4 md:px-8 pb-6 md:pb-10 gap-4 md:gap-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs">
    <div className={`-mt-4 px-3 py-1 bg-primary rounded-full flex flex-col justify-center items-center w-max font-bold ${isFirst ? 'text-accent border-accent border-2' : 'text-secondary'}`}>
      <p>{place}</p>
    </div>
    <div className="w-full flex flex-col gap-4 md:gap-10 items-stretch">
      <div className="flex flex-row justify-center">
        <img src={image} alt={place} className="w-1/3 md:w-1/2" />
      </div>
      <h2 className="font-mono font-bold text-secondary text-center text-xl md:text-2xl">{amount}</h2>
    </div>
  </div>
);

export default Prizes;