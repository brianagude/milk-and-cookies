"use client";

import Image from "next/image";
import { useState } from "react";
import { Drawer } from "vaul";
import { urlFor } from "@/sanity/lib/image";
import { typography } from "@/styles/design-tokens";
import Button from "./inputs/Button";
import { BlockContent } from "./inputs/PortableTextComponents";

// Event interface
interface EventDetail {
	_key: string;
	caption: string;
	content: any;
}

interface EventInfo {
	subheadline?: any;
	details?: EventDetail[];
}

interface EventType {
	_key: string;
	name: string;
	description?: string;
	info?: EventInfo;
	tag?: string;
	location?: string;
	date?: string;
	link: string;
}

interface EventsProps {
	headline?: string;
	events: EventType[];
}

// Main Events Component
export default function Events({ headline, events }: EventsProps) {
	const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

	const eventWrapperClass =
		events.length === 1
			? "max-w-xl"
			: events.length === 2
				? "max-w-6xl sm:grid-cols-2"
				: events.length === 4
					? "max-w-6xl sm:grid-cols-2"
					: "lg:grid-cols-2 2xl:grid-cols-3";

	if (!events || events.length === 0) return null;

	return (
		<Drawer.Root
			open={!!selectedEvent}
			onOpenChange={(open) => !open && setSelectedEvent(null)}
		>
			<section id="events">
				<div className="space-y-12 md:space-y-16">
					{headline && (
						<h2 className={`${typography.h3} text-center`}>{headline}</h2>
					)}

					<ul className={`grid mx-auto ${eventWrapperClass} gap-8 md:gap-10`}>
						{events.map((event) => (
							<EventCard
								key={event._key}
								event={event}
								onLearnMore={() => setSelectedEvent(event)}
							/>
						))}
					</ul>
				</div>
			</section>

			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
				<Drawer.Content className="z-50 flex flex-col h-full fixed bottom-0 left-0 right-0 outline-none">
					<div className="p-2 !pb-0 flex-1 sm:p-10">
						<div className="w-full h-full space-y-4 bg-white p-4 border-4 border-b-0 lg:p-10">
							<div className="w-full flex justify-end mb-8 sm:mb-12">
								<Drawer.Close asChild>
									<button
										type="button"
										className={`${typography.h6} cursor-pointer`}
										aria-label="Close event details"
									>
										Close
									</button>
								</Drawer.Close>
							</div>

							{selectedEvent?.info && (
								<div className="overflow-auto max-w-5xl mx-auto">
									<div className="flex-1 space-y-5 sm:space-y-8 lg:space-y-12">
										<div className="space-y-2">
											<Drawer.Title
												className={`${typography.h3} !font-display`}
											>
												{selectedEvent.name}
											</Drawer.Title>
											{selectedEvent.description &&
												!selectedEvent.info.subheadline && (
													<p className={typography.body}>
														{selectedEvent.description}
													</p>
												)}
											{selectedEvent.info.subheadline && (
												<BlockContent value={selectedEvent.info.subheadline} />
											)}
										</div>

										<Button
											url={selectedEvent.link}
											style="primary"
											text="Get tickets"
											classes="!w-full"
										/>

										{selectedEvent.info.details && (
											<Accordion details={selectedEvent.info.details} />
										)}

										{selectedEvent.info.details.length > 5 && (
											<Button
												url={selectedEvent.link}
												style="primary"
												text="Get tickets"
												classes="!w-full"
											/>
										)}
									</div>
								</div>
							)}
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}

// Accessible Accordion for details
function Accordion({ details }: { details: EventDetail[] }) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<ul className="space-y-6">
			{details.map((detail, idx) => (
				<div
					key={detail._key}
					className="border-4 cursor-pointer hover:bg-black/10"
				>
					<button
						type="button"
						aria-expanded={openIndex === idx}
						aria-controls={`accordion-panel-${detail._key}`}
						className={`${typography.h6} flex items-center justify-between gap-2 w-full cursor-pointer p-6`}
						id={`accordion-header-${detail._key}`}
						onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
					>
						<span>{detail.caption}</span>
						<Image
							src={openIndex === idx ? "/minus.svg" : "/plus.svg"}
							height={24}
							width={24}
							alt={openIndex === idx ? "Collapse section" : "Expand section"}
						/>
					</button>
					<div
						id={`accordion-panel-${detail._key}`}
						hidden={openIndex !== idx}
						className="p-6 pt-0"
					>
						{openIndex === idx && (
							<div className="grid gap-4 md:grid-cols-[0.4fr_1fr] md:gap-6">
								{detail.photo && (
									<Image
										src={urlFor(detail.photo).url()}
										alt={detail.photo.alt}
										width={768}
										height={576}
										className="object-cover rounded-sm"
									/>
								)}
								<BlockContent value={detail.content} />
							</div>
						)}
					</div>
				</div>
			))}
		</ul>
	);
}

// Event Card (with Learn More)
function EventCard({
	event,
	onLearnMore,
}: {
	event: EventType;
	onLearnMore: () => void;
}) {
	return (
		<div className="relative border-4 px-4 py-6 bg-white flex flex-col gap-6 sm:gap-8 sm:px-6 sm:py-10">
			{event.tag && (
				<p
					className={`${typography.body} uppercase text-white bg-black py-1 px-5 absolute top-0 right-4 -translate-y-1/2`}
				>
					{event.tag}
				</p>
			)}

			<div className="space-y-1 flex-1">
				<h4 className={`${typography.h4} !font-display`}>
					{event.name || "Untitled Event"}
				</h4>
				{event.description && (
					<p className={`${typography.body}`}>{event.description}</p>
				)}
			</div>

			<div className="space-y-1">
				{event.location && <h6 className={typography.h6}>{event.location}</h6>}
				{event.date && <p className={typography.body}>{event.date}</p>}
			</div>

			<div className="flex flex-col gap-2 items-center w-full">
				{event.info && (
					<Drawer.Trigger asChild>
						<button
							type="button"
							onClick={onLearnMore}
							className={`${typography.body} block underline text-center w-full cursor-pointer hover:italic`}
							aria-label={`Learn more about ${event.name}`}
						>
							Learn More
						</button>
					</Drawer.Trigger>
				)}
				<Button
					url={event.link}
					style="secondary"
					text="Get tickets"
					classes="!w-full"
				/>
			</div>
		</div>
	);
}
