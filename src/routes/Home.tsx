// import Piano from "@/components/modules/piano/Piano";
import Library from "@/components/modules/library/Library";
import ChordDetails from "@/components/modules/chord-details/ChordDetails";
import MenuTop from "@/components/modules/navigation/MenuTop";

export default function Root() {
  return (
    <>
      <MenuTop />
      <main>
        <div className="container flex flex-col items-center justify-center py-12">
          <div className="flex flex-row">
            {/* <Piano /> */}
            <ChordDetails />
          </div>
        </div>
        <section className="py-20">
          <Library />
        </section>
      </main>
    </>
  );
}
