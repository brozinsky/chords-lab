import TrashIconSVG from "@/components/elements/svg/icons/interface/TrashIconSVG";
import { cn } from "@/lib/utils";
import { romanNumeralClasses } from "@/utils/classes/romanNumeralClasses";
import { standardizeChord } from "@/utils/functions/music-theory/standardizeChord";
import clsx from "clsx";
import { MouseEvent } from "react";
import { Chord } from "tonal";

type TProps = {
  variant?: "chord" | "new";
  chordKey?: string;
  chordType?: string;
  onClick: () => void;
  editedChordId: string | null;
  handleDelete?: (index: string) => void;
  id?: string;
  romanNumeral?: string;
  isPlaying?: boolean;
};

const ButtonProgression = ({
  variant = "chord",
  chordKey,
  chordType,
  onClick,
  id,
  romanNumeral,
  editedChordId,
  isPlaying,
  handleDelete,
}: TProps) => {
  const handleDeleteClick = (e: MouseEvent) => {
    e.stopPropagation;
    handleDelete && id && handleDelete(id);
  };
  const notes =
    variant === "chord" ? Chord.get(`${chordKey} ${chordType}`).notes : null;
  if (variant === "new") {
    return (
      <button
        onClick={onClick}
        className={clsx(
          editedChordId === id && "!border-emerald-500",
          "min-w-[130px] min-h-[116px] items-center transition border-dashed justify-center flex flex-col px-4 py-3 gap-1 rounded-xl border-2 border-neutral-300 cursor-pointer hover:border-neutral-100"
        )}
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
          className={clsx(
            isPlaying && "bg-white/20",
            editedChordId === id && "!border-emerald-500",
            "group relative transition relative min-w-[130px] min-h-[116px] duration-200 items-center justify-center flex flex-col px-4 py-3 gap-1 rounded-xl border-2 border-neutral-400 cursor-pointer hover:border-neutral-300"
          )}
        >
          {romanNumeral && (
            <div
              className={cn(
                romanNumeralClasses["default"].class,
                romanNumeral.includes("sus") &&
                  romanNumeralClasses["sus"].class,
                romanNumeral.includes("min") &&
                  romanNumeralClasses["min"].class,
                romanNumeral.includes("maj") &&
                  romanNumeralClasses["maj"].class,
                romanNumeral.includes("dim") &&
                  romanNumeralClasses["dim"].class,
                romanNumeral.includes("aug") &&
                  romanNumeralClasses["aug"].class,
                "group-hover:opacity-100 transition duration-200 text-xs absolute top-1 left-1 border border-transparent opacity-70 rounded-lg px-2.5 py-0.5"
              )}
            >
              {standardizeChord(romanNumeral)}
            </div>
          )}
          <div className="text-2xl mt-3">
            {chordKey} {chordType}
          </div>
          <div className="text-xs flex flex-row gap-2">
            {notes &&
              notes.map((note, index) => {
                return <div key={index}>{note}</div>;
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
