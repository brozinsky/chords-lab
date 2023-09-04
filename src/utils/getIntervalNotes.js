import { notes } from "@/utils/notesData";

function getIntervalNotes(intervals, rootNote) {
  // create a mapping between note names and their indices
  const noteIndices = {};
  notes.forEach((note, index) => {
    noteIndices[note] = index;
  });

  // determine the index of the root note
  const rootIndex = noteIndices[rootNote.toUpperCase()];

  // calculate the indices of the chord notes based on intervals (starting from 1)
  const chordIndices = intervals.map(
    (interval) => (rootIndex + interval - 1) % 12
  );

  // convert indices back to note names
  const chordNotes = chordIndices.map((index) => notes[index]);

  return chordNotes;
}

export default getIntervalNotes;
