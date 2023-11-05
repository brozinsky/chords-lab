import { chords } from "@/utils/chords";
import { notes } from "@/utils/notesData";
import { Scale, ScaleType } from "tonal";

export const chordQualityOptions = chords.map((chord) => ({
  id: chord.abbreviations[0],
  value: chord.abbreviations[0],
  name: chord.name,
}));

export const scaleTypeOptions = ScaleType.all().map(({name}) => ({
    id: name,
    value: name,
    name: name,
  }));

export const notesOptions = notes.map((note) => ({
  id: note,
  value: note,
  name: note,
}));
