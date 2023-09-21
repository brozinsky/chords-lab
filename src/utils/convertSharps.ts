export function convertSharps(note: string) {
  if (note.includes("#")) {
    return note.replace("#", "s").toLowerCase();
  } else {
    return note.toLowerCase();
  }
}
