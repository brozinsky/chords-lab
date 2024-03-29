import { chords } from "@/utils/chords";
import { TNotes } from "@/utils/types";
import { Scale } from "tonal";

type TScaleType = "major" | "minor";

export const romanChordTypes = {
  major: [
    { roman: "I", quality: "major" },
    { roman: "II", quality: "minor" },
    { roman: "iii", quality: "minor" },
    { roman: "IV", quality: "major" },
    { roman: "V", quality: "major" },
    { roman: "vi", quality: "minor" },
    { roman: "vii°", quality: "diminished" },
  ],

  minor: [
    { roman: "i", quality: "minor" },
    { roman: "ii", quality: "diminished" },
    { roman: "III", quality: "major" },
    { roman: "iv", quality: "minor" },
    { roman: "v", quality: "minor" },
    { roman: "VI", quality: "major" },
    { roman: "VII", quality: "major" },
  ],
};

const getRomanChordsList = (
  scaleTonic: TNotes,
  scaleType: TScaleType
) => {
  const scaleNotes = Scale.get(`${scaleTonic} ${scaleType}`).notes;
  const chordTypes = romanChordTypes[scaleType] || [];
  const concatenatedArray = scaleNotes.map(
    (a, i) => `${a} ${chordTypes[i].quality}`
  );
  return concatenatedArray;
};

export const getRomanChords = (
  scaleTonic: TNotes,
  scaleType: TScaleType
) => {
  const romanChords = getRomanChordsList(scaleTonic, scaleType);
  const chordTypes = romanChordTypes[scaleType];

  const extendedRomanChords = romanChords.map((chordString, index) => {
    const [root, chordName] = chordString.split(" ");
    const chordInfo = chords.find(
      (chord) =>
        chord.abbreviations.includes(chordName) || chord.name === chordName
    );

    return {
      name: chordInfo ? chordInfo.name : "Unknown",
      romanNumeral: chordTypes[index].roman,
      notes: chordInfo ? chordInfo.notes : [],
      abbreviations: chordInfo ? chordInfo.abbreviations : [],
      root,
    };
  });

  return extendedRomanChords;
};
