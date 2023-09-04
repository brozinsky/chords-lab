import { create } from "zustand";
import { scales, notes as pianoNotes } from "@/utils/notesData";
import { chords } from "@/utils/chords";

const useFilterStore = create((set) => ({
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

export default useFilterStore;
