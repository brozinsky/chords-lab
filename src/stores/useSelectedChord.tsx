import {create} from "zustand";

export interface Chord {
  abbreviations: string[];
  chordName: string;
  intervalNotes: string[];
  intervals: number[];
  note: string;
}

interface SelectedChordState {
  selectedChord: Chord | undefined;
  setSelectedChord: (newChord: any) => void;
}

const useSelectedChord = create<SelectedChordState>((set) => ({
  selectedChord: undefined,
  setSelectedChord: (newChord) => set({ selectedChord: newChord }),
}));

export default useSelectedChord;
