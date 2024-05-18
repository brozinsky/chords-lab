import Dropdown from "@/components/ui/dropdowns/Dropdown";
import Button from "@/components/ui/buttons/Button";
import { motion } from "framer-motion";
import DropdownBPM from "@/components/ui/dropdowns/DropdownBPM";
import { notesOptions } from "@/utils/functions/music-theory/selectOptions";
import Select from "@/components/ui/dropdowns/Select";
import usePlayPiano from "@/hooks/usePlayPiano";
import { TChordProgressionItem } from "@/utils/types";
import { useEffect, useMemo, useState } from "react";
import {
  majorChordProgressions,
  minorChordProgressions,
} from "@/lib/chord-progressions";
import SelectProgression from "@/components/ui/dropdowns/SelectProgression";

const options = [
  {
    id: 1,
    name: "major",
    value: "major",
  },
  {
    id: 2,
    name: "minor",
    value: "minor",
  },
];

type TProps = {
  scaleKey: any;
  setScaleKey: any;
  setScaleType: any;
  scaleType: "minor" | "major";
  chordProgression: TChordProgressionItem[];
  setEditedChordId: (romanProgression: string | null) => void;
  setProgressionByRomanNumerals: (romanProgression: string[]) => void;
};

function arraysEqual(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const ProgressionPanel = ({
  scaleKey,
  setScaleKey,
  setScaleType,
  scaleType,
  chordProgression,
  setEditedChordId,
  setProgressionByRomanNumerals,
}: TProps) => {
  const { playPianoProgression } = usePlayPiano();
  const [romanProgression, setRomanProgression] = useState(null);

  const currentOptions = useMemo(
    () =>
      scaleType === "major"
        ? majorChordProgressions
        : scaleType === "minor"
        ? minorChordProgressions
        : majorChordProgressions,
    [scaleType]
  );

  useEffect(() => {
    if (romanProgression) {
      setProgressionByRomanNumerals(romanProgression);
      setEditedChordId(null);
    }
  }, [romanProgression]);

  return (
    <div className="pt-3 flex justify-between items-center">
      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-2 items-center">
          <Select
            size={"sm"}
            variant={"outlined"}
            contentType={"tonic"}
            options={notesOptions}
            state={scaleKey}
            setState={setScaleKey}
          />
          <span>Key</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Select
            size={"sm"}
            variant={"outlined"}
            contentType={"tonic"}
            options={options}
            state={scaleType}
            setState={setScaleType}
          />
          <span>Scale</span>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-2 items-center">
          <SelectProgression
            size={"sm"}
            variant={"outlined"}
            contentType={"tonic"}
            options={currentOptions}
            displayValue={
              romanProgression
                ? [...majorChordProgressions, ...minorChordProgressions].find((item) =>
                    arraysEqual(item.value, romanProgression)
                  )?.name
                : "Select"
            }
            state={romanProgression}
            setState={setRomanProgression}
          />
          <span>Popular progressions</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">
        <Dropdown
          isCenter
          trigger={
            <motion.div
              whileTap={{ scale: 0.92 }}
              className="select-none cursor-pointer p-2 rounded-lg active:bg-neutral-600 flex flex-col items-center"
            >
              <div className="text-lg">128</div>
              <div className="text-xs">BPM</div>
            </motion.div>
          }
        >
          <div className="flex flex-row gap-1 py-1 pl-1.5 pr-4">
            <DropdownBPM />
          </div>
        </Dropdown>
        <Button
          variant="emerald"
          icon="play"
          isLoading={false}
          onClick={() => playPianoProgression(chordProgression)}
        >
          Play
        </Button>
      </div>
    </div>
  );
};

export default ProgressionPanel;
