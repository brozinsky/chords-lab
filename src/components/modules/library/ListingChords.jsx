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

  return (
    <>
      <div className="flex flex-row gap-2 mb-4">
        {Note.names().map((note, index) => (
          <div
            key={note + index}
            onClick={() => setRoot(note)}
            className="chord-list-item"
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
              className="chord-list-item"
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
