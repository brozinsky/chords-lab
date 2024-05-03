import ArrowSmSVG from "@/components/elements/svg/icons/interface/ArrowSmSVG";
import ButtonProgression from "@/components/ui/buttons/ButtonProgression";
import Select from "@/components/ui/dropdowns/Select";
import React, { useEffect, useState } from "react";

const notesOptions = [
  { id: 1, value: ["I", "IV", "v", "iv"], name: "I - IV - v - iv" },
  { id: 2, value: ["I", "IV", "I", "V", "I"], name: "I - IV - v - iv" },
  { id: 3, value: ["I", "V", "IV", "V"], name: "I - IV - v - iv" },
  { id: 4, value: ["I", "IV", "ii", "V"], name: "I - IV - v - iv" },
];

type TChordProgressionItem = {
  id: number;
  key: string;
  type: string;
  romanNumeral: string;
};

type TProps = {
  progression: TChordProgressionItem[];
  scaleKey: string;
  scaleType: string;
  chordIndex: number;
  setChordIndex: (index: number) => void
  removeChord: (index: number) => void
};

const ChordProgression = ({
  progression,
  scaleKey,
  scaleType,
  chordIndex,
  setChordIndex,
  removeChord,
}: TProps) => {

  return (
    <div className="border border-neutral-500 w-full min-h-48 bg-neutral-800 flex flex-col gap-2 px-6 rounded-2xl py-4 justify-between">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl text-left">Chord Progression</h2>
        {/* <Select
          size={"sm"}
          variant={"outlined"}
          contentType={"tonic"}
          options={notesOptions}
          displayValue={chordProgression.join(" - ")}
          state={chordProgression}
          setState={setChordProgression}
        /> */}
      </div>
      <div className="flex gap-6 mx-auto py-4 max-w-full overflow-auto">
        {progression.length > 0 &&
          progression.map((chord, index) => {
            return (
              <div className="flex items-center justify-center gap-6" key={chord.id}>
                <ButtonProgression
                  id={chord.id}
                  chordKey={chord.key}
                  chordType={chord.type}
                  onClick={() => setChordIndex(index)}
                  handleDelete={() => removeChord(index)}
                />
                <div className="flex flex-col py-4 gap-2 items-center justify-center rounded-lg">
                  <ArrowSmSVG pathClass={"stroke-neutral-300"} />
                </div>
              </div>
            );
          })}
        <ButtonProgression
          variant="new"
          onClick={() => setChordIndex(progression.length + 1)}
        />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ChordProgression;
