import React, { useEffect, useState } from "react";
import Checkbox from "@/components/elements/Checkbox";
import useFilterStore from "@/stores/useFilterStore";
import { chords } from "@/utils/chords";
import { scales, notes as pianoNotes } from "@/utils/notesData";
import useCurrentKeys from "@/hooks/useCurrentKeys";

const keybind = [
  { name: "c2", keybind: "a" },
  { name: "cs2", keybind: "w" },
  { name: "d2", keybind: "s" },
  { name: "ds2", keybind: "e" },
  { name: "e2", keybind: "d" },
  { name: "f2", keybind: "f" },
  { name: "fs2", keybind: "t" },
  { name: "g2", keybind: "g" },
  { name: "gs2", keybind: "y" },
  { name: "a2", keybind: "h" },
  { name: "as2", keybind: "u" },
  { name: "b2", keybind: "j" },
];

const Filter = () => {
  const {
    isRoot,
    setIsRoot,
    isSearchedBySuffix,
    setIsSearchedBySuffix,
    isInScale,
    setIsInScale,
    scaleTonic,
    scaleMode,
    setScaleTonic,
    setScaleMode,
    chordSuffix,
    setChordSuffix,
    chordRoot,
    setChordRoot,
    searchValue,
    setSearchValue,
  } = useFilterStore();

  const { setIsKeybindDisabled } = useCurrentKeys(keybind);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
  };

  const handleSearchClear = () => {
    setSearchValue("");
  };

  return (
    <div className="border border-neutral-500 rounded-xl p-4">
      <h3 className="text-2xl mb-2">Filter</h3>
      <div className="space-y-4">
        <div>
          <span className="text-lg">Search</span>
          <input
            value={searchValue}
            onChange={handleSearchInputChange}
            onFocus={() => setIsKeybindDisabled(true)}
            onBlur={() => setIsKeybindDisabled(false)}
            type="text"
            className="text-black"
          />
          <button onClick={handleSearchClear}>clear</button>
        </div>
        <div>
          <div className="text-lg">Chord</div>
          <Checkbox isSelected={isRoot} state={isRoot} onChange={setIsRoot}>
            Root
          </Checkbox>
          <div className=" flex flex-row cursor-pointer">
            {isRoot ? (
              <>
                <select
                  name=""
                  id=""
                  className="px-4 bg-black"
                  value={chordRoot}
                  onChange={(e) => handleInputChange(e, setChordRoot)}
                >
                  {pianoNotes.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </>
            ) : null}
          </div>
          <Checkbox isSelected={isSearchedBySuffix} state={isSearchedBySuffix} onChange={setIsSearchedBySuffix}>
            Type
          </Checkbox>
          <div className=" flex flex-row cursor-pointer">
            {isSearchedBySuffix ? (
              <>
                <select
                  name=""
                  id=""
                  className="px-4 bg-black"
                  value={chordSuffix}
                  onChange={(e) => handleInputChange(e, setChordSuffix)}
                >
                  {chords.map(({ name }) => {
                    return (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </>
            ) : null}
          </div>
        </div>
        <div>
          <div className="text-lg">Scale</div>
          <Checkbox isSelected={isInScale} checked={isInScale} state={isInScale} onChange={setIsInScale}>
            Enable {`${isInScale}`}
          </Checkbox>
          <div className=" flex flex-row cursor-pointer">
            {isInScale ? (
              <>
                <select
                  name=""
                  id=""
                  className="px-4 bg-black"
                  value={scaleTonic}
                  onChange={(e) => handleInputChange(e, setScaleTonic)}
                >
                  {pianoNotes.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                <select
                  name=""
                  id=""
                  className="px-4 bg-black"
                  value={scaleMode}
                  onChange={(e) => handleInputChange(e, setScaleMode)}
                >
                  {scales.map((scale) => {
                    return (
                      <option key={scale.name} value={scale.name}>
                        {scale.name}
                      </option>
                    );
                  })}
                </select>
              </>
            ) : null}
          </div>
        </div>
        {/* <div>
          <div className="text-lg">Notes</div>
          <Checkbox state={isInScale} onChange={setIsInScale}></Checkbox>
          <div className=" flex flex-row cursor-pointer">
            {isInScale ? (
              <>
                <select
                  name=""
                  id=""
                  className="px-4 bg-black"
                  value={scaleTonic}
                  onChange={(e) => handleInputChange(e, setScaleTonic)}
                >
                  {pianoNotes.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                <select
                  name=""
                  id=""
                  className="px-4 bg-black"
                  value={scaleMode}
                  onChange={(e) => handleInputChange(e, setScaleMode)}
                >
                  {scales.map((scale) => {
                    return (
                      <option key={scale.name} value={scale.name}>
                        {scale.name}
                      </option>
                    );
                  })}
                </select>
              </>
            ) : null}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Filter;
