import useChordsTab from "@/hooks/chords/useChordsTabs";
import useSelectedChord from "@/stores/chords/useSelectedChord";
import { notes } from "@/utils/notesData";
import FilterNotes from "./FilterNotes";
import FilterTypes from "./FilterTypes";
import useFilterStore from "@/stores/chords/useFilterStore";

type NotesTypes = (typeof notes)[number];

export default function Filter() {
  // const { root, setRoot } = useSelectedChord();
  const { romanScaleTonic, setRomanScaleTonic, romanScaleType, setRomanScaleType, allChordsRoot, setAllChordsRoot } = useFilterStore();
  const { activeTab } = useChordsTab();

  return (
    <div className="flex flex-col gap-2 mb-4">
      {activeTab === "all" && <FilterNotes onClick={(note: NotesTypes) => setAllChordsRoot(note)} activeNote={allChordsRoot} />}
      {activeTab === "roman" && <FilterNotes onClick={(note: NotesTypes) => setRomanScaleTonic(note)} activeNote={romanScaleTonic} />}
      {activeTab === "roman" && <FilterTypes onClick={(romanScaleType) => setRomanScaleType(romanScaleType as "minor" | "major")} activeType={romanScaleType} />}
    </div>
  );
}
