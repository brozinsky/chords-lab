import Settings from "@/components/modules/settings/Settings";
// import Piano from "@/components/modules/piano/Piano";
import Library from "@/components/modules/library/Library";
import MenuTop from "@/components/modules/navigation/MenuTop";
import ChordInfo from "@/components/modules/chord-details/_partials/ChordInfo";
import PianoChord from "@/components/modules/chord-details/_partials/PianoChord";

export default function ChordsPage() {
  return (
    <>
      <MenuTop />
      <main className="bg-neutral-900">
        <div className="container flex flex-col items-center justify-center py-12">
          <div className="flex flex-row">
            <PianoChord />
            <ChordInfo />
          </div>
        </div>
        <section className="py-20">
          <Library />
        </section>
        <Settings />
      </main>
    </>
  );
}
