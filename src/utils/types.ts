import { notes } from "@/utils/notesData";

export type NotesTypes = (typeof notes)[number];

export type ChordType = {
  name: string;
  notes: number[];
  abbreviations: string[];
};

export type ChordDetails = {
  abbreviations: string[];
  chordName: string;
  intervalNotes: string[];
  intervals: number[];
  note: string;
};

export type ScalesCombinations = {
  note: string;
  name: string;
  intervals: number[];
  intervalNotes: string[];
};

export type ChordCombination = {
  note: string;
  chordName: string;
  abbreviations: string[];
  intervals: string[];
  intervalNotes: string[];
};

export type ScaleDetails = {
  empty: boolean;
  name: string;
  setNum: number;
  chroma: string;
  normalized: string;
  intervals: string[];
  aliases: string[];
  type: string;
  tonic: string | null;
  notes: string[];
};

export type InputOption = {
  id: string;
  name: string;
  value: string;
};

export type State = string;

export type SetState = (value: string) => void;

