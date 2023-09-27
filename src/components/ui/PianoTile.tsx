import { processIntervals } from "@/utils/processIntervals";
import clsx from "clsx";
import PianoScaleSVG from "@/components/elements/svg/PianoScaleSVG";
import { Chord, Scale } from "tonal";

type PianoTileProps = {
  note: string;
  name: string;
  type: string;
  setType: any;
  intervals?: string[];
  variant?: "scale" | "chord";
};

const PianoTile = ({
  variant = "scale",
  note,
  name,
  type,
  setType,
  intervals,
}: PianoTileProps) => {
  const notes =
    variant === "scale"
      ? Scale.get(`${note}1 ${name}`).notes
      : Chord.get([note + "1", name]).notes;
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
          scale={notes && notes.length > 0 ? notes : []}
        />
        <div className="chord-list-item__suffix">
          <span className="text-lg">{note}</span> {name}
        </div>
        {intervals ? (
          <div className="chord-list-item__suffix">
            {processIntervals(intervals)}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PianoTile;
