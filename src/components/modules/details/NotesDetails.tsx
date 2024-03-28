import React from "react";
import { motion } from "framer-motion";
import usePlayPiano from "@/hooks/usePlayPiano";
import { simplifyNote } from "@/utils/functions/music-theory/simplifyNotes";

type Props = {
  notes: string[];
};

export default function NotesDetails({ notes }: Props) {
  const { playPianoNotes } = usePlayPiano();
  return (
    <section
      id="NotesDetails"
      className="flex flex-col gap-2 px-6 rounded-2xl bg-neutral-800 p-2 overflow-auto"
    >
      <h2>Notes:</h2>

      <div className="items-center flex flex-row gap-2">
        {notes.map((note, index) => {
          const isLastItem = (notes.length as number) - 1 !== index;
          return (
            <React.Fragment key={note}>
              <motion.div
                onClick={() => playPianoNotes([note])}
                data-tooltip-id={"note-" + note}
                className="p-2 rounded-lg active:bg-neutral-600 cursor-pointer select-none text-center text-2xl min-w-[3rem]"
                whileTap={{ scale: 0.92 }}
              >
                {simplifyNote(note).slice(0, -1)}
              </motion.div>
              <div className="text-2xl text-center">
                {isLastItem ? "-" : null}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
