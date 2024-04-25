import MenuTop from "@/components/modules/navigation/MenuTop";
import { useMediaQuery } from "@mantine/hooks";
import MobileNotSupported from "@/components/layout/MobileNotSupported";
import progressionRelationsJSON from "@/lib/progression-relations.json";
import Select from "@/components/ui/dropdowns/Select";
import { useEffect, useMemo, useState } from "react";
import Progress from "@/components/ui/progress/Progress";

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
  const totalSum = useMemo(() => {
    return Object.values(data).reduce((sum, value) => sum + value, 0);
  }, [data]);
  const maxValue = useMemo(() => {
    return Math.max(...Object.values(data));
  }, [data]);

  useEffect(() => {
    console.log(totalSum);
  }, [totalSum]);

  useEffect(() => {
    // @ts-ignore
    setData(progressionRelationsJSON[chord]);
  }, [chord]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const select1 = {
    options: options,
  };

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
              options={select1.options}
              state={chord}
              setState={setChord}
            />
          </div>
          <div className="border border-neutral-500 mb-16 w-full max-w-[742px] min-h-48 bg-neutral-800 flex flex-col gap-2 px-6 rounded-2xl py-4 overflow-auto justify-between">
            <h2 className="mb-3 text-xl">Progression</h2>
            <div className="flex gap-6 mx-auto">
              <div className="transition min-w-[100px] items-center justify-center flex flex-col px-4 py-3 gap-1 rounded-xl bg-card border-2 border-neutral-400 cursor-pointer hover:border-neutral-300">
                <div className="text-xl">1maj</div>
                <div className="text-sm">C - D - E</div>
              </div>
              <div className="flex flex-col py-4 gap-2 rounded-lg">
                <div>{"->"}</div>
              </div>
              <div className="transition min-w-[100px] items-center justify-center flex flex-col px-4 py-3 gap-1 rounded-xl bg-card border-2 border-neutral-400 cursor-pointer hover:border-neutral-300">
                <div className="text-xl">1maj</div>
                <div className="text-sm">C - D - E</div>
              </div>
              <div className="flex flex-col py-4 gap-2 rounded-lg">
                <div>{"->"}</div>
              </div>
              <div className="min-w-[100px] items-center transition border-dashed justify-center flex flex-col px-4 py-3 gap-1 rounded-xl border-2 border-neutral-300 cursor-pointer hover:border-neutral-100">
                <div className="text-3xl hover:text-white transition">+</div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>

          <div className="bg-neutral-800 rounded-lg border border-neutral-500 px-8 py-6">
            <h2 className="text-2xl mb-3">Add chord</h2>
            <div>
              <h3 className="mb-3">Custom</h3>
            </div>
            <div className="w-full h-[1px] bg-neutral-400 my-6"></div>
            <div>
              <h3 className="mb-5">Suggested</h3>
            </div>
            <div className="grid grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10 gap-4 relative">
              {Object.entries(data).map(([key, value]) => {
                //   const percentage = Math.floor((value / totalSum) * 100);
                const progressValue = Math.max(
                  Math.floor((value / maxValue) * 100),
                  10
                );
                let indicatorColor = "bg-emerald-500";
                if (progressValue <= 10) {
                  indicatorColor = "bg-emerald-500 opacity-50";
                } else if (progressValue <= 25) {
                  indicatorColor = "bg-emerald-500 opacity-60";
                } else if (progressValue <= 50) {
                  indicatorColor = "bg-emerald-500 opacity-70";
                } else if (progressValue <= 66) {
                  indicatorColor = "bg-emerald-500 opacity-80";
                } else {
                  indicatorColor = "bg-emerald-500 opacity-100";
                }
                return (
                  <div
                    key={key}
                    className="flex flex-col px-4 py-3 gap-2 rounded-xl bg-card border-2 border-neutral-400 cursor-pointer hover:border-neutral-300"
                  >
                    <div>
                      <div>{key}</div>
                      {/* <div>{percentage}%</div> */}
                    </div>
                    <div>
                      <Progress
                        value={progressValue}
                        indicatorColor={indicatorColor}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Progression;
