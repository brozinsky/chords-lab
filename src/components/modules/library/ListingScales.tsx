import useSelectedScale from "@/stores/useSelectedScale";
import { notes } from "@/utils/notesData";
import LibraryNoteButton from "@/components/ui/LibraryNoteButton";
import shortid from "shortid";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
// @ts-ignore
import { Grid, Navigation } from "swiper/modules";
import FilterButton from "@/components/ui/FilterButton";
import { useState } from "react";
import { scaleTypesCategory, scaleTypes } from "@/utils/data/scaleTypes";

const ListingScales = () => {
  const { tonic, setTonic, type, setType } = useSelectedScale();
  const [category, setCategory] = useState(scaleTypesCategory[0]);

  // useEffect(() => {
  //   console.log(ScaleType.all().filter(item => !types.exotic.includes(item.name) && !types.blues.includes(item.name) && !types.pentatonic.includes(item.name) && !types.minor.includes(item.name)))
  // }, []);

  return (
    <>
      <div className="flex flex-row gap-2">
        {notes.map((note) => (
          <LibraryNoteButton
            key={shortid.generate()}
            note={note}
            activeNote={tonic}
            onClick={() => setTonic(note)}
          />
        ))}
      </div>
      <div className="flex flex-row gap-2">
        {scaleTypesCategory.map((item) => (
          <FilterButton
            key={shortid.generate()}
            item={item}
            active={item === category}
            onClick={() => setCategory(item)}
            variant="type"
          />
        ))}
      </div>
      <div className="flex flex-row gap-2 flex-wrap">
        {scaleTypes[category].length > 0 &&
          scaleTypes[category].map((item) => (
            <FilterButton
              key={shortid.generate()}
              item={item}
              active={item === type}
              onClick={() => setType(item)}
              variant="type"
            />
          ))}
      </div>

      {/* <Swiper
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
      </Swiper> */}
    </>
  );
};

export default ListingScales;
