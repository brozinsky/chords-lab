import Checkbox from "@/components/elements/Checkbox";
import { scales } from "@/utils/notesData";
import clsx from "clsx";
import { useState } from "react";
import { Chord } from "tonal";

function removeLastChar(arr: string[]) {
  return arr.map((item: string) => item.slice(0, -1));
}

const modesMappings: { [key: string]: string } = {
  ionian: "major",
  aeolian: "minor",
};

type TProps = {
  scale: string[];
  scaleType: string;
};

export const ChordsInScale = ({ scaleType, scale }: TProps) => {
  const [showScaleNotes, setShowScaleNotes] = useState(false);

  const scaleName = modesMappings[scaleType.toLowerCase()] || scaleType;

  const currentScale = scales.find((scale) => scale.name === scaleName);

  if (!currentScale) {
    return null;
  }

  return (
    <section
      id="ChordsInScale"
      className="flex flex-col gap-2 px-6 rounded-2xl bg-neutral-800 p-2 pb-4 overflow-hidden"
    >
      <div className="flex justify-between relative">
        <h2>Chords:</h2>
        <Checkbox
          isDisabled={false}
          isSelected={showScaleNotes}
          state={showScaleNotes}
          onChange={setShowScaleNotes}
        >
          Scale notes
        </Checkbox>
      </div>

      <div className="overflow-auto">
        <table className="table-auto w-full">
          <tbody>
            <tr>
              {currentScale.chords?.map((chord) => (
                <td
                  key={`roman-${chord.noteIndex}`}
                  className="text-sm px-1.5 text-center border border-neutral-500"
                >
                  {chord.roman}
                </td>
              ))}
            </tr>
            <tr>
              {currentScale.chords?.map((chord, index) => (
                <td
                  key={`quality-${chord.noteIndex}`}
                  className="text-sm px-1.5 text-center border border-neutral-500"
                >
                  <div className="flex flex-row gap-1.5 justify-center mx-auto w-full">
                    <div>{removeLastChar(scale)[index]}</div>
                    <div>{chord.quality}</div>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              {currentScale.chords?.map((chord, index) => {
                const currentChordNotes = Chord.get(
                  `${removeLastChar(scale)[index]} ${chord.quality}`
                ).notes;
                return (
                  <td
                    key={`notes-${chord.noteIndex}`}
                    className="text-sm px-1.5 text-center border border-neutral-500"
                  >
                    <div className="space-x-1">
                      {!showScaleNotes &&
                        currentChordNotes.map((note) => {
                          return (
                            <span className="text-neutral-100">{note}</span>
                          );
                        })}
                      {showScaleNotes &&
                        removeLastChar(scale).map((item, itemIndex) => {
                          const isInCurrentChord =
                            currentChordNotes.includes(item);
                          return (
                            <span
                              key={`${item}-${itemIndex}`}
                              className={clsx(
                                isInCurrentChord
                                  ? "font-bold text-neutral-100"
                                  : "text-neutral-300"
                              )}
                            >
                              {item}
                            </span>
                          );
                        })}
                    </div>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
