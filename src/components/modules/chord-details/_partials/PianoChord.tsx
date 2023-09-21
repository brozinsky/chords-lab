import { pianoNotes } from "@/utils/notes";
import useSelectedChord from "@/stores/useSelectedChord";
import { convertFlatsToSharps } from "@/utils/flatToSharps";
import PianoKey from "@/components/elements/piano/PianoKey";

const PianoChord = () => {
  const { selectedChord } = useSelectedChord();
  if (selectedChord === undefined) return;

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
            isActive={convertFlatsToSharps(selectedChord.notes)?.includes(name)}
          />
        );
      })}
    </div>
  );
};

export default PianoChord;
