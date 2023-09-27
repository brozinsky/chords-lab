import { processIntervals } from "@/utils/processIntervals";
import clsx from "clsx";
import PianoScaleSVG from "@/components/elements/svg/PianoScaleSVG";
import { Chord, Scale } from "tonal";

type ChordTileProps = {
  note: string;
  name: string;
  type: string;
  setType: any;
  intervals?: string[];
};

const ChordTile = ({
  note,
  name,
  type,
  setType,
  intervals,
}: ChordTileProps) => {
  const scaleNotes = Chord.get([note + "1", name]).notes;
  return (
    <div
      onClick={() => setType(name)}
      className={clsx("chord-list-item", {
        "chord-list-item--active": type === name,
      })}
    >
      <div className="flex flex-col">
        <PianoScaleSVG
          key={note + name}
          className="max-h-[60px] w-full"
          scale={scaleNotes && scaleNotes.length > 0 ? scaleNotes : []}
        />
        <div className="chord-list-item__suffix"><span className="text-lg">{note}</span> {name}</div>
        {intervals ? (
          <div className="chord-list-item__suffix">
            {processIntervals(intervals)}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ChordTile;
