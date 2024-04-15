import { useEffect, useRef, useState } from "react";
import useSelectedChord from "@/stores/chords/useSelectedChord";
import PianoTile from "@/components/elements/piano/PianoTile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
// @ts-ignore
import { Grid, Navigation } from "swiper/modules";
import usePlayPiano from "@/hooks/usePlayPiano";
import useChordsTab from "@/hooks/chords/useChordsTabs";
import Filter from "./components/Filter";
import { Chord } from "tonal";
import SearchIconSVG from "@/components/elements/svg/icons/SearchIconSVG";
import { useMenuDrawer } from "@/stores/settings/useDrawerStore";
import ButtonToggled from "@/components/ui/buttons/ButtonToggled";
import shortid from "shortid";
import useAllChordsRootStore from "@/stores/query/useAllChordsRootStore";
import useRomanChordsQuery from "@/stores/query/useRomanChordsQuery";
import useChordsByNotesStore from "@/stores/query/useChordsByNotesStore";
import { scales } from "@/utils/notesData";
import PianoTileSkeleton from "@/components/elements/piano/PianoTileSkeleton";

const ListingChords = () => {
  const { playPianoNotes } = usePlayPiano();
  const { isDrawerExpanded, toggleIsDrawerExpanded } = useMenuDrawer();

  const { selectedChord, setRoot, setQuality } = useSelectedChord();
  const { allChordsRootData, isLoadingAllChordsRoot } = useAllChordsRootStore();
  const romanChords = useRomanChordsQuery();
  const { chordsByNotesData, isLoadingChordsByNotes } = useChordsByNotesStore();

  const { activeTab } = useChordsTab();

  const chordsList =
    activeTab === "all"
      ? allChordsRootData
      : activeTab === "roman"
      ? romanChords.data
      : activeTab === "notes"
      ? chordsByNotesData
      : [];

  const isLoadingChordsList =
    activeTab === "all"
      ? isLoadingAllChordsRoot
      : activeTab === "roman"
      ? romanChords.isLoading
      : activeTab === "notes"
      ? isLoadingChordsByNotes
      : [];

  const handlePlayClick = (event: Event, root: string, quality: string) => {
    const chordData = Chord.get([root + "2", quality]);
    event.stopPropagation();
    playPianoNotes(chordData?.notes as string[]);
  };

  const handleTileClick = (root: string, quality: string) => {
    setRoot(root);
    setQuality(quality);
  };

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
      {/* TODO - use similar view on mobile */}
      {/* <div className="grid grid-cols-12 grid-rows-2">
        {notes.map((item, index) => {
          return <div className={`flex items-center justify-center cursor-pointer p-2 bg-neutral-600 border border-neutral-500 h-[40px] w-[40px] rounded-xl mx-auto ${colStartClasses[index + 1]} ${item.includes("#") ? "row-start-1" : "row-start-2"}`} key={item}>{item}</div>;
        })}
      </div> */}
      <Filter />
      {isLoadingChordsList && (
        <Swiper
          slidesPerView={6}
          breakpoints={{
            319: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 3,
            },
            1023: {
              slidesPerView: 5,
            },
            1535: {
              slidesPerView: 6,
            },
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Grid, Navigation]}
          className="swiper-chord"
        >
          {Array.from({ length: 12 }, () => 1).map(() => {
            return (
              <SwiperSlide key={shortid.generate()}>
                <PianoTileSkeleton />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {chordsList && !isLoadingChordsList && chordsList.length > 0 && (
        <Swiper
          slidesPerView={1}
          // grid={{
          //   rows: 2,
          //   fill: "row",
          // }}
          breakpoints={{
            319: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 4,
            },
            1023: {
              slidesPerView: 5,
            },
            1535: {
              slidesPerView: 6,
            },
            // 1659: {
            //   slidesPerView: 5,
            // },
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Grid, Navigation]}
          className="swiper-chord"
        >
          {chordsList &&
            !isLoadingChordsList &&
            chordsList
              // .filter((item) => item.intervals.length <= 4)
              // .map((get) => get)
              .map((chord, index) => {
                const notes = Chord.get([
                  chord.root + "1",
                  chord.abbreviations[0],
                ]).notes;
                if (notes.length < 1) return;
                return (
                  <SwiperSlide key={chord.root + "-" + chord.abbreviations[0]}>
                    <PianoTile
                      variant="chord"
                      note={chord.root}
                      romanNumeral={chord.romanNumeral || null}
                      name={chord.abbreviations[0]}
                      selected={selectedChord}
                      onClick={handleTileClick}
                      onPlayClick={handlePlayClick}
                    />
                  </SwiperSlide>
                );
              })}
        </Swiper>
      )}
      {chordsList && chordsList.length <= 0 && (
        <div className="p-8 pb-10 mx-auto flex flex-col items-center">
          <SearchIconSVG className={"mb-3"} width={"50"} />
          <div className="font-bold text-foreground">
            No chords found matching the current filter
          </div>
          <div className="text-muted">
            You may want to try using different notes combination
          </div>
        </div>
      )}
    </>
  );
};

export default ListingChords;
