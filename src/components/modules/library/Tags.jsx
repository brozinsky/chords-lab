import Badge from "@/components/elements/Badge";
import useFilterStore from "@/stores/useFilterStore";
import React from "react";

const Tags = () => {
  const {
    isInScale,
    isRoot,
    chordRoot,
    scaleTonic,
    scaleMode,
    isSearchedBySuffix,
    chordSuffix,
    searchValue,
    setIsInScale,
    setIsRoot,
    setIsSearchedBySuffix
  } = useFilterStore();

  const handleClearFilters = () => {
    setIsSearchedBySuffix(false);
    setIsRoot(false);
    setIsInScale(false);
  }

  return (
    <div className="flex flex-row gap-4 h-7">
      <div className="flex gap-1">
        {isInScale ? <Badge handleCloseClick={() => setIsInScale(false)}>{`Scale: ${scaleTonic} ${scaleMode}`}</Badge>: null}
        {isRoot ? <Badge handleCloseClick={() => setIsRoot(false)}>{`Chord root: ${chordRoot}`}</Badge>: null}
        {isSearchedBySuffix ? <Badge handleCloseClick={() => setIsSearchedBySuffix(false)}>{`Chord type: ${chordSuffix}`}</Badge>: null}
        {isInScale || isRoot || isSearchedBySuffix ? <button onClick={handleClearFilters}>clear all</button> : null}
      </div>
    </div>
  );
};

export default Tags;
