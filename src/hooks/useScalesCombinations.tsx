import { useMemo } from "react";
import getIntervalNotes from "@/utils/getIntervalNotes";
import { notes, scales } from "@/utils/notesData";
import { TScalesCombinations } from "@/utils/types";

// Custom hook to combine a list of musical notes with a list of scales
// and to create all scales combinations

function useScalesCombinations(): TScalesCombinations[] {
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
