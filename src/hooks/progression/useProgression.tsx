import React, { useState } from "react";

function findPreviousChordById(array: any[], targetId: number) {
  for (let i = 1; i < array.length; i++) {
    // Start from 1 because there is no previous item
    if (array[i].id === targetId) {
      return array[i - 1];
    }
  }
  return null; // Return null if no previous item
}

const useProgression = () => {
  const [editedChordId, setEditedChordId] = useState(null);
  const [chordProgression, setChordProgression] = useState([
    { id: 1, romanNumeral: "Imaj", key: "C", type: "maj" },
    { id: 2, romanNumeral: "Vsus", key: "G", type: "sus" },
    { id: 3, romanNumeral: "IV", key: "F", type: "maj" },
    { id: 4, romanNumeral: "IV", key: "F", type: "maj" },
    { id: 5, romanNumeral: "IV", key: "F", type: "maj" },
  ]);

  return {
    editedChordId,
    setEditedChordId,
    chordProgression,
    setChordProgression,
    findPreviousChordById,
  };
};

export default useProgression;
