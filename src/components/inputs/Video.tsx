"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), { ssr: false });

interface VideoProps {
  playbackId: string;
  classes?: string;
  time?: number;
}

export default function Video({ playbackId, classes, time=0 }: VideoProps) {
  if (!playbackId) return null;

  return (
    <div className={classes}>
      <div className="absolute inset-0 bg-black/30 z-10" />
      <Image
        src={`https://image.mux.com/${playbackId}/thumbnail.jpg?time=${time}`}
        alt="Recap Video"
        className="object-cover w-full h-full"
        fill
        priority
        sizes="100vw"
      />
      <MuxPlayer
        playbackId={playbackId}
        metadata={{ video_title: "Recap Video" }}
        autoPlay
        muted
        loop
        nohotkeys
        // className={`absolute inset-0 h-full w-full`}
      />
      
    </div>
  );
}
