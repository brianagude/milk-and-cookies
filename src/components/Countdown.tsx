"use client";
import { useEffect, useState } from "react";

type CountdownProps = {
  countdownDate: string;
  countdownText?: string;
  style?: "landing" | "home";
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
};

const calculateTimeLeft = (date: string): TimeLeft => {
  const targetDate = new Date(date).getTime();
  if (Number.isNaN(targetDate)) return { days: 0, hours: 0, minutes: 0 };

  const now = Date.now();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
  };
};

export default function Countdown({ countdownDate, countdownText, style = "home" }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(countdownDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(countdownDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownDate]);

  // Validate input date
  if (!countdownDate || Number.isNaN(new Date(countdownDate).getTime())) {
    return null;
  }

  // Styling classes
  const landingClass = "bg-cream border-black border-4 border-b-0";
  const homeClass = "";
  const dotContainerClass = "space-y-1 md:space-y-2";
  const dotClass = `${style === "landing" ? "bg-olive" : "bg-pink"} text-shadow-lg border-2 w-[10px] rounded-full aspect-square sm:w-4 sm:border-4 lg:w-5`;
  const counterClass = `time-left w-full text-center text-stroke text-shadow-lg font-bold leading-[1] tracking-wider uppercase font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl ${style === "landing" ? "text-olive" : "text-pink"}`;
  const formatClass = "w-full text-center font-bold leading-[1.33] tracking-wider uppercase font-sans text-xl sm:text-3xl";

  return (
    <section
      className={`${style === "landing" ? landingClass : homeClass} max-w-[1728px] mx-auto`}
      aria-label={`Countdown timer until ${new Date(countdownDate).toLocaleDateString()}`}
      role="timer"
    >
      <div className="py-10 px-4 md:py-12 md:px-8 xl:px-20">
        {countdownText && (
          <h2 className="text-center font-display font-bold leading-[1.33] tracking-wider uppercase text-2xl mb-4 sm:mb-8 sm:text-4xl">
            {countdownText}
          </h2>
        )}

        {/* Timer digits */}
        <div className="flex items-center w-full justify-center" aria-hidden="true">
          <time className={counterClass} dateTime={`${timeLeft.days}D`}>
            {timeLeft.days}
          </time>
          <div className={dotContainerClass} aria-hidden="true">
            <div className={dotClass} />
            <div className={dotClass} />
          </div>

          <time className={counterClass} dateTime={`${timeLeft.hours}H`}>
            {timeLeft.hours}
          </time>
          <div className={dotContainerClass} aria-hidden="true">
            <div className={dotClass} />
            <div className={dotClass} />
          </div>

          <time className={counterClass} dateTime={`${timeLeft.minutes}M`}>
            {timeLeft.minutes}
          </time>
        </div>

        {/* Labels */}
        <div
          className="w-full flex items-center mt-2 gap-[10px] sm:gap-4 lg:gap-5 justify-center"
        >
          <p className={formatClass}>Days</p>
          <p className={formatClass}>Hours</p>
          <p className={formatClass}>Minutes</p>
        </div>
      </div>
    </section>
  );
}
