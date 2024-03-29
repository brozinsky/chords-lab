// @ts-ignore
import { Tabs as TabsShadcn, TabsContent, TabsList, TabsTrigger } from "@/components/ui/TabsShadcn";
import Library from "../modules/library/Library";
import clsx from "clsx";
import useChordsTab from "@/hooks/chords/useChordsTabs";
import { useMenuDrawer } from "@/stores/settings/useDrawerStore";

type TTab = {
  label: string;
  value: string;
};

type TProps = {
  tabs?: TTab[];
};

export default function TabsScales({ tabs }: TProps) {
  const { changeTab } = useChordsTab();

  const { isDrawerExpanded, setIsDrawerExpanded } = useMenuDrawer();

  return (
    <TabsShadcn
      id="TabsScales"
      defaultValue="all"
      className={clsx(
        "tabs fixed w-full bottom-0",
        isDrawerExpanded && "tabs--open"
      )}
    >
      {/* <div className="container">
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
                {label}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div> */}

      <div className="relative bg-neutral-700 py-4 border-t border-neutral-500">
        <div className="container">
          <TabsContent value="all">
            <Library variant="scales" />
          </TabsContent>
        </div>
      </div>
    </TabsShadcn>
  );
}
