import FilterButton from "@/components/ui/FilterButton";
import { notes } from "@/utils/notesData";
import shortid from "shortid";

type NotesTypes = (typeof notes)[number];

type Props = {
  activeNote: NotesTypes;
  onClick: (note: NotesTypes) => void;
};

export default function FilterNotes({ onClick, activeNote }: Props) {
  return (
    <div className="flex flex-row gap-2">
      {notes.map((note) => (
        <FilterButton
          key={shortid.generate()}
          item={note}
          active={activeNote}
          onClick={() => onClick(note)}
          variant="note"
        />
      ))}
    </div>
  );
}
