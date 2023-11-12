import useSelectedChord from "@/stores/chords/useSelectedChord";
import PianoChord from "./_partials/PianoChord";
import React, { useState } from "react";
import { processIntervals } from "@/utils/processIntervals";
import shortid from "shortid";
import usePlayPiano from "@/hooks/usePlayPiano";
import Button from "@/components/ui/buttons/Button";
import RadioGroup from "@/components/ui/RadioGroup";
import Select from "@/components/ui/Select";
import Modal from "@/components/ui/Modal";
import ButtonInfo from "@/components/ui/buttons/ButtonInfo";
import ChordFormula from "./_partials/ChordFormula";
import { Chord } from "tonal";
import { chordQualityOptions, notesOptions } from "@/utils/functions/music-theory/selectOptions";

const playModeOptions = [
  { id: "11", name: "Chord", value: "chord" },
  { id: "22", name: "Arpeggio", value: "arpeggio" },
];

const ChordDetails = () => {
  const { selectedChord, root, setRoot, quality, setQuality } =
    useSelectedChord();
  const { isPianoSoundLoading, playPianoNotes, playPianoChord } = usePlayPiano();
  const [playMode, setPlayMode] = useState(playModeOptions[0].value);

  if (selectedChord?.name === undefined) return;

  const extendedChords = Chord.extended(selectedChord.name.toLowerCase());
  const reducedChords = Chord.reduced(selectedChord.name.toLowerCase());

  return (
    <section id="ChordDetails">
      {/* Chord name */}
      <div className="flex flex-row gap-2 justify-center mb-6">
        <Select
          variant="ghost"
          options={notesOptions}
          state={root}
          setState={setRoot}
        />
        <Select
          variant="ghost"
          options={chordQualityOptions}
          displayValue={
            selectedChord.name && selectedChord.name.length > 3
              ? selectedChord.name.split(" ").slice(1).join(" ")
              : selectedChord.aliases && selectedChord.aliases[0]
          }
          state={quality}
          setState={setQuality}
        />
      </div>
      {/* Piano keyboard */}
      <PianoChord />
      <section className="mt-6 space-y-2">
        {/* Play settings */}
        <div className="flex justify-end gap-4">
          <RadioGroup
            options={playModeOptions}
            defaultOption="chord"
            state={playMode}
            setState={setPlayMode}
          />
          <Button
            variant="emerald"
            icon="play"
            isLoading={isPianoSoundLoading}
            onClick={() => playPianoChord(playMode, selectedChord?.notes as string[])}
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
          <span className="w-[5rem] flex items-center">
            Formula:
            <Modal trigger={<ButtonInfo />}>
              <ChordFormula />
            </Modal>
          </span>
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
        {extendedChords.length > 0 ? (
          <div className="pt-2 items-end inline-flex flex-row gap-x-4 gap-y-2 max-w-[509px] flex-wrap">
            <span>Extended chords:</span>
              {extendedChords.map((type) => {
                return (
                  <a key={shortid.generate()} href="#" className="underline">
                    {type}
                  </a>
                );
              })}
          </div>
        ) : null}
        {reducedChords.length > 0 ? (
          <div className="pt-4 items-end flex flex-row gap-4 max-w-[509px] flex-wrap">
            <p>Reduced chords:</p>
            <div className="inline-flex flex-wrap gap-3 gap-y-1">
              {reducedChords.map((type) => {
                return (
                  <a key={shortid.generate()} href="#" className="underline">
                    {type}
                  </a>
                );
              })}
            </div>
          </div>
        ) : null}
      </section>
    </section>
  );
};

export default ChordDetails;
