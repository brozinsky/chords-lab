import { Scale } from "tonal";
import { create } from "zustand";

type TScaleProps = {
  empty: boolean;
  name: string;
  setNum: number;
  chroma: string;
  normalized: string;
  intervals: string[];
  aliases: string[];
  type: string;
  tonic: string | null;
  notes: string[];
}

type TSelectedScaleState = {
  tonic: string;
  setTonic: (value: string) => void;
  type: string;
  setType: (value: string) => void;
  selectedScale: TScaleProps | undefined;
  setSelectedScale: (value: TScaleProps | undefined) => void;
}

const initialTonic =  "C";
const initialType = "major";
const scaleData = Scale.get(`${initialTonic}2 ${initialType}`);

const useSelectedScale = create<TSelectedScaleState>((set) => ({
  tonic: initialTonic,
  setTonic: (value) => set(() => ({ tonic: value })),
  type: initialType,
  setType: (value) => set(() => ({ type: value })),
  selectedScale: scaleData,
  setSelectedScale: (value) => set(() => ({ selectedScale: value })),
}));

// update selectedScale on tonic and type changes
useSelectedScale.subscribe((state, prevState) => {
  const { tonic, type } = state;
  const { tonic: prevTonic, type: prevType } = prevState;


  if (tonic !== prevTonic || type !== prevType) {
    const scaleData = Scale.get(`${tonic}2 ${type}`);
    const newScale: TScaleProps = {
      ...scaleData,
    };

    state.setSelectedScale(newScale);
  }
});

export default useSelectedScale;
