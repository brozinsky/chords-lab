import { TNotes } from "@/utils/types";
import { create } from "zustand";

type TStore = {
  allChordsRoot: TNotes;
  setAllChordsRoot: (value: string) => void;

  romanScaleTonic: TNotes;
  setRomanScaleTonic: (value: string) => void;
  romanScaleType: "major" | "minor";
  setRomanScaleType: (value: "major" | "minor") => void;

  notesChordsNotes: TNotes[];
  setNotesChordsNotes: (value: TNotes[]) => void;
}

const useFilterStore = create<TStore>((set) => ({
  allChordsRoot: "C",
  setAllChordsRoot: (value) => set(() => ({ allChordsRoot: value })),

  romanScaleTonic: "C",
  setRomanScaleTonic: (value) => set(() => ({ romanScaleTonic: value })),
  romanScaleType: "major",
  setRomanScaleType: (value) => set(() => ({ romanScaleType: value })),

  notesChordsNotes: ["C"],
  setNotesChordsNotes: (value) => set(() => ({ notesChordsNotes: value })),
}));

export default useFilterStore;
