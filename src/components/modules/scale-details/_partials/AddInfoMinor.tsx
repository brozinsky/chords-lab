import useSelectedScale from "@/stores/useSelectedScale";
import { Key } from "tonal";

interface AddInfoMinorProps {
  type: "natural" | "melodic" | "harmonic";
}

const AddInfoMinor: React.FC<AddInfoMinorProps> = ({ type }) => {
  const { tonic } = useSelectedScale();

  if (!tonic) return;

  const minorScale = Key.minorKey(tonic);

  return (
    <div className="flex flex-col">
      <div>{minorScale[type].grades}</div>
    </div>
  );
};

export default AddInfoMinor;
