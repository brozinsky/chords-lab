import React from "react";
import ChordInfo from "./_partials/ChordInfo";
import PianoChord from "./_partials/PianoChord";

const ChordDetails = ({ chord }) => {
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  console.log(chord);
  if (isEmpty(chord)) return;
  return (
    <div>
      <PianoChord chord={chord} size={"sm"} />
      <ChordInfo chord={chord} />
    </div>
  );
};

export default ChordDetails;
