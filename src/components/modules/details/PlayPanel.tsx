import Dropdown from "@/components/ui/Dropdown";
import RadioGroup from "@/components/ui/RadioGroup";
import Button from "@/components/ui/buttons/Button";
import DropdownBPM from "@/components/ui/dropdowns/DropdownBPM";
import usePlayPiano from "@/hooks/usePlayPiano";
import useBPMStore from "@/stores/settings/useBPMStore";
import { TNotesAllEnharmonic } from "@/utils/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TProps = {
  variant: "scales" | "chords";
  notes: TNotesAllEnharmonic[];
};

const playModeOptionsChords = [
  { id: "11", name: "Chord", value: "chord" },
  { id: "22", name: "Arpeggio", value: "arpeggio" },
];

const playModeOptionsScales = [
  { id: "11", name: "Ascending", value: "ascending" },
  { id: "22", name: "Descending", value: "descending" },
];

export default function PlayPanel({ variant, notes }: TProps) {
  const { isPianoSoundLoading, playPianoChord, playPianoNotes } =
    usePlayPiano();
  const { bpm } = useBPMStore();
  const [playMode, setPlayMode] = useState(
    variant === "chords"
      ? playModeOptionsChords[0].value
      : playModeOptionsScales[0].value
  );

  const handlePlayClick = () => {
    if (variant === "chords") {
      playPianoChord(playMode, notes);
    }
    if (variant === "scales") {
      const playSelectedScale = (playMode: string) => {
        if (!notes) {
          return;
        }

        const playNoteWithInterval = (
          noteIndex: number,
          direction: "ascending" | "descending"
        ) => {
          if (direction === "ascending" && noteIndex < notes.length) {
            playPianoNotes([notes[noteIndex]] as string[]);
            setTimeout(() => {
              playNoteWithInterval(noteIndex + 1, direction);
            }, 60000 / 4 / bpm);
          } else if (direction === "descending" && noteIndex >= 0) {
            playPianoNotes([notes[noteIndex]] as string[]);
            setTimeout(() => {
              playNoteWithInterval(noteIndex - 1, direction);
            }, 60000 / 4 / bpm);
          }
        };

        if (playMode === "ascending") {
          playNoteWithInterval(0, "ascending");
        } else if (playMode === "descending") {
          playNoteWithInterval(notes.length - 1, "descending");
        }
      };
      playSelectedScale(playMode);
    }
  };

  return (
    <div id="PlayPanel" className="flex justify-end items-center gap-4">
      <Dropdown
        isCenter
        trigger={
          <motion.div
            whileTap={{ scale: 0.92 }}
            className="select-none cursor-pointer p-2 rounded-lg active:bg-neutral-600 flex flex-col items-center"
          >
            <div className="text-lg">{bpm}</div>
            <div className="text-xs">BPM</div>
          </motion.div>
        }
      >
        <div className="flex flex-row gap-1 py-1 pl-1.5 pr-4">
          <DropdownBPM />
        </div>
      </Dropdown>

      <RadioGroup
        options={
          variant === "chords" ? playModeOptionsChords : playModeOptionsScales
        }
        state={playMode}
        setState={setPlayMode}
      />
      <Button
        variant="emerald"
        icon="play"
        isLoading={isPianoSoundLoading}
        onClick={handlePlayClick}
      >
        Play
      </Button>
    </div>
  );
}
