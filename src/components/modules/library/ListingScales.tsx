import useSelectedScale from "@/stores/useSelectedScale";
import { notes } from "@/utils/notesData";
import shortid from "shortid";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
// @ts-ignore
import { Grid, Navigation } from "swiper/modules";
import FilterButton from "@/components/ui/buttons/FilterButton";
import { useState } from "react";
import { scaleTypesCategory, scaleTypes } from "@/utils/data/scaleTypes";
import { useMenuDrawer } from "@/stores/settings/useDrawerStore";
import ButtonToggled from "@/components/ui/buttons/ButtonToggled";
import LibraryNoteButton from "@/components/ui/buttons/LibraryNoteButton";

const ListingScales = () => {
  const { tonic, setTonic, type, setType } = useSelectedScale();
  const [category, setCategory] = useState(scaleTypesCategory[0]);
  const { isDrawerExpanded, toggleIsDrawerExpanded } = useMenuDrawer();

  return (
    <>
      <div className="flex flex-row gap-0 absolute left-1/2 -top-14">
        <ButtonToggled
          className=""
          toggleState={isDrawerExpanded}
          variant="neutral-dark"
          shape="hemicircle"
          icon="arrow-sm-top"
          size="wide"
          classNameIcon="rotate-90 transition"
          classNameIconToggled="-rotate-90 transition"
          onToggle={toggleIsDrawerExpanded}
        ></ButtonToggled>
      </div>
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
