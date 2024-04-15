import React from "react";
import MenuTop from "@/components/modules/navigation/MenuTop";
import clsx from "clsx";
import { useMenuDrawer } from "@/stores/settings/useDrawerStore";
import { useMediaQuery } from "@mantine/hooks";
import MobileNotSupported from "../MobileNotSupported";
import ChordDetails from "@/components/modules/chord-details/ChordDetails";
import TabsChords from "@/components/ui/TabsChords";

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

const Chords = () => {
  const { isDrawerExpanded } = useMenuDrawer();
  const matches = useMediaQuery("(max-width: 768px)");

  if (matches) {
    return <MobileNotSupported />;
  }
  return (
    <>
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
      </main>
    </>
  );
};

export default Chords;
