import React, { useEffect, useState } from "react";
import progressionRelationsJSON from "@/lib/progression-relations.json";

const useProgression = () => {
  const [editedChordId, setEditedChordId] = useState<number | null>(null);
  const oneMajData = progressionRelationsJSON["Imaj"];
  const [suggestedChords, setSuggestedChords] = useState(oneMajData);
  const [chordProgression, setChordProgression] = useState([
    { id: 1, romanNumeral: "Imaj", key: "C", type: "maj" },
    { id: 2, romanNumeral: "Vsus", key: "G", type: "sus" },
    { id: 3, romanNumeral: "IVmaj", key: "D", type: "min" },
    { id: 4, romanNumeral: "Vmaj", key: "F", type: "maj" },
    { id: 5, romanNumeral: "VImin", key: "F", type: "maj" },
  ]);

  function findPreviousChordById(targetId: number) {
    for (let i = 1; i < chordProgression.length; i++) {
      // Start from 1 because there is no previous item
      if (chordProgression[i].id === targetId) {
        return chordProgression[i - 1];
      }
    }
    return null; // Return null if no previous item
  }

  const setChordType = (newType: string) => {
    setChordProgression((currentProgression) =>
      currentProgression.map((chord) =>
        chord.id === editedChordId ? { ...chord, type: newType } : chord
      )
    );
  };

  const setChordKey = (newKey: string) => {
    setChordProgression((currentProgression) =>
      currentProgression.map((chord) =>
        chord.id === editedChordId ? { ...chord, key: newKey } : chord
      )
    );
  };

  const removeChord = (id: number) => {
    setChordProgression((currentProgression) =>
      currentProgression.filter((chord) => chord.id !== id)
    );
  };

  useEffect(() => {
    if (editedChordId) {
      const prevRomanChord = findPreviousChordById(editedChordId)?.romanNumeral;
      // @ts-ignore
      setSuggestedChords(progressionRelationsJSON[prevRomanChord]);
    } else {
      // @ts-ignore
      setSuggestedChords(null);
    }
  }, [chordProgression, editedChordId]);

  return {
    setChordType,
    setChordKey,
    removeChord,
    suggestedChords,
    editedChordId,
    setEditedChordId,
    chordProgression,
    setChordProgression,
    findPreviousChordById,
  };
};

export default useProgression;
