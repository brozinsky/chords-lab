import useChordsTab from "@/hooks/chords/useChordsTabs";
import FilterNotes from "./FilterNotes";
import FilterTypes from "./FilterTypes";
import useFilterStore from "@/stores/chords/useFilterStore";
import FilterMultiNotes from "./FilterMultiNotes";
import { TNotes } from "@/utils/types";

export default function Filter() {
  const {
    romanScaleTonic,
    setRomanScaleTonic,
    romanScaleType,
    setRomanScaleType,
    allChordsRoot,
    setAllChordsRoot,
    notesChordsNotes,
    setNotesChordsNotes,
  } = useFilterStore();
  const { activeTab } = useChordsTab();

  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex items-center gap-3">
        {activeTab === "all" && (
          <>
            <span className="shrink-0">Root note</span>
            <FilterNotes
              onClick={(note: TNotes) => setAllChordsRoot(note)}
              activeNote={allChordsRoot}
            />
          </>
        )}
        {activeTab === "roman" && (
          <>
            <span>Scale tonic</span>
            <FilterNotes
              onClick={(note: TNotes) => setRomanScaleTonic(note)}
              activeNote={romanScaleTonic}
            />
          </>
        )}
        {activeTab === "notes" && (
          <>
            <span>Chord notes</span>
            <FilterMultiNotes
              onClick={setNotesChordsNotes}
              activeNotes={notesChordsNotes}
            />
          </>
        )}
      </div>
      {activeTab === "roman" && (
        <div className="flex items-center gap-3">
          <span>Scale type</span>
          <FilterTypes
            onClick={(romanScaleType) =>
              setRomanScaleType(romanScaleType as "minor" | "major")
            }
            activeType={romanScaleType}
          />
        </div>
      )}
    </div>
  );
}
