import FilterButton from "@/components/ui/buttons/FilterButton";
import { notes } from "@/utils/notesData";
import { TNotes } from "@/utils/types";
import shortid from "shortid";

type TProps = {
  activeNotes: TNotes[];
  onClick: (note: TNotes[]) => void;
};

export default function FilterMultiNotes({ onClick, activeNotes }: TProps) {
  const handleToggle = (note: TNotes | string) => {
    const isActive = activeNotes.includes(note);
    if (isActive) {
      //@ts-ignore
      onClick(activeNotes.filter((n) => n !== note));
    } else {
      //@ts-ignore
      onClick([...activeNotes, note]);
    }
  };

  return (
    <div className="flex flex-row gap-2">
      {notes.map((note) => (
        <FilterButton
          key={shortid.generate()}
          item={note}
          active={activeNotes.includes(note)}
          onClick={() => handleToggle(note)}
          variant="note"
        />
      ))}
    </div>
  );
}
