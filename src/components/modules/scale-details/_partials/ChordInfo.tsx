import useChordInScales from "@/hooks/useChordInScales";
import useSelectedChord from "@/stores/chords/useSelectedChord";
import { intervalDegrees } from "@/utils/notes";

const ChordInfo = () => {
  const { selectedChord } = useSelectedChord();
  const relatedScales = useChordInScales(selectedChord?.intervalNotes);

  if (selectedChord === undefined) return;

  return (
    <div className="flex-col flex space-y-4">
      <div className="flex flex-col">
        <div>Name:</div>
        <div className="flex gap-1">
          <div>{selectedChord.note}</div>
          <div>{selectedChord.chordName}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>Abbreviations:</div>
        <div className="flex gap-1">
          {selectedChord.abbreviations && selectedChord.abbreviations.map((abbreviation, index) => {
              return <div key={abbreviation + index}>{selectedChord.note}{abbreviation}{index !== selectedChord.abbreviations.length - 1 && ", "}</div>;
          })}
        </div>
      </div>
      <div className="flex flex-col">
        <div>Chord Formula:</div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <div className="flex gap-2">Intervals:</div>
            {selectedChord.intervals.map((interval) => {
              const intervalName = intervalDegrees.find((degree) => degree.id === interval)?.symbol;
              return <div key={interval}>{intervalName}</div>;
            })}
          </div>
          <div className="flex gap-2">
            <div>Notes:</div>
            {selectedChord.intervalNotes.map((intervalNote) => {
              return <div key={intervalNote}>{intervalNote}</div>;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>Related scales:</div>
        <div className="">
          {relatedScales.map((scale) => {
              return <a href="" key={scale.name}>{scale.name}</a>;
            })}
        </div>
      </div>
    </div>
  );
};

export default ChordInfo;
