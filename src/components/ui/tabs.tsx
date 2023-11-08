// @ts-ignore
import { Tabs as TabsShadcn, TabsContent, TabsList, TabsTrigger } from "@/components/ui/TabsShadcn";
import LibrarySquareAllIconSVG from "../elements/svg/icons/LibrarySquareAllIconSVG";
import LibrarySquareRomanIconSVG from "../elements/svg/icons/LibrarySquareRomanIconSVG";
import LibrarySquareNoteIconSVG from "../elements/svg/icons/LibrarySquareNoteIconSVG";
import Library from "../modules/library/Library";
import clsx from "clsx";
import useChordsTab from "@/hooks/chords/useChordsTabs";
import { useMenuDrawer } from "@/stores/settings/useDrawerStore";

type Tab = {
  label: string;
  value: string;
};

type Props = {
  tabs: Tab[];
};

export default function Tabs({ tabs }: Props) {
  const { changeTab } = useChordsTab();

  const { isDrawerExpanded, setIsDrawerExpanded } = useMenuDrawer();

  return (
    <TabsShadcn
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
          {tabs.map(({ value, label }) => {
            return (
              <TabsTrigger
                onClick={() => {
                  changeTab(value as "all" | "roman" | "notes");
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
                  <LibrarySquareRomanIconSVG className="mr-1" width={"28"} />
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
    </TabsShadcn>
  );
}
