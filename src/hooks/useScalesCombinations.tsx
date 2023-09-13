import { useMemo } from "react";
import getIntervalNotes from "@/utils/getIntervalNotes";
import { notes, scales } from "@/utils/notesData";

export interface ScalesCombinations {
  note: string;
  name: string;
  intervals: number[];
  intervalNotes: string[];
}

// Custom hook to combine a list of musical notes with a list of scales
// and to create all scales combinations

function useScalesCombinations(): ScalesCombinations[] {
  const scalesCombinations = useMemo(() => {
    return notes.flatMap((note) =>
    scales.map(({ name, notes }) => ({
        note: note,
        name: name,
        intervals: notes,
        intervalNotes: getIntervalNotes(notes, note),
      }))
    );
  }, [notes, scales]);

  return scalesCombinations;
}

export default useScalesCombinations;
