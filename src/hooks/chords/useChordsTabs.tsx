import useChordsListStore from "@/stores/chords/useChordsListStore";
import { chords } from "@/utils/chords";
import { useNavigate } from "react-router-dom";
import useRomanNumerals from "./useRomanNumerals";
import { useEffect, useState } from "react";
import useFilterStore from "@/stores/chords/useFilterStore";

type ChordsTabs = "all" | "roman" | "notes";

const useChordsTab = () => {
  const {
    chordTab: activeTab,
    chordsList,
    setChordTab: setActiveTab,
    setChordsList,
  } = useChordsListStore((state) => state);
  const navigate = useNavigate();
  const { getRomanChords } = useRomanNumerals();

  const { allChordsRoot, romanScaleTonic, romanScaleType } = useFilterStore();

  const [romanChords, setRomanChords] = useState(
    getRomanChords(romanScaleTonic, romanScaleType)
  );

  useEffect(() => {
    setRomanChords(getRomanChords(romanScaleTonic, romanScaleType));
  }, [romanScaleTonic, romanScaleType]);

  const changeTab = (tabName: ChordsTabs) => {
    setActiveTab(tabName);

    // set the chordsList based on the selected tab
    switch (tabName) {
      case "all":
        const chordsWithRoot = chords.map((chord) => ({
          ...chord,
          root: allChordsRoot,
        }));
        setChordsList(chordsWithRoot);
        break;
      case "roman":
        setChordsList(romanChords);
        break;
      case "notes":
        const chordsList = chords.map((chord) => ({
          ...chord,
          root: allChordsRoot,
        }));
        setChordsList(chordsList);
        break;
      default:
        break;
    }

    navigate(`/chords/${tabName}`);
  };

  return { activeTab, chordsList, changeTab, setChordsList };
};

export default useChordsTab;
