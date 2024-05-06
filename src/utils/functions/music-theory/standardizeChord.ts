export function standardizeChord(chord: string) {
  // Initialize an empty array to store the parts of the chord
  let parts = [];

  if (chord.endsWith("maj7")) {
    parts.push(chord.slice(0, -4), "maj7");
  } else if (chord.endsWith("maj")) {
    parts.push(chord.slice(0, -3));
  } else if (chord.endsWith("m")) {
    parts.push(chord.slice(0, -1).toLowerCase());
  } else if (chord.endsWith("sus")) {
    parts.push(chord.slice(0, -3), "sus");
  } else {
    parts.push(chord);
  }

  return parts;
}
