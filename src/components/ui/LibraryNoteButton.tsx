import clsx from "clsx";
import React, { MouseEventHandler } from "react";

type LibraryNoteButtonProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  note: string;
  activeNote: string;
};

const LibraryNoteButton = ({
  onClick,
  note,
  activeNote,
}: LibraryNoteButtonProps) => {
  return (
    <div
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
