import { Note } from "tonal";

export function simplifyNote(note: string) {
  const simplifiedNote = note.includes("b")
    ? Note.enharmonic(note)
    : Note.simplify(note);
  return simplifiedNote;
}

export function simplifyNotes(notes: string[]) {
  return notes.map((note) => simplifyNote(note));
}
