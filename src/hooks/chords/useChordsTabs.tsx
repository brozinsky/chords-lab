import useChordsListStore from "@/stores/chords/useChordsListStore";
import { chords } from "@/utils/chords";
import { useNavigate } from "react-router-dom";
import useRomanNumerals from "./useRomanNumerals";

const chordsWithRoot = chords.map((chord) => ({
  ...chord,
  root: "c",
}));

type ChordsTabs = "all" | "roman" | "notes";

const useChordsTab = () => {
  const activeTab = useChordsListStore((state) => state.chordTab);
  const chordsList = useChordsListStore((state) => state.chordsList);
  const setActiveTab = useChordsListStore((state) => state.setChordTab);
  const setChordsList = useChordsListStore((state) => state.setChordsList);
  const navigate = useNavigate();
  const { getRomanChords } = useRomanNumerals();

  const chordsRoman = getRomanChords("c", "major");

  const changeTab = (tabName: ChordsTabs) => {
    setActiveTab(tabName);

    // set the chordsList based on the selected tab
    switch (tabName) {
      case "all":
        setChordsList(chordsWithRoot);
        break;
      case "roman":
        setChordsList(chordsRoman);
        break;
      case "notes":
        setChordsList(chordsWithRoot);
        break;
      default:
        break;
    }

    navigate(`/chords/${tabName}`);
  };

  return { activeTab, chordsList, changeTab };
};

export default useChordsTab;
