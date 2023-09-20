import React from "react";

const PianoKey = ({
  name,
  isActive
}) => {
  return (
    <div
      className={`piano-key piano-key--sm ${
        name.includes("#") ? "piano-key--black" : "piano-key--white"
      } ${isActive ? "piano-key--active" : ""}`}
    >
      <div className="piano-note">
        <div className="flex items-end">
          <div>{name}</div>
        </div>
      </div>
    </div>
  );
};

export default PianoKey;
