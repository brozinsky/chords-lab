import { useMemo } from "react";
import getIntervalNotes from "@/utils/getIntervalNotes";
import { TChordCombinations, TNotes } from "@/utils/types";

export type TChord = {
  name: string;
  notes: string[];
  abbreviations: string[];
};

// Custom hook to combine a list of musical notes with a list of chords
// and to create chord combinations, including additional information about intervals.

function useChordCombinations(
  notes: TNotes[],
  chords: TChord[]
): TChordCombinations[] {
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
