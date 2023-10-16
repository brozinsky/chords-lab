import { create } from "zustand";
import { chords } from "@/utils/chords";
import { ChordType } from "@/utils/types";

const chordsWithRoot = chords.map((chord) => ({
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

  chordsList: chordsWithRoot,
  setChordsList: (value) => set({ chordsList: value }),
}));

// useChordsListStore.subscribe((state) => {
//   switch (state.chordTab) {
//     case 0:
//       state.setChordsList(chordsWithRoot);
//       break;
//     case 1:
//       const { getRomanChords } = useRomanNumerals();
//       const romanChords = getRomanChords("c", "major");
//       state.setChordsList(romanChords);
//       break;
//     case 2:
//       state.setChordsList(chordsWithRoot);
//       break;
//     default:
//       state.setChordsList(chords);
//       break;
//   }
// });

export default useChordsListStore;
