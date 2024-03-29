import useChordsListStore from "@/stores/chords/useChordsListStore";
import { useNavigate } from "react-router-dom";
import useRomanChordsQuery from "@/stores/query/useRomanChordsQuery";
import useChordsByNotesStore from "@/stores/query/useChordsByNotesStore";
import useAllChordsRootStore from "@/stores/query/useAllChordsRootStore";
import { TChord, TChordsTabs } from "@/utils/types";

const useChordsTab = () => {
  const {
    chordTab: activeTab,
    chordsList,
    setChordTab: setActiveTab,
    setChordsList,
  } = useChordsListStore((state) => state);
  const navigate = useNavigate();

  const romanChords = useRomanChordsQuery();
  const { chordsByNotesData } = useChordsByNotesStore();
  const { allChordsRootData } = useAllChordsRootStore();

  const changeTab = (tabName: TChordsTabs) => {
    setActiveTab(tabName);

    // set the chordsList based on the selected tab
    switch (tabName) {
      case "all":
        setChordsList(allChordsRootData as TChord[]);
        break;
      case "roman":
        setChordsList(romanChords.data as TChord[]);
        break;
      case "notes":
        setChordsList(chordsByNotesData as TChord[]);
        break;
      default:
        break;
    }
    navigate(`/chords/${tabName}`);
  };

  return { activeTab, chordsList, changeTab, setChordsList };
};

export default useChordsTab;
