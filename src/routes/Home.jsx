import React from "react";
import Settings from "@/components/modules/settings/Settings";
import Piano from "@/components/modules/piano/Piano";
import Library from "@/components/modules/library/Library";
import ChordDetails from "@/components/modules/chord-details/ChordDetails";
import useSelectedChord from "@/stores/useSelectedChord";

export default function Root() {
  const { selectedChord } = useSelectedChord();
  return (
    <main className="bg-dark-800">
      <div className="container flex flex-col items-center justify-center py-12">
        <div className="flex flex-row">
          {/* <Piano /> */}
          <ChordDetails chord={selectedChord}/>
        </div>
      </div>
      <section className="text-white py-20">
        <Library />
      </section>
      <Settings />
    </main>
  );
}
