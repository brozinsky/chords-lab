import MenuTop from "@/components/modules/navigation/MenuTop";
import { useMediaQuery } from "@mantine/hooks";
import MobileNotSupported from "@/components/layout/MobileNotSupported";
import { useEffect, useState } from "react";
import ChordProgression from "@/components/modules/progression/ChordProgression";
import ProgressionPanel from "@/components/modules/progression/ProgressionPanel";
import useProgression from "@/hooks/progression/useProgression";
import CustomChord from "@/components/modules/progression/CustomChord";
import SuggestedChords from "@/components/modules/progression/SuggestedChords";

const Progression = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  const {
    setChordType,
    setChordKey,
    suggestedChords,
    editedChordId,
    setEditedChordId,
    chordProgression,
    removeChord,
  } = useProgression();

  const [progression, setProgression] = useState(["I", "IV", "v", "iv"]);
  const [scaleKey, setScaleKey] = useState("C");
  const [scaleType, setScaleType] = useState("major");

  const [chord, setChord] = useState("Imaj");

  // const [chordProgression, setChordProgression] = useState([
  //   { id: 1, romanNumeral: "Imaj", key: "C", type: "maj" },
  //   { id: 2, romanNumeral: "Vsus", key: "G", type: "sus" },
  //   { id: 3, romanNumeral: "IV", key: "F", type: "maj" },
  // ]);

  if (matches) {
    return <MobileNotSupported />;
  }
  return (
    <>
      <MenuTop />
      <main>
        <div className="container flex flex-col items-center justify-center py-12">
          {/* <div className="max-w-[300px] mb-16">
            <Select
              variant={"ghost"}
              contentType={"tonic"}
              options={options}
              state={chord}
              setState={setChord}
            />
          </div> */}
          {/* <div>
            {editedChordIndex &&
              chordProgression[editedChordIndex - 1].romanNumeral}
          </div> */}
          <div className="max-w-[828px] mb-16 w-full">
            <ChordProgression
              chordId={editedChordId}
              setChordId={setEditedChordId}
              progression={chordProgression}
              scaleKey={scaleKey}
              scaleType={scaleType}
              removeChord={removeChord}
            />
            <ProgressionPanel
              scaleKey={scaleKey}
              setScaleKey={setScaleKey}
              setScaleType={setScaleType}
              scaleType={scaleType}
            />
          </div>
          {/* <div>chordKey={chordProgression[editedChordIndex].key}</div> */}

          {editedChordId !== null && (
            <div className="max-w-[828px] w-full bg-neutral-800 rounded-lg border border-neutral-500 px-8 py-6">
              <h2 className="text-2xl mb-3">Add chord</h2>
              {/* <div>
              <div>key: {chordProgression[editedChordIndex].key}</div>
              <div>type: {chordProgression[editedChordIndex].type}</div>
            </div> */}

              {chordProgression && editedChordId && (
                <CustomChord
                  chordKey={
                    editedChordId !== null && chordProgression.length > 0
                      ? chordProgression.find(
                          (chord) => chord.id === editedChordId
                        )?.key
                      : undefined
                  }
                  setChordKey={setChordKey}
                  chordType={
                    editedChordId !== null && chordProgression.length > 0
                      ? chordProgression.find(
                          (chord) => chord.id === editedChordId
                        )?.type
                      : undefined
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
                      chords={suggestedChords}
                      scaleKey={scaleKey}
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
