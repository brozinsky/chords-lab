import React, { useEffect, useState } from "react";
import useSelectedScale from "@/stores/useSelectedScale";
import PianoScale from "./_partials/PianoScale";
import { Key, Note, Scale } from "tonal";
import { processIntervals } from "@/utils/processIntervals";
import AddInfoMinor from "./_partials/AddInfoMinor";
import AddInfoMajor from "./_partials/AddInfoMajor";
import shortid from "shortid";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  findIntervalNameBySymbol,
  getNumberStepsArray,
  getWholeAndHalfSteps,
} from "@/utils/notes";
import {
  simplifyNote,
  simplifyNotes,
} from "@/utils/functions/music-theory/simplifyNotes";
import usePlayPiano from "@/hooks/usePlayPiano";
import Select from "@/components/ui/Select";
import {
  notesOptions,
  scaleTypeOptions,
} from "@/utils/functions/music-theory/selectOptions";
import RadioGroup from "@/components/ui/RadioGroup";
import Button from "@/components/ui/buttons/Button";

const playModeOptions = [
  { id: "11", name: "Ascending", value: "ascending" },
  { id: "22", name: "Descending", value: "descending" },
];

const ScaleDetails = () => {
  const { tonic, setTonic, type, setType, selectedScale } = useSelectedScale();
  const { playPianoNotes } = usePlayPiano();
  const [playMode, setPlayMode] = useState(playModeOptions[0].value);

  if (!selectedScale) {
    return <div>Select a scale.</div>;
  }

  const extendedScales = Scale.extended(selectedScale.type.toLowerCase());
  const reducedScales = Scale.reduced(selectedScale.type.toLowerCase());

  const infoScale = Scale.get(`${tonic} ${type}`);

  const isMajor = selectedScale.type.toLowerCase() === "major";
  const isMinor =
    selectedScale.type.includes("minor") &&
    (selectedScale.type.includes("harmonic") ||
      selectedScale.type === "minor" ||
      selectedScale.type.includes("melodic"));

  let minorScaleType = null;
  if (isMinor) {
    if (selectedScale.type.includes("harmonic")) minorScaleType = "harmonic";
    else if (selectedScale.type === "minor") minorScaleType = "natural";
    else if (selectedScale.type.includes("melodic")) minorScaleType = "melodic";
  }

  const simplifiedScale = simplifyNotes(selectedScale.notes);

  const playSelectedScale = (playMode: string) => {
    const notes = selectedScale?.notes;

    if (!notes) {
      return;
    }

    const playNoteWithInterval = (
      noteIndex: number,
      direction: "ascending" | "descending"
    ) => {
      if (direction === "ascending" && noteIndex < notes.length) {
        playPianoNotes([notes[noteIndex]] as string[]);
        setTimeout(() => {
          playNoteWithInterval(noteIndex + 1, direction);
        }, 200);
      } else if (direction === "descending" && noteIndex >= 0) {
        playPianoNotes([notes[noteIndex]] as string[]);
        setTimeout(() => {
          playNoteWithInterval(noteIndex - 1, direction);
        }, 200);
      }
    };

    if (playMode === "ascending") {
      playNoteWithInterval(0, "ascending");
    } else if (playMode === "descending") {
      playNoteWithInterval(notes.length - 1, "descending");
    }
  };

  return (
    <section className="flex flex-col">
      {/* <h1 className="text-5xl mb-6 text-center">{infoScale.name}</h1> */}
      <div className="flex flex-row gap-2 justify-center mb-6">
        <Select
          variant="ghost"
          options={notesOptions}
          state={tonic}
          setState={setTonic}
        />
        <Select
          variant="ghost"
          options={scaleTypeOptions}
          displayValue={infoScale.name.split(" ").slice(1).join(" ")}
          state={type}
          setState={setType}
        />
      </div>
      <PianoScale scale={simplifiedScale} />
      <section className="mt-6 space-y-2">
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
            onClick={() => playSelectedScale(playMode)}
          >
            Play
          </Button>
        </div>
        <div className="items-end flex flex-row gap-4">
          <span className="w-[4rem] mb-2">Notes:</span>
          <div className="gap-2 flex">
            {selectedScale.notes.map((note, index) => {
              return (
                <React.Fragment key={note}>
                  <span
                    // data-tooltip-id={"note-" + note}
                    onClick={() => playPianoNotes([note])}
                    className="p-2 rounded-lg active:bg-neutral-600 cursor-pointer select-none text-center text-2xl min-w-[2rem]"
                  >
                    {simplifyNote(note).slice(0, -1)}
                  </span>
                  <span className="self-center text-2xl text-center">
                    {infoScale.notes.length - 1 !== index ? "-" : null}
                  </span>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="items-end flex flex-row gap-4">
          <span className="w-[4rem]">Formula:</span>
          <div className="flex gap-2">
            {processIntervals(infoScale.intervals).map((interval, index) => {
              return (
                <React.Fragment key={shortid.generate()}>
                  <span
                    data-tooltip-id={"interval-" + interval}
                    className="cursor-default text-center text-2xl min-w-[2rem]"
                  >
                    {interval}
                  </span>
                  <span className="text-2xl text-center">
                    {infoScale.notes.length - 1 !== index ? "-" : null}
                  </span>
                  <ReactTooltip
                    key={interval}
                    id={"interval-" + interval}
                    place="right"
                    variant="light"
                    content={findIntervalNameBySymbol(interval) as string}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <div className="mt-4">Intervals:</div>
          <table className="border border-neutral-500 rounded-md mt-4">
            <tbody>
              <tr>
                {getNumberStepsArray(infoScale.chroma).map((step) => {
                  return (
                    <React.Fragment key={shortid.generate()}>
                      <td className="text-sm px-1.5 text-center border border-neutral-500">
                        {step}
                      </td>
                    </React.Fragment>
                  );
                })}
              </tr>
              <tr>
                {getWholeAndHalfSteps(
                  getNumberStepsArray(infoScale.chroma)
                ).map((step) => {
                  return (
                    <React.Fragment key={shortid.generate()}>
                      <td className="text-sm px-1.5 text-center border border-neutral-500">
                        {step}
                      </td>
                    </React.Fragment>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
        {extendedScales.length > 0 ? (
          <div className="items-end flex flex-row gap-4 max-w-[509px] flex-wrap">
            <p>Extended Scales:</p>
            <div className="inline-flex flex-wrap gap-3 gap-y-1">
              {extendedScales.map((type) => {
                return (
                  <span
                    key={shortid.generate()}
                    onClick={() => setType(type)}
                    className="cursor-pointer underline"
                  >
                    {type}
                  </span>
                );
              })}
            </div>
          </div>
        ) : null}

        {reducedScales.length > 0 ? (
          <div className="items-end flex flex-row gap-4 max-w-[509px] flex-wrap">
            <p>Reduced Scales:</p>
            <div className="inline-flex flex-wrap gap-3 gap-y-1">
              {reducedScales.map((type) => {
                return (
                  <span
                    key={shortid.generate()}
                    onClick={() => setType(type)}
                    className="cursor-pointer underline"
                  >
                    {type}
                  </span>
                );
              })}
            </div>
          </div>
        ) : null}
        {/* {isMajor ? (
          <>
            <div>{Key.majorKey(tonic).grades}</div>
            <div>{Key.majorKey(tonic).chords}</div>
          </>
        ) : null}
        {isMajor ? <AddInfoMajor /> : null}
        {isMinor && minorScaleType !== null ? (
          <AddInfoMinor type={minorScaleType as "harmonic" | "melodic" | "natural"} />
        ) : null} */}
      </section>
    </section>
  );
};

export default ScaleDetails;
