"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

interface Track {
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  playedAt?: string;
}

export default function SpotifyWidget() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch("/api/spotify");
        const data = await res.json();
        if (data.tracks?.length > 0) {
          setTracks(data.tracks.slice(0, 5));
        }
      } catch (err) {
        console.error("Error fetching Spotify data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTracks();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-3 text-text-secondary text-sm font-mono">
        <div className="w-4 h-4 border-2 border-border border-t-accent rounded-full animate-spin" />
        Loading tracks...
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <p className="text-sm text-text-secondary font-mono">
        No tracks available right now. Check back later.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {tracks.map((track, i) => (
        <FadeIn key={`${track.songUrl}-${i}`} delay={i * 0.05}>
          <a
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 py-3 px-4 -mx-4 rounded-lg hover:bg-bg-secondary/60 transition-all duration-300"
          >
            <span className="text-text-secondary/40 font-mono text-xs w-5 text-right shrink-0">
              {i + 1}
            </span>

            {track.albumImageUrl && (
              <img
                src={track.albumImageUrl}
                alt={track.album}
                className="w-10 h-10 rounded object-cover shrink-0 shadow-sm"
                loading="lazy"
              />
            )}

            <div className="flex-1 min-w-0">
              <p className="text-sm text-text-primary truncate group-hover:text-accent transition-colors duration-300">
                {track.title}
              </p>
              <p className="text-xs text-text-secondary truncate">
                {track.artist}
              </p>
            </div>

            <span className="text-xs text-text-secondary/30 group-hover:text-green-600 transition-colors duration-300 shrink-0">
              ▶
            </span>
          </a>
        </FadeIn>
      ))}

      <FadeIn delay={0.3} className="mt-4">
        <a
          href="https://open.spotify.com/user/h85k4crnf27w61e7wynzb6iti"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-colors duration-300"
        >
          follow on spotify ↗
        </a>
      </FadeIn>
    </div>
  );
}
