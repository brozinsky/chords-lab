import useSelectedChord from "@/stores/chords/useSelectedChord";
import PianoChord from "./_partials/PianoChord";
import React, { useEffect, useState } from "react";
import { processIntervals } from "@/utils/processIntervals";
import shortid from "shortid";
import usePlayPiano from "@/hooks/usePlayPiano";
import Button from "@/components/ui/buttons/Button";
import RadioGroup from "@/components/ui/RadioGroup";
import Select from "@/components/ui/Select";
import Modal from "@/components/ui/Modal";
import ButtonInfo from "@/components/ui/buttons/ButtonInfo";
import ChordFormula from "./_partials/ChordFormula";
import { Chord, Interval, Note } from "tonal";
import {
  chordQualityOptions,
  notesOptions,
} from "@/utils/functions/music-theory/selectOptions";
import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import ArrowSmSVG from "@/components/elements/svg/icons/interface/ArrowSmSVG";
import Dropdown from "@/components/ui/Dropdown";
import DropdownBPM from "@/components/ui/dropdowns/DropdownBPM";
import useBPMStore from "@/stores/settings/useBPMStore";
import { intervalsLib } from "@/lib/intervals";
import IntervalConsonance from "../formula/IntervalConsonance";
import IntervalsConnectionsSVG from "@/components/elements/svg/IntervalsConnectionsSVG";

const playModeOptions = [
  { id: "11", name: "Chord", value: "chord" },
  { id: "22", name: "Arpeggio", value: "arpeggio" },
];

const ChordDetails = () => {
  const { selectedChord, root, setRoot, quality, setQuality } =
    useSelectedChord();
  const { isPianoSoundLoading, playPianoNotes, playPianoChord } =
    usePlayPiano();
  const [playMode, setPlayMode] = useState(playModeOptions[0].value);
  const { bpm } = useBPMStore();

  if (selectedChord?.name === undefined) return;

  useEffect(() => {
    console.log(selectedChord);
  }, [selectedChord]);

  const extendedChords = Chord.extended(selectedChord.name.toLowerCase());
  const reducedChords = Chord.reduced(selectedChord.name.toLowerCase());

  return (
    <section id="ChordDetails">
      {/* Chord name */}
      <div className="flex flex-row gap-2 justify-center mb-6">
        <Select
          variant="ghost"
          options={notesOptions}
          state={root}
          setState={setRoot}
        />
        <Select
          variant="ghost"
          options={chordQualityOptions}
          displayValue={
            selectedChord.name && selectedChord.name.length > 3
              ? selectedChord.name.split(" ").slice(1).join(" ")
              : selectedChord.aliases && selectedChord.aliases[0]
          }
          state={quality}
          setState={setQuality}
        />
      </div>
      {/* Piano keyboard */}
      <PianoChord />
      <section className="mt-6 space-y-2">
        {/* Play settings */}
        <div className="flex justify-end gap-4">
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
            options={playModeOptions}
            defaultOption="chord"
            state={playMode}
            setState={setPlayMode}
          />
          <Button
            variant="emerald"
            icon="play"
            isLoading={isPianoSoundLoading}
            onClick={() =>
              playPianoChord(playMode, selectedChord?.notes as string[])
            }
          >
            Play
          </Button>
        </div>
        {/* Notes */}
        <div className="items-end flex flex-row gap-4">
          <span className="w-[4rem] mb-2">Notes:</span>
          {selectedChord.notes?.map((note, index) => {
            const isLastItem =
              (selectedChord.notes?.length as number) - 1 !== index;
            return (
              <React.Fragment key={note}>
                <motion.div
                  onClick={() => playPianoNotes([note])}
                  data-tooltip-id={"note-" + note}
                  className="p-2 rounded-lg active:bg-neutral-600 cursor-pointer select-none text-center text-2xl min-w-[2rem]"
                  whileTap={{ scale: 0.92 }}
                >
                  {note}
                </motion.div>
                <div className="text-2xl text-center mb-2">
                  {isLastItem ? "-" : null}
                </div>
              </React.Fragment>
            );
          })}
        </div>
        {/* Formula */}
        <div className="px-6 flex flex-col gap-2 mx-auto w-full rounded-2xl bg-neutral-800 p-2 items-start pb-4">
          <span className="w-[5rem] flex items-center">
            Formula:
            <Modal trigger={<ButtonInfo />}>
              <ChordFormula />
            </Modal>
          </span>

          <div className="relative">
            {/* <span className="absolute top-4 -left-4 transform rotate-[210deg]"> */}
            {intervalsLib.map(
              (
                {
                  consonance,
                  rotate,
                  range,
                  symbol,
                  name,
                  isConsonant,
                  symbolSecondary,
                },
                index
              ) => {
                let processedIntervals = selectedChord.intervals;

                const isIntervalIncluded = selectedChord.intervals!.some(
                  (interval: string) => symbolSecondary.includes(interval)
                );
                if (range > 11) return;
                if (isIntervalIncluded && index > 0) {
                  processedIntervals = [];

                  let thisIntervalIndex: number | undefined = 0;
                  symbolSecondary.forEach((symbol) => {
                    if (
                      (selectedChord!.intervals?.indexOf(symbol) as number) > 0
                    ) {
                      thisIntervalIndex =
                        selectedChord!.intervals?.indexOf(symbol);
                    }
                  });
                  const slicedIntervals =
                    selectedChord.intervals?.slice(thisIntervalIndex);

                  if (slicedIntervals!.length < 2 ) return;
                  console.log('slicedIntervals',slicedIntervals);

                  slicedIntervals!.forEach((_, index, array) => {
                    if (index < array.length - 1) {
                      const substractedInterval = Interval.substract(array[index + 1], slicedIntervals![0])
                      console.log('to', array[index + 1], slicedIntervals![0]);
                      processedIntervals?.push(substractedInterval as string);
                    }
                  });

                  // console.log(processedIntervals);

                  // function myFunction(item1, item2) {
                  //   console.log("Processing:", item1, item2);

                  //   const lols = Interval.substract(item2, item1);
                  //   console.log("lols", lols);
                  //   processedIntervals?.push(lols);
                  // }
                  // myArray!.map((item1, index1) => {
                  //   myArray!.slice(index1 + 1).map((item2) => {
                  //     myFunction(item1, item2);
                  //   });
                  // });
                  // console.log("processedIntervals", processedIntervals);

                  // const pairedArray = slicedIntervals!.map((item, index, array) => {
                  //   const nextItem = array[index - 1];
                  //   return [item, nextItem];
                  // });

                  // console.log("pairedArray", pairedArray.slice(1));
                  // pairedArray.forEach(pair => {
                  //   processedIntervals?.push(Interval.substract(pair[0], pair[1]) as string)
                  // });

                  // console.log("Processing:", processedIntervals);
                  // const lols = Interval.substract(symbolSecondary[0], slicedIntervals[1]);
                  //   console.log("wynik", lols);
                }

                return (
                  <React.Fragment key={symbol}>
                    {isIntervalIncluded && (
                      <span
                        className={`absolute top-4 -left-4 transform ${rotate}`}
                      >
                        <IntervalsConnectionsSVG intervals={processedIntervals} />
                      </span>
                    )}
                  </React.Fragment>
                );
              }
            )}

            <div className="relative interval-circle__container mx-auto">
              {intervalsLib.map(
                ({ range, symbol, name, isConsonant, symbolSecondary }) => {
                  // console.log(processIntervals(selectedChord.intervals));
                  const isIntervalIncluded = selectedChord.intervals!.some(
                    (interval: string) => symbolSecondary.includes(interval)
                  );
                  if (range > 11) return;
                  return (
                    <React.Fragment key={symbol}>
                      <div
                        onClick={
                          isIntervalIncluded
                            ? () =>
                                playPianoNotes([
                                  Note.transpose(
                                    selectedChord.tonic as string,
                                    symbolSecondary[0]
                                  ),
                                ])
                            : undefined
                        }
                        className={clsx(
                          "border border-transparent select-none transition flex items-center justify-center text-lg bg-neutral-500 rounded-xl p-1",
                          isIntervalIncluded
                            ? "interval-circle__item--active hover:bg-neutral-400 cursor-pointer p-1"
                            : "self-center justify-self-center w-5 h-5 text-sm p-1"
                        )}
                      >
                        {isIntervalIncluded && symbol}
                      </div>
                    </React.Fragment>
                  );
                }
              )}
              {/* <div>1</div>
            <div>2♭</div>
            <div>2</div>
            <div>3♭</div>
            <div>3</div>
            <div>4</div>
            <div>5♭</div>
            <div>5</div>
            <div>6♭</div>
            <div>6</div>
            <div>7♭</div>
            <div>7</div> */}
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <IntervalConsonance />
            {/* <div className="grid w-full gap-0.5 grid-cols-26 h-[5px]">
              <div className="col-span-1 bg-transparent w-full h-full"></div>
              <div className="col-span-8 w-full border-t border-l border-r border-red-500 h-full"></div>
            </div>
            <div className="grid w-full gap-0.5 grid-cols-26 h-[5px]">
              <div className="col-span-1 bg-transparent w-full h-full"></div>
              <div className="col-span-12 w-full border-t border-l border-r border-green-700 h-full"></div>
            </div>
            <div className="grid w-full gap-0.5 grid-cols-26 h-[5px]">
              <div className="col-span-1 bg-transparent w-full h-full"></div>
              <div className="col-span-5 w-full border-t border-l border-r border-orange-500 h-full"></div>
            </div>
            <div className="grid w-full gap-0.5 grid-cols-26 h-[5px]">
              <div className="col-span-9 bg-transparent w-full h-full"></div>
              <div className="col-span-6 w-full border-t border-l border-r border-yellow-500 h-full"></div>
            </div> */}
          </div>
          <div className="grid w-full gap-0.5 grid-cols-13">
            {intervalsLib.map(
              ({ id, range, symbol, name, isConsonant, symbolSecondary }) => {
                // console.log(processIntervals(selectedChord.intervals));

                const isIntervalIncluded = selectedChord.intervals!.some(
                  (interval: string) => symbolSecondary.includes(interval)
                );

                if (range > 12) return;
                // if (!processIntervals(selectedChord.intervals).includes(symbol))
                //   return (
                //     <div
                //       className="transition self-center justify-self-center w-5 h-5 flex items-center justify-center text-sm border border-neutral-500 bg-neutral-700 rounded-xl p-1"
                //       key={symbol}
                //     ></div>
                //   );
                return (
                  <React.Fragment key={symbol}>
                    <motion.div
                      onClick={
                        isIntervalIncluded
                          ? () =>
                              playPianoNotes([
                                Note.transpose(
                                  selectedChord.tonic as string,
                                  symbolSecondary[0]
                                ),
                              ])
                          : undefined
                      }
                      whileTap={{ scale: 0.85 }}
                      className={clsx(
                        "border border-transparent select-none transition flex items-center justify-center text-lg bg-neutral-700 rounded-xl p-1",
                        isIntervalIncluded
                          ? "hover:bg-neutral-600 cursor-pointer border-neutral-500  p-1"
                          : "self-center justify-self-center w-5 h-5 text-sm p-1"
                      )}
                    >
                      {isIntervalIncluded && symbol}
                    </motion.div>
                    {/* <ReactTooltip
                  key={interval}
                  id={"interval-" + interval}
                  place="right"
                  variant="light"
                  content={findIntervalNameBySymbol(interval) as string}
                /> */}
                  </React.Fragment>
                );
              }
            )}
          </div>

          {/* {processIntervals(selectedChord.intervals).map((interval, index) => {
            const isLastItem =
              processIntervals(selectedChord.intervals).length - 1 !== index;
            return (
              <React.Fragment key={shortid.generate()}>
                <span
                  data-tooltip-id={"interval-" + interval}
                  className="cursor-default text-center text-2xl min-w-[2rem]"
                >
                  {interval}
                </span>
                <span className="text-2xl text-center">
                  {isLastItem ? "-" : null}
                </span>
              </React.Fragment>
            );
          })} */}
        </div>

        <div className="flex flex-col gap-2 mx-auto w-full rounded-2xl bg-neutral-800 p-2 max-w-[582px]">
          {reducedChords.length > 0 ? (
            <div className="mx-auto w-full">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="transition flex w-full justify-between rounded-lg bg-neutral-600 px-4 py-2 text-center text-foreground hover:bg-neutral-400 focus:outline-none focus-visible:ring focus-visible:ring-neutral-500/75">
                      <span>Extended chords</span>
                      <ArrowSmSVG
                        className={clsx(
                          open
                            ? "transition -rotate-90"
                            : "transition rotate-90"
                        )}
                        pathClass="transition stroke-neutral-300 group-hover:stroke-neutral-100"
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 mx-8 flex flex-wrap gap-3 items-center gap-y-1">
                        {extendedChords.map((type) => {
                          return (
                            <a
                              key={shortid.generate()}
                              href="#"
                              className="underline"
                            >
                              {type}
                            </a>
                          );
                        })}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          ) : null}
          {reducedChords.length > 0 ? (
            <div className="mx-auto w-full">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-neutral-600 px-4 py-2 text-center text-foreground hover:bg-neutral-400 focus:outline-none focus-visible:ring focus-visible:ring-neutral-500/75">
                      <span>Reduced chords</span>
                      <ArrowSmSVG
                        className={clsx(
                          open
                            ? "transition -rotate-90"
                            : "transition rotate-90"
                        )}
                        pathClass="transition stroke-neutral-300 group-hover:stroke-neutral-100"
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 mx-8 flex flex-wrap gap-3 items-center gap-y-1">
                        {reducedChords.map((type) => {
                          return (
                            <a
                              key={shortid.generate()}
                              href="#"
                              className="underline"
                            >
                              {type}
                            </a>
                          );
                        })}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          ) : null}
        </div>
      </section>
    </section>
  );
};

export default ChordDetails;
