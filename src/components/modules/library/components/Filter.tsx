import useChordsTab from "@/hooks/chords/useChordsTabs";
import useRomanFilterScale from "@/stores/chords/useRomanFilterScale";
import useSelectedChord from "@/stores/chords/useSelectedChord";
import { notes } from "@/utils/notesData";
import FilterNotes from "./FilterNotes";
import FilterTypes from "./FilterTypes";

type NotesTypes = (typeof notes)[number];

export default function Filter() {
  const { root, setRoot } = useSelectedChord();
  const { tonic, setTonic, type, setType } = useRomanFilterScale();

  const { activeTab } = useChordsTab();

  return (
    <div className="flex flex-col gap-2 mb-4">
      {activeTab === "all" && <FilterNotes onClick={(note: NotesTypes) => setRoot(note)} activeNote={root} />}
      {activeTab === "roman" && <FilterNotes onClick={(note: NotesTypes) => setTonic(note)} activeNote={tonic} />}
      {activeTab === "roman" && <FilterTypes onClick={(type) => setType(type)} activeType={type} />}
    </div>
  );
}
