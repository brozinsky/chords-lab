import { useEffect, useMemo } from "react";
import Progress from "@/components/ui/progress/Progress";
import { simplifyChordType } from "@/utils/functions/music-theory/simplifyChordType";
import { Chord, Progression } from "tonal";
import clsx from "clsx";
import { TChordProgressionItem } from "@/utils/types";
import MagicWandSVG from "@/components/elements/svg/icons/interface/MagicWandSVG";
import { standardizeChord } from "@/utils/functions/music-theory/standardizeChord";

interface TChordsValue {
  [key: string]: number;
}

type TProps = {
  progression: TChordProgressionItem[];
  chords: TChordsValue;
  scaleKey: string;
  editedChordId: string | null;
  setChordKey: (key: string) => void;
  setChordType: (type: string) => void;
  setChordRomanNumeral: (key: string, type: string) => void;
};

const SuggestedChords = ({
  editedChordId,
  chords,
  progression,
  scaleKey,
  setChordKey,
  setChordType,
  setChordRomanNumeral,
}: TProps) => {
  const maxValue = useMemo(() => {
    return Math.max(...Object.values(chords));
  }, [chords]);

  // const totalSum = useMemo(() => {
  //   return Object.values(chords).reduce((sum, value) => sum + value, 0);
  // }, [chords]);

  const handleOnClick = (key: string, type: string) => {
    setChordKey(key);
    setChordType(type);
    setChordRomanNumeral(key, type);
  };

  return (
    <>
      <div>
        <h3 className="mb-3 flex gap-1.5 items-center">
          <MagicWandSVG width={20} />
          Suggested
        </h3>
      </div>
      <div className="grid grid-cols-6 lg:grid-cols-8 gap-4 relative">
        {Object.entries(chords).map(([key, value]) => {
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
          const currentChordName = Progression.fromRomanNumerals(scaleKey, [
            key,
          ]);
          const currentChordTonic = Chord.get(currentChordName[0]).tonic;
          const currentChordType = Chord.get(currentChordName[0]).type;

          const editedChordType = progression.find(
            (item) => item.id === editedChordId
          )?.type;
          const editedChordKey = progression.find(
            (item) => item.id === editedChordId
          )?.key;

          return (
            <button
              key={key}
              onClick={() =>
                currentChordTonic &&
                currentChordType &&
                handleOnClick(
                  currentChordTonic,
                  simplifyChordType(currentChordType)
                )
              }
              className={clsx(
                editedChordKey === currentChordTonic &&
                  editedChordType === simplifyChordType(currentChordType) &&
                  "!border-emerald-500",
                "relative flex flex-col px-4 py-3 gap-2 rounded-xl bg-card border-2 border-neutral-400 cursor-pointer hover:border-neutral-300"
              )}
            >
              <div>
                <div className="flex flex-row gap-0.5 items-end absolute left-1.5 top-1.5">
                  {standardizeChord(key).map((item, index) => {
                    return (
                      <div
                        className={clsx(index > 0 ? "text-xs" : "text-sm")}
                        key={item}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5">
                  {Progression.fromRomanNumerals(scaleKey, [key])}
                </div>
                {/* <div>{percentage}%</div> */}
              </div>
              <div>
                <Progress
                  value={progressValue}
                  indicatorColor={indicatorColor}
                />
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SuggestedChords;
