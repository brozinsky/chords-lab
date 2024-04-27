import ArrowSmSVG from "@/components/elements/svg/icons/interface/ArrowSmSVG";
import Select from "@/components/ui/dropdowns/Select";
import React, { useState } from "react";

const notesOptions = [
  { id: 1, value: ["I", "IV", "v", "iv"], name: "I - IV - v - iv" },
  { id: 2, value: ["I", "IV", "I", "V", "I"], name: "I - IV - v - iv" },
  { id: 3, value: ["I", "V", "IV", "V"], name: "I - IV - v - iv" },
  { id: 4, value: ["I", "IV", "ii", "V"], name: "I - IV - v - iv" },
];

const ChordProgression = () => {
  const [chordProgression, setChordProgression] = useState(["I", "IV", "v", "iv"]);
  return (
    <div className="border border-neutral-500 w-full min-h-48 bg-neutral-800 flex flex-col gap-2 px-6 rounded-2xl py-4 justify-between">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl text-left">Chord Progression</h2>
        <Select
          size={"sm"}
          variant={"outlined"}
          contentType={"tonic"}
          options={notesOptions}
          displayValue={chordProgression.join(" - ")}
          state={chordProgression}
          setState={setChordProgression}
        />
      </div>
      <div className="flex gap-6 mx-auto py-4">
        <div className="transition min-w-[100px] items-center justify-center flex flex-col px-4 py-3 gap-1 rounded-xl border-2 border-neutral-400 cursor-pointer hover:border-neutral-300">
          <div className="text-xl">1maj</div>
          <div className="text-sm">C - D - E</div>
        </div>
        <div className="flex flex-col py-4 gap-2 items-center justify-center rounded-lg">
          <ArrowSmSVG pathClass={"stroke-neutral-300"} />
        </div>
        <div className="transition min-w-[100px] items-center justify-center flex flex-col px-4 py-3 gap-1 rounded-xl border-2 border-neutral-400 cursor-pointer hover:border-neutral-300">
          <div className="text-xl">1maj</div>
          <div className="text-sm">C - D - E</div>
        </div>
        <div className="flex flex-col py-4 gap-2 items-center justify-center rounded-lg">
          <ArrowSmSVG pathClass={"stroke-neutral-300"} />
        </div>
        <div className="min-w-[100px] items-center transition border-dashed justify-center flex flex-col px-4 py-3 gap-1 rounded-xl border-2 border-neutral-300 cursor-pointer hover:border-neutral-100">
          <div className="text-3xl hover:text-white transition">+</div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ChordProgression;
