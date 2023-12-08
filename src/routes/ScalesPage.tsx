import ScaleDetails from "@/components/modules/scale-details/ScaleDetails";
import MenuTop from "@/components/modules/navigation/MenuTop";
import TabsScales from "@/components/ui/TabsScales";
import { useMediaQuery } from "@mantine/hooks";
import MobileNotSupported from "@/components/layout/MobileNotSupported";

export default function ScalesPage() {
  const matches = useMediaQuery("(max-width: 768px)");

  if (matches) {
    return <MobileNotSupported />;
  }

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
          <TabsScales />
        </section>
      </main>
    </>
  );
}
