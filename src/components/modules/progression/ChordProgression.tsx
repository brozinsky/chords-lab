import ArrowSmSVG from "@/components/elements/svg/icons/interface/ArrowSmSVG";
import ButtonProgression from "@/components/ui/buttons/ButtonProgression";

const notesOptions = [
  { id: 1, value: ["I", "IV", "v", "iv"], name: "I - IV - v - iv" },
  { id: 2, value: ["I", "IV", "I", "V", "I"], name: "I - IV - v - iv" },
  { id: 3, value: ["I", "V", "IV", "V"], name: "I - IV - v - iv" },
  { id: 4, value: ["I", "IV", "ii", "V"], name: "I - IV - v - iv" },
];

type TChordProgressionItem = {
  id: number;
  key: string;
  type: string;
  romanNumeral: string;
};

type TProps = {
  progression: TChordProgressionItem[];
  scaleKey: string;
  scaleType: string;
  editedChordId: number | null;
  setEditedChordId: (index: number | null) => void
  removeChord: (index: number) => void
};

const ChordProgression = ({
  progression,
  scaleKey,
  scaleType,
  editedChordId,
  setEditedChordId,
  removeChord,
}: TProps) => {

  return (
    <div className="border border-neutral-500 w-full min-h-48 bg-neutral-800 flex flex-col gap-2 px-6 rounded-2xl py-4 justify-between">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl text-left">Chord Progression</h2>
        {/* <Select
          size={"sm"}
          variant={"outlined"}
          contentType={"tonic"}
          options={notesOptions}
          displayValue={chordProgression.join(" - ")}
          state={chordProgression}
          setState={setChordProgression}
        /> */}
      </div>
      <div className="flex gap-6 mx-auto py-4 max-w-full overflow-auto">
        {progression.length > 0 &&
          progression.map((chord) => {
            return (
              <div className="flex items-center justify-center gap-6" key={chord.id}>
                <ButtonProgression
                  id={chord.id}
                  romanNumeral={chord.romanNumeral}
                  chordKey={chord.key}
                  chordType={chord.type}
                  editedChordId={editedChordId}
                  onClick={() => setEditedChordId(chord.id)}
                  handleDelete={() => removeChord(chord.id)}
                />
                <div className="flex flex-col py-4 gap-2 items-center justify-center rounded-lg">
                  <ArrowSmSVG pathClass={"stroke-neutral-300"} />
                </div>
              </div>
            );
          })}
        <ButtonProgression
          variant="new"
          editedChordId={editedChordId}
          onClick={() => setEditedChordId(-1)}
        />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ChordProgression;
