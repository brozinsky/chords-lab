import useChordsListStore from "@/stores/chords/useChordsListStore";
import { useNavigate } from "react-router-dom";
import useRomanChordsStore from "@/stores/query/useRomanChordsStore";
import useChordsByNotesStore from "@/stores/query/useChordsByNotesStore";
import useAllChordsRootStore from "@/stores/query/useAllChordsRootStore";
import { ChordType } from "@/utils/types";

type ChordsTabs = "all" | "roman" | "notes";

const useChordsTab = () => {
  const {
    chordTab: activeTab,
    chordsList,
    setChordTab: setActiveTab,
    setChordsList,
  } = useChordsListStore((state) => state);
  const navigate = useNavigate();

  const { romanChordsData } = useRomanChordsStore();
  const { chordsByNotesData } = useChordsByNotesStore();
  const { allChordsRootData } = useAllChordsRootStore();

  const changeTab = (tabName: ChordsTabs) => {
    setActiveTab(tabName);

    // set the chordsList based on the selected tab
    switch (tabName) {
      case "all":
        setChordsList(allChordsRootData as ChordType[]);
        break;
      case "roman":
        setChordsList(romanChordsData as ChordType[]);
        break;
      case "notes":
        setChordsList(chordsByNotesData as ChordType[]);
        break;
      default:
        break;
    }
    navigate(`/chords/${tabName}`);
  };

  return { activeTab, chordsList, changeTab, setChordsList };
};

export default useChordsTab;
