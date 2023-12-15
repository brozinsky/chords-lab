import MenuTop from "@/components/modules/navigation/MenuTop";
import ChordDetails from "@/components/modules/chord-details/ChordDetails";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";
import { useMenuDrawer } from "@/stores/settings/useDrawerStore";
import TabsChords from "@/components/ui/TabsChords";
import { useMediaQuery } from "@mantine/hooks";
import MobileNotSupported from "@/components/layout/MobileNotSupported";

const tabs = [
  {
    label: "All chords library",
    value: "all",
  },
  {
    label: "Roman numerals",
    value: "roman",
  },
  {
    label: "Chords by notes",
    value: "notes",
  },
];

export default function ChordsPage() {
  const { isDrawerExpanded } = useMenuDrawer();
  const matches = useMediaQuery("(max-width: 768px)");

  if (matches) {
    return <MobileNotSupported />;
  }

  return (
    <>
      {matches && <div>tester</div>}
      <MenuTop />
      <main>
        <div
          className={clsx(
            "container flex flex-col items-center justify-center py-12",
            isDrawerExpanded && "pb-[300px] mb-[8rem]"
          )}
        >
          <div className="flex flex-row">
            <ChordDetails />
          </div>
        </div>
        <TabsChords tabs={tabs} />
        {/* <Tabs
          id="Tabs"
          defaultValue="all"
          className={clsx(
            "tabs fixed w-full bottom-0",
            isDrawerExpanded && "tabs--open"
          )}
        >
          <div className="container">
            <TabsList
              id="TabsList"
              className="backdrop-blur-lg justify flex-start h-fit"
            >
              {tabs.map(({ value, label, icon }) => {
                return (
                  <TabsTrigger
                    onClick={() => {
                      changeTab(value);
                      setIsDrawerExpanded(true);
                    }}
                    value={value}
                    className={clsx(
                      "px-4 py-2 font-medium flex items-center gap-1 transition",
                      !isDrawerExpanded && "!text-none"
                    )}
                  >
                    {value === "all" && (
                      <LibrarySquareAllIconSVG className="mr-1" width={"28"} />
                    )}
                    {value === "roman" && (
                      <LibrarySquareRomanIconSVG
                        className="mr-1"
                        width={"28"}
                      />
                    )}
                    {value === "notes" && (
                      <LibrarySquareNoteIconSVG className="mr-1" width={"28"} />
                    )}
                    {label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          <div className="relative bg-neutral-700 py-4">
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
        </Tabs> */}
      </main>
    </>
  );
}
