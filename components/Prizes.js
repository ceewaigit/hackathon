"use client";

import React from "react";
import { Gift, Trophy, Medal, DollarSign } from "lucide-react";

const Prizes = () => {
  return (
    <section id="prizes" className="container mx-auto max-w-screen-xl my-28">
      <h2 className="font-heading font-bold text-primary mt-6 mb-3 text-center text-3xl md:text-4xl">
        Prizes.
      </h2>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <BlurryPrizeCard
          place="1st"
          amount="$?,???"
          icon={<Trophy className="w-8 h-8 md:w-12 md:h-12" />}
          isFirst={true}
        />
        <BlurryPrizeCard
          place="2nd"
          amount="$?,???"
          icon={<Medal className="w-8 h-8 md:w-12 md:h-12" />}
        />
        <BlurryPrizeCard
          place="3rd"
          amount="$????"
          icon={<Gift className="w-8 h-8 md:w-12 md:h-12" />}
        />
      </div>
      <div>
        <hr className="w-full m-10" />
        <p className="my-3 text-primary font-mono mt-0 z-10 text-center text-sm md:text-base">
          Stand a chance to win <span className="text-accent">$3,000</span> worth
          of prizes!
        </p>
      </div>
    </section>
  );
};

const BlurryPrizeCard = ({ place, amount, icon, isFirst = false }) => (
  <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center mt-4 px-4 md:px-6 py-8 w-[240px] h-[280px] md:w-[280px] md:h-[320px] relative">
    <div
      className={`absolute -top-3 px-4 py-1 bg-white rounded-full flex justify-center items-center font-bold ${
        isFirst ? "text-accent border-accent border-2" : "text-secondary"
      }`}
    >
      <p>{place}</p>
    </div>
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 blur-[8px]">
      <div className="text-secondary">
        {icon}
      </div>
      <h2 className="font-mono font-bold text-secondary text-xl md:text-2xl">
        {amount}
      </h2>
      <div className="flex flex-col items-center text-secondary gap-2">
        <DollarSign className="w-6 h-6" />
        <p className="text-xs italic">why you looking 👀</p>
      </div>
    </div>
  </div>
);

export default Prizes;
