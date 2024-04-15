import FilterButton from "@/components/ui/buttons/FilterButton";
import { notes } from "@/utils/notesData";
import { TNotes } from "@/utils/types";
import shortid from "shortid";

type TProps = {
  activeNote: TNotes;
  onClick: (note: TNotes) => void;
};

export default function FilterNotes({ onClick, activeNote }: TProps) {
  return (
    <div className="flex flex-row gap-2">
      {notes.map((note) => (
        <FilterButton
          key={shortid.generate()}
          item={note}
          active={activeNote === note}
          onClick={() => onClick(note)}
          variant="note"
        />
      ))}
    </div>
  );
}
