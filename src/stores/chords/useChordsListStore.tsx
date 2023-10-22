import { create } from "zustand";
import { chords, getAllChords } from "@/utils/chords";
import { ChordType } from "@/utils/types";

const initChordsList = chords.map((chord) => ({
  ...chord,
  root: "c",
}));

let initAllChords: ChordType[] | null = null;

const initializeAllChords = () => {
  if (initAllChords === null) {
    initAllChords = getAllChords();
  }
  return initAllChords;
};

interface StoreState {
  chordTab: string;
  setChordTab: (value: string) => void;

  chordsList: ChordType[];
  setChordsList: (value: ChordType[]) => void;

  allChordsList: any;
  setAllChordsList: (value: ChordType[]) => void;
}

const useChordsListStore = create<StoreState>((set) => ({
  chordTab: "all",
  setChordTab: (value) => set({ chordTab: value }),

  chordsList: initChordsList,
  setChordsList: (value) => set({ chordsList: value }),

  allChordsList: initializeAllChords(),
  setAllChordsList: (value) => set({ allChordsList: value }),
}));

export default useChordsListStore;
