import { useEffect } from "react";
import useSettingsStore from "@/stores/useSettingsStore"; // Import the Zustand store
import { Howler } from "howler";
import * as Slider from '@radix-ui/react-slider';

const Volume = () => {
  const volume = useSettingsStore((state) => state.volume);
  const setVolume = useSettingsStore((state) => state.setVolume);

  useEffect(() => {
    Howler.volume(volume);
  }, [volume]);

  return (
    <div className="flex flex-row gap-2 items-center text-white w-full">
      <Slider.Root
        className="group relative flex items-center self-center select-none touch-none w-full h-5"
        defaultValue={[volume*100]}
        value={[volume*100]}
        onValueChange={(values: number[]) => setVolume(values[0] / 100)}
        max={100}
        min={0}
        step={1}
      >
        <Slider.Track className="bg-foreground relative grow rounded-full h-[4px]">
          <Slider.Range className="absolute bg-emerald-500 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="focus:outline-none block w-4 h-4 rounded-[10px] transition group-hover:bg-foreground"
          aria-label="Volume"
        />
      </Slider.Root>
      <div className="w-6">{Math.round(volume * 100)}</div>
    </div>
  );
};

export default Volume;
