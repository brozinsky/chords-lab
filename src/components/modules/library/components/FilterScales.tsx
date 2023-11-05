import useChordsTab from "@/hooks/chords/useChordsTabs";
import { notes } from "@/utils/notesData";
import FilterNotes from "./FilterNotes";
import FilterTypes from "./FilterTypes";
import useFilterStore from "@/stores/chords/useFilterStore";
import FilterMultiNotes from "./FilterMultiNotes";

type NotesTypes = (typeof notes)[number];

export default function Filter() {
  const {
    romanScaleTonic,
    setRomanScaleTonic,
    romanScaleType,
    setRomanScaleType,
  } = useFilterStore();

  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex items-center gap-3">
        <>
          <span>Scale tonic</span>
          <FilterNotes
            onClick={(note: NotesTypes) => setRomanScaleTonic(note)}
            activeNote={romanScaleTonic}
          />
        </>
      </div>
      <div className="flex items-center gap-3">
        <span>Scale type</span>
        <FilterTypes
          onClick={(romanScaleType) =>
            setRomanScaleType(romanScaleType as "minor" | "major")
          }
          activeType={romanScaleType}
        />
      </div>
    </div>
  );
}
