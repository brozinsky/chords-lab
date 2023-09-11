export const notesWithSprite = {
  c2: [0, 3000],
  cs2: [7804, 3000],
  d2: [15608, 3000],
  ds2: [23412, 3000],
  e2: [31216, 3000],
  f2: [39020, 3000],
  fs2: [46824, 3000],
  g2: [54628, 3000],
  gs2: [62432, 3000],
  a2: [70236, 3000],
  as2: [78040, 3000],
  b2: [85844, 3000],
  c3: [93648, 3000],
  cs3: [101452, 3000],
  d3: [109256, 3000],
  ds3: [117060, 3000],
  e3: [124864, 3000],
  f3: [132668, 3000],
  fs3: [140472, 3000],
  g3: [148276, 3000],
  gs3: [156080, 3000],
  a3: [163884, 3000],
  as3: [171688, 3000],
  b3: [179492, 3000],
};

export const intervalDegrees = [
  {id: 1, symbol: "1", name: "unison"},
  {id: 2, symbol: "♭2", name: "minor 2nd"},
  {id: 3, symbol: "2", name: "major 2nd"},
  {id: 4, symbol: "♭3", name: "minor 3rd"},
  {id: 5, symbol: "3", name: "major 3rd"},
  {id: 6, symbol: "4", name: "perfect 4th"},
  {id: 7, symbol: "♭5", name: "diminished 5th"},
  {id: 8, symbol: "5", name: "perfect 5th"},
  {id: 9, symbol: "♭6", name: "minor 6th"},
  {id: 10, symbol: "6", name: "major 6th"},
  {id: 11, symbol: "♭7", name: "minor 7th"},
  {id: 12, symbol: "7", name: "major 7th"},
  {id: 13, symbol: "8", name: "octave"},
  {id: 14, symbol: "♭9", name: "minor 9th"},
  {id: 15, symbol: "9", name: "major 9th"},
  {id: 16, symbol: "♭10", name: "minor 10th"},
  {id: 17, symbol: "10", name: "major 10th"},
  {id: 18, symbol: "11", name: "major 11th"},
  {id: 19, symbol: "12", name: "minor 12th"},
  {id: 20, symbol: "12", name: "major 12th"},
  {id: 21, symbol: "♭13", name: "minor 13th"},
  {id: 22, symbol: "13", name: "major 13th"},
];

export const pianoNotes = [];
for (const note in notesWithSprite) {
  const name = note;
  pianoNotes.push({ name });
}
