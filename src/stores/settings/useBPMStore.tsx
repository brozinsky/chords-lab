import { create } from "zustand";

type TState = {
  bpm: number;
};

type TAction = {
  setBpm: (value: number) => void;
};

const useBPMStore = create<TState & TAction>((set) => ({
  bpm: 150,
  setBpm: (value) => set(() => ({ bpm: value })),
}));

export default useBPMStore;
