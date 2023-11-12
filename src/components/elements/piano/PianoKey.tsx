import clsx from "clsx";
import { Note } from "tonal";

interface PianoKeyProps {
  name: string;
  isPlaying: boolean;
  isActive: boolean;
  onClick?: () => void;
}

const PianoKey = ({ name, isPlaying, isActive, onClick }: PianoKeyProps) => {
  const activeAccidental = "♯";
  // const activeAccidental = "♭";
  const classNames = clsx(
    "piano-key",
    "piano-key--sm",
    name.includes("#") ? "piano-key--black" : "piano-key--white",
    isActive && "piano-key--active",
    isPlaying && "piano-key--playing"
  );
  return (
    <div
      onClick={onClick}
      className={classNames}
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
