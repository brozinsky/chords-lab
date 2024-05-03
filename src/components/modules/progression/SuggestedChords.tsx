import Progress from "@/components/ui/progress/Progress";
import clsx from "clsx";
import React, { useMemo } from "react";
import { Interval, Note, Progression, RomanNumeral } from "tonal";

interface TChordsValue {
  [key: string]: number;
}

type TProps = {
  chords: TChordsValue;
  scaleKey: string;
};

const SuggestedChords = ({ chords, scaleKey }: TProps) => {
  const maxValue = useMemo(() => {
    return Math.max(...Object.values(chords));
  }, [chords]);

  // const totalSum = useMemo(() => {
  //   return Object.values(chords).reduce((sum, value) => sum + value, 0);
  // }, [chords]);

  return (
    <>
      <div>
        <h3 className="mb-5">Suggested</h3>
      </div>
      <div className="grid grid-cols-6 lg:grid-cols-8 gap-4 relative">
        {Object.entries(chords).map(([key, value]) => {
          function standardizeChord(chord: string) {
            // Initialize an empty array to store the parts of the chord
            let parts = [];

            if (chord.endsWith("maj7")) {
              parts.push(chord.slice(0, -4), "maj7");
            } else if (chord.endsWith("maj")) {
              parts.push(chord.slice(0, -3));
            } else if (chord.endsWith("m")) {
              parts.push(chord.slice(0, -1).toLowerCase());
            } else if (chord.endsWith("sus")) {
              parts.push(chord.slice(0, -3), "sus");
            } else {
              parts.push(chord);
            }

            return parts;
          }
          const progressValue = Math.max(
            Math.floor((value / maxValue) * 100),
            10
          );
          let indicatorColor = "bg-emerald-500";
          if (progressValue <= 10) {
            indicatorColor = "bg-emerald-500 opacity-50";
          } else if (progressValue <= 25) {
            indicatorColor = "bg-emerald-500 opacity-60";
          } else if (progressValue <= 50) {
            indicatorColor = "bg-emerald-500 opacity-70";
          } else if (progressValue <= 66) {
            indicatorColor = "bg-emerald-500 opacity-80";
          } else {
            indicatorColor = "bg-emerald-500 opacity-100";
          }
          return (
            <div
              key={key}
              className="relative flex flex-col px-4 py-3 gap-2 rounded-xl bg-card border-2 border-neutral-400 cursor-pointer hover:border-neutral-300"
            >
              <div>
                <div className="flex flex-row gap-0.5 items-end absolute left-1.5 top-1.5">
                  {standardizeChord(key).map((item, index) => {
                    return (
                      <div className={clsx(index > 0 ? "text-xs" : "text-sm",)} key={item}>
                        {item}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5">{Progression.fromRomanNumerals(scaleKey, [key])}</div>
                {/* <div>{percentage}%</div> */}
              </div>
              <div>
                <Progress
                  value={progressValue}
                  indicatorColor={indicatorColor}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SuggestedChords;
