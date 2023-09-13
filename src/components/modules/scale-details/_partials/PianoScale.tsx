import PianoKey from "./PianoKey";
import { pianoNotes } from "@/utils/notes";
import useSelectedScale from "@/stores/useSelectedScale";

const PianoScale = () => {
  const { selectedScale } = useSelectedScale();

  console.log(selectedScale);
  if (selectedScale === undefined) return;
  const rootNoteIndex = pianoNotes.findIndex(({ name }) =>
    name
      .replace(/[0-9]/g, "")
      .replace("s", "#")
      .toUpperCase()
      .startsWith(selectedScale.intervalNotes[0])
  );
  const markedNotes = selectedScale.intervals.map(interval => rootNoteIndex + interval - 1);
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
            currentKeys={["C", "D"]}
            isActive={markedNotes.includes(index)}
          />
        );
      })}
    </div>
  );
};

export default PianoScale;
