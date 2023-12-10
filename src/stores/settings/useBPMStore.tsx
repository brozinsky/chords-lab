import { create } from "zustand";

interface StoreState {
  bpm: number;
  setBpm: (value: number) => void;
}

const useBPMStore = create<StoreState>((set) => ({
  bpm: 150,
  setBpm: (value) => set(() => ({ bpm: value })),
}));

export default useBPMStore;
