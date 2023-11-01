import { processIntervals } from "@/utils/processIntervals";
import clsx from "clsx";
import PianoScaleSVG from "@/components/elements/svg/PianoScaleSVG";
import { Chord, Note, Scale } from "tonal";
import { motion } from "framer-motion";
import ButtonPlayTile from "./buttons/ButtonPlayTile";

type PianoTileProps = {
  note: string;
  name: string;
  selected: any;
  onClick: any;
  onPlayClick: any;
  intervals?: string[];
  variant?: "scale" | "chord";
};

const PianoTile = ({
  variant = "scale",
  note,
  name,
  selected,
  onClick,
  onPlayClick,
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

  const textMotion = {
    rest: { ease: "linear", duration: 0.15, type: "tween", y: 0 },
    hover: {
      y: -8,
      transition: {
        duration: 0.15,
        type: "tween",
        ease: "linear",
      },
    },
  };
  const notesMotion = {
    rest: { opacity: 0, ease: "linear", duration: 0.15, type: "tween", y: 20 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        type: "tween",
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
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
        <motion.div
          variants={textMotion}
          className="text-left chord-list-item__suffix"
        >
          <span className="text-lg">{note}</span> {name}
        </motion.div>
        <motion.div variants={notesMotion} className="absolute bottom-2 left-2 flex gap-1 items-center">
          {notes.map((note, index) => {
            return (
              <span key={note} className="text-xs">
                {note.slice(0, -1)}
                {index !== notes.length - 1 && " -"}
              </span>
            );
          })}
        </motion.div>
        {intervals ? (
          <div className="chord-list-item__suffix">
            {processIntervals(intervals)}
          </div>
        ) : null}
      </div>
      <ButtonPlayTile onClick={(e: Event) => onPlayClick(e, note, name)} />
    </motion.div>
  );
};

export default PianoTile;
