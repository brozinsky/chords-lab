import PianoKey from "@/components/elements/piano/PianoKey";
import usePlayPiano from "@/hooks/usePlayPiano";
import { pianoNotes } from "@/utils/notes";
import React from "react";

const PianoScale: React.FC<{ scale?: string[] }> = ({ scale }) => {
  if (!scale || Object.keys(scale).length === 0) return;
  const { playPianoNotes } = usePlayPiano();

  const pianoNotesUppercase = pianoNotes.map((note) => ({
    name: note.name.replace("s", "#").toUpperCase(),
  }));

  return (
    <div id="PianoScale" className="flex flex-row">
      {pianoNotesUppercase.map(({ name }, index) => {
        const convertedName = name
          .replace(/[0-9]/g, "")
          .replace("s", "#")
          .toUpperCase();
        return (
          <PianoKey
            key={name + index}
            onClick={() => playPianoNotes([name])}
            name={convertedName}
            isActive={scale.includes(name)}
          />
        );
      })}
    </div>
  );
};

export default PianoScale;
