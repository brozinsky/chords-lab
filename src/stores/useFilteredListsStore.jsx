import { create } from "zustand";
import isChordInScale from "@/utils/isChordInScale";
import { createScale } from "@/utils/notesData";

const useFilteredListsStore = create((set) => ({
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
