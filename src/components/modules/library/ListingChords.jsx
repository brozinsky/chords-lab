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
import { Chord, ChordType } from "tonal";

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

  console.log(ChordType.all().map(chord => ({name: chord.name, aliases: chord.aliases[0]})));

  useEffect(() => {
    console.log("chord", selectedChord);
    // setQuality(chord.type);
    // setRoot(chord.root);
  }, [selectedChord]);

  // useEffect(() => {
  //   if (root !== "" && quality !== "") {
  //     setChord(Chord.get(`${root} ${quality}`));
  //   }
  // }, [root, quality]);


  function filterCommonChords(chords) {
    const commonChords = [
      "Major",
      "Minor",
      "Dominant Seventh",
      "Minor Seventh",
      "Major Seventh",
      "Sus4",
      "Diminished",
      "Half-Diminished",
      "Major Seventh Sharp Five",
      "Augmented",
      "Minor Major Seventh"
    ];
  
    const filteredChords = [];
  
    // Add common chords to the filtered list
    commonChords.forEach(commonChord => {
      const chordEntry = chords.find(entry =>
        entry.name.toLowerCase().includes(commonChord.toLowerCase())
      );
      if (chordEntry) {
        filteredChords.push(chordEntry);
      }
    });
  
    // Add any remaining chords (if any)
    chords.forEach(entry => {
      if (!filteredChords.includes(entry)) {
        filteredChords.push(entry);
      }
    });
  
    return filteredChords;
  }
  
  const filteredChords = filterCommonChords(chords);
  console.log(filteredChords, "filteredChords");

  return (
    <>
      <div ref={animationParent} className="chord-list">
        {ChordType.all()
        .filter((item) => item.intervals.length <= 4)
        // .map((get) => get)
          .map((chord, index) => (
            <div
              key={chord.name + index}
              onClick={() => handleChordSelect("F2", chord.aliases[0])}
              className="chord-list-item"
            >
              {/* <div className="chord-list-item__name">{chord.aliases[0]}</div> */}
              <div className="chord-list-item__suffix">
              {chord.aliases ? chord.aliases[0] : null}
            </div>
            </div>
          ))}
      </div>
      {/* {totalPages !== 1 ? <Pagination /> : null} */}
    </>
  );
};

export default Listing;
