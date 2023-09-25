import React, { useEffect } from "react";
import useSelectedScale from "@/stores/useSelectedScale";
import PianoScale from "./_partials/PianoScale";
import { Key, Scale } from "tonal";
import { processIntervals } from "@/utils/processIntervals";
import AddInfoMinor from "./_partials/AddInfoMinor";
import AddInfoMajor from "./_partials/AddInfoMajor";
import shortid from "shortid";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { findIntervalNameBySymbol, getNumberStepsArray, getWholeAndHalfSteps } from "@/utils/notes";

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


  // useEffect(() => {
  //   console.log('tester', Scale.scaleChords(selectedScale.name));
  // }, [selectedScale]);

  return (
    <section className="flex flex-col">
      <h1 className="text-5xl mb-6 text-center">{infoScale.name}</h1>
      <PianoScale scale={selectedScale} />
      <section className="mt-6 space-y-2">
        <div className="items-end flex flex-row gap-4">
          <span className="w-[4rem]">Notes:</span>
          {infoScale.notes.map((note, index) => {
            return (
              <React.Fragment key={note}>
                <span
                  data-tooltip-id={"note-" + note}
                  className="text-center text-2xl min-w-[2rem]"
                >
                  {note}
                </span>
                <span className="text-2xl text-center">
                  {infoScale.notes.length - 1 !== index ? "-" : null}
                </span>
              </React.Fragment>
            );
          })}
        </div>
        <div className="items-end flex flex-row gap-4">
          <span className="w-[4rem]">Formula:</span>
          {processIntervals(infoScale.intervals).map((interval, index) => {
            return (
              <React.Fragment key={shortid.generate()}>
                <span
                  data-tooltip-id={"interval-" + interval}
                  className="cursor-default text-center text-2xl min-w-[2rem]"
                >
                  {interval}
                </span>
                <span className="text-2xl text-center">
                  {infoScale.notes.length - 1 !== index ? "-" : null}
                </span>
                <ReactTooltip
                  key={interval}
                  id={"interval-" + interval}
                  place="right"
                  variant="light"
                  content={findIntervalNameBySymbol(interval) as string}
                />
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex flex-row gap-6">
          <div className="mt-4">Intervals:</div>
          <table className="border border-neutral-500 rounded-md mt-4">
            <tbody>
              <tr>
                {getNumberStepsArray(infoScale.chroma).map((step) => {
                  return (
                    <React.Fragment key={shortid.generate()}>
                      <td className="text-sm px-1.5 text-center border border-neutral-500">{step}</td>
                    </React.Fragment>
                  );
                })}
              </tr>
              <tr>
                {getWholeAndHalfSteps(getNumberStepsArray(infoScale.chroma)).map(
                  (step) => {
                    return (
                      <React.Fragment key={shortid.generate()}>
                        <td className="text-sm px-1.5 text-center border border-neutral-500">{step}</td>
                      </React.Fragment>
                    );
                  }
                )}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="items-end flex flex-row gap-4 max-w-[509px] flex-wrap">
          <p>Extended Scales:</p>
          <div className="inline-flex gap-3">
            {extendedScales && extendedScales.map((type) => {
              return (
                <a href="#" className="underline">{type}</a>
              )
            })}
          </div>
        </div>
        <div className="items-end flex flex-row gap-4 max-w-[509px] flex-wrap">
          <p>Reduced Scales:</p>
          <div className="inline-flex gap-3">
            {reducedScales && reducedScales.map((type) => {
              return (
                <a href="#" className="underline">{type}</a>
              )
            })}
          </div>
        </div>
        {/* {isMajor ? (
          <>
            <div>{Key.majorKey(tonic).grades}</div>
            <div>{Key.majorKey(tonic).chords}</div>
          </>
        ) : null}
        {isMajor ? <AddInfoMajor /> : null}
        {isMinor && minorScaleType !== null ? (
          <AddInfoMinor type={minorScaleType as "harmonic" | "melodic" | "natural"} />
        ) : null} */}
      </section>
    </section>
  );
};

export default ScaleDetails;
