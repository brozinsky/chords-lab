import Settings from "@/components/modules/settings/Settings";
// import Piano from "@/components/modules/piano/Piano";
import Library from "@/components/modules/library/Library";
import MenuTop from "@/components/modules/navigation/MenuTop";
import ChordDetails from "@/components/modules/chord-details/ChordDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useChordsTab from "@/hooks/chords/useChordsTabs";
import LibraryRomanIconSVG from "@/components/elements/svg/icons/LibraryRomanIconSVG";
import LibraryIconSVG from "@/components/elements/svg/icons/LibraryIconSVG";
import LibraryNoteIconSVG from "@/components/elements/svg/icons/LibraryNoteIconSVG";

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
        <Tabs id="Tabs" defaultValue="all">
          <div className="container">
            <TabsList id="TabsList" className="grid w-full grid-cols-3 max-w-[400px]">
              <TabsTrigger onClick={() => changeTab("all")} value="all">
                <LibraryIconSVG className="mr-2" width={"16"} />
                All
              </TabsTrigger>
              <TabsTrigger onClick={() => changeTab("roman")} value="roman">
                <LibraryRomanIconSVG className="mr-1" width={"16"} />
                Roman
              </TabsTrigger>
              <TabsTrigger onClick={() => changeTab("notes")} value="notes">
                <LibraryNoteIconSVG className="mr-2" width={"16"} />
                Notes
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="bg-neutral-700 py-6">
            <div className="container">
              <TabsContent value="all">
                <Library variant="chords" />
              </TabsContent>
              <TabsContent value="roman">
                <Library variant="chords" />
              </TabsContent>
              <TabsContent value="notes">
                <Library variant="chords" />
              </TabsContent>
            </div>
          </div>
        </Tabs>
        <Settings />
      </main>
    </>
  );
}
