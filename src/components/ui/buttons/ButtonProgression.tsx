import TrashIconSVG from "@/components/elements/svg/icons/interface/TrashIconSVG";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
} from "react";
import { Chord } from "tonal";

type TProps = {
  variant?: "chord" | "new";
  chordKey?: string;
  chordType?: string;
  onClick: () => void;
  handleDelete?: (index: number) => void;
  id?: number;
  romanNumeral?: string;
};

const ButtonProgression = ({
  variant = "chord",
  chordKey,
  chordType,
  onClick,
  id,
  romanNumeral,
  handleDelete,
}: TProps) => {
  const handleDeleteClick = (e: MouseEvent) => {
    e.stopPropagation;
    handleDelete && id && handleDelete(id);
  };
  const notes = variant === "chord" ? Chord.get(`${chordKey} ${chordType}`).notes  : null
  console.log(notes);
  if (variant === "new") {
    return (
      <button
        onClick={onClick}
        className="min-w-[130px] min-h-[116px] items-center transition border-dashed justify-center flex flex-col px-4 py-3 gap-1 rounded-xl border-2 border-neutral-300 cursor-pointer hover:border-neutral-100"
      >
        <div className="text-3xl hover:text-white transition">+</div>
      </button>
    );
  }
  if (variant === "chord" && chordType && chordKey) {
    return (
      <div className="relative group">
        <button
          onClick={onClick}
          className="relative transition min-w-[130px] min-h-[116px] items-center justify-center flex flex-col px-4 py-3 gap-1 rounded-xl border-2 border-neutral-400 cursor-pointer hover:border-neutral-300"
        >
          {romanNumeral && <div className="text-xl">{romanNumeral}</div>}
          <div className="text-base">
            {chordKey} {chordType}
          </div>
          <div className="text-xs flex flex-row gap-2">
            {notes && notes.map((note, index) => {
              return (
                  <div key={index}>{note}</div>
              )
            })}
          </div>
        </button>
        <button
          className="bg-warning group border border-transparent flex items-center justify-center rounded-lg w-8 h-8 absolute -right-1 -top-1 opacity-0 transition duration-500 ease-in-out group-hover:visible invisible group-hover:opacity-100"
          onClick={(e) => handleDeleteClick(e)}
        >
          <TrashIconSVG width="20" pathClass="stroke-black" />
        </button>
      </div>
    );
  }
};

export default ButtonProgression;
