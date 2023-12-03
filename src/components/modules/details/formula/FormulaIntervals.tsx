import useSelectedChord from "@/stores/chords/useSelectedChord";
import { processIntervals } from "@/utils/processIntervals";
import React from "react";
import shortid from "shortid";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { findIntervalNameBySymbol } from "@/utils/notes";

export default function FormulaIntervals() {
  const { selectedChord } = useSelectedChord();

  return (
    <div id="FormulaIntervals" className="flex flex-row">
      {processIntervals(selectedChord!.intervals).map((interval, index) => {
        const isLastItem =
          processIntervals(selectedChord!.intervals).length - 1 !== index;
        return (
          <React.Fragment key={shortid.generate()}>
            <span
              data-tooltip-id={"interval-" + interval}
              className="cursor-default text-center text-2xl min-w-[2rem]"
            >
              {interval}
            </span>
            <ReactTooltip
              key={interval}
              id={"interval-" + interval}
              place="bottom"
              variant="light"
              content={findIntervalNameBySymbol(interval) as string}
            />
            <span className="text-2xl text-center">
              {isLastItem ? "-" : null}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
}
