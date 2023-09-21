import useSelectedScale from "@/stores/useSelectedScale";
import { Key } from "tonal";

const AddInfoMajor = () => {
  const { tonic } = useSelectedScale();

  if (!tonic) return;

  const majorScale = Key.majorKey(tonic);

  return (
    <div className="flex flex-col">
      <div>{majorScale.chords}</div>
      <div>{majorScale.grades}</div>
    </div>
  );
};

export default AddInfoMajor;
