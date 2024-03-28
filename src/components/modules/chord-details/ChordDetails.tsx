import useSelectedChord from "@/stores/chords/useSelectedChord";
import PianoChord from "./_partials/PianoChord";
import { useEffect } from "react";
import { Chord } from "tonal";
import Formula from "../details/formula/Formula";
import NotesDetails from "../details/NotesDetails";
import PlayPanel from "../details/PlayPanel";
import SelectPanel from "../details/SelectPanel";
import RelatedChords from "../details/chords/RelatedChords";

const ChordDetails = () => {
  const { selectedChord } = useSelectedChord();

  if (selectedChord?.name === undefined) return;

  const extendedChords = Chord.extended(selectedChord.name.toLowerCase());
  const reducedChords = Chord.reduced(selectedChord.name.toLowerCase());

  return (
    <section id="ChordDetails">
      <h1 className="sr-only h-0">Chord details of {selectedChord.name}</h1>
      {/* Chord name */}
      <SelectPanel variant={"chords"} />

      {/* Piano keyboard */}
      <PianoChord />

      <section className="mt-2 space-y-2">
        <PlayPanel variant={"chords"} notes={selectedChord.notes as string[]} />

        <NotesDetails notes={selectedChord.notes as string[]} />

        <Formula />

        {(extendedChords.length > 0 || reducedChords.length > 0) && (
          <div className="flex flex-col gap-2 mx-auto w-full rounded-2xl bg-neutral-800 p-2 max-w-[582px]">
            <RelatedChords chords={extendedChords} heading="Extended chords" />

            <RelatedChords chords={reducedChords} heading="Reduced chords" />
          </div>
        )}
      </section>
    </section>
  );
};

export default ChordDetails;
