import Settings from "@/components/modules/settings/Settings";
// import Piano from "@/components/modules/piano/Piano";
import Library from "@/components/modules/library/Library";
import ChordDetails from "@/components/modules/chord-details/ChordDetails";


export default function Root() {
  return (
    <main className="bg-neutral-900">
      <div className="container flex flex-col items-center justify-center py-12">
        <div className="flex flex-row">
          {/* <Piano /> */}
          <ChordDetails />
        </div>
      </div>
      <section className="py-20">
        <Library />
      </section>
      <Settings />
    </main>
  );
}
