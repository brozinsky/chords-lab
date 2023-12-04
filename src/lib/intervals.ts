export const consonancesLib = [
  {value: 0, name: "absolute", className: " stroke-green-100"},
  {value: 1, name: "perfect", className: "stroke-green-500"},
  {value: 2, name: "medial", className: "stroke-yellow-200"},
  {value: 3, name: "imperfect", className: "stroke-yellow-500"},
  {value: 4, name: "dissonance", className: "stroke-red-500"},
]

//TODO check consonances - 5♭
export const intervalsLib = [
  { rotate: "", id: 1, range: 0, symbol: "1",  consonance: consonancesLib[0].name, symbolSecondary: ["1P"], name: "unison", isConsonant: true },
  { rotate: "rotate-[30deg]", id: 2, range: 1, symbol: "2♭", consonance: consonancesLib[4].name, symbolSecondary: ["2m"],  name: "minor 2nd", isConsonant: false },
  { rotate: "rotate-[60deg]", id: 3, range: 2, symbol: "2",  consonance: consonancesLib[4].name, symbolSecondary: ["2M"], name: "major 2nd", isConsonant: false },
  { rotate: "rotate-[90deg]", id: 4, range: 3, symbol: "3♭", consonance: consonancesLib[3].name, symbolSecondary: ["3m"],  name: "minor 3rd", isConsonant: true },
  { rotate: "rotate-[120deg]", id: 5, range: 4, symbol: "3",  consonance: consonancesLib[2].name, symbolSecondary: ["3M"], name: "major 3rd", isConsonant: true },
  { rotate: "rotate-[150deg]", id: 6, range: 5, symbol: "4",  consonance: consonancesLib[1].name, symbolSecondary: ["4P", "4A"], name: "perfect 4th", isConsonant: true },
  { rotate: "rotate-[180deg]", id: 7, range: 6, symbol: "5♭", consonance: consonancesLib[3].name, symbolSecondary: ["5d", "5p"],  name: "diminished 5th", isConsonant: false }, 
  { rotate: "rotate-[210deg]", id: 8, range: 7, symbol: "5",  consonance: consonancesLib[1].name, symbolSecondary: ["5P", "5D"], name: "perfect 5th", isConsonant: true },
  { rotate: "rotate-[240deg]", id: 9, range: 8, symbol: "6♭", consonance: consonancesLib[3].name, symbolSecondary: ["6m", "5A"],  name: "minor 6th", isConsonant: true },
  { rotate: "rotate-[270deg]", id: 10, range: 9, symbol: "6", consonance: consonancesLib[2].name, symbolSecondary: ["6M", "7d"],  name: "major 6th", isConsonant: true },
  { rotate: "rotate-[300deg]", id: 11, range: 10, symbol: "7♭",consonance: consonancesLib[4].name,  symbolSecondary: ["7m"],  name: "minor 7th", isConsonant: false },
  { id: 12, range: 11, symbol: "7", consonance: consonancesLib[4].name, symbolSecondary: ["7M"], name: "major 7th", isConsonant: false },
  { id: 13, range: 12, symbol: "8", consonance: consonancesLib[0].name, symbolSecondary: [""], name: "octave", isConsonant: true },
  { id: 14, range: 13, symbol: "9♭",symbolSecondary: ["9m"],  name: "minor 9th", isConsonant: false },
  { id: 15, range: 14, symbol: "9", symbolSecondary: ["9M"], name: "major 9th", isConsonant: false },
  { id: 16, range: 15, symbol: "10♭",symbolSecondary: ["10m"],  name: "minor 10th", isConsonant: true },
  { id: 17, range: 16, symbol: "10", symbolSecondary: ["10M"], name: "major 10th", isConsonant: true },
  { id: 18, range: 17, symbol: "11", symbolSecondary: ["11M"], name: "major 11th", isConsonant: true },
  { id: 19, range: 18, symbol: "12♭", symbolSecondary: ["12m"], name: "minor 12th", isConsonant: false },
  { id: 20, range: 19, symbol: "12", symbolSecondary: ["12M"], name: "major 12th", isConsonant: true },
  { id: 21, range: 20, symbol: "13♭",symbolSecondary: ["13m"],  name: "minor 13th", isConsonant: true },
  { id: 22, range: 21, symbol: "13", symbolSecondary: ["13M"], name: "major 13th", isConsonant: true },
];