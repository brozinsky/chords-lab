import MenuTop from "@/components/modules/navigation/MenuTop";
import { Interval } from "tonal";
import React from "react";
import CircleOfFifthsSVG from "@/components/elements/svg/CircleOfFifthsSVG";

function circleOfFifths(startingNote: string, numNotes: number) {
  const chromaticScale = [
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

  let startIndex = chromaticScale.indexOf(startingNote);
  if (startIndex === -1) {
    throw new Error("Starting note not found in chromatic scale.");
  }

  const circleFifths = [];

  for (let i = 0; i < numNotes; i++) {
    const note = chromaticScale[startIndex % 12].toLowerCase(); // Add lowercase note
    circleFifths.push(note);
    startIndex += 7; // Move up a perfect fifth
  }

  return circleFifths;
}

export default function CirclePage() {
  const test = Interval.num("5P");

  const circle = circleOfFifths("C", 12);

  return (
    <>
      <MenuTop />
      <CircleOfFifthsSVG />
    </>
  );
}
