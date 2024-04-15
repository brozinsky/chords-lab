import { TNotes } from "@/utils/types";
import { Chord } from "tonal";
import { create } from "zustand";

export type TChord = {
  abbreviations: string[];
  chordName: string;
  intervalNotes: string[];
  intervals: number[];
  note: string;
}

type TChordProps = {
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

type TStore = {
  selectedChord: TChordProps | undefined;
  setSelectedChord: (value: TChordProps | undefined) => void;
  root: TNotes;
  setRoot: (value: TNotes) => void;
  quality: string;
  setQuality: (value: string) => void;
}

const initialRoot = localStorage.getItem("root") || "C";
const initialQuality = localStorage.getItem("quality") || "major";
const chordData = Chord.get([initialRoot + "2", initialQuality]);

const initialChord: TChordProps = {
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

const useSelectedChord = create<TStore>((set) => ({
  root: initialRoot,
  setRoot: (value) => {
    localStorage.setItem("root", value);
    set({ root: value });
  },

  quality: initialQuality,
  setQuality: (value) => {
    localStorage.setItem("quality", value);
    set({ quality: value });
  },

  selectedChord: initialChord,
  setSelectedChord: (value) => set({ selectedChord: value }),
}));

useSelectedChord.subscribe((state, prevState) => {
  const { root, quality } = state;
  const { root: prevRoot, quality: prevQuality } = prevState;

  if (root !== prevRoot || quality !== prevQuality) {
    const chordData = Chord.get([root + "2", quality]);
    const newChord: TChordProps = {
      ...chordData,
    };

    state.setSelectedChord(newChord);
  }
});

export default useSelectedChord;
