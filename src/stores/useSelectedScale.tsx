import { create } from "zustand";

interface ScaleProps {
  empty: boolean;
  name: string;
  setNum: number;
  chroma: string;
  normalized: string;
  intervals: string[];
  aliases: string[];
  type: string;
  tonic: string;
  notes: string[];
}

interface SelectedScaleState {
  tonic: string;
  setTonic: (value: string) => void;
  type: string;
  setType: (value: string) => void;
  selectedScale: ScaleProps | undefined;
  setSelectedScale: (value: ScaleProps | undefined) => void;
}

const useSelectedScale = create<SelectedScaleState>((set) => ({
  tonic: "C",
  setTonic: (value) => set(() => ({ tonic: value })),
  type: "major",
  setType: (value) => set(() => ({ type: value })),
  selectedScale: undefined,
  setSelectedScale: (value) => set(() => ({ selectedScale: value })),
}));

export default useSelectedScale;
