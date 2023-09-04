export const scales = [
  {
    name: "major",
    notes: [1, 3, 5, 6, 8, 10, 12],
  },
  {
    name: "minor",
    notes: [1, 3, 4, 6, 8, 9, 11],
  },
  {
    name: "melodic minor",
    notes: [1, 3, 4, 6, 8, 10, 12],
  },
  {
    name: "pentatonic major",
    notes: [1, 3, 6, 8, 10],
  },
  {
    name: "pentatonic minor",
    notes: [1, 4, 6, 8, 11],
  },
  {
    name: "pentatonic blues",
    notes: [1, 4, 6, 7, 8, 11],
  },
  {
    name: "pentatonic neutral",
    notes: [1, 3, 6, 8, 11],
  },
];

export const guitarFretboardNotes = {
    1: [
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
    ],
    2: [
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
    ],
    3: [
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
    ],
    4: [
      "D",
      "D#",
      "E",
      "F",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
    ],
    5: [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ],
    6: [
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
    ],
  };
  export const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  export const arrangeNotesByRoot = (rootNote) => {
    const rootIndex = notes.indexOf(rootNote);
    const notesRootFirst = notes
      .slice(rootIndex, notes.length)
      .concat(notes.slice(0, rootIndex));
    return notesRootFirst;
  };

  export const createScale = (scaleType, rootNote) => {
    const scaleObj = scales.find((scale) => scale.name.toLowerCase() === scaleType.toLowerCase());

    if (notes.includes(rootNote) && scaleObj !== undefined) {
      const scaleNotes = scaleObj.notes; //note intervals example [ 1, 3, 5, 6, 8, 10, 12 ]
      const notesRootFirst = arrangeNotesByRoot(rootNote);
      const scale = scaleNotes.map((i) => notesRootFirst[i - 1]);
      return scale;
    } else if (!notes.includes(rootNote)) {
      console.error(`Root note '${rootNote}' not found`);
    } else if (scaleObj === undefined) {
      console.error(`Scale name '${scaleType}' is incorrect`);
    }
  };
