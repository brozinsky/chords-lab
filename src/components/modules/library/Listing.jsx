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
import getIntervalNotes from "@/utils/getIntervalNotes";
import isChordInScale from "@/utils/isChordInScale";

const Listing = () => {
  const {
    isInScale,
    isRoot,
    chordRoot,
    scaleTonic,
    scaleMode,
    isSearchedBySuffix,
    chordSuffix,
    searchValue,
  } = useFilterStore();
  const itemsPerPage = 24;

  const [animationParent] = useAutoAnimate({ duration: 50 });

  const { currentPage, setCurrentPage, setTotalPages, totalPages } =
    usePaginationStore();

  const chordCombinations = useChordCombinations(notes, chords);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const { filteredLists, updateFilteredLists } = useFilteredListsStore();
  const { selectedChord, setSelectedChord } = useSelectedChord();

  // handle filtering by search field
  const searchFilteredResults = chordCombinations.filter((chord) => {
    const text = `${chord.note} ${chord.chordName}`;
    return text.toLowerCase().includes(searchValue.toLowerCase());
  });

  // handle filtered list state changes
  useEffect(() => {
    updateFilteredLists(
      isRoot,
      isSearchedBySuffix,
      chordRoot,
      chordSuffix,
      chordCombinations,
      isInScale,
      scaleTonic,
      scaleMode
    );
    setCurrentPage(1);
  }, [
    isRoot,
    isSearchedBySuffix,
    chordRoot,
    chordSuffix,
    chordCombinations,
    scaleMode,
    scaleTonic,
    isInScale,
  ]);

  const combinedFilteredResults = useCombinedFilters(filteredLists);

  useEffect(() => {
    setTotalPages(Math.ceil(combinedFilteredResults.length / itemsPerPage));
  }, [combinedFilteredResults]);

  useEffect(() => {
    setCurrentPage(1);
    setTotalPages(Math.ceil(searchFilteredResults.length / itemsPerPage));
  }, [searchValue]);

  const handleChordSelect = (chord) => {
    setSelectedChord(chord)
  }

  useEffect(() => {
    console.log(selectedChord);
  }, [selectedChord]);

  return (
    <>
      <div ref={animationParent} className="chord-list">
        {(searchValue === ""
          ? combinedFilteredResults.slice(startIndex, endIndex)
          : searchFilteredResults.slice(startIndex, endIndex)
        ).map((chord, index) => (
          <div key={chord.note + chord.chordName + index} onClick={() => handleChordSelect(chord)} className="chord-list-item">
            <div className="chord-list-item__name">{chord.note}</div>
            <div className="chord-list-item__suffix">{chord.chordName}</div>
          </div>
        ))}
      </div>
      {totalPages !== 1 ? <Pagination /> : null}
    </>
  );
};

export default Listing;
