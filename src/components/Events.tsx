"use client";

import { spacing, typography } from "@/styles/design-tokens";
import { Drawer } from "vaul";
import Button from "./inputs/Button";
import { useState } from "react";
import { BlockContent } from "./inputs/PortableTextComponents";

export default function Events(section) {
  const { headline, events } = section;
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventWrapperClass =
    events.length === 1
      ? "max-w-xl"
      : events.length === 2
      ? "max-w-6xl sm:grid-cols-2"
      : "sm:grid-cols-2 xl:grid-cols-3";

  if (!events || events.length === 0) return null;



  return (
    <Drawer.Root open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
      <section className={spacing.section} id="events">
        <div className={events.length < 4 ? spacing.container : "space-y-6 md:space-y-10"}>
          {headline && (
            <h2 className={`${typography.h3} text-center`}>{headline}</h2>
          )}

          <div className={`grid mx-auto ${eventWrapperClass} gap-6 md:gap-8`}>
            {events.map((event) => (
              <EventCard key={event._key} event={event} onLearnMore={() => setSelectedEvent(event)} />
            ))}
          </div>
        </div>
      </section>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="z-50 bg-cream flex flex-col mt-24 h-4/5 fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white flex-1">
            <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 bg-gray-300 mb-8" />

            <div className="max-w-md mx-auto space-y-4">
              <Drawer.Close asChild>
                <button type="button" className={`${typography.h6} cursor-pointer`}>
                  Close
                </button>
              </Drawer.Close>

              {selectedEvent && selectedEvent.info && (
                <div className="overflow-scroll">
                  <div className="space-y-1 flex-1">
                    <Drawer.Title className={`${typography.h4} !font-display`}>{selectedEvent.name}</Drawer.Title>
                    {selectedEvent.description && !selectedEvent.info.subheadline && (
                      <p className={`${typography.body}`}>{selectedEvent.description}</p>
                    )}
                    {selectedEvent.info.subheadline && (
                      <BlockContent value={selectedEvent.info.subheadline}/>
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

// Event card with Learn More
function EventCard({ event, onLearnMore }) {
  console.log(event.info)
  return (
    <div
      key={event._key}
      className="relative border-4 px-4 py-6 bg-white flex flex-col gap-4 sm:gap-6 sm:px-6 sm:py-8"
    >
      {event.tag && (
        <p
          className={`${typography.body} uppercase text-white bg-black py-1 px-5 absolute top-0 right-4 -translate-y-1/2`}
        >
          {event.tag}
        </p>
      )}

      <div className="space-y-1 flex-1">
        <h4 className={`${typography.h4} !font-display`}>{event.name}</h4>
        {event.description && (
          <p className={`${typography.body}`}>{event.description}</p>
        )}
      </div>

      <div className="space-y-1">
        {event.location && <h6 className={typography.h6}>{event.location}</h6>}
        {event.date && <p className={typography.body}>{event.date}</p>}
      </div>

      <div className="space-y-3">
        <Button
          url={event.link}
          style="secondary"
          text="buy tickets"
          classes="!w-full"
        />

        {event.info && (
          <Drawer.Trigger asChild>
            <button
              type="button"
              onClick={onLearnMore}
              className={`${typography.body} block underline text-center w-full cursor-pointer hover:italic`}
            >
              Learn More
            </button>
          </Drawer.Trigger>
        )}
      </div>
    </div>
  );
}
