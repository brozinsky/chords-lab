import { useMemo } from "react";
import getIntervalNotes from "@/utils/getIntervalNotes";

export interface Chord {
  name: string;
  notes: string[];
  abbreviations: string[];
}

export interface ChordCombination {
  note: string;
  chordName: string;
  abbreviations: string[];
  intervals: string[];
  intervalNotes: string[];
}

// Custom hook to combine a list of musical notes with a list of chords
// and to create chord combinations, including additional information about intervals.

function useChordCombinations(
  notes: string[],
  chords: Chord[]
): ChordCombination[] {
  const chordCombinations = useMemo(() => {
    return notes.flatMap((note) =>
      chords.map(({ name, notes, abbreviations }) => ({
        note,
        chordName: name,
        abbreviations: abbreviations,
        intervals: notes,
        intervalNotes: getIntervalNotes(notes, note),
      }))
    );
  }, [notes, chords]);

  return chordCombinations;
}

export default useChordCombinations;
