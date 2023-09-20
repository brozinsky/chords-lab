import { Chord } from "tonal";
import {create} from "zustand";

export interface Chord {
  abbreviations: string[];
  chordName: string;
  intervalNotes: string[];
  intervals: number[];
  note: string;
}

interface ChordProps {
  empty?: boolean;
  name?: string;
  setNum?: number;
  chroma?: string;
  normalized?: string;
  intervals?: string[];
  quality?: string;
  aliases?: string[];
  symbol?: string;
  type?: string;
  root?: string;
  rootDegree?: number;
  tonic?: string | null;
  notes?: string[];
}

interface SelectedChordState {
  root: string;
  setRoot: (value: string) => void;
  quality: string;
  setQuality: (value: string) => void;
  selectedChord: ChordProps | undefined;
  setSelectedChord: (value: ChordProps | undefined) => void;
}

const initialRoot = "C";
const initialQuality = "major";
const chordData = Chord.get([initialRoot, initialQuality]);

const initialChord: ChordProps = {
  empty: false,
  name: chordData.name,
  setNum: chordData.setNum,
  chroma: chordData.chroma,
  normalized: chordData.normalized,
  intervals: chordData.intervals,
  quality: chordData.quality,
  aliases: chordData.aliases,
  symbol: chordData.symbol,
  type: chordData.type,
  root: chordData.root,
  rootDegree: chordData.rootDegree,
  tonic: chordData.tonic,
  notes: chordData.notes,
};

const useSelectedChord = create<SelectedChordState>((set) => ({
  root: initialRoot,
  setRoot: (value) => set(() => ({ root: value })),
  quality: initialQuality,
  setQuality: (value) => set(() => ({ quality: value })),
  selectedChord: initialChord,
  setSelectedChord: (value) => set(() => ({ selectedChord: value })),
}));

export default useSelectedChord;
