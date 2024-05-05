import React from "react";

type ChordSimplifications = { [key: string]: string };

export function simplifyChordType(chord: string): string {
  const simplifications: ChordSimplifications = {
    major: "maj",
    minor: "min",
    "major seventh": "maj7",
    "minor seventh": "min7",
    "dominant seventh": "7",
    "suspended fourth": "sus",
    augmented: "aug",
    diminished: "dim",
    "half-diminished": "m7b5",
  };

  // Check if the exact chord name is in the dictionary
  if (simplifications[chord]) {
    return simplifications[chord];
  }

  // If not, try to find a partial match for compound names
  for (const key in simplifications) {
    if (chord.includes(key)) {
      return chord.replace(key, simplifications[key]);
    }
  }

  // Return the original chord if no simplifications apply
  return chord;
}
