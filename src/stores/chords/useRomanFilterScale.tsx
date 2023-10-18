import { create } from "zustand";

interface State {
  tonic: string;
  setTonic: (value: string) => void;
  type: "major" | "minor";
  setType: (value: "major" | "minor") => void;
}

const useRomanFilterScale = create<State>((set) => ({
  tonic: "C",
  setTonic: (value) => set(() => ({ tonic: value })),
  type: "major",
  setType: (value) => set(() => ({ type: value })),
}));

export default useRomanFilterScale;
