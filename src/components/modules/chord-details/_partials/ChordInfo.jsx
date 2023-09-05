import React from "react";

const ChordInfo = ({ chord }) => {
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  console.log(chord);
  if (isEmpty(chord)) return;
  return (
    <div className="text-white flex-col flex space-y-4">
      <div className="flex flex-col">
        <div>Name:</div>
        <div className="flex gap-1">
          <div>{chord.note}</div>
          <div>{chord.chordName}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>Chord Structure:</div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <div className="flex gap-2">Intervals:</div>
            {chord.intervals.map((interval) => {
              return <div key={interval}>{interval}</div>;
            })}
          </div>
          <div className="flex gap-2">
            <div>Notes:</div>
            {chord.intervalNotes.map((intervalNote) => {
              return <div key={intervalNote}>{intervalNote}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChordInfo;
