import { create } from "zustand"

const useSelectedChord = create((set) => ({
  selectedChord: {},
  setSelectedChord: (newChord) => set({ selectedChord: newChord }),
}));

export default useSelectedChord;
