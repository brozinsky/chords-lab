import { useEffect, useState } from "react";
import getIntervalNotes from "@/utils/getIntervalNotes";

function useChordCombinations(notes, chords) {
  const [chordCombinations, setChordCombinations] = useState([]);

  useEffect(() => {
    const updatedChordCombinations = notes.flatMap((note) =>
      chords.map(({ name, notes }) => ({ note, chordName: name, intervals: notes, intervalNotes: getIntervalNotes(notes, note) }))
    );
    setChordCombinations(updatedChordCombinations);
  }, [notes, chords]);

  return chordCombinations;
}

export default useChordCombinations;
