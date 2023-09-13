import {create} from "zustand";

export interface Scale {
  note: string;
  name: string;
  intervals: number[];
  intervalNotes: string[];
}

interface SelectedScaleState {
  selectedScale: Scale | undefined;
  setSelectedScale: (newScale: any) => void;
}

const useSelectedScale = create<SelectedScaleState>((set) => ({
  selectedScale: undefined,
  setSelectedScale: (newScale) => set({ selectedScale: newScale }),
}));

export default useSelectedScale;
