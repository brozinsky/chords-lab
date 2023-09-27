import { processIntervals } from "@/utils/processIntervals";
import clsx from "clsx";
import PianoScaleSVG from "@/components/elements/svg/PianoScaleSVG";
import { Scale } from "tonal";

type ScaleTileProps = {
  tonic: string;
  name: string;
  type: string;
  setType: any;
  intervals: string[];
};

const ScaleTile = ({
  tonic,
  name,
  type,
  setType,
  intervals,
}: ScaleTileProps) => {
  const scaleNotes = Scale.get(`${tonic}1 ${name}`).notes;
  return (
    <div
      onClick={() => setType(name)}
      className={clsx("chord-list-item", {
        "chord-list-item--active": type === name,
      })}
    >
      <div className="flex flex-col">
        <PianoScaleSVG
          key={tonic + name}
          className="max-h-[60px] w-full"
          scale={scaleNotes && scaleNotes.length > 0 ? scaleNotes : []}
        />
        <div className="chord-list-item__suffix">{name}</div>
        <div className="chord-list-item__suffix">
          {processIntervals(intervals)}
        </div>
      </div>
    </div>
  );
};

export default ScaleTile;
