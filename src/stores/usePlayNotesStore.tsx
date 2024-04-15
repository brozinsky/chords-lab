import { create } from "zustand";

type TStore = {
  currentlyPlayedNotes: string[];
  setCurrentlyPlayedNotes: (value: string[]) => void;
}

const usePlayPianoStore = create<TStore>((set) => ({
  currentlyPlayedNotes: [],
  setCurrentlyPlayedNotes: (value) =>
    set(() => ({ currentlyPlayedNotes: value })),
}));

export default usePlayPianoStore;

// Add the following code outside the zustand store creation
const resetCurrentlyPlayedNotes = () => {
  usePlayPianoStore.getState().setCurrentlyPlayedNotes([]);
};

// Use the onSet callback to reset currentlyPlayedNotes after every change
usePlayPianoStore.subscribe(
  (state) => {
    if (
      state.currentlyPlayedNotes &&
      state.currentlyPlayedNotes.length > 0
    ) {
      setTimeout(resetCurrentlyPlayedNotes, 100);
    }
  },
);
