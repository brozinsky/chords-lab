import { Note } from "tonal";
import usePlayNotesStore from "@/stores/usePlayNotesStore";
import {
  simplifyNotes,
} from "@/utils/functions/music-theory/simplifyNotes";
import useBPMStore from "@/stores/settings/useBPMStore";
import { usePianoSoundStore } from "@/stores/usePianoSoundStore";

export default function usePlayPiano() {
  const { sound, isPianoSoundLoading } = usePianoSoundStore();
  const { bpm } = useBPMStore();

  const {
    currentlyPlayedNotes,
    setCurrentlyPlayedNotes,
  } = usePlayNotesStore();

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
          }, 60000 / 4 / bpm);
        }
      };

      playNoteWithInterval(0);
    }
  };

  return { isPianoSoundLoading, playPianoMidi, playPianoNotes, playPianoChord, currentlyPlayedNotes };
};
