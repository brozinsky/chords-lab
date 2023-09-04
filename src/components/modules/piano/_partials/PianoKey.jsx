import React from "react";

const NoteButton = ({
  name,
  currentKeys,
  handleButtonPress,
  handleButtonRelease,
  noteMatchesKeybind
}) => {
  const noteNumber = name.slice(-1);
  const convertedName = name
  .replace(/[0-9]/g, "")
  .replace("s", "#")
  .toUpperCase();
  return (
    <button
      className={`piano-key ${
        convertedName.includes("#") ? "piano-key--black" : "piano-key--white"
      } ${currentKeys.includes(name) ? "piano-key--active" : ""}`}
      onMouseDown={() => handleButtonPress(name)}
      onMouseUp={() => handleButtonRelease(name)}
    >
      {noteMatchesKeybind ? (
        <kbd className="kbd">{noteMatchesKeybind.keybind}</kbd>
      ) : null}
      <div className="piano-note">
        <div className="flex items-end">
          <div>{convertedName}</div>
          <div className="text-sm">{noteNumber}</div>
        </div>
      </div>
    </button>
  );
};

export default NoteButton;
