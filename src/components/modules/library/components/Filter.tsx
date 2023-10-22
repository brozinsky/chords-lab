import useChordsTab from "@/hooks/chords/useChordsTabs";
import { notes } from "@/utils/notesData";
import FilterNotes from "./FilterNotes";
import FilterTypes from "./FilterTypes";
import useFilterStore from "@/stores/chords/useFilterStore";
import FilterMultiNotes from "./FilterMultiNotes";

type NotesTypes = (typeof notes)[number];

export default function Filter() {
  const { romanScaleTonic, setRomanScaleTonic, romanScaleType, setRomanScaleType, allChordsRoot, setAllChordsRoot, notesChordsNotes, setNotesChordsNotes } = useFilterStore();
  const { activeTab } = useChordsTab();

  return (
    <div className="flex flex-col gap-2 mb-4">
      {/* "all" tab */}
      {activeTab === "all" && <FilterNotes onClick={(note: NotesTypes) => setAllChordsRoot(note)} activeNote={allChordsRoot} />}
      {/* "roman" tab */}
      {activeTab === "roman" && <FilterNotes onClick={(note: NotesTypes) => setRomanScaleTonic(note)} activeNote={romanScaleTonic} />}
      {activeTab === "roman" && <FilterTypes onClick={(romanScaleType) => setRomanScaleType(romanScaleType as "minor" | "major")} activeType={romanScaleType} />}
      {/* "notes" tab */}
      {activeTab === "notes" && <FilterMultiNotes onClick={setNotesChordsNotes} activeNotes={notesChordsNotes} />}
    </div>
  );
}
