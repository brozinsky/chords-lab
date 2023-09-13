import useSelectedScale from "@/stores/useSelectedScale";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import useScalesCombinations from "@/hooks/useScalesCombinations";

const ListingScale = () => {
  const itemsPerPage = 24;
  const { selectedScale, setSelectedScale } = useSelectedScale();

  const [animationParent] = useAutoAnimate({ duration: 50 });

  const allScales = useScalesCombinations();

  const handleScaleSelect = (scale) => {
    console.log('toto?', scale.name && scale.note && scale.intervals && scale.intervalNotes);
    console.log('scale?', scale);
    setSelectedScale(scale);
  }

  return (
    <>
      <div ref={animationParent} className="chord-list">
        {allScales.map((scale, index) => (
          <div key={scale.note + scale.name} onClick={() => handleScaleSelect(scale)} className="chord-list-item">
            <div className="flex flex-col">
              <div className="chord-list-item__suffix">{scale.note + scale.name}</div>
              <div className="chord-list-item__suffix">{scale.intervals}</div>
              <div className="chord-list-item__suffix">{scale.intervalNotes}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListingScale;
