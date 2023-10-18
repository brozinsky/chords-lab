import Settings from "@/components/modules/settings/Settings";
// import Piano from "@/components/modules/piano/Piano";
import Library from "@/components/modules/library/Library";
import MenuTop from "@/components/modules/navigation/MenuTop";
import ChordDetails from "@/components/modules/chord-details/ChordDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useChordsTab from "@/hooks/chords/useChordsTabs";

export default function ChordsPage() {
  const { changeTab } = useChordsTab();

  return (
    <>
      <MenuTop />
      <main>
        <div className="container flex flex-col items-center justify-center py-12">
          <div className="flex flex-row">
            <ChordDetails />
          </div>
        </div>
        <div className="container">
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-3 max-w-[400px]">
              <TabsTrigger onClick={() => changeTab("all")} value="all">
                All
              </TabsTrigger>
              <TabsTrigger onClick={() => changeTab("roman")} value="roman">
                Roman
              </TabsTrigger>
              {/* <TabsTrigger onClick={() => changeTab("notes")} value="notes">
                Notes
              </TabsTrigger> */}
            </TabsList>
            <TabsContent value="all">
              <Library variant="chords" tab="all" />
            </TabsContent>
            <TabsContent value="roman">
              <Library variant="chords" tab="roman" />
            </TabsContent>
            <TabsContent value="notes">
              <Library variant="chords" tab="notes" />
            </TabsContent>
          </Tabs>
        </div>
        <Settings />
      </main>
    </>
  );
}
