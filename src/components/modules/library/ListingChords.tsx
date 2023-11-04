import { useEffect, useRef } from "react";
import useSelectedChord from "@/stores/chords/useSelectedChord";
import PianoTile from "@/components/ui/PianoTile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
// @ts-ignore
import { Grid, Navigation } from "swiper/modules";
import usePlayPiano from "@/hooks/usePlayPiano";
import useRomanNumerals from "@/hooks/chords/useRomanNumerals";
import useChordsTab from "@/hooks/chords/useChordsTabs";
import Filter from "./components/Filter";
import { Chord } from "tonal";
import useFilterStore from "@/stores/chords/useFilterStore";
import { chords } from "@/utils/chords";
import useChordsListStore from "@/stores/chords/useChordsListStore";
import SearchIconSVG from "@/components/elements/svg/icons/SearchIconSVG";
import LibrarySquareNoteIconSVG from "@/components/elements/svg/icons/LibrarySquareNoteIconSVG";
import LibrarySquareAllIconSVG from "@/components/elements/svg/icons/LibrarySquareAllIconSVG";
import LibrarySquareRomanIconSVG from "@/components/elements/svg/icons/LibrarySquareRomanIconSVG";

const ListingChords = () => {
  const { playPianoNotes } = usePlayPiano();
  const { getRomanChords } = useRomanNumerals();

  const { activeTab, chordsList, setChordsList } = useChordsTab();
  const { allChordsList } = useChordsListStore();
  const { notesChordsNotes, allChordsRoot, romanScaleTonic, romanScaleType } =
    useFilterStore();

  useEffect(() => {
    setChordsList(getRomanChords(romanScaleTonic, romanScaleType));
  }, [romanScaleTonic, romanScaleType]);

  useEffect(() => {
    const filteredChords = allChordsList.filter((chord: any) => {
      return notesChordsNotes.every((note) => {
        const included = chord.notesArr.includes(note);
        return included;
      });
    });
    setChordsList(filteredChords);
  }, [notesChordsNotes]);

  useEffect(() => {
    const chordsWithRoot = chords.map((chord) => ({
      ...chord,
      root: allChordsRoot,
    }));
    setChordsList(chordsWithRoot);
  }, [allChordsRoot]);

  const { selectedChord, setSelectedChord } = useSelectedChord();

  const handlePlayClick = (event: Event, root: string, quality: string) => {
    const chordData = Chord.get([root + "2", quality]);
    event.stopPropagation();
    playPianoNotes(chordData?.notes as string[]);
  };

  const handleTileClick = (root: string, quality: string) => {
    const chordData = Chord.get([root + "2", quality]);
    setSelectedChord(chordData);
  };

  return (
    <>
      {/* TODO - use similar view on mobile */}
      {/* <div className="grid grid-cols-12 grid-rows-2">
        {notes.map((item, index) => {
          return <div className={`flex items-center justify-center cursor-pointer p-2 bg-neutral-600 border border-neutral-500 h-[40px] w-[40px] rounded-xl mx-auto ${colStartClasses[index + 1]} ${item.includes("#") ? "row-start-1" : "row-start-2"}`} key={item}>{item}</div>;
        })}
      </div> */}
      <h2 className="text-3xl font-medium flex items-center gap-3">
        {activeTab === "all" && (
          <>
            <LibrarySquareAllIconSVG width={"28"} />
            Chord library
          </>
        )}
        {activeTab === "roman" && (
          <>
            <LibrarySquareRomanIconSVG width={"28"} />
            Roman numerals
          </>
        )}
        {activeTab === "notes" && (
          <>
            <LibrarySquareNoteIconSVG width={"28"} />
            Chords by notes
          </>
        )}
      </h2>
      <Filter />
      {chordsList.length > 0 && (
        <Swiper
          slidesPerView={6}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Grid, Navigation]}
          className="swiper-chord"
        >
          {chordsList
            // .filter((item) => item.intervals.length <= 4)
            // .map((get) => get)
            .map((chord, index) => {
              const notes = Chord.get([
                chord.root + "1",
                chord.abbreviations[0],
              ]).notes;
              if (notes.length < 1) return;
              return (
                <SwiperSlide key={chord.name}>
                  <PianoTile
                    variant="chord"
                    note={chord.root}
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
      {chordsList.length <= 0 && (
        <div className="h-[352px] p-8 mx-auto flex flex-col items-center">
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
