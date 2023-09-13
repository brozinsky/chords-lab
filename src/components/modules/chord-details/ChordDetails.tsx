import useSelectedChord from "@/stores/useSelectedChord";
import ChordInfo from "./_partials/ChordInfo";
import PianoChord from "./_partials/PianoChord";

const ChordDetails = () => {
  const { selectedChord } = useSelectedChord();
  if (selectedChord === undefined) return;
  return (
    <div>
      <PianoChord />
      <ChordInfo />
    </div>
  );
};

export default ChordDetails;
