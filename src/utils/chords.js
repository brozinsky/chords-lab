import { notes, arrangeNotesByRoot } from "@/utils/notesData";

export const chords = [
  {
    name: "major",
    notes: [1, 5, 8],
  },
  {
    name: "minor",
    notes: [1, 4, 8],
  },
  {
    name: "seventh",
    notes: [1, 5, 8, 11],
  },
  {
    name: "augmented",
    notes: [1, 5, 9],
  },
  {
    name: "diminished",
    notes: [1, 4, 7],
  },
  {
    name: "minor seventh",
    notes: [1, 4, 8, 11],
  },
  {
    name: "major seventh",
    notes: [1, 5, 8, 12],
  },
  {
    name: "diminished seventh",
    notes: [1, 4, 7, 11],
  },
  {
    name: "augmented seventh",
    notes: [1, 5, 9, 12],
  },
  {
    name: "minor sixth",
    notes: [1, 4, 8, 10],
  },
  {
    name: "dominant seventh",
    notes: [1, 5, 8, 10],
  },
  {
    name: "major sixth",
    notes: [1, 5, 8, 9],
  },
  {
    name: "minor major seventh",
    notes: [1, 4, 8, 12],
  },
  {
    name: "half-diminished seventh",
    notes: [1, 4, 7, 10],
  },
  {
    name: "suspended second",
    notes: [1, 6, 8],
  },
  {
    name: "suspended fourth",
    notes: [1, 4, 9],
  },
  {
    name: "major ninth",
    notes: [1, 5, 8, 12, 15],
  },
  {
    name: "minor ninth",
    notes: [1, 4, 8, 11, 14],
  },
  {
    name: "dominant ninth",
    notes: [1, 5, 8, 10, 14],
  },
];

export const createChord = (chordType, rootNote) => {
  const chordObj = chords.find((chord) => chord.name === chordType);
  if (notes.includes(rootNote) && chordObj !== undefined) {
    const chordNotes = chordObj.notes; //note intervals example [ 1, 3, 5, 6, 8, 10, 12 ]
    const notesRootFirst = arrangeNotesByRoot(rootNote);
    const chord = chordNotes.map((i) => notesRootFirst[i - 1]);
    return chord;
  } else if (!notes.includes(rootNote)) {
    console.error("Root note not found");
  } else if (chordObj === undefined) {
    console.error("chord name is incorrect");
  }
};
