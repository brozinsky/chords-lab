import { intervalsLib } from "@/lib/intervals";
import clsx from "clsx";

const emptySpans = [
  "col-span-1",
  "col-span-3",
  "col-span-5",
  "col-span-7",
  "col-span-9",
  "col-span-11",
  "col-span-13",
];

const fillSpans = [
  "col-span-2",
  "col-span-4",
  "col-span-6",
  "col-span-8",
  "col-span-10",
  "col-span-12",
  "col-span-14",
  "col-span-16",
  "col-span-18",
  "col-span-20",
  "col-span-22",
  "col-span-24",
];

function IntervalConsonance() {
  const first = "";
  const second = "";
  const consonanceLevel = "perfect";

  const emptyClasses = clsx(
    "bg-transparent w-full h-full",
    emptySpans[intervalsLib[4].range]
  );

  const fillClasses = clsx(
    "transition w-full border-t border-l rounded-t-3xl border-r border-green-700 h-full hover:border-green-400",
    fillSpans[intervalsLib[2].range]
  );

  return (
    <div className="grid w-full gap-0.5 grid-cols-26 h-[5px]">
      <div className={emptyClasses}></div>
      <div className={fillClasses}></div>
    </div>
  );
}

export default IntervalConsonance;
