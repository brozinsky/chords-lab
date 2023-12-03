import React from "react";
import { intervalsLib } from "@/lib/intervals";
import clsx from "clsx";
import { motion } from "framer-motion";
import useSelectedChord from "@/stores/chords/useSelectedChord";
import usePlayPiano from "@/hooks/usePlayPiano";
import { Note } from "tonal";

export default function FormulaOctaveIntervals() {
  const { selectedChord } = useSelectedChord();
  const { playPianoNotes } = usePlayPiano();
  return (
    <div
      id="FormulaOctaveIntervals"
      className="grid w-full gap-0.5 grid-cols-13"
    >
      {intervalsLib.map(
        ({ id, range, symbol, name, isConsonant, symbolSecondary }) => {
          const isIntervalIncluded = selectedChord!.intervals!.some(
            (interval: string) => symbolSecondary.includes(interval)
          );

          if (range > 12) return;
          return (
            <React.Fragment key={symbol}>
              <motion.div
                onClick={
                  isIntervalIncluded
                    ? () =>
                        playPianoNotes([
                          Note.transpose(
                            selectedChord!.tonic as string,
                            symbolSecondary[0]
                          ),
                        ])
                    : undefined
                }
                whileTap={{ scale: 0.85 }}
                className={clsx(
                  "border border-transparent select-none transition flex items-center justify-center text-lg bg-neutral-600 rounded-xl p-1",
                  isIntervalIncluded
                    ? "hover:bg-neutral-500 cursor-pointer p-1"
                    : "self-center justify-self-center w-5 h-5 text-sm p-1"
                )}
              >
                {isIntervalIncluded && symbol}
              </motion.div>
            </React.Fragment>
          );
        }
      )}
    </div>
  );
}
