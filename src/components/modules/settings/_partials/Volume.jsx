import React, { useEffect } from "react";
import useSettingsStore from "@/stores/useSettingsStore"; // Import the Zustand store
import { Howler } from "howler";

const Volume = () => {
  const volume = useSettingsStore((state) => state.volume); // Access volume state
  const setVolume = useSettingsStore((state) => state.setVolume); // Access setVolume action

  useEffect(() => {
    Howler.volume(volume);
  }, [volume]);

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };
  return (
    <div className="flex flex-row gap-4 text-white">
      <input
        type="range"
        min="0"
        max="1"
        value={volume}
        onChange={handleVolumeChange}
        step="0.01"
      />
      <div>{Math.round(volume * 100)}</div>
    </div>
  );
};

export default Volume;
