"use client";

import React, { useState, useEffect } from 'react';

const Prizes = () => {
  return (
    <section id="prizes" className="container mx-auto max-w-screen-xl px-4 my-16">
      <h2 className="font-heading font-bold text-primary mt-6 mb-3 text-center text-4xl">Prizes.</h2>
      <div className="mt-6 flex justify-center flex-row gap-4 ">
        <div className="bg-primary rounded-2xl shadow-inner shadow-black flex flex-col items-center mt-4 md:px-16 px-8 pb-10 gap-10">
          <div className="-mt-4 px-3 py-1 bg-primary rounded-full flex flex-col justify-center items-center w-max font-bold text-secondary"><p>2nd place</p></div>
          <div className="w-full flex flex-col gap-10 items-stretch">
            <div className="flex flex-row gap-10 justify-evenly">
              <img src="https://cdn-icons-png.flaticon.com/512/5005/5005572.png" alt="2nd place" />
            </div>
            <h2 className="font-mono font-bold text-secondary text-center text-2xl">$3000</h2>
          </div>
        </div>
        <div className="bg-primary rounded-2xl shadow-inner shadow-black flex flex-col items-center mt-4 md:px-16 px-8 pb-10 gap-10">
          <div className="-mt-4 px-3 py-1 bg-primary rounded-full flex flex-col justify-center items-center w-max font-bold text-accent border-accent border-2"><p>1st place</p></div>
          <div className="w-full flex flex-col gap-10 items-stretch">
            <div className="flex flex-row gap-10 justify-evenly">
              <img src="https://cdn-icons-png.flaticon.com/512/4737/4737496.png" alt="1st place" />
            </div>
            <h2 className="font-mono font-bold text-secondary text-center text-2xl">$5000</h2>
          </div>
        </div>
        <div className="bg-primary rounded-2xl shadow-inner shadow-black flex flex-col items-center mt-4 md:px-16 px-8 pb-10 gap-10">
          <div className="-mt-4 px-3 py-1 bg-primary rounded-full flex flex-col justify-center items-center w-max font-bold text-secondary"><p>3rd place</p></div>
          <div className="w-full flex flex-col gap-10 items-stretch">
            <div className="flex flex-row gap-10 justify-evenly">
              <img src="https://cdn-icons-png.flaticon.com/512/5005/5005579.png" alt="3rd place" />
            </div>
            <h2 className="font-mono font-bold text-secondary text-center text-2xl">$1500</h2>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center flex-row gap-4 ">
      <div className="bg-primary rounded-2xl shadow-inner shadow-black flex flex-col items-center mt-6 md:px-16 px-8 pb-10 gap-10">
        <div className="-mt-4 px-3 py-1 bg-primary rounded-full flex flex-col justify-center items-center w-max font-bold text-secondary"><p>Best Design</p></div>
        <div className="w-full flex flex-col gap-10 items-stretch">
          <div className="flex flex-row gap-10 justify-evenly">
            <img className='w-1/6' src="https://cdn-icons-png.flaticon.com/512/3176/3176367.png" alt="Best Design" />
          </div>
          <h2 className="font-mono font-bold text-secondary text-center text-2xl">$500</h2>
        </div>
      </div>
      <div className="bg-primary rounded-2xl shadow-inner shadow-black flex flex-col items-center mt-6 md:px-16 px-8 pb-10 gap-10">
        <div className="-mt-4 px-3 py-1 bg-primary rounded-full flex flex-col justify-center items-center w-max font-bold text-secondary"><p>People's Choice</p></div>
        <div className="w-full flex flex-col gap-10 items-stretch">
          <div className="flex flex-row gap-10 justify-evenly">
            <img className='w-1/6' src="https://cdn-icons-png.flaticon.com/512/3800/3800918.png" alt="People's Choice" />
          </div>
          <h2 className="font-mono font-bold text-secondary text-center text-2xl">$500</h2>
        </div>
      </div>
      </div>
      <div>
        <hr className="w-full m-10" />
        <p className="my-3 text-primary font-mono mt-0 z-10 underline text-center">
          More than <span className='text-accent'>$10,000</span> worth of cash to be won! <br />
          More prizes to be announced soon!
        </p>
      </div>
    </section>
  );
}

export default Prizes;