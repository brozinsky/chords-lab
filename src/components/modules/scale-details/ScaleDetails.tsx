import { useEffect } from "react";
import useSelectedScale from "@/stores/useSelectedScale";
import PianoScale from "./_partials/PianoScale";
import { Key, Scale } from "tonal";
import AddInfoMinor from "./_partials/AddInfoMinor";
import AddInfoMajor from "./_partials/AddInfoMajor";
import { simplifyNotes } from "@/utils/functions/music-theory/simplifyNotes";
import NotesDetails from "../details/NotesDetails";
import SelectPanel from "../details/SelectPanel";
import PlayPanel from "../details/PlayPanel";
import Steps from "../details/Steps";
import ExtendedScales from "../details/scales/ExtendedScales";
import ReducedScales from "../details/scales/ReducedScales";
import FormulaScales from "../details/scales/FormulaScales";
import RelatedScales from "../details/scales/RelatedScales";

const ScaleDetails = () => {
  const { tonic, type, selectedScale } = useSelectedScale();

  if (!selectedScale) {
    return <div>Select a scale.</div>;
  }

  const extendedScales = Scale.extended(selectedScale.type.toLowerCase());
  const reducedScales = Scale.reduced(selectedScale.type.toLowerCase());

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

  const simplifiedScale = simplifyNotes(selectedScale.notes);

  return (
    <section id="ScaleDetails" className="flex flex-col">
      <h1 className="invisible h-0">Scale details of {selectedScale.name}</h1>

      {/* Scale name */}
      <SelectPanel variant={"scales"} />

      {/* Piano keyboard */}
      <PianoScale scale={simplifiedScale} />

      <section className="mt-2 space-y-2">
        <PlayPanel variant={"scales"} notes={selectedScale.notes as string[]} />

        <NotesDetails notes={selectedScale.notes as string[]} />

        <FormulaScales
          notes={infoScale.notes}
          intervals={infoScale.intervals}
        />

        <Steps notesChroma={infoScale.chroma} />

        {(extendedScales.length > 0 || reducedScales.length > 0) && (
          <div className="flex flex-col gap-2 mx-auto w-full rounded-2xl bg-neutral-800 p-2 max-w-[582px]">
            <RelatedScales scales={extendedScales} heading="Extended scales" />
            <RelatedScales scales={reducedScales} heading="Reduced scales" />
          </div>
        )}

        {isMajor ? (
          <>
            <div>{Key.majorKey(tonic).grades}</div>
            <div>{Key.majorKey(tonic).chords}</div>
          </>
        ) : null}
        {isMajor ? <AddInfoMajor /> : null}
        {isMinor && minorScaleType !== null ? (
          <AddInfoMinor
            type={minorScaleType as "harmonic" | "melodic" | "natural"}
          />
        ) : null}
      </section>
    </section>
  );
};

export default ScaleDetails;
