import { create } from "zustand";

type TStore = {
  volume: number;
  prevVolume: number;
  setVolume: (value: number) => void;
};

const useSettingsStore = create<TStore>((set) => {
  const storedVolume = parseFloat(localStorage.getItem("volume") || "0.3");
  const storedPrevVolume = parseFloat(
    localStorage.getItem("prevVolume") || "0.3"
  );

  return {
    volume: storedVolume,
    prevVolume: storedPrevVolume,
    setVolume: (newVolume) => {
      set((state) => {
        localStorage.setItem("prevVolume", state.volume.toString());
        localStorage.setItem("volume", newVolume.toString());
        return {
          volume: newVolume,
          prevVolume: state.volume,
        };
      });
    },
  };
});

export default useSettingsStore;
