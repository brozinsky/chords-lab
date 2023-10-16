import useSelectedChord from "@/stores/chords/useSelectedChord";
import ChordInfo from "./_partials/ChordInfo";
import PianoChord from "./_partials/PianoChord";
import React from "react";
import { processIntervals } from "@/utils/processIntervals";
import shortid from "shortid";

const ChordDetails = () => {
  const { selectedChord, root } = useSelectedChord();

  if (selectedChord === undefined) return;

  return (
    <div>
      <h1 className="text-5xl mb-6 text-center">
        {selectedChord.name && selectedChord.name.length > 3
          ? selectedChord.name
          : root + " " + (selectedChord.aliases && selectedChord.aliases[0])}
      </h1>
      <PianoChord />
      <section className="mt-6 space-y-2">
        <div className="items-end flex flex-row gap-4">
          <span className="w-[4rem]">Notes:</span>
          {selectedChord.notes?.map((note, index) => {
            const isLastItem =
              (selectedChord.notes?.length as number) - 1 !== index;
            return (
              <React.Fragment key={note}>
                <span
                  data-tooltip-id={"note-" + note}
                  className="text-center text-2xl min-w-[2rem]"
                >
                  {note}
                </span>
                <span className="text-2xl text-center">
                  {isLastItem ? "-" : null}
                </span>
              </React.Fragment>
            );
          })}
        </div>
        <div className="items-end flex flex-row gap-4">
          <span className="w-[4rem]">Formula:</span>
          {processIntervals(selectedChord.intervals).map((interval, index) => {
            const isLastItem =
              processIntervals(selectedChord.intervals).length - 1 !== index;
            return (
              <React.Fragment key={shortid.generate()}>
                <span
                  data-tooltip-id={"interval-" + interval}
                  className="cursor-default text-center text-2xl min-w-[2rem]"
                >
                  {interval}
                </span>
                <span className="text-2xl text-center">
                  {isLastItem ? "-" : null}
                </span>
                {/* <ReactTooltip
                  key={interval}
                  id={"interval-" + interval}
                  place="right"
                  variant="light"
                  content={findIntervalNameBySymbol(interval) as string}
                /> */}
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ChordDetails;
