import { notes, arrangeNotesByRoot } from "@/utils/notesData";

export const chords = [
  {
    name: "major triad",
    notes: [1, 5, 8],
    abbreviations: ["maj", "major", "M", "△"]
  },
  {
    name: "minor triad",
    notes: [1, 4, 8],
    abbreviations: ["min", "minor", "m", "-"]
  },
  {
    name: "major seventh",
    notes: [1, 5, 8, 12],
    abbreviations: ["maj", "△7"]
  },
  {
    name: "augmented",
    notes: [1, 5, 9],
    abbreviations: ["aug", "+"]
  },
  {
    name: "diminished",
    notes: [1, 4, 7],
    abbreviations: ["dim", "°"]
  },
  {
    name: "minor seventh",
    notes: [1, 4, 8, 11],
    abbreviations: ["min7", "m7", "-7"]
  },
  {
    name: "diminished seventh",
    notes: [1, 4, 7, 11],
    abbreviations: ["dim7", "°7"]
  },
  {
    name: "augmented seventh",
    notes: [1, 5, 9, 12],
    abbreviations: ["aug7", "+7"]
  },
  {
    name: "minor sixth",
    notes: [1, 4, 8, 10],
    abbreviations: ["min6", "m6", "-6"]
  },
  {
    name: "dominant seventh",
    notes: [1, 5, 8, 10],
    abbreviations: ["dom7", "7"]
  },
  {
    name: "major sixth",
    notes: [1, 5, 8, 9],
    abbreviations: ["maj6", "△6"]
  },
  {
    name: "half-diminished seventh",
    notes: [1, 4, 7, 10],
    abbreviations: ["m7b5", "min7b5", "-7b5", "ø", "ø7"]
  },
  {
    name: "suspended second",
    notes: [1, 6, 8],
    abbreviations: ["sus2"]
  },
  {
    name: "suspended fourth",
    notes: [1, 4, 9],
    abbreviations: ["sus", "sus4"]
  },
  {
    name: "major ninth",
    notes: [1, 5, 8, 12, 15],
    abbreviations: ["maj9", "△9"]
  },
  {
    name: "minor ninth",
    notes: [1, 4, 8, 11, 14],
    abbreviations: ["min9", "m9", "-9"]
  },
  {
    name: "dominant ninth",
    notes: [1, 5, 8, 10, 14],
    abbreviations: ["9", "dom9"]
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
