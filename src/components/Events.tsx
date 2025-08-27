"use client";

import { spacing, typography, buttons } from "@/styles/design-tokens";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Button from "./inputs/Button";

export default function Events(section) {
  const { headline, events } = section;
  console.log(section)
  

  const eventWrapperClass =
    events.length === 1
      ? "max-w-xl"
      : events.length === 2
      ? "max-w-6xl sm:grid-cols-2"
      : "sm:grid-cols-2 xl:grid-cols-3";


  if (!events || events.length === 0) return null;

  return (
    <section className={spacing.section}>
      <div className={events.length < 4 ? spacing.container : 'space-y-6 md:space-y-10'}>
        {headline && (
          <h2 className={`${typography.h3} text-center`}>{headline}</h2>
        )}

          <div className={`grid mx-auto ${eventWrapperClass} gap-6 md:gap-8`}>
            {events.map((event) => (
              <EventCard key={event._key} event={event} />
            ))}
          </div>
      </div>
    </section>
  );
}

// Extracted card for reuse
function EventCard({ event }) {
  return (
    <div key={event._key} className="relative border-4 px-4 py-6 bg-white flex flex-col gap-4 sm:gap-6 sm:px-6 sm:py-8">
      {/* <Image
        src={urlFor(event.image).url()}
        alt={event.name}
        width={768}
        height={600}
        className="aspect-[4/3] w-full h-auto object-cover"
      /> */}

      {event.tag && <p className={`${typography.body} uppercase text-white bg-black py-1 px-5 absolute top-0 right-4 -translate-y-1/2`}>{event.tag}</p>}
      <div className="space-y-1 flex-1">
        <h4 className={`${typography.h4} !font-display`}>{event.name}</h4>
        {event.description && <p className={`${typography.body}`}>{event.description}</p>}
      </div>
      <div className="space-y-1">
        {event.location && <h6 className={`${typography.h6}`}>{event.location}</h6>}
        {event.date && <p className={`${typography.body}`}>{event.date}</p>}
      </div>
      <div className="space-y-3">
        <Button url={event.link} style="secondary" text="buy tickets" classes="!w-full"/>
        {event.info && <button type="button" className={`${typography.body} block underline text-center w-full cursor-pointer hover:italic`}>Learn More</button>}
      </div>
    </div>
  );
}
