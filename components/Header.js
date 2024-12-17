"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="text-foreground">
      <section
        className="px-4 sm:px-6 mx-auto max-w-7xl mt-20"
        style={{
          background: `radial-gradient(30.03% 55% at 50% 0%, rgb(115, 115, 115) 0%, hsl(var(--background)) 100%)`,
        }}
      >
        {/* Responsive narrower top border */}
        <div className="border-muted border-t-2 mx-auto w-[90%] sm:w-[80%] md:w-[70%]" />

        <div>
          <div className="flex flex-col relative">
            <div className="flex flex-col items-center mt-20 sm:mt-24 px-4 sm:px-6">
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold w-full md:w-[750px] text-center font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                  Datathon <br /> 2025
                </span>
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold w-full md:w-[750px] mt-2 tracking-tighter text-center font-mono">
                The biggest <span className="text-smu">SMU</span>
                <span className="text-accent">BIA</span> hackathon of the year.
              </h1>
              <p className="text-muted-foreground mt-4 w-full sm:w-[400px] text-center text-lg sm:text-xl font-normal">
                Learn new skills, <br className="hidden sm:inline" />
                Test your coding limits, <br className="hidden sm:inline" />
                Connect with industry professionals,{" "}
                <br className="hidden sm:inline" />
                and win amazing prizes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://youtu.be/xvFZjo5PgG0?si=ZgKdchBXYiaonQUf"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto focus:shadow-outline font-medium px-6 py-3 mt-2 md:mt-8 justify-center items-center shadow-inner shadow-black rounded-2xl duration-300 transition focus:outline-none select-none text-lg bg-accent hover:bg-accent/90 hover:border-2 text-accent-foreground border-card hover:scale-105">
                    Sign up now!
                  </button>
                </a>
              </div>
            </div>
            <div className="hidden md:block -mt-8 -mb-8 pointer-events-none mx-auto">
              <Image
                src="/scratch.png"
                alt="photos"
                width={1200}
                height={500}
                className="w-full"
              />
            </div>
            <div className="md:hidden pointer-events-none mx-auto mt-8">
              <Image
                src="/scratch.png"
                alt="photos"
                width={1200}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
