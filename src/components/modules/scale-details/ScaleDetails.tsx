import React from "react";
import useSelectedScale from "@/stores/useSelectedScale";
import PianoScale from "./_partials/PianoScale";
import { Key, Scale } from "tonal";
import { processIntervals } from "@/utils/processIntervals";
import AddInfoMinor from "./_partials/AddInfoMinor";
import AddInfoMajor from "./_partials/AddInfoMajor";

const ScaleDetails = () => {
  const { tonic, type, selectedScale } = useSelectedScale();

  // Check if 'scale' is undefined before rendering the 'PianoScale' component
  if (!selectedScale) {
    return <div>Select a scale.</div>;
  }

  const infoScale = Scale.get(`${tonic} ${type}`);

  const isMajor = selectedScale.type.toLowerCase() === "major";
  const isMinor =
    selectedScale.type.includes("minor") &&
    (selectedScale.type.includes("harmonic") ||
      selectedScale.type === "minor" ||
      selectedScale.type.includes("melodic"));

  let minorScaleType = null;
  if (isMinor) {
    if (selectedScale.type.includes("harmonic")) minorScaleType = "harmonic";
    else if (selectedScale.type === "minor") minorScaleType = "natural";
    else if (selectedScale.type.includes("melodic")) minorScaleType = "melodic";
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl">{infoScale.name}</h1>
      <div>{infoScale.notes}</div>
      <div>{processIntervals(infoScale.intervals)}</div>
      <div>{infoScale.aliases}</div>
      {isMajor ? (
        <>
          <div>{Key.majorKey(tonic).grades}</div>
          <div>{Key.majorKey(tonic).chords}</div>
        </>
      ) : null}
      {isMajor ? <AddInfoMajor /> : null}
      {isMinor && minorScaleType !== null ? <AddInfoMinor type={minorScaleType} /> : null}
      <PianoScale scale={selectedScale} />
    </div>
  );
};

export default ScaleDetails;
