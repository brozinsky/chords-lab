import { create } from "zustand";

type TStore = {
  chordTab: number;
  setChordTab: (value: number)  => void;

  scaleTab: number;
  setScaleTab: (value: number) => void;
}

const useTabsStore = create<TStore>((set) => ({
  chordTab: 0,
  setChordTab: (value) => set(() => ({ chordTab: value })),

  scaleTab: 0,
  setScaleTab: (value) => set(() => ({ scaleTab: value })),
}));

export default useTabsStore;
