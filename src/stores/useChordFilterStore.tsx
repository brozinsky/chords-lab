import { create } from "zustand";
import { scales, notes as pianoNotes } from "@/utils/notesData";
import { chords } from "@/utils/chords";

interface ChordFilterStoreState {
  lengths: number[];
  setLengths: (value: number[]) => void;

  isRoot: boolean;
  setIsRoot: (value: boolean) => void;

  isInScale: boolean;
  setIsInScale: (value: boolean) => void;

  isSearchedBySuffix: boolean;
  setIsSearchedBySuffix: (value: boolean) => void;

  scaleTonic: string; // eg "C"
  setScaleTonic: (value: string) => void;

  scaleMode: string; // eg "major"
  setScaleMode: (value: string) => void;

  chordRoot: string; // eg "C"
  setChordRoot: (value: string) => void;

  chordSuffix: string; // eg "major triad"
  setChordSuffix: (value: string) => void;

  searchValue: string;
  setSearchValue: (value: string) => void;
}

const useChordFilterStore = create<ChordFilterStoreState>((set) => ({
  lengths: [3, 4],
  setLengths: (value) => set(() => ({ lengths: value })),

  isRoot: false,
  setIsRoot: (value) => set(() => ({ isRoot: value })),

  isInScale: false,
  setIsInScale: (value) => set(() => ({ isInScale: value })),

  isSearchedBySuffix: false,
  setIsSearchedBySuffix: (value) => set(() => ({ isSearchedBySuffix: value })),

  scaleTonic: pianoNotes[0],
  setScaleTonic: (value) => set(() => ({ scaleTonic: value })),

  scaleMode: scales[0].name,
  setScaleMode: (value) => set(() => ({ scaleMode: value })),

  chordRoot: pianoNotes[0],
  setChordRoot: (value) => set(() => ({ chordRoot: value })),

  chordSuffix: chords[0].name,
  setChordSuffix: (value) => set(() => ({ chordSuffix: value })),

  searchValue: "",
  setSearchValue: (value) => set(() => ({ searchValue: value })),
}));

export default useChordFilterStore;
