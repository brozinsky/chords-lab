import Progress from "@/components/ui/progress/Progress";
import React, { useMemo } from "react";

interface TChordsValue {
  [key: string]: number;
}

type TProps = {
  chords: TChordsValue;
};

const SuggestedChords = ({ chords }: TProps) => {
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
      <div className="grid grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10 gap-4 relative">
        {Object.entries(chords).map(([key, value]) => {
          //   const percentage = Math.floor((value / totalSum) * 100);
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
              className="flex flex-col px-4 py-3 gap-2 rounded-xl bg-card border-2 border-neutral-400 cursor-pointer hover:border-neutral-300"
            >
              <div>
                <div>{key}</div>
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
