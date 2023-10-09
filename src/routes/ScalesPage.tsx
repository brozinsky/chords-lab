import Settings from "@/components/modules/settings/Settings";
import ScaleDetails from "@/components/modules/scale-details/ScaleDetails";
import MenuTop from "@/components/modules/navigation/MenuTop";
import Library from "@/components/modules/library/Library";

export default function ScalesPage() {
  return (
    <>
    <MenuTop />
    <main>
      <div className="container flex flex-col items-center justify-center py-12">
        <div className="flex flex-row">
          <ScaleDetails />
        </div>
      </div>
      <section className="py-20">
        <Library variant="scales" />
      </section>
      <Settings />
    </main>
  </>
  );
}
