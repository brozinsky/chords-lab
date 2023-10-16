export interface ChordType {
  name: string;
  notes: number[];
  abbreviations: string[];
}

export interface ChordDetails {
  abbreviations: string[];
  chordName: string;
  intervalNotes: string[];
  intervals: number[];
  note: string;
}

export interface ScalesCombinations {
  note: string;
  name: string;
  intervals: number[];
  intervalNotes: string[];
}

export interface ChordCombination {
  note: string;
  chordName: string;
  abbreviations: string[];
  intervals: string[];
  intervalNotes: string[];
}

export interface ScaleDetails {
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
}
