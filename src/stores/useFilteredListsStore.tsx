import { create } from "zustand";
import isChordInScale from "@/utils/isChordInScale";
import { createScale } from "@/utils/notesData";
import { TChordCombinations } from "@/utils/types";

type TStore = {
  filteredLists: {
    scaleFiltered: TChordCombinations[];
    rootFiltered: TChordCombinations[];
    suffixFiltered: TChordCombinations[];
  };
  updateFilteredLists: (
    isRoot: boolean,
    isSearchedBySuffix: boolean,
    chordRoot: string,
    chordSuffix: string,
    chordCombinations: TChordCombinations[],
    isInScale: boolean,
    scaleMode: string,
    scaleTonic: string
  ) => void;
}

const useFilteredListsStore = create<TStore>((set) => ({
  filteredLists: {
    scaleFiltered: [],
    rootFiltered: [],
    suffixFiltered: [],
  },
  updateFilteredLists: (
    isRoot,
    isSearchedBySuffix,
    chordRoot,
    chordSuffix,
    chordCombinations,
    isInScale,
    scaleMode,
    scaleTonic
  ) => {
    const updatedLists = {
      scaleFiltered: isInScale
        ? chordCombinations.filter(({intervalNotes}) =>
            isChordInScale(
              intervalNotes,
              createScale(scaleTonic, scaleMode)
            )
          )
        : chordCombinations,
      rootFiltered: isRoot
        ? chordCombinations.filter((chord) => chord.note === chordRoot)
        : chordCombinations,
      suffixFiltered: isSearchedBySuffix
        ? chordCombinations.filter((chord) => chord.chordName === chordSuffix)
        : chordCombinations,
    };
    set({ filteredLists: updatedLists });
  },
}));

export default useFilteredListsStore;
