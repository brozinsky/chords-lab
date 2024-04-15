// @ts-ignore
import {
  Tabs as TabsShadcn,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/TabsShadcn";
import LibrarySquareAllIconSVG from "../../elements/svg/icons/LibrarySquareAllIconSVG";
import LibrarySquareRomanIconSVG from "../../elements/svg/icons/LibrarySquareRomanIconSVG";
import LibrarySquareNoteIconSVG from "../../elements/svg/icons/LibrarySquareNoteIconSVG";
import Library from "../../modules/library/Library";
import clsx from "clsx";
import useChordsTab from "@/hooks/chords/useChordsTabs";
import { useMenuDrawer } from "@/stores/settings/useDrawerStore";
// import ButtonToggled from "./buttons/ButtonToggled";
// import useAllChordsRootStore from "@/stores/query/useAllChordsRootStore";
// import useRomanChordsStore from "@/stores/query/useRomanChordsStore";
// import useChordsByNotesStore from "@/stores/query/useChordsByNotesStore";

type TTab = {
  label: string;
  value: string;
};

type TProps = {
  tabs: TTab[];
};

export default function TabsChords({ tabs }: TProps) {
  const { changeTab } = useChordsTab();
  const { isDrawerExpanded, setIsDrawerExpanded, toggleIsDrawerExpanded } =
    useMenuDrawer();

  //   const { allChordsRootData, isLoadingAllChordsRoot, isRefetchingAllChordsRoot } =
  //   useAllChordsRootStore();
  // const { romanChordsData, isLoadingRomanChords, isRefetchingRomanChords } =
  //   useRomanChordsStore();
  // const {
  //   chordsByNotesData,
  //   isLoadingChordsByNotes,
  //   isRefetchingChordsByNotes,
  // } = useChordsByNotesStore();

  return (
    <TabsShadcn
      id="Tabs"
      defaultValue="all"
      className={clsx(
        "tabs fixed w-full bottom-0 z-20",
        isDrawerExpanded && "tabs--open"
      )}
    >
      <div className="relative container -mb-[1px] z-10 pointer-events-none">
        {/* <div className="flex flex-row gap-0 absolute left-1/2 top-3">
          <ButtonToggled
            className=""
            toggleState={isDrawerExpanded}
            variant="neutral-dark"
            shape="hemicircle"
            icon="arrow-sm-top"
            size="wide"
            classNameIcon="rotate-90 transition"
            classNameIconToggled="-rotate-90 transition"
            onToggle={toggleIsDrawerExpanded}
          ></ButtonToggled>
        </div> */}
        <TabsList
          id="TabsList"
          className="backdrop-blur-lg justify flex-start h-fit pointer-events-auto"
        >
          {tabs.map(({ value, label }) => {
            return (
              <TabsTrigger
                key={value + label}
                onClick={() => {
                  changeTab(value as "all" | "roman" | "notes");
                  setIsDrawerExpanded(true);
                }}
                value={value}
                className={clsx(
                  "border border-neutral-500 border-b-transparent px-4 py-2 font-medium flex items-center gap-[1px] transition",
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

      <div className="relative bg-neutral-700 py-4 border-t border-neutral-500 z-0">
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
