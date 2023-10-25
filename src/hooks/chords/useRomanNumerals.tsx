import { chords } from "@/utils/chords";
import React from "react";
import { Scale } from "tonal";

const romanChordTypes = {
  major: [
    "major", // I
    "minor", // II
    "minor", // III
    "major", // IV
    "major", // V
    "minor", // VI
    "diminished", // VII
  ],

  minor: [
    "minor", // i
    "diminished", // ii
    "major", // III
    "minor", // iv
    "minor", // v
    "major", // VI
    "major", // VII
  ],
};

export default function useRomanNumerals() {
  const getRomanChordsString = (
    scaleTonic: string,
    scaleType: "major" | "minor"
  ) => {
    const scaleNotes = Scale.get(`${scaleTonic} ${scaleType}`).notes;
    const chordTypes = romanChordTypes[scaleType] || [];
    const concatenatedArray = scaleNotes.map((a, i) => `${a} ${chordTypes[i]}`);
    return concatenatedArray;
  };

  function getRomanChords(scaleTonic: string, scaleType: "major" | "minor") {
    const romanChords = getRomanChordsString(scaleTonic, scaleType);
    const extendedRomanChords = [];
    for (const chordString of romanChords) {
      const [root, chordName] = chordString.split(" ");
      const chordInfo = chords.find(
        (chord) =>
          chord.abbreviations.includes(chordName) || chord.name === chordName
      );

      extendedRomanChords.push({
        name: chordInfo ? chordInfo.name : "Unknown",
        notes: chordInfo ? chordInfo.notes : [],
        abbreviations: chordInfo ? chordInfo.abbreviations : [],
        root,
      });
    }
    return extendedRomanChords;
  }

  return { getRomanChords };
}
