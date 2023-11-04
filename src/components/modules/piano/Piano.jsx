import React, { useEffect, useState } from "react";
import useCurrentKeys from "@/hooks/useCurrentKeys";
import pianoLibrary from "@/assets/audio/piano.mp3";
import { Howl } from "howler";
import PianoKey from "@/components/modules/piano/_partials/PianoKey";
import { notesWithSprite, pianoNotes } from "@/utils/notes";

const keybind = [
  { name: "c2", keybind: "a" },
  { name: "cs2", keybind: "w" },
  { name: "d2", keybind: "s" },
  { name: "ds2", keybind: "e" },
  { name: "e2", keybind: "d" },
  { name: "f2", keybind: "f" },
  { name: "fs2", keybind: "t" },
  { name: "g2", keybind: "g" },
  { name: "gs2", keybind: "y" },
  { name: "a2", keybind: "h" },
  { name: "as2", keybind: "u" },
  { name: "b2", keybind: "j" },
];

const Piano = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { currentKeys, setCurrentKeys, isKeybindDisabled, setIsKeybindDisabled } = useCurrentKeys(keybind);
  const [previousKeys, setPreviousKeys] = useState([]);

  const handleButtonPress = (note) => {
    if (!isLoading && !currentKeys.includes(note)) {
      setCurrentKeys((prevKeys) => [...prevKeys, note]);
    }
  };

  useEffect(() => {
    currentKeys.forEach((key) => {
      if (!previousKeys.includes(key)) {
        const id = sound.play(key);
        sound.fade(1, 0, 2000, id);
      }
    });
    setPreviousKeys(currentKeys);
  }, [currentKeys]);

  useEffect(() => {
    setIsKeybindDisabled(true);
  }, []);

  const handleButtonRelease = (note) => {
    !isLoading
      ? setCurrentKeys((prevKeys) => prevKeys.filter((key) => key !== note))
      : null;
  };

  const sound = new Howl({
    src: [pianoLibrary],
    sprite: notesWithSprite,
    onload: () => {
      setIsLoading(false);
    },
  });

  return (
    <div className="flex flex-row">
      {pianoNotes.map(({ name }) => {
        const noteMatchesKeybind = keybind.find((key) => key.name === name);
        return (
          <PianoKey
            key={name}
            name={name}
            currentKeys={!isKeybindDisabled ? currentKeys : []}
            handleButtonPress={handleButtonPress}
            handleButtonRelease={handleButtonRelease}
            noteMatchesKeybind={noteMatchesKeybind}
            isKeybindDisabled={isKeybindDisabled}
          />
        );
      })}
    </div>
  );
};

export default Piano;
