import { useEffect, useRef } from "react";
import { chords } from "@/utils/chords";
import { notes } from "@/utils/notesData";
import useSelectedChord from "@/stores/useSelectedChord";
import LibraryNoteButton from "@/components/ui/LibraryNoteButton";
import shortid from "shortid";
import PianoTile from "@/components/ui/PianoTile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
// @ts-ignore
import { Grid, Navigation } from "swiper/modules";
import usePlayPiano from "@/hooks/usePlayPiano";

const Listing = () => {
  const { playPianoNotes } = usePlayPiano();

  const {
    root,
    setRoot,
    quality,
    setQuality,
    selectedChord,
  } = useSelectedChord();

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    playPianoNotes(selectedChord?.notes as string[]);
  }, [selectedChord]);

  return (
    <>
      {/* TODO - use similar view on mobile */}
      {/* <div className="grid grid-cols-12 grid-rows-2">
        {notes.map((item, index) => {
          return <div className={`flex items-center justify-center cursor-pointer p-2 bg-neutral-600 border border-neutral-500 h-[40px] w-[40px] rounded-xl mx-auto ${colStartClasses[index + 1]} ${item.includes("#") ? "row-start-1" : "row-start-2"}`} key={item}>{item}</div>;
        })}
      </div> */}
      <div className="flex flex-row gap-2 mb-4">
        {notes.map((note, index) => (
          <LibraryNoteButton
            key={shortid.generate()}
            note={note}
            activeNote={root}
            onClick={() => setRoot(note)}
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
        className="swiper-chord"
      >
        {chords
          // .filter((item) => item.intervals.length <= 4)
          // .map((get) => get)
          .map((chord, index) => (
            <SwiperSlide>
              <PianoTile
                key={chord.name}
                variant="chord"
                note={root}
                name={chord.abbreviations[0]}
                type={quality}
                setType={setQuality}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Listing;
