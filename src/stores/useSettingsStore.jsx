import { create } from "zustand"

const useSettingsStore = create((set) => ({
  volume: 0.3,
  setVolume: (newVolume) => set({ volume: newVolume }),
}));

export default useSettingsStore;
