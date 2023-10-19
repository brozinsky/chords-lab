import { create } from "zustand";
import { chords } from "@/utils/chords";
import { ChordType } from "@/utils/types";

const initChordsList = chords.map((chord) => ({
  ...chord,
  root: "c",
}));

interface StoreState {
  chordTab: string;
  setChordTab: (value: string) => void;

  chordsList: ChordType[];
  setChordsList: (value: ChordType[]) => void;
}

const useChordsListStore = create<StoreState>((set) => ({
  chordTab: "all",
  setChordTab: (value) => set({ chordTab: value }),

  chordsList: initChordsList,
  setChordsList: (value) => set({ chordsList: value }),
}));

export default useChordsListStore;
