import React, { useEffect, useState } from "react";
import progressionRelationsJSON from "@/lib/progression-relations.json";
import { Chord, Progression } from "tonal";

const useProgression = () => {
  const [scaleKey, setScaleKey] = useState("C");
  const [scaleType, setScaleType] = useState("major");
  const [editedChordId, setEditedChordId] = useState<number | null>(null);
  const oneMajData = progressionRelationsJSON["Imaj"];
  const [suggestedChords, setSuggestedChords] = useState(oneMajData);
  const [chordProgression, setChordProgression] = useState([
    { id: 1, romanNumeral: "Imaj", key: "C", type: "maj" },
    { id: 2, romanNumeral: "Vsus", key: "G", type: "sus" },
    { id: 3, romanNumeral: "Vmaj7", key: "G", type: "maj7" },
    { id: 4, romanNumeral: "IVmaj", key: "F", type: "maj" },
  ]);

  const [romanProgression, setRomanProgression] = useState([
    "Imaj",
    "Vsus",
    "IImin",
    "IVmaj",
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
    const newRomanNumeral = Progression.toRomanNumerals(scaleKey, [
      `${
        chordProgression.find((chord) => chord.id === editedChordId)?.key
      } ${newType}`,
    ])[0];
    //@ts-ignore
    setChordProgression((currentProgression) =>
      currentProgression.map((chord) =>
        chord.id === editedChordId
          ? { ...chord, type: newType, romanNumeral: newRomanNumeral as string }
          : chord
      )
    );
  };

  const setChordRomanNumeral = (newKey: string, newType: string) => {
    const newRomanNumeral = Progression.toRomanNumerals(scaleKey, [
      `${newKey}${newType}`,
    ])[0];
    //@ts-ignore
    setChordProgression((currentProgression) =>
      currentProgression.map((chord) =>
        chord.id === editedChordId
          ? { ...chord, romanNumeral: newRomanNumeral }
          : chord
      )
    );
  };

  const setChordKey = (newKey: string) => {
    const newRomanNumeral = Progression.toRomanNumerals(scaleKey, [
      `${newKey}${
        chordProgression.find((chord) => chord.id === editedChordId)?.type
      }`,
    ])[0];
    //@ts-ignore
    setChordProgression((currentProgression) =>
      currentProgression.map((chord) =>
        chord.id === editedChordId
          ? { ...chord, key: newKey, romanNumeral: newRomanNumeral }
          : chord
      )
    );
  };

  const removeChord = (id: number) => {
    setChordProgression((currentProgression) =>
      currentProgression.filter((chord) => chord.id !== id)
    );
  };

  //update chords after scale key change
  useEffect(() => {
    //@ts-ignore
    setChordProgression((currentProgression) =>
      currentProgression.map((chord) => {
        const currentChordName = Progression.fromRomanNumerals(scaleKey, [
          chord.romanNumeral
        ])[0];
        const newKey = Chord.get(currentChordName[0]).tonic;
        return { ...chord, key: newKey };
      })
    );
  }, [scaleKey]);

  //initialize sugested chords
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
    scaleKey,
    setScaleKey,
    scaleType,
    setScaleType,
    setChordType,
    setChordKey,
    removeChord,
    suggestedChords,
    editedChordId,
    setEditedChordId,
    chordProgression,
    setChordProgression,
    findPreviousChordById,
    setChordRomanNumeral,
  };
};

export default useProgression;
