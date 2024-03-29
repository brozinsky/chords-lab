import { TNotes } from "@/utils/types";
import clsx from "clsx";
import { MouseEventHandler } from "react";

type TProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  note: TNotes;
  activeNote: TNotes;
};

const LibraryNoteButton = ({
  onClick,
  note,
  activeNote,
}: TProps) => {
  return (
    <div
      id="LibraryNoteButton"
      onClick={onClick}
      className={clsx("chord-list-item chord-list-item--note", {
        "chord-list-item--active": activeNote === note,
      })}
    >
      <div className="flex flex-col">
        <div className="chord-list-item__suffix">{note}</div>
      </div>
    </div>
  );
};

export default LibraryNoteButton;
