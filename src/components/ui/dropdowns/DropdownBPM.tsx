import * as Slider from '@radix-ui/react-slider';
import useBPMStore from "@/stores/settings/useBPMStore";

const DropdownBPM = () => {
  const {bpm, setBpm} = useBPMStore();

  return (
    <div className="flex flex-row gap-2 items-center text-white w-full">
      <Slider.Root
        className="group relative flex items-center self-center select-none touch-none w-full h-5"
        defaultValue={[bpm]}
        value={[bpm]}
        onValueChange={(values: number[]) => setBpm(values[0])}
        max={200}
        min={60}
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
      <div className="w-6">{Math.round(bpm)}</div>
    </div>
  );
};

export default DropdownBPM;
