"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-13T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimerBlock = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center w-1/2 p-2 sm:w-auto sm:p-4">
      <span className="text-foreground font-bold text-sm sm:text-lg md:text-xl lg:text-2xl tracking-normal">
        {label}
      </span>
      <div className="relative mt-1 sm:mt-2 w-full aspect-square max-w-[70px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px] min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px]">
        <div className="flex justify-center items-center w-full h-full rounded-xl sm:rounded-2xl bg-secondary border-2 sm:border-4 border-secondary overflow-hidden">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            {value.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-center text-foreground font-mono mb-4 sm:mb-6">
        The <span className="text-accent underline font-mono">datathon</span>{" "}
        timer.
      </h1>
      <div className="rounded-[20px] flex flex-col items-center py-6 sm:py-8 px-3 sm:px-4 shadow-card bg-card">
        <div className="flex flex-wrap justify-center text-foreground font-bold tracking-tighter w-full max-w-[300px] sm:max-w-none">
          <TimerBlock value={timeLeft.days} label="Days" />
          <TimerBlock value={timeLeft.hours} label="Hours" />
          <TimerBlock value={timeLeft.minutes} label="Minutes" />
          <TimerBlock value={timeLeft.seconds} label="Seconds" />
        </div>
        <h2 className="text-foreground font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight text-center mt-4 sm:mt-6 md:mt-8">
          Till Datathon starts.
        </h2>
        <p className="mt-2 text-muted-foreground text-center text-xs sm:text-sm md:text-base">
          Please make sure to signup before the deadline!
        </p>
      </div>
    </section>
  );
};

export default CountdownTimer;
