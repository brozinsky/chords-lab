import FilterButton from "@/components/ui/FilterButton";
import { notes } from "@/utils/notesData";
import shortid from "shortid";

type NotesTypes = (typeof notes)[number];

type Props = {
  activeNotes: NotesTypes[];
  onClick: (note: NotesTypes[]) => void;
};

export default function FilterMultiNotes({ onClick, activeNotes }: Props) {
  const handleToggle = (note: NotesTypes | string) => {
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
