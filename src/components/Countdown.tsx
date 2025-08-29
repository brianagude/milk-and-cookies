"use client";

import { useEffect, useState } from "react";
import { typography } from "@/styles/design-tokens";

type CountdownProps = {
	countdownDate: string;
	countdownText?: string;
	style: "landing" | "home";
};

type TimeLeft = {
	days: number;
	hours: number;
	minutes: number;
};

const calculateTimeLeft = (date: string): TimeLeft => {
	const targetTime = new Date(date).getTime();
	if (Number.isNaN(targetTime)) return { days: 0, hours: 0, minutes: 0 };

	const now = Date.now();
	const diff = targetTime - now;

	if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };

	return {
		days: Math.floor(diff / (1000 * 60 * 60 * 24)),
		hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((diff / (1000 * 60)) % 60),
	};
};

export default function Countdown({
	countdownDate,
	countdownText,
	style = "home",
}: CountdownProps) {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
		calculateTimeLeft(countdownDate),
	);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft(countdownDate));
		}, 1000);

		return () => clearInterval(timer);
	}, [countdownDate]);

	if (!countdownDate || Number.isNaN(new Date(countdownDate).getTime()))
		return null;

	// Classes
	const landingClass = "bg-cream border-b-4";
	const homeClass = "";
	const dotContainerClass = "space-y-1 md:space-y-2";
	const dotClass = `${style === "landing" ? "bg-olive" : "bg-pink"} text-shadow-lg border-2 w-[10px] rounded-full aspect-square sm:w-4 sm:border-4 lg:w-5`;
	const counterClass = `${typography.h2} ${typography.blockLarge} w-full text-center !leading-none 2xl:text-9xl ${
		style === "landing" ? "text-olive" : "text-pink"
	}`;

	return (
		<section
			className={style === "landing" ? landingClass : homeClass}
			aria-label={`Countdown timer until ${new Date(countdownDate).toLocaleDateString()}`}
			role="timer"
		>
			<div
				className={
					style === "landing"
						? "py-10 px-4 md:py-12 md:px-8 xl:px-40"
						: "bg-white/60 border-4 py-10 px-4 md:py-12 md:px-8 xl:px-20"
				}
			>
				{countdownText && (
					<h3 className={`${typography.h4} text-center mb-6`}>
						{countdownText}
					</h3>
				)}

				{/* Timer digits */}
				<div
					className="flex items-center w-full justify-center"
					aria-hidden="true"
				>
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
				<div className="w-full flex items-center mt-2 gap-[10px] sm:gap-4 lg:gap-5 justify-center">
					<h6 className={`${typography.h5} w-full text-center`}>Days</h6>
					<h6 className={`${typography.h5} w-full text-center`}>Hours</h6>
					<h6 className={`${typography.h5} w-full text-center`}>Minutes</h6>
				</div>
			</div>
		</section>
	);
}
