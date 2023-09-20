import Settings from "@/components/modules/settings/Settings";
import LibraryScale from "@/components/modules/library/LibraryScale";
import ScaleDetails from "@/components/modules/scale-details/ScaleDetails";
import MenuTop from "@/components/modules/navigation/MenuTop";

export default function ScalesPage() {
  return (
    <>
    <MenuTop />
    <main className="bg-neutral-900">
      <div className="container flex flex-col items-center justify-center py-12">
        <div className="flex flex-row">
          <ScaleDetails />
        </div>
      </div>
      <section className="py-20">
        <LibraryScale />
      </section>
      <Settings />
    </main>
  </>
  );
}
