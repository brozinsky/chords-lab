import { Note } from "tonal";

interface PianoKeyProps {
  name: string;
  isActive: boolean;
}

const PianoKey = ({ name, isActive }: PianoKeyProps) => {
  const activeAccidental = "♯";
  // const activeAccidental = "♭";
  return (
    <div
      className={`piano-key piano-key--sm ${
        name.includes("#") ? "piano-key--black" : "piano-key--white"
      } ${isActive ? "piano-key--active" : ""}`}
    >
      <div className="piano-note">
        <div className="flex items-end">
          <div>
            {name[0]}
            {Note.accidentals(name) && <sub>{activeAccidental}</sub>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PianoKey;
