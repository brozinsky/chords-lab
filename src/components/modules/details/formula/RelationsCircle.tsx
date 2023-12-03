import React from "react";
import { intervalsLib } from "@/lib/intervals";
import useSelectedChord from "@/stores/chords/useSelectedChord";
import { Interval, Note } from "tonal";
import IntervalsConnectionsSVG from "@/components/elements/svg/IntervalsConnectionsSVG";
import clsx from "clsx";
import usePlayPiano from "@/hooks/usePlayPiano";

export default function RelationsCircle() {
  const { selectedChord } = useSelectedChord();
  const { playPianoNotes } = usePlayPiano();
  return (
    <div id="RelationsCircle" className="relative w-fit h-fit">
      {/* <span className="absolute top-4 -left-4 transform rotate-[210deg]"> */}
      {intervalsLib.map(
        (
          {
            consonance,
            rotate,
            range,
            symbol,
            name,
            isConsonant,
            symbolSecondary,
          },
          index
        ) => {
          let processedIntervals = selectedChord!.intervals;

          const isIntervalIncluded = selectedChord!.intervals!.some(
            (interval: string) => symbolSecondary.includes(interval)
          );
          if (range > 11) return;
          if (isIntervalIncluded && index > 0) {
            processedIntervals = [];

            let thisIntervalIndex: number | undefined = 0;
            symbolSecondary.forEach((symbol) => {
              if ((selectedChord!.intervals?.indexOf(symbol) as number) > 0) {
                thisIntervalIndex = selectedChord!.intervals?.indexOf(symbol);
              }
            });
            const slicedIntervals =
              selectedChord!.intervals?.slice(thisIntervalIndex);

            if (slicedIntervals!.length < 2) return;
            console.log("slicedIntervals", slicedIntervals);

            slicedIntervals!.forEach((_, index, array) => {
              if (index < array.length - 1) {
                const substractedInterval = Interval.substract(
                  array[index + 1],
                  slicedIntervals![0]
                );
                console.log("to", array[index + 1], slicedIntervals![0]);
                processedIntervals?.push(substractedInterval as string);
              }
            });
          }

          return (
            <React.Fragment key={symbol}>
              {isIntervalIncluded && (
                <span className={`absolute -top-4 -left-4 transform ${rotate}`}>
                  <IntervalsConnectionsSVG
                    intervals={processedIntervals as string[]}
                  />
                </span>
              )}
            </React.Fragment>
          );
        }
      )}

      <div className="relative interval-circle__container mx-auto">
        {intervalsLib.map(
          ({ range, symbol, name, isConsonant, symbolSecondary }) => {
            const isIntervalIncluded = selectedChord!.intervals!.some(
              (interval: string) => symbolSecondary.includes(interval)
            );
            if (range > 11) return;
            return (
              <React.Fragment key={symbol}>
                <div
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
                  className={clsx(
                    "border border-transparent select-none transition flex items-center justify-center text-lg bg-neutral-500 rounded-xl p-1",
                    isIntervalIncluded
                      ? "interval-circle__item--active hover:bg-neutral-400 cursor-pointer p-1"
                      : "self-center justify-self-center w-5 h-5 text-sm p-1"
                  )}
                >
                  {isIntervalIncluded && symbol}
                </div>
              </React.Fragment>
            );
          }
        )}
      </div>
    </div>
  );
}
