import useSelectedScale from "@/stores/useSelectedScale";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import useScalesCombinations from "@/hooks/useScalesCombinations";
import { ScaleType, Note, Scale } from "tonal";
import { useEffect } from "react";
import { processIntervals } from "@/utils/processIntervals";

const ListingScale = () => {
  const itemsPerPage = 24;
  const { tonic, setTonic, type, setType, setSelectedScale } = useSelectedScale();

  const [animationParent] = useAutoAnimate({ duration: 50 });

  const allScales = useScalesCombinations();

  const handleScaleSelect = (scale) => {
    setTonic(scale.tonic);
    setType(scale.name);
  };

  useEffect(() => {
    // console.log('tonic', tonic);
    // console.log('type', type);
    if (tonic !== "" && type !== "") {
      // console.log("scale", Scale.get(`${tonic} ${type}`));
      setSelectedScale(Scale.get(`${tonic}2 ${type}`));
    }
  }, [tonic, type]);

  return (
    <>
      <div className="flex flex-row gap-2 mb-4">
        {Note.names().map((note, index) => (
          <div
            key={note + index}
            onClick={() => setTonic(note)}
            className="chord-list-item"
          >
            <div className="flex flex-col">
              <div className="chord-list-item__suffix">{note}</div>
            </div>
          </div>
        ))}
      </div>
      <div ref={animationParent} className="chord-list">
        {ScaleType.all().map((scale, index) => (
          <div
            key={scale.name + index}
            onClick={() => setType(scale.name)}
            className="chord-list-item"
          >
            <div className="flex flex-col">
              <div className="chord-list-item__suffix">{scale.name}</div>
              <div className="chord-list-item__suffix">
                {processIntervals(scale.intervals)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListingScale;
