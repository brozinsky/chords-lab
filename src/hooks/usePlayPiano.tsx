import { useState } from "react";
import { Howl } from "howler";
import { Note } from "tonal";
import pianoLibrary23MP3 from "@/assets/audio/piano-octave-2-3.mp3";
import usePlayPianoStore from "@/stores/usePlayPianoStore";
import {
  simplifyNotes,
} from "@/utils/functions/music-theory/simplifyNotes";

interface MidiSprite {
  [key: number]: [number, number];
  [key: string]: [number, number];
}

const MIDI_SPRITE_2_3: MidiSprite = {
  36: [0, 3000],
  37: [4800, 3000],
  38: [9600, 3000],
  39: [14400, 3000],
  40: [19200, 3000],
  41: [24000, 3000],
  42: [28800, 3000],
  43: [33600, 3000],
  44: [38400, 3000],
  45: [43200, 3000],
  46: [48000, 3000],
  47: [52800, 3000],
  48: [57600, 3000],
  49: [62400, 3000],
  50: [67200, 3000],
  51: [72000, 3000],
  52: [76800, 3000],
  53: [81600, 3000],
  54: [86400, 3000],
  55: [91200, 3000],
  56: [96000, 3000],
  57: [100800, 3000],
  58: [105600, 3000],
};

export default function usePlayPiano() {
  const [isPianoSoundLoading, setIsPianoSoundLoading] = useState(true);
  // const [currentlyPlayedNotes, setCurrentlyPlayedNotes] = useState<string[]>([]);

  const {
    currentlyPlayedNotes,
    setCurrentlyPlayedNotes,
  } = usePlayPianoStore();

  const sound = new Howl({
    src: [pianoLibrary23MP3],
    sprite: MIDI_SPRITE_2_3,
    onload: () => {
      setIsPianoSoundLoading(false);
    },
  });

  const playPianoMidi = (midiArray: number[]) => {
    if (!isPianoSoundLoading) {
      midiArray.forEach((midi) => {
        const id = sound.play(midi.toString());
        sound.fade(1, 0, 2000, id);
      });
    }
  };

  const playPianoNotes = (notesArray: string[]) => {
    if (!isPianoSoundLoading) {
      setCurrentlyPlayedNotes(simplifyNotes(notesArray));
      notesArray.forEach((note) => {
        const midi = Note.midi(note);
        if (midi) {
          const id = sound.play(midi.toString());
          sound.fade(1, 0, 2000, id);
        }
      });
    }
  };

  const playPianoChord = (playMode: string, notes: string[]) => {

    if (!notes) {
      return;
    }

    if (playMode === "chord") playPianoNotes(notes);

    if (playMode === "arpeggio") {
      const playNoteWithInterval = (noteIndex: number) => {
        if (noteIndex < notes.length) {
          playPianoNotes([notes[noteIndex]]);
          setTimeout(() => {
            playNoteWithInterval(noteIndex + 1);
          }, 200);
        }
      };

      playNoteWithInterval(0);
    }
  };

  return { isPianoSoundLoading, playPianoMidi, playPianoNotes, playPianoChord, currentlyPlayedNotes };
};
