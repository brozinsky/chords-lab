import { useState, useEffect } from "react";

// Custom hook for managing currently pressed keys and keybind state
function useCurrentKeys(keybind) {
  const [currentKeys, setCurrentKeys] = useState([]);
  const [isKeybindDisabled, setIsKeybindDisabled] = useState(false);

  const handleKeyChange = (event, isKeyPress) => {
    if (isKeybindDisabled) return;

    const keyChanged = event.key;
    setCurrentKeys((prevKeys) => {
      const note = keybind.find((n) => n.keybind === keyChanged);
      if (note) {
        const updatedKeys = isKeyPress
          ? [...prevKeys, note.name]
          : prevKeys.filter((key) => key !== note.name);
        return updatedKeys;
      }
      return prevKeys;
    });
  };

  const handleKeyPress = (event) => {
    handleKeyChange(event, true);
  };

  const handleKeyRelease = (event) => {
    handleKeyChange(event, false);
  };

  const handleMouseUpOutsideButton = () => {
    setCurrentKeys([]);
  };

  const toggleKeybinds = () => {
    setIsKeybindDisabled((prevIsKeybindDisabled) => !prevIsKeybindDisabled);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyRelease);
    window.addEventListener("mouseup", handleMouseUpOutsideButton);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyRelease);
      window.removeEventListener("mouseup", handleMouseUpOutsideButton);
    };
  }, []);

  return { currentKeys, setCurrentKeys, isKeybindDisabled, setIsKeybindDisabled };
}

export default useCurrentKeys;
