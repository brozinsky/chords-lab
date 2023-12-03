import { findIntervalNameBySymbol } from "@/utils/notes";
import { processIntervals } from "@/utils/processIntervals";
import React from "react";
import shortid from "shortid";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Modal from "@/components/ui/Modal";
import ButtonInfo from "@/components/ui/buttons/ButtonInfo";
import ChordFormulaModal from "../../chord-details/_partials/ChordFormulaModal";

type Props = {
  notes: string[];
  intervals: string[];
};

export default function FormulaScales({ notes, intervals }: Props) {
  return (
    <section
      id="FormulaScales"
      className="flex flex-col gap-2 px-6 rounded-2xl bg-neutral-800 p-2 pb-4"
    >
      <div className="w-[5rem] flex items-center">
        <h2>Formula:</h2>
        <Modal trigger={<ButtonInfo />}>
          <ChordFormulaModal />
        </Modal>
      </div>

      <div className="flex gap-2">
        {processIntervals(intervals).map((interval, index) => {
          return (
            <React.Fragment key={shortid.generate()}>
              <span
                data-tooltip-id={"interval-" + interval}
                className="cursor-default px-3 text-center text-2xl min-w-[2rem]"
              >
                {interval}
              </span>
              <span className="text-2xl text-center">
                {notes.length - 1 !== index ? "-" : null}
              </span>
              <ReactTooltip
                key={interval}
                id={"interval-" + interval}
                place="bottom"
                variant="light"
                content={findIntervalNameBySymbol(interval) as string}
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
