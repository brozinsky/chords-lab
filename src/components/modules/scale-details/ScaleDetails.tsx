import useSelectedScale from "@/stores/useSelectedScale";
import PianoScale from "./_partials/PianoScale";

const ScaleDetails = () => {
  const { selectedScale } = useSelectedScale();
  if (selectedScale === undefined) return;
  return (
    <div>
      <PianoScale />
    </div>
  );
};

export default ScaleDetails;
