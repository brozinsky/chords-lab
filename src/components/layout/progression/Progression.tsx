import MenuTop from "@/components/modules/navigation/MenuTop";
import { useMediaQuery } from "@mantine/hooks";
import MobileNotSupported from "@/components/layout/MobileNotSupported";
import ChordProgression from "@/components/modules/progression/ChordProgression";
import ProgressionPanel from "@/components/modules/progression/ProgressionPanel";
import useProgression from "@/hooks/progression/useProgression";
import CustomChord from "@/components/modules/progression/CustomChord";
import SuggestedChords from "@/components/modules/progression/SuggestedChords";

const Progression = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  const {
    chordProgression,
    editedChordId,
    initNewChord,
    removeChord,
    scaleKey,
    scaleType,
    setChordKey,
    setChordRomanNumeral,
    setChordType,
    setEditedChordId,
    setProgressionByRomanNumerals,
    setScaleKey,
    setScaleType,
    suggestedChords,
  } = useProgression();

  if (matches) {
    return <MobileNotSupported />;
  }
  return (
    <>
      <MenuTop />
      <main>
        <div className="container flex flex-col items-center justify-center py-12">
          <div className="max-w-[828px] mb-16 w-full">
            <ChordProgression
              initNewChord={initNewChord}
              editedChordId={editedChordId}
              setEditedChordId={setEditedChordId}
              progression={chordProgression}
              scaleKey={scaleKey}
              scaleType={scaleType}
              removeChord={removeChord}
            />
            <ProgressionPanel
              chordProgression={chordProgression}
              scaleKey={scaleKey}
              setScaleKey={setScaleKey}
              setScaleType={setScaleType}
              setEditedChordId={setEditedChordId}
              scaleType={scaleType}
              setProgressionByRomanNumerals={setProgressionByRomanNumerals}
            />
          </div>

          {editedChordId !== null && (
            <div className="max-w-[828px] w-full bg-neutral-800 rounded-lg border border-neutral-500 px-8 py-6">
              <h2 className="text-2xl mb-3 flex items-center gap-2">
                Add chord
              </h2>

              {chordProgression && (
                <CustomChord
                  chordKey={
                    editedChordId !== null && chordProgression.length > 0
                      ? chordProgression.find(
                          (chord: any) => chord.id === editedChordId
                        )?.key
                      : ""
                  }
                  setChordKey={setChordKey}
                  chordType={
                    editedChordId !== null && chordProgression.length > 0
                      ? chordProgression.find(
                          (chord: any) => chord.id === editedChordId
                        )?.type
                      : ""
                  }
                  setChordType={setChordType}
                />
              )}
              {suggestedChords &&
                chordProgression.length > 0 &&
                editedChordId && (
                  <>
                    <div className="w-full h-[1px] bg-neutral-400 my-6"></div>
                    <SuggestedChords
                      editedChordId={editedChordId}
                      progression={chordProgression}
                      chords={suggestedChords}
                      scaleKey={scaleKey}
                      setChordKey={setChordKey}
                      setChordType={setChordType}
                      setChordRomanNumeral={setChordRomanNumeral}
                    />
                  </>
                )}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Progression;
