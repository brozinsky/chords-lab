import React, { useEffect, useState } from "react";
import PianoKey from "./PianoKey";
import { pianoNotes } from "@/utils/notes";

const PianoChord = ({ chord }) => {
  const rootNoteIndex = pianoNotes.findIndex(({ name }) =>
    name
      .replace(/[0-9]/g, "")
      .replace("s", "#")
      .toUpperCase()
      .startsWith(chord.intervalNotes[0])
  );
  const markedNotes = chord.intervals.map(interval => rootNoteIndex + interval - 1);
  return (
    <div className="flex flex-row">
      {pianoNotes.map(({ name }, index) => {
        const convertedName = name
          .replace(/[0-9]/g, "")
          .replace("s", "#")
          .toUpperCase();
        return (
          <PianoKey
            key={name}
            name={convertedName}
            currentKeys={chord.intervalNotes}
            isActive={markedNotes.includes(index)}
          />
        );
      })}
    </div>
  );
};

export default PianoChord;
