import { notes } from "@/utils/notesData";

export type TNotes = (typeof notes)[number];

export type TChord = {
  name: string;
  notes: number[];
  abbreviations: string[];
};

export type TChordDetails = {
  abbreviations: string[];
  chordName: string;
  intervalNotes: string[];
  intervals: number[];
  note: string;
};

export type TScalesCombinations = {
  note: string;
  name: string;
  intervals: number[];
  intervalNotes: string[];
};

export type TChordCombinations = {
  note: string;
  chordName: string;
  abbreviations: string[];
  intervals: string[];
  intervalNotes: string[];
};

// export type TScaleDetails = {
//   empty: boolean;
//   name: string;
//   setNum: number;
//   chroma: string;
//   normalized: string;
//   intervals: string[];
//   aliases: string[];
//   type: string;
//   tonic: string | null;
//   notes: string[];
// };

export type TInputOption = {
  id: string;
  name: string;
  value: string;
};

export type TState = string;

export type TSetState = (value: string) => void;

export type TSVG = {
  className?: string;
  width?: number | string;
  height?: number | string;
  pathClass?: string;
  fill?: string;
};

export type TInstrumentsToggle = "piano" | "guitar";

export type TNotesEnharmonic =
  | "c"
  | "c#"
  | "db"
  | "d"
  | "d#"
  | "eb"
  | "e"
  | "fb"
  | "f"
  | "f#"
  | "gb"
  | "g"
  | "g#"
  | "ab"
  | "a"
  | "a#"
  | "bb"
  | "b"
  | "cb";

export type TNotesUpperEnharmonic =
  | "C"
  | "C#"
  | "Db"
  | "D"
  | "D#"
  | "Eb"
  | "E"
  | "Fb"
  | "F"
  | "F#"
  | "Gb"
  | "G"
  | "G#"
  | "Ab"
  | "A"
  | "A#"
  | "Bb"
  | "B"
  | "Cb";

export type TNotesAllEnharmonic = TNotesEnharmonic & TNotesUpperEnharmonic;

export type TChordsTabs = "all" | "roman" | "notes";
