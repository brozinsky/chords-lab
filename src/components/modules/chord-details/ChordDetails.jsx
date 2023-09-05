import React from "react";
import ChordInfo from "./_partials/ChordInfo";

const ChordDetails = ({ chord }) => {
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  console.log(chord);
  if (isEmpty(chord)) return;
  return (
    <div>
      <ChordInfo chord={chord} />
    </div>
  );
};

export default ChordDetails;
