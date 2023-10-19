import { processIntervals } from "@/utils/processIntervals";
import clsx from "clsx";
import PianoScaleSVG from "@/components/elements/svg/PianoScaleSVG";
import { Chord, Note, Scale } from "tonal";

type PianoTileProps = {
  note: string;
  name: string;
  selected: any;
  onClick: any;
  intervals?: string[];
  variant?: "scale" | "chord";
};

const PianoTile = ({
  variant = "scale",
  note,
  name,
  selected,
  onClick,
  intervals,
}: PianoTileProps) => {
  const notes =
    variant === "scale"
      ? Scale.get(`${note}1 ${name}`).notes.map((note) =>
          note.includes("b") ? Note.enharmonic(note) : Note.simplify(note)
        )
      : Chord.get([note + "1", name]).notes.map((note) =>
          note.includes("b") ? Note.enharmonic(note) : Note.simplify(note)
        );

  const chordName = Chord.get([note + "2", name]).name;

  return (
    <div
      onClick={() => onClick(note, name)}
      className={clsx("chord-list-item", {
        "chord-list-item--active": selected.name === chordName,
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
