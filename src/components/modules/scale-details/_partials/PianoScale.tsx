import PianoKey from "@/components/elements/piano/PianoKey";
import { pianoNotes } from "@/utils/notes";
import React from "react";

const PianoScale: React.FC<{ scale?: string[] }> = ({ scale }) => {
  if (!scale || Object.keys(scale).length === 0) return;

  const pianoNotesUppercase = pianoNotes.map((note) => ({
    name: note.name.replace("s", "#").toUpperCase(),
  }));

  return (
    <div className="flex flex-row">
      {pianoNotesUppercase.map(({ name }, index) => {
        const convertedName = name
          .replace(/[0-9]/g, "")
          .replace("s", "#")
          .toUpperCase();
        return (
          <PianoKey
            key={name + index}
            name={convertedName}
            isActive={scale.includes(name)}
          />
        );
      })}
    </div>
  );
};

export default PianoScale;
