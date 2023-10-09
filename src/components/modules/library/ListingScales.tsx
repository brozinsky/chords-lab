import useSelectedScale from "@/stores/useSelectedScale";
import { ScaleType, Scale } from "tonal";
import { useEffect } from "react";
import { notes } from "@/utils/notesData";
import LibraryNoteButton from "@/components/ui/LibraryNoteButton";
import shortid from "shortid";
import PianoTile from "@/components/ui/PianoTile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
// @ts-ignore
import { Grid, Navigation } from "swiper/modules";

const ListingScales = () => {
  const { tonic, setTonic, type, setType, setSelectedScale } =
    useSelectedScale();

  useEffect(() => {
    if (tonic !== "" && type !== "") {
      setSelectedScale(Scale.get(`${tonic}2 ${type}`));
    }
  }, [tonic, type]);

  return (
    <>
      <div className="flex flex-row gap-2 mb-4">
        {notes.map((note) => (
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
        {ScaleType.all().map((scale) => (
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

export default ListingScales;
