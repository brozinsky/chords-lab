import { pianoNotes } from "@/utils/notes";
import useSelectedChord from "@/stores/chords/useSelectedChord";
import { convertFlatsToSharps } from "@/utils/flatToSharps";
import PianoKey from "@/components/elements/piano/PianoKey";
import { Note } from "tonal";
import usePlayPiano from "@/hooks/usePlayPiano";

const PianoChord = () => {
  const { selectedChord } = useSelectedChord();
  if (selectedChord === undefined) return;
  const { playPianoNotes } = usePlayPiano();

  const pianoNotesUppercase = pianoNotes.map((note) => ({
    name: note.name.replace("s", "#").toUpperCase(),
  }));

  const simplifiedChord = selectedChord.notes?.map(note => note.includes("b") ? Note.enharmonic(note) : Note.simplify(note))

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
            onClick={() => playPianoNotes([name])}
            name={convertedName}
            // isActive={convertFlatsToSharps(selectedChord.notes)?.includes(name)}
            isActive={simplifiedChord?.includes(name) as boolean}
          />
        );
      })}
    </div>
  );
};

export default PianoChord;
