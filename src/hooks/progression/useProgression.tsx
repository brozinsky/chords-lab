import React, { useEffect, useState } from "react";
import progressionRelationsJSON from "@/lib/progression-relations.json";
import { Chord, Progression } from "tonal";
import shortid from "shortid";
import { TChordProgressionItem } from "@/utils/types";
import { simplifyChordType } from "@/utils/functions/music-theory/simplifyChordType";

const useProgression = () => {
  const [scaleKey, setScaleKey] = useState("C");
  const [scaleType, setScaleType] = useState<"minor" | "major">("major");
  const [editedChordId, setEditedChordId] = useState<string | null>(null);
  const oneMajData = progressionRelationsJSON["Imaj"];
  const [suggestedChords, setSuggestedChords] = useState(oneMajData);

  const [chordProgression, setChordProgression] = useState<
    TChordProgressionItem[]
  >([]);

  function findPreviousChordById(targetId: string) {
    for (let i = 1; i < chordProgression.length; i++) {
      if (chordProgression[i].id === targetId) {
        return chordProgression[i - 1];
      }
    }
    return null;
  }

  const initNewChord = () => {
    const newId = shortid();
    //@ts-ignore
    setChordProgression((currentProgression) => [
      ...currentProgression,
      { id: newId, romanNumeral: "Imaj", key: scaleKey, type: "maj" },
    ]);
    setEditedChordId(newId);
  };

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

  const getRomanNumeralFromKeyType = (newKey: string, newType: string) => {
    const newRomanNumeral = Progression.toRomanNumerals(scaleKey, [
      `${newKey}${newType}`,
    ])[0];
    return newRomanNumeral;
  };

  const setChordRomanNumeral = (newKey: string, newType: string) => {
    const newRomanNumeral = getRomanNumeralFromKeyType(newKey, newType);
    //@ts-ignore
    setChordProgression((currentProgression) =>
      currentProgression.map((chord) =>
        chord.id === editedChordId
          ? { ...chord, romanNumeral: newRomanNumeral }
          : chord
      )
    );
  };

  const setProgressionByRomanNumerals = (myRomanProgression: string[]) => {
    const newProgression = myRomanProgression.map((romanNumeral) => {
      const currentChordName = Progression.fromRomanNumerals(scaleKey, [
        romanNumeral,
      ]);
      const currentChordKey = Chord.get(currentChordName[0]).tonic;
      const currentChordType = simplifyChordType(
        Chord.get(currentChordName[0]).type
      );

      return {
        id: shortid(),
        romanNumeral: romanNumeral,
        key: currentChordKey!,
        type: currentChordType,
      };
    });

    setChordProgression(newProgression);
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

  const removeChord = (id: string) => {
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
          chord.romanNumeral,
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
    initNewChord,
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
    setProgressionByRomanNumerals,
  };
};

export default useProgression;
