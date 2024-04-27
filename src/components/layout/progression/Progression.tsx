import MenuTop from "@/components/modules/navigation/MenuTop";
import { useMediaQuery } from "@mantine/hooks";
import MobileNotSupported from "@/components/layout/MobileNotSupported";
import progressionRelationsJSON from "@/lib/progression-relations.json";
import Select from "@/components/ui/dropdowns/Select";
import { useEffect, useState } from "react";
import ChordProgression from "@/components/modules/progression/ChordProgression";
import SuggestedChords from "@/components/modules/progression/SuggestedChords";
import CustomChord from "@/components/modules/progression/CustomChord";
import Button from "@/components/ui/buttons/Button";
import Dropdown from "@/components/ui/dropdowns/Dropdown";
import { motion } from "framer-motion";
import DropdownBPM from "@/components/ui/dropdowns/DropdownBPM";
import {
  chordQualityOptions,
  notesOptions,
} from "@/utils/functions/music-theory/selectOptions";

const options = [
  {
    id: 1,
    value: "6min",
    name: "6min",
  },
  {
    id: 2,
    value: "1maj",
    name: "1maj",
  },
  {
    id: 3,
    value: "4maj",
    name: "4maj",
  },
  {
    id: 4,
    value: "1maj7",
    name: "1maj7",
  },
  {
    id: 5,
    value: "5maj7",
    name: "5maj7",
  },
  {
    id: 6,
    value: "b7maj",
    name: "b7maj",
  },
  {
    id: 7,
    value: "5maj",
    name: "5maj",
  },
  {
    id: 8,
    value: "4sus",
    name: "4sus",
  },
  {
    id: 9,
    value: "3min",
    name: "3min",
  },
  {
    id: 10,
    value: "2min",
    name: "2min",
  },
  {
    id: 11,
    value: "5min",
    name: "5min",
  },
  {
    id: 12,
    value: "1min",
    name: "1min",
  },
  {
    id: 13,
    value: "1sus",
    name: "1sus",
  },
  {
    id: 14,
    value: "5sus",
    name: "5sus",
  },
  {
    id: 15,
    value: "4min",
    name: "4min",
  },
  {
    id: 16,
    value: "2maj",
    name: "2maj",
  },
  {
    id: 17,
    value: "b6maj",
    name: "b6maj",
  },
  {
    id: 18,
    value: "b3maj",
    name: "b3maj",
  },
  {
    id: 19,
    value: "2maj7",
    name: "2maj7",
  },
];

const Progression = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const oneMajData = progressionRelationsJSON["1maj"];
  const [data, setData] = useState(oneMajData);
  const [chord, setChord] = useState("1maj");
  const [chordType, setChordType] = useState("major");
  const [chordKey, setChordKey] = useState("C");

  useEffect(() => {
    // @ts-ignore
    setData(progressionRelationsJSON[chord]);
  }, [chord]);

  if (matches) {
    return <MobileNotSupported />;
  }
  return (
    <>
      <MenuTop />
      <main>
        <div className="container flex flex-col items-center justify-center py-12">
          {/* <div className="max-w-[300px] mb-16">
            <Select
              variant={"ghost"}
              contentType={"tonic"}
              options={options}
              state={chord}
              setState={setChord}
            />
          </div> */}
          <div className="max-w-[828px] mb-16 w-full">
            <ChordProgression />
            <div className="pt-3 flex justify-between items-center">
              <div className="flex flex-row gap-6">
                <div className="flex flex-col gap-2 items-center">
                  <Select
                    size={"sm"}
                    variant={"outlined"}
                    contentType={"tonic"}
                    options={notesOptions}
                    state={chordKey}
                    setState={setChordKey}
                  />
                  <span>Key</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <Select
                    size={"sm"}
                    variant={"outlined"}
                    contentType={"tonic"}
                    options={chordQualityOptions}
                    state={chordType}
                    setState={setChordType}
                  />
                  <span>Scale</span>
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
                  onClick={() => console.log("")}
                >
                  Play
                </Button>
              </div>
            </div>
            </div>

            <div className="max-w-[828px] bg-neutral-800 rounded-lg border border-neutral-500 px-8 py-6">
              <h2 className="text-2xl mb-3">Add chord</h2>
              {data && (
                <CustomChord
                  chordKey={chordKey}
                  setChordKey={setChordKey}
                  chordType={chordType}
                  setChordType={setChordType}
                />
              )}
              <div className="w-full h-[1px] bg-neutral-400 my-6"></div>
              {data && <SuggestedChords chords={data} />}
            </div>
          </div>
      </main>
    </>
  );
};

export default Progression;
