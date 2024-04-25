import MenuTop from "@/components/modules/navigation/MenuTop";
import { useMediaQuery } from "@mantine/hooks";
import MobileNotSupported from "@/components/layout/MobileNotSupported";
import progressionRelationsJSON from "@/lib/progression-relations.json";
import Select from "@/components/ui/dropdowns/Select";
import { useEffect, useMemo, useState } from "react";
import Progress from "@/components/ui/progress/Progress";
import ChordProgression from "@/components/modules/progression/ChordProgression";
import SuggestedChords from "@/components/modules/progression/SuggestedChords";
import CustomChord from "@/components/modules/progression/CustomChord";

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
          <div className="max-w-[300px] mb-16">
            <Select
              variant={"ghost"}
              contentType={"tonic"}
              options={options}
              state={chord}
              setState={setChord}
            />
          </div>
          <ChordProgression />

          <div className="bg-neutral-800 rounded-lg border border-neutral-500 px-8 py-6">
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
