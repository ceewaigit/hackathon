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
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimerBlock = ({ value, label }) => (
    <div className="flex flex-col items-center p-2">
      <div className="bg-secondary rounded-xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center border-2 border-accent">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-sm sm:text-base mt-2 font-medium">{label}</span>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        The <span className="text-accent underline">datathon</span> timer
      </h1>

      <div className="bg-secondary/50 rounded-2xl p-6 backdrop-blur-sm">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
          <TimerBlock value={timeLeft.days} label="Days" />
          <TimerBlock value={timeLeft.hours} label="Hours" />
          <TimerBlock value={timeLeft.minutes} label="Minutes" />
          <TimerBlock value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="text-center mt-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Till Datathon starts
          </h2>
          <p className="text-sm text-gray-500">
            Please make sure to signup before the deadline!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
