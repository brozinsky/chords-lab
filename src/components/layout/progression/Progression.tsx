import MenuTop from "@/components/modules/navigation/MenuTop";
import { useMediaQuery } from "@mantine/hooks";
import MobileNotSupported from "@/components/layout/MobileNotSupported";
import progressionRelationsJSON from "@/lib/progression-relations.json";
import { useEffect, useState } from "react";
import ChordProgression from "@/components/modules/progression/ChordProgression";
import SuggestedChords from "@/components/modules/progression/SuggestedChords";
import CustomChord from "@/components/modules/progression/CustomChord";
import ProgressionPanel from "@/components/modules/progression/ProgressionPanel";
import useProgression from "@/hooks/progression/useProgression";

const Progression = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const oneMajData = progressionRelationsJSON["Imaj"];
  const [data, setData] = useState(oneMajData);

  const {
    editedChordId,
    setEditedChordId,
    chordProgression,
    setChordProgression,
    findPreviousChordById
  } = useProgression();

  useEffect(() => {
    const result = findPreviousChordById(
      chordProgression,
      2
    );
    console.log("result", result);
  }, []);

  const [progression, setProgression] = useState(["I", "IV", "v", "iv"]);
  const [scaleKey, setScaleKey] = useState("C");
  const [scaleType, setScaleType] = useState("major");

  const [editedChordIndex, setEditedChordIndex] = useState(null);
  // const [editedChordId, setEditedChordId] = useState(null);

  // const [chordProgression, setChordProgression] = useState([
  //   { id: 1, romanNumeral: "Imaj", key: "C", type: "maj" },
  //   { id: 2, romanNumeral: "Vsus", key: "G", type: "sus" },
  //   { id: 3, romanNumeral: "IV", key: "F", type: "maj" },
  // ]);

  const [chord, setChord] = useState("Imaj");
  // const [chordType, setChordType] = useState("major");
  // const [chordKey, setChordKey] = useState("C");

  const setChordType = (newType: string) => {
    setChordProgression((currentProgression) =>
      currentProgression.map((chord, index) =>
        index === editedChordIndex ? { ...chord, type: newType } : chord
      )
    );
  };

  const setChordKey = (newKey: string) => {
    setChordProgression((currentProgression) =>
      currentProgression.map((chord, index) =>
        index === editedChordIndex ? { ...chord, key: newKey } : chord
      )
    );
  };

  const removeChord = (index: number) => {
    setChordProgression((currentProgression) =>
      currentProgression.filter((_, idx) => idx !== index)
    );
  };

  useEffect(() => {
    console.log(chordProgression);
  }, [chordProgression]);

  useEffect(() => {
    if (
      editedChordIndex &&
      chordProgression.length > 0 &&
      editedChordIndex > 0
    ) {
      const prevRomanChord =
        chordProgression[editedChordIndex - 1].romanNumeral;
      // @ts-ignore
      setData(progressionRelationsJSON[prevRomanChord]);
    } else if (editedChordIndex === 0) {
      // @ts-ignore
      setData(null);
    } else {
      // @ts-ignore
      setData(null);
    }
  }, [chordProgression, editedChordIndex]);

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
          <div>editedChordIndex: {editedChordIndex}</div>
          <div>
            {editedChordIndex &&
              chordProgression[editedChordIndex - 1].romanNumeral}
          </div>
          <div className="max-w-[828px] mb-16 w-full">
            <ChordProgression
              chordIndex={editedChordIndex}
              setChordIndex={setEditedChordIndex}
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
          <div>{editedChordIndex}</div>
          {/* <div>chordKey={chordProgression[editedChordIndex].key}</div> */}

          {editedChordIndex !== null && (
            <div className="max-w-[828px] bg-neutral-800 rounded-lg border border-neutral-500 px-8 py-6">
              <h2 className="text-2xl mb-3">Add chord</h2>
              {/* <div>
              <div>key: {chordProgression[editedChordIndex].key}</div>
              <div>type: {chordProgression[editedChordIndex].type}</div>
            </div> */}

              {chordProgression &&
                editedChordIndex <= chordProgression.length && (
                  <div>
                    <CustomChord
                      chordKey={
                        editedChordIndex !== null && chordProgression.length > 0
                          ? chordProgression[editedChordIndex].key
                          : undefined
                      }
                      setChordKey={setChordKey}
                      chordType={
                        editedChordIndex !== null && chordProgression.length > 0
                          ? chordProgression[editedChordIndex].type
                          : undefined
                      }
                      setChordType={setChordType}
                    />
                  </div>
                )}
              <div className="w-full h-[1px] bg-neutral-400 my-6"></div>
              {data &&
                chordProgression.length > 0 &&
                editedChordIndex <= chordProgression.length && (
                  <SuggestedChords chords={data} scaleKey={scaleKey} />
                )}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Progression;
