export const flatToSharp = {
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#",
};

export function convertFlatsToSharps(notes) {
  const convertedNotes = notes.map((note) => {
    // Split the note into the base note and octave (if present)
    const match = note.match(/^([A-Ga-g#b]+)(\d*)$/);
    if (match) {
      const baseNote = match[1];
      const octave = match[2] || ""; // Default to empty string if no octave is present

      // Check if the base note is a flat and has an equivalent sharp
      if (flatToSharp.hasOwnProperty(baseNote)) {
        return flatToSharp[baseNote] + octave;
      } else {
        return note; // If not a flat, leave it unchanged
      }
    } else {
      return note; // If the note format is invalid, leave it unchanged
    }
  });
  return convertedNotes;
}
