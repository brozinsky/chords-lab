import React, { useEffect, useRef } from "react";
import { chords } from "@/utils/chords";
import useFilterStore from "@/stores/useFilterStore";
import usePaginationStore from "@/stores/usePaginationStore ";
import Pagination from "../navigation/Pagination";
import { createScale, notes } from "@/utils/notesData";
import useCombinedFilters from "@/hooks/useCombinedFilters";
import useChordCombinations from "@/hooks/useChordCombinations";
import useFilteredListsStore from "@/stores/useFilteredListsStore";
import useSelectedChord from "@/stores/useSelectedChord";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Chord, ChordType, Note } from "tonal";
import clsx from "clsx";

const Listing = () => {
  const [animationParent] = useAutoAnimate({ duration: 50 });

  const chordCombinations = useChordCombinations(notes, chords);

  const {
    root,
    setRoot,
    quality,
    setQuality,
    selectedChord,
    setSelectedChord,
  } = useSelectedChord();

  const handleChordSelect = (chordRoot, chordQuality) => {
    const newChord = Chord.get([chordRoot, chordQuality]);
    setSelectedChord(newChord);
  };

  useEffect(() => {
    if (root !== "" && quality !== "") {
      setSelectedChord(Chord.get([root + "2", quality]));
    }
  }, [root, quality]);

  const colStartClasses = {
    1: "col-start-1",
    2: "col-start-2",
    3: "col-start-3",
    4: "col-start-4",
    5: "col-start-5",
    6: "col-start-6",
    7: "col-start-7",
    8: "col-start-8",
    9: "col-start-9",
    10: "col-start-10",
    11: "col-start-11",
    12: "col-start-12",
  };

  return (
    <>
      {/* TODO - use similiar view on mobile */}
      {/* <div className="grid grid-cols-12 grid-rows-2">
        {notes.map((item, index) => {
          return <div className={`flex items-center justify-center cursor-pointer p-2 bg-neutral-600 border border-neutral-500 h-[40px] w-[40px] rounded-xl mx-auto ${colStartClasses[index + 1]} ${item.includes("#") ? "row-start-1" : "row-start-2"}`} key={item}>{item}</div>;
        })}
      </div> */}
      <div className="flex flex-row gap-2 mb-4">
        {notes.map((note, index) => (
          <div
            key={note + index}
            onClick={() => setRoot(note)}
            className={clsx("chord-list-item chord-list-item--note", {
              "chord-list-item--active": root === note,
            })}
          >
            <div className="flex flex-col">
              <div className="chord-list-item__suffix">{note}</div>
            </div>
          </div>
        ))}
      </div>
      <div ref={animationParent} className="chord-list">
        {chords
          // .filter((item) => item.intervals.length <= 4)
          // .map((get) => get)
          .map((chord, index) => (
            <div
              key={chord.name + index}
              onClick={() => setQuality(chord.abbreviations[0])}
              className={clsx("chord-list-item", {
                "chord-list-item--active": quality === chord.abbreviations[0],
              })}
            >
              {/* <div className="chord-list-item__name">{chord.aliases[0]}</div> */}
              <div className="chord-list-item__suffix">
                {chord.abbreviations ? chord.abbreviations[0] : null}
                {/* {chord.aliases ? chord.aliases[0] : null} */}
              </div>
            </div>
          ))}
      </div>
      {/* {totalPages !== 1 ? <Pagination /> : null} */}
    </>
  );
};

export default Listing;
