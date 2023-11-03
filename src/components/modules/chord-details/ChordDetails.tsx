import useSelectedChord from "@/stores/chords/useSelectedChord";
import PianoChord from "./_partials/PianoChord";
import React, { useState } from "react";
import { processIntervals } from "@/utils/processIntervals";
import shortid from "shortid";
import useFilterStore from "@/stores/chords/useFilterStore";
import usePlayPiano from "@/hooks/usePlayPiano";
import Button from "@/components/ui/buttons/Button";
import RadioGroup from "@/components/ui/RadioGroup";

const playModeOptions = [
  { id: "11", label: "Chord", value: "chord" },
  { id: "22", label: "Arpeggio", value: "arpeggio" },
];

const ChordDetails = () => {
  const { selectedChord } = useSelectedChord();
  const { allChordsRoot } = useFilterStore();
  const { playPianoNotes } = usePlayPiano();
  const [playMode, setPlayMode] = useState(playModeOptions[0].value);

  if (selectedChord === undefined) return;

  const playSelectedChord = (playMode: string) => {
    const notes = selectedChord?.notes;

    if (!notes) {
      return;
    }

    if (playMode === "chord") playPianoNotes(notes as string[]);

    if (playMode === "arpeggio") {
      const playNoteWithInterval = (noteIndex: number) => {
        if (noteIndex < notes.length) {
          playPianoNotes([notes[noteIndex]] as string[]);
          setTimeout(() => {
            playNoteWithInterval(noteIndex + 1);
          }, 200);
        }
      };

      playNoteWithInterval(0);
    }
  };

  return (
    <div>
      {/* Chord name */}
      <h1 className="text-5xl mb-6 text-center">
        {selectedChord.name && selectedChord.name.length > 3
          ? selectedChord.name
          : allChordsRoot +
            " " +
            (selectedChord.aliases && selectedChord.aliases[0])}
      </h1>
      {/* Piano keyboard */}
      <PianoChord />
      <section className="mt-6 space-y-2">
        {/* Play settings */}
        <div className="flex justify-end gap-4">
          <RadioGroup options={playModeOptions} defaultOption="chord" state={playMode} setState={setPlayMode}/>
          <Button
            variant="emerald"
            icon="play"
            onClick={() => playSelectedChord(playMode)}
          >
            Play
          </Button>
        </div>
        {/* Notes */}
        <div className="items-end flex flex-row gap-4">
          <span className="w-[4rem] mb-2">Notes:</span>
          {selectedChord.notes?.map((note, index) => {
            const isLastItem =
              (selectedChord.notes?.length as number) - 1 !== index;
            return (
              <React.Fragment key={note}>
                <span
                  onClick={() => playPianoNotes([note])}
                  data-tooltip-id={"note-" + note}
                  className="p-2 rounded-lg active:bg-neutral-600 cursor-pointer select-none text-center text-2xl min-w-[2rem]"
                >
                  {note}
                </span>
                <span className="text-2xl text-center mb-2">
                  {isLastItem ? "-" : null}
                </span>
              </React.Fragment>
            );
          })}
        </div>
        {/* Formula */}
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
