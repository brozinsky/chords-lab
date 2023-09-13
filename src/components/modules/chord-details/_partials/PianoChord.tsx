import PianoKey from "./PianoKey";
import { pianoNotes } from "@/utils/notes";
import useSelectedChord from "@/stores/useSelectedChord";

const PianoChord = () => {
  const { selectedChord } = useSelectedChord();
  if (selectedChord === undefined) return;
  const rootNoteIndex = pianoNotes.findIndex(({ name }) =>
    name
      .replace(/[0-9]/g, "")
      .replace("s", "#")
      .toUpperCase()
      .startsWith(selectedChord.intervalNotes[0])
  );
  const markedNotes = selectedChord.intervals.map(interval => rootNoteIndex + interval - 1);
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
            currentKeys={selectedChord.intervalNotes}
            isActive={markedNotes.includes(index)}
          />
        );
      })}
    </div>
  );
};

export default PianoChord;
