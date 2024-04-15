import { create } from "zustand";
import { chords, getAllChords } from "@/utils/chords";
import { TChord } from "@/utils/types";

const initChordsList = chords.map((chord) => ({
  ...chord,
  root: "c",
}));

let initAllChords: TChord[] | null = null;

const initializeAllChords = () => {
  if (initAllChords === null) {
    initAllChords = getAllChords();
  }
  return initAllChords;
};

type TStore = {
  chordTab: string;
  setChordTab: (value: string) => void;

  chordsList: TChord[];
  setChordsList: (value: TChord[]) => void;

  allChordsList: any;
  setAllChordsList: (value: TChord[]) => void;
}

const useChordsListStore = create<TStore>((set) => ({
  chordTab: "all",
  setChordTab: (value) => set({ chordTab: value }),

  chordsList: initChordsList,
  setChordsList: (value) => set({ chordsList: value }),

  allChordsList: initializeAllChords(),
  setAllChordsList: (value) => set({ allChordsList: value }),
}));

export default useChordsListStore;
