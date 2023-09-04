function isChordInScale(chordNotes, scaleNotes) {
  // convert chordNotes and scaleNotes to sets for efficient lookup
  const chordSet = new Set(chordNotes);
  const scaleSet = new Set(scaleNotes);

  // check if every note in chordNotes is in the scale
  for (const note of chordSet) {
    if (!scaleSet.has(note)) {
      return false; // chord contains a note not in the scale
    }
  }

  return true; // all notes in the chord are in the scale
}

export default isChordInScale;
