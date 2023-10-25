import { NotesTypes } from "@/utils/types";
import { create } from "zustand";

interface FilterStoreState {
  allChordsRoot: NotesTypes;
  setAllChordsRoot: (value: string) => void;

  romanScaleTonic: NotesTypes;
  setRomanScaleTonic: (value: string) => void;
  romanScaleType: "major" | "minor";
  setRomanScaleType: (value: "major" | "minor") => void;

  notesChordsNotes: NotesTypes[];
  setNotesChordsNotes: (value: NotesTypes[]) => void;
}

const useFilterStore = create<FilterStoreState>((set) => ({
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
