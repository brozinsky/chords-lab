import useSelectedScale from "@/stores/useSelectedScale";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import useScalesCombinations from "@/hooks/useScalesCombinations";
import { ScaleType, Note, Scale } from "tonal";
import { useEffect, useMemo } from "react";
import { processIntervals } from "@/utils/processIntervals";
import clsx from "clsx";
import { notes } from "@/utils/notesData";
import LibraryNoteButton from "@/components/ui/LibraryNoteButton";
import shortid from "shortid";
import PianoScaleSVG from "@/components/elements/svg/PianoScaleSVG";
import PianoTile from "@/components/ui/PianoTile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";

const ListingScale = () => {
  const itemsPerPage = 24;
  const { tonic, setTonic, type, selectedScale, setType, setSelectedScale } =
    useSelectedScale();

  const [animationParent] = useAutoAnimate({ duration: 50 });

  // const allScales = useScalesCombinations();

  const handleScaleSelect = (scale) => {
    setTonic(scale.tonic);
    setType(scale.name);
  };

  useEffect(() => {
    if (tonic !== "" && type !== "") {
      setSelectedScale(Scale.get(`${tonic}2 ${type}`));
    }
  }, [tonic, type]);

  const allScales = useMemo(() => ScaleType.all(), []);

  return (
    <>
      <div className="flex flex-row gap-2 mb-4">
        {notes.map((note, index) => (
          <LibraryNoteButton
            key={shortid.generate()}
            note={note}
            activeNote={tonic}
            onClick={() => setTonic(note)}
          />
        ))}
      </div>
      <Swiper
        slidesPerView={6}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        navigation={true}
        modules={[Grid, Navigation]}
        className="swiper-scale"
      >
        {ScaleType.all().map((scale, index) => (
          <SwiperSlide>
            <PianoTile
              key={scale.name}
              note={tonic}
              intervals={scale.intervals}
              name={scale.name}
              type={type}
              setType={setType}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListingScale;
