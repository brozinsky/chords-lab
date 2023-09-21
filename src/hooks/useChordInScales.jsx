import { useEffect, useMemo } from "react";
import getIntervalNotes from "@/utils/getIntervalNotes";
import { notes, scales } from "@/utils/notesData";
import useScalesCombinations from "./useScalesCombinations";

// returns a list of scales that contain the given chord
function useChordInScales(chordNotes) {
  const allScales = useScalesCombinations();

  const scales = allScales.filter((scale) =>
    chordNotes.every((note) => scale.intervalNotes.includes(note))
  );

  return scales;
}

export default useChordInScales;
